import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeProvider from "../../../context/HomeContext";
import Home from "../../../pages/Home/Home";
import * as swal from "../../../util/swal";

describe("Test component <Home/>", () => {
  const value = "Servicio G&H";
  const messageUtil = jest.spyOn(swal, "MessageUtil");

  test("Input value change", () => {
    render(
      <HomeProvider>
        <Router>
          <Home />
        </Router>
      </HomeProvider>
    );

    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "Nombre",
    });
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test("MessageUtil function execute", () => {
    render(
      <HomeProvider>
        <Router>
          <Home />
        </Router>
      </HomeProvider>
    );

    const button = screen.getAllByRole("button", { name: "save-form" });
    fireEvent.click(button[0]);
    expect(messageUtil).toBeCalled();
  });
});
