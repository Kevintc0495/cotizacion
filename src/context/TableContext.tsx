import React, { createContext, FC, useState, useEffect } from "react";
import {
  ContextData,
  RowTables,
  TableFormData,
  TableMaterial,
  TableService,
} from "../interface/table";
import { MessageUtil } from "../util/swal";

const initialValue = {
  tableFormData: {
    quantity_service: "",
    description_service: "",
    unit_price_service: "",
    quantity_material: "",
    description_material: "",
    unit_material: "",
    unit_price_material: "",
    switchEnableTableService: true,
    switchEnableTableMaterial: true,
  },
  handleInputChanges: () => {},
  listService: [],
  listMaterial: [],
  isSaveStorageDataTables: false,
  setIsSaveStorageDataTables: () => {},
  addServiceToTable: () => {},
  addMaterialToTable: () => {},
  saveListService: () => {},
  saveListMaterial: () => {},
  editRowListService: (row: RowTables) => {},
  editRowListMaterial: (row: RowTables) => {},
  deleteRowListService: (index: number) => {},
  deleteRowListMaterial: (index: number) => {},
};

const TableContext = createContext<ContextData>(initialValue);

export const TableProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [tableFormData, setTableFormData] = useState<TableFormData>({
    quantity_service: "",
    description_service: "",
    unit_price_service: "",
    quantity_material: "",
    description_material: "",
    unit_material: "",
    unit_price_material: "",
    switchEnableTableService: true,
    switchEnableTableMaterial: true,
  });
  const [listService, setListService] = useState<TableService[]>([]);
  const [listMaterial, setListMaterial] = useState<TableMaterial[]>([]);
  const [isSaveStorage, setIsSaveStorage] = useState(false);

  const handleInputChanges = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTableFormData({
      ...tableFormData,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const addServiceToTable = () => {
    setListService([
      ...listService,
      {
        quantity: Number(tableFormData.quantity_service),
        description: tableFormData.description_service,
        unitPrice: Number(tableFormData.unit_price_service),
      },
    ]);
    MessageUtil("info", ``, `Se agrego la informaciòn`, ``, false, 1000);
  };

  const addMaterialToTable = () => {
    setListMaterial([
      ...listMaterial,
      {
        quantity: Number(tableFormData.quantity_material),
        description: tableFormData.description_material,
        unit: tableFormData.unit_material,
        unitPrice: Number(tableFormData.unit_price_material),
      },
    ]);
    MessageUtil("info", ``, `Se agrego la informaciòn`, ``, false, 1000);
  };

  const saveListService = () => {
    window.localStorage.setItem("listService", JSON.stringify(listService));
    setIsSaveStorage(true);
    MessageUtil("success", ``, `Datos guardados con exito!`, `Aceptar`);
  };

  const saveListMaterial = () => {
    window.localStorage.setItem("listMaterial", JSON.stringify(listMaterial));
    setIsSaveStorage(true);
    MessageUtil("success", ``, `Datos guardados con exito!`, `Aceptar`);
  };

  const editRowListService = (row: RowTables) => {
    setTableFormData({
      ...tableFormData,
      quantity_service: row.quantity.toString(),
      description_service: row.description,
      unit_price_service: row.unitPrice.toString(),
    });
  };

  const editRowListMaterial = (row: RowTables) => {
    setTableFormData({
      ...tableFormData,
      quantity_material: row.quantity.toString(),
      description_material: row.description,
      unit_material: row.unit || "",
      unit_price_material: row.unitPrice.toString(),
    });
  };

  const deleteRowListService = (index: number) => {
    const filteredServiceList = listService.filter((service, i) => i !== index);
    setListService(filteredServiceList);
  };

  const deleteRowListMaterial = (index: number) => {
    const filteredMaterialList = listMaterial.filter(
      (material, i) => i !== index
    );
    setListMaterial(filteredMaterialList);
  };

  useEffect(() => {
    const getListService = window.localStorage.getItem("listService");
    const getListMaterial = window.localStorage.getItem("listMaterial");
    if (getListService) setListService(JSON.parse(getListService));
    if (getListMaterial) setListMaterial(JSON.parse(getListMaterial));
    if (getListService || getListMaterial) setIsSaveStorage(true);
  }, []);

  const values = {
    tableFormData,
    handleInputChanges,
    listService,
    listMaterial,
    isSaveStorageDataTables: isSaveStorage,
    setIsSaveStorageDataTables: setIsSaveStorage,
    addServiceToTable,
    addMaterialToTable,
    saveListService,
    saveListMaterial,
    editRowListService,
    editRowListMaterial,
    deleteRowListService,
    deleteRowListMaterial,
  };

  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};

export default TableContext;
