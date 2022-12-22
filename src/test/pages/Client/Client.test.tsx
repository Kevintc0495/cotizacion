import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ClientProvider from "../../../context/ClientContext";
import Client from "../../../pages/Client/Client";
import * as swal from "../../../util/swal";

describe("Test component <Client/>", () => {
  const messageUtil = jest.spyOn(swal, "MessageUtil");
  const value: string = "banki";

  test("Input value change", () => {
    render(
      <ClientProvider>
        <Router>
          <Client />
        </Router>
      </ClientProvider>
    );
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "Nombre",
    });
    fireEvent.change(input, { target: { value } });
    expect(input.value).toContain(value);
  });

  test("MessageUtil function execute", () => {
    render(
      <ClientProvider>
        <Router>
          <Client />
        </Router>
      </ClientProvider>
    );
    const button = screen.getByRole("button", { name: "save-form" });
    fireEvent.click(button);
    expect(messageUtil).toBeCalled();
  });
});
