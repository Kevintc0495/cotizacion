export interface ClientFormData {
  name: string;
  business_name: string;
  address: string;
  cell_phone: string;
  mail: string;
  ruc: string;
}

export interface ContextDataClient {
  clientFormData: ClientFormData;
  handleInputChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveClientFormData: () => void;
  isSaveStorageClientFormData: boolean;
  setIsSaveStorageClientFormData: React.Dispatch<React.SetStateAction<boolean>>;
}
