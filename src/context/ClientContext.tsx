import React, { createContext, FC, useState, useEffect } from "react";
import { ClientFormData, ContextData } from "../interface/client";
import { MessageUtil } from "../util/swal";

const initialValue = {
  clientFormData: {
    name: "",
    business_name: "",
    address: "",
    cell_phone: "",
    mail: "",
    ruc: "",
  },
  handleInputChanges: () => {},
  saveClientFormData: () => {},
  isSaveStorageClientFormData: false,
  setIsSaveStorageClientFormData: () => {},
};

const ClientContext = createContext<ContextData>(initialValue);

const ClientProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [clientFormData, setClientFormData] = useState<ClientFormData>({
    name: "",
    business_name: "",
    address: "",
    cell_phone: "",
    mail: "",
    ruc: "",
  });
  const [isSaveStorage, setIsSaveStorage] = useState(false);

  const handleInputChanges = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setClientFormData({
      ...clientFormData,
      [target.name]: target.value,
    });
  };

  const saveClientFormData = () => {
    window.localStorage.setItem(
      "clientFormData",
      JSON.stringify(clientFormData)
    );
    setIsSaveStorage(true);
    MessageUtil("success", ``, `Datos guardados con exito!`, `Aceptar`);
  };

  useEffect(() => {
    const getClientFormData = window.localStorage.getItem("clientFormData");
    if (getClientFormData) {
      setClientFormData(JSON.parse(getClientFormData));
      setIsSaveStorage(true);
    }
  }, []);

  const values = {
    clientFormData,
    handleInputChanges,
    saveClientFormData,
    isSaveStorageClientFormData: isSaveStorage,
    setIsSaveStorageClientFormData: setIsSaveStorage,
  };

  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};

export { ClientContext };
export default ClientProvider;
