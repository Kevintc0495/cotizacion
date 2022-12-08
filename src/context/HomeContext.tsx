import React, {
  createContext,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { ContextData, HomeFormData } from "../interface/home";
import { MessageUtil } from "../util/swal";

const initialValue = {
  homeFormData: {
    name: "",
    business_name: "",
    address: "",
    cell_phone: "",
    mail: "",
    bank_account: "",
    ruc: "",
    service_description: "",
    date: "",
    file_name: "",
    note: "",
  },
  handleInputChanges: () => {},
  saveHomeFormData: () => {},
  isSaveStorageHomeFormData: false,
  setIsSaveStorageHomeFormData: () => {},
};

const HomeContext = createContext<ContextData>(initialValue);

const HomeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [homeFormData, setHomeFormData] = useState<HomeFormData>({
    name: "",
    business_name: "",
    address: "",
    cell_phone: "",
    mail: "",
    bank_account: "",
    ruc: "",
    service_description: "",
    date: "",
    file_name: "",
    note: "",
  });
  const [isSaveStorage, setIsSaveStorage] = useState(false);

  const handleInputChanges = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setHomeFormData({
      ...homeFormData,
      [target.name]: target.value,
    });
  };

  const saveHomeFormData = () => {
    window.localStorage.setItem("homeFormData", JSON.stringify(homeFormData));
    setIsSaveStorage(true);
    MessageUtil("success", ``, `Datos guardados con exito!`, `Aceptar`);
  };

  useEffect(() => {
    const getHomeFormData = window.localStorage.getItem("homeFormData");
    if (getHomeFormData) {
      setHomeFormData(JSON.parse(getHomeFormData));
      setIsSaveStorage(true);
    }
  }, []);

  const values = {
    homeFormData,
    handleInputChanges,
    saveHomeFormData,
    isSaveStorageHomeFormData: isSaveStorage,
    setIsSaveStorageHomeFormData: setIsSaveStorage,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export { HomeContext };
export default HomeProvider;
