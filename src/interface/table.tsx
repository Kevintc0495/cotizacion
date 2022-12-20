export interface TableFormData {
  quantity_service: string;
  description_service: string;
  unit_price_service: string;
  quantity_material: string;
  description_material: string;
  unit_material: string;
  unit_price_material: string;
  switchEnableTableService: boolean;
  switchEnableTableMaterial: boolean;
}

export interface TableService {
  quantity: number;
  description: string;
  unitPrice: number;
}

export interface TableMaterial {
  quantity: number;
  description: string;
  unit: string;
  unitPrice: number;
}

export interface ContextDataTable {
  tableFormData: TableFormData;
  handleInputChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  listService: TableService[];
  listMaterial: TableMaterial[];
  isSaveStorageDataTables: boolean;
  setIsSaveStorageDataTables: React.Dispatch<React.SetStateAction<boolean>>;
  addServiceToTable: () => void;
  addMaterialToTable: () => void;
  saveListService: () => void;
  saveListMaterial: () => void;
  editRowListService: (row: RowTables) => void;
  editRowListMaterial: (row: RowTables) => void;
  deleteRowListService: (index: number) => void;
  deleteRowListMaterial: (index: number) => void;
}

export interface RowTables {
  quantity: number;
  description: string;
  unit?: string;
  unitPrice: number;
}
