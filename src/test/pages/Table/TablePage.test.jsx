import { fireEvent, render, screen } from "@testing-library/react";
import { TableProvider } from "../../../context/TableContext";
import TablePage from "../../../pages/Table/TablePage";
import { BrowserRouter as Router } from "react-router-dom";
import * as swal from "../../../util/swal";

describe("Prueba en <TablePage/>", () => {
  const value = "4";
  const quantity = "5";
  const description = "Instalacion de luminarias led en distintas areas";
  const unitPrice = "10";

  const messageUtil = jest.spyOn(swal, "MessageUtil");

  test("change input value", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );
    const input = screen.getAllByRole("textbox", { name: "Cantidad" });
    fireEvent.change(input[0], { target: { value } });
    expect(input[0].value).toBe(value);
  });

  test("open Modal and view table service", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    let btnViewTableService = screen.getByRole("button", {
      name: "btn-view-table-service",
    });

    let modalLayer = screen.getByTestId("modal-layer");
    let modalContain = screen.getByTestId("modal-contain");

    fireEvent.click(btnViewTableService);
    expect(modalLayer.classList.contains("modal--view")).toBeTruthy();
    expect(modalContain.classList.contains("modal--view")).toBeTruthy();
    expect(screen.getByRole("table", { name: "table-service" })).toBeDefined();
  });

  test("open Modal and view table material", () => {
    // const { container } = render(
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    const btnViewTableMaterial = screen.getByRole("button", {
      name: "btn-view-table-material",
    });

    const modalLayer = screen.getByTestId("modal-layer");
    const modalContain = screen.getByTestId("modal-contain");

    fireEvent.click(btnViewTableMaterial);
    expect(modalLayer.classList.contains("modal--view")).toBeTruthy();
    expect(modalContain.classList.contains("modal--view")).toBeTruthy();
    expect(screen.getByRole("table", { name: "table-material" })).toBeDefined();
  });

  test("execute function saveLisService", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    const btnSaveListService = screen.getByRole("button", {
      name: "btn-save-table-service",
    });

    fireEvent.click(btnSaveListService);

    expect(messageUtil).toBeCalled();
    messageUtil.mockClear();
  });

  test("execute function saveLisMaterial", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    const btnSaveListMaterial = screen.getByRole("button", {
      name: "btn-save-table-material",
    });

    fireEvent.click(btnSaveListMaterial);

    expect(messageUtil).toBeCalled();
    messageUtil.mockClear();
  });

  test("Add data to service table", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    const inputQuantity = screen.getAllByRole("textbox", { name: "Cantidad" });
    const inputDescription = screen.getAllByRole("textbox", {
      name: "Descripcion",
    });
    const inputUnitPrice = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });
    const btnAddDataTableService = screen.getByRole("button", {
      name: "add-data-table-service",
    });

    fireEvent.change(inputQuantity[0], { target: { value: quantity } });
    fireEvent.change(inputDescription[0], { target: { value: description } });
    fireEvent.change(inputUnitPrice[0], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableService);

    const rowTableService = screen.getAllByTestId("row-table-service");
    const tdQuantity = screen.getByTestId("quantity-service");
    const tdDescription = screen.getByTestId("description-service");
    const tdUnitPrice = screen.getByTestId("unit-price-service");

    expect(rowTableService.length).toBeGreaterThan(0);
    expect(tdQuantity.innerHTML).toBe(inputQuantity[0].value);
    expect(tdDescription.innerHTML).toBe(inputDescription[0].value);
    expect(tdUnitPrice.innerHTML).toBe(
      Number(inputUnitPrice[0].value).toFixed(2)
    );
    // expect(
    //   rowTableService.querySelector('td[aria-label="quantity-service"]')
    //     .innerHTML
    // ).toBe(inputQuantity[0].value);
  });
});
