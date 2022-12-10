import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ClientProvider from "../../../context/ClientContext";
import Client from "../../../pages/Client/Client";
import * as swal from "../../../util/swal";

describe("Prueba <Client/>", () => {
  const messageUtil = jest.spyOn(swal, "MessageUtil");
  const value: string = "banki";

  test("cambio del valor del input", () => {
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

  test("Ejecucion de la funcion MessageUtil", () => {
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
