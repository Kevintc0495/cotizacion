import { fireEvent, render, screen } from "@testing-library/react";
import { TableProvider } from "../../../context/TableContext";
import TablePage from "../../../pages/Table/TablePage";
import { BrowserRouter as Router } from "react-router-dom";
import * as swal from "../../../util/swal";

describe("Prueba en <TablePage/>", () => {
  const value = "4";
  const messageUtil = jest.spyOn(swal, "MessageUtil");

  test("Change input value", () => {
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

  test("Open Modal and view table service", () => {
    render(
      <TableProvider>
        <Router>
          <TablePage />
        </Router>
      </TableProvider>
    );

    const btnViewTableService = screen.getByRole("button", {
      name: "btn-view-table-service",
    });

    const modalLayer = screen.getByTestId("modal-layer");
    const modalContain = screen.getByTestId("modal-contain");

    fireEvent.click(btnViewTableService);
    expect(modalLayer.classList.contains("modal--view")).toBeTruthy();
    expect(modalContain.classList.contains("modal--view")).toBeTruthy();
    expect(screen.getByRole("table", { name: "table-service" })).toBeDefined();
  });

  test("Open Modal and view table material", () => {
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

  test("Close Modal Parent", () => {
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
    const modalLayer = screen.getByTestId("modal-layer");
    fireEvent.click(btnViewTableService);
    fireEvent.click(modalLayer);
    expect(modalLayer.classList.contains("modal--view")).toBeFalsy();
  });

  test("Execute function saveLisService", () => {
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

  test("Execute function saveLisMaterial", () => {
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
    const quantity = "5";
    const description = "Instalacion de luminarias led en distintas areas";
    const unitPrice = "10";

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

    const rowTableService = screen.queryByTestId("row-table-service-0");
    const tdQuantity = screen.queryByTestId("quantity-service");
    const tdDescription = screen.queryByTestId("description-service");
    const tdUnitPrice = screen.queryByTestId("unit-price-service");

    expect(rowTableService).not.toBeNull();
    expect(tdQuantity.innerHTML).toBe(inputQuantity[0].value);
    expect(tdDescription.innerHTML).toBe(inputDescription[0].value);
    expect(tdUnitPrice.innerHTML).toBe(
      Number(inputUnitPrice[0].value).toFixed(2)
    );
  });

  test("Add data to material table", () => {
    const quantity = "20";
    const description = "Cinta aislante 3M negra";
    const unit = "unidad";
    const unitPrice = "1.5";

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
    const inputUnit = screen.getByRole("textbox", { name: "Unidad" });
    const inputUnitPrice = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });
    const btnViewTableMaterial = screen.getByRole("button", {
      name: "btn-view-table-material",
    });
    fireEvent.click(btnViewTableMaterial);

    const btnAddDataTableMaterial = screen.getByRole("button", {
      name: "add-data-table-material",
    });

    fireEvent.change(inputQuantity[1], { target: { value: quantity } });
    fireEvent.change(inputDescription[1], { target: { value: description } });
    fireEvent.change(inputUnit, { target: { value: unit } });
    fireEvent.change(inputUnitPrice[1], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableMaterial);

    const rowTableMaterial = screen.queryByTestId("row-table-material-0");
    const tdQuantity = screen.getByTestId("quantity-material");
    const tdDescription = screen.getByTestId("description-material");
    const tdUnit = screen.getByTestId("unit-material");
    const tdUnitPrice = screen.getByTestId("unit-price-material");

    expect(rowTableMaterial).not.toBeNull();
    expect(tdQuantity.innerHTML).toBe(inputQuantity[1].value);
    expect(tdDescription.innerHTML).toBe(inputDescription[1].value);
    expect(tdUnit.innerHTML).toBe(inputUnit.value);
    expect(tdUnitPrice.innerHTML).toBe(
      Number(inputUnitPrice[1].value).toFixed(2)
    );
  });

  test("Open and Close child modal", () => {
    const quantity = "3";
    const description = "Instalacion de camaras de seguridad";
    const unitPrice = "100";

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
    let btnViewTableService = screen.getByRole("button", {
      name: "btn-view-table-service",
    });

    fireEvent.change(inputQuantity[0], { target: { value: quantity } });
    fireEvent.change(inputDescription[0], { target: { value: description } });
    fireEvent.change(inputUnitPrice[0], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableService);
    fireEvent.click(btnViewTableService);

    const rowTableService = screen.queryByTestId("row-table-service-0");
    fireEvent.click(rowTableService);

    const modalChildLayer = screen.queryByTestId("modal-child-layer");
    const modalChildContain = screen.queryByTestId("modal-child-contain");
    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeTruthy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeTruthy();

    fireEvent.click(modalChildLayer);

    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeFalsy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeFalsy();
  });

  test("Delete row from service table and close child modal", () => {
    const quantity = "3";
    const description = "Instalacion de camaras de seguridad";
    const unitPrice = "100";

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
    let btnViewTableService = screen.getByRole("button", {
      name: "btn-view-table-service",
    });

    fireEvent.change(inputQuantity[0], { target: { value: quantity } });
    fireEvent.change(inputDescription[0], { target: { value: description } });
    fireEvent.change(inputUnitPrice[0], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableService);
    fireEvent.click(btnViewTableService);

    const rowTableService = screen.getByTestId("row-table-service-0");
    fireEvent.click(rowTableService);

    const modalChildLayer = screen.getByTestId("modal-child-layer");
    const modalChildContain = screen.getByTestId("modal-child-contain");
    // const buttonEdit = screen.getByRole("button", { name: "btn-edit" });
    const modalChildBtnDelete = screen.getByRole("button", {
      name: "btn-delete",
    });
    fireEvent.click(modalChildBtnDelete);
    expect(screen.queryByTestId("row-table-service-0")).toBeNull();
    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeFalsy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeFalsy();
  });

  test("Delete row from material table and close child modal", () => {
    const quantity = "20";
    const description = "Cinta aislante 3M negra";
    const unit = "unidad";
    const unitPrice = "1.5";

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
    const inputUnit = screen.getByRole("textbox", { name: "Unidad" });
    const inputUnitPrice = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });
    const btnAddDataTableMaterial = screen.getByRole("button", {
      name: "add-data-table-material",
    });
    let btnViewTableMaterial = screen.getByRole("button", {
      name: "btn-view-table-material",
    });

    fireEvent.change(inputQuantity[1], { target: { value: quantity } });
    fireEvent.change(inputDescription[1], { target: { value: description } });
    fireEvent.change(inputUnit, { target: { value: unit } });
    fireEvent.change(inputUnitPrice[1], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableMaterial);
    fireEvent.click(btnViewTableMaterial);

    const rowTableMaterial = screen.queryByTestId("row-table-material-0");
    fireEvent.click(rowTableMaterial);

    const modalChildLayer = screen.getByTestId("modal-child-layer");
    const modalChildContain = screen.getByTestId("modal-child-contain");
    const modalChildBtnDelete = screen.getByRole("button", {
      name: "btn-delete",
    });
    fireEvent.click(modalChildBtnDelete);
    expect(screen.queryByTestId("row-table-material-0")).toBeNull();
    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeFalsy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeFalsy();
  });

  test("Edit row from service table and close child modal", () => {
    const quantity = "3";
    const description = "Instalacion de camaras de seguridad";
    const unitPrice = "100";

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
    let btnViewTableService = screen.getByRole("button", {
      name: "btn-view-table-service",
    });

    fireEvent.change(inputQuantity[0], { target: { value: quantity } });
    fireEvent.change(inputDescription[0], { target: { value: description } });
    fireEvent.change(inputUnitPrice[0], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableService);

    fireEvent.change(inputQuantity[0], { target: { value: "10" } });
    fireEvent.change(inputDescription[0], {
      target: { value: "instalaciòn de luces led" },
    });
    fireEvent.change(inputUnitPrice[0], { target: { value: "20" } });
    fireEvent.click(btnAddDataTableService);
    fireEvent.click(btnViewTableService);

    const rowTableService = screen.getByTestId("row-table-service-1");
    fireEvent.click(rowTableService);

    const modalChildLayer = screen.getByTestId("modal-child-layer");
    const modalChildContain = screen.getByTestId("modal-child-contain");
    const modalChildBtnEdit = screen.getByRole("button", { name: "btn-edit" });
    fireEvent.click(modalChildBtnEdit);

    const inputQuantityEdit = screen.getAllByRole("textbox", {
      name: "Cantidad",
    });
    const inputDescriptionEdit = screen.getAllByRole("textbox", {
      name: "Descripcion",
    });
    const inputUnitPriceEdit = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });
    expect(screen.queryByTestId("row-table-service-1")).toBeNull();

    expect(inputQuantityEdit[0].value).toBe("10");
    expect(inputDescriptionEdit[0].value).toBe("instalaciòn de luces led");
    expect(inputUnitPriceEdit[0].value).toBe("20");
    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeFalsy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeFalsy();
  });

  test("Edit row from material table and close child modal", () => {
    const quantity = "20";
    const description = "Cinta aislante 3M negra";
    const unit = "unidad";
    const unitPrice = "1.5";

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
    const inputUnit = screen.getByRole("textbox", { name: "Unidad" });
    const inputUnitPrice = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });
    const btnAddDataTableMaterial = screen.getByRole("button", {
      name: "add-data-table-material",
    });
    let btnViewTableMaterial = screen.getByRole("button", {
      name: "btn-view-table-material",
    });

    fireEvent.change(inputQuantity[1], { target: { value: quantity } });
    fireEvent.change(inputDescription[1], { target: { value: description } });
    fireEvent.change(inputUnit, { target: { value: unit } });
    fireEvent.change(inputUnitPrice[1], { target: { value: unitPrice } });
    fireEvent.click(btnAddDataTableMaterial);

    fireEvent.change(inputQuantity[1], { target: { value: "4" } });
    fireEvent.change(inputDescription[1], {
      target: { value: "Cinta teflon" },
    });
    fireEvent.change(inputUnit, { target: { value: "unidad" } });
    fireEvent.change(inputUnitPrice[1], { target: { value: "2" } });
    fireEvent.click(btnAddDataTableMaterial);
    fireEvent.click(btnViewTableMaterial);

    const rowTableMaterial = screen.queryByTestId("row-table-material-1");
    fireEvent.click(rowTableMaterial);

    const modalChildLayer = screen.getByTestId("modal-child-layer");
    const modalChildContain = screen.getByTestId("modal-child-contain");
    const modalChildBtnEdit = screen.getByRole("button", {
      name: "btn-edit",
    });
    fireEvent.click(modalChildBtnEdit);

    const inputQuantityEdit = screen.getAllByRole("textbox", {
      name: "Cantidad",
    });
    const inputDescriptionEdit = screen.getAllByRole("textbox", {
      name: "Descripcion",
    });
    const inputUnitEdit = screen.getByRole("textbox", { name: "Unidad" });
    const inputUnitPriceEdit = screen.getAllByRole("textbox", {
      name: "Costo unitario",
    });

    expect(screen.queryByTestId("row-table-material-1")).toBeNull();

    expect(inputQuantityEdit[1].value).toBe("4");
    expect(inputDescriptionEdit[1].value).toBe("Cinta teflon");
    expect(inputUnitEdit.value).toBe("unidad");
    expect(inputUnitPriceEdit[1].value).toBe("2");
    expect(
      modalChildLayer.classList.contains("modal__child--view")
    ).toBeFalsy();
    expect(
      modalChildContain.classList.contains("modal__child--view")
    ).toBeFalsy();
  });
});
