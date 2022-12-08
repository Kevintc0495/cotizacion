import { ClientFormData } from "./client";
import { HomeFormData } from "./home";
import { TableService, TableMaterial, TableFormData } from "./table";

export interface MyDocumentProps {
  homeFormData: HomeFormData;
  clientFormData: ClientFormData;
  tableFormData: TableFormData;
  listService: TableService[];
  listMaterial: TableMaterial[];
  totalPriceTableService: number;
  totalPriceTableMaterial: number;
}

export interface HeadBoardProps {
  date: string;
  ruc: string;
  totalPrice: number;
}

export interface DataBusinessAndClientProps {
  homeFormData: HomeFormData;
  clientFormData: ClientFormData;
}

export interface ServiceDetailProps {
  description: string;
}

export interface TableServiceProps {
  listService: TableService[];
  totalPriceTableService: number;
}

export interface TableMaterialProps {
  listMaterial: TableMaterial[];
  totalPriceTableMaterial: number;
}

export interface InformationProps {
  name: string;
  ruc: string;
}
