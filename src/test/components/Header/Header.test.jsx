import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../../components/Header/Header";

describe("Test component <Header/>", () => {
  test("My data path name", () => {
    const route = "/";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.innerHTML).toBe("Mis datos");
  });

  test("Client path name", () => {
    const route = "/client";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.innerHTML).toBe("Cliente");
  });

  test("Tables path name", () => {
    const route = "/table";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.innerHTML).toBe("Tablas");
  });

  test("Pdf path name", () => {
    const route = "/pdf";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.innerHTML).toBe("Pdf");
  });
});
