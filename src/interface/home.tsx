export interface HomeFormData {
  name: string;
  business_name: string;
  address: string;
  cell_phone: string;
  mail: string;
  bank_account: string;
  ruc: string;
  service_description: string;
  date: string;
  file_name: string;
}

export interface ContextData {
  homeFormData: HomeFormData;
  handleInputChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveHomeFormData: () => void;
  isSaveStorageHomeFormData: boolean;
  setIsSaveStorageHomeFormData: React.Dispatch<React.SetStateAction<boolean>>;
}
