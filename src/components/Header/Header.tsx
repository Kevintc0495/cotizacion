import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./header.scss";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { IconButton } from "@mui/material";
import { HomeContext } from "../../context/HomeContext";
import { ClientContext } from "../../context/ClientContext";
import TableContext from "../../context/TableContext";
import { MessageUtil } from "../../util/swal";

const Header = () => {
  const [isSaveLocalStorage, setIsSaveLocalStorage] = useState(false);
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();
  const { isSaveStorageHomeFormData, setIsSaveStorageHomeFormData } =
    useContext(HomeContext);
  const { isSaveStorageClientFormData, setIsSaveStorageClientFormData } =
    useContext(ClientContext);
  const { isSaveStorageDataTables, setIsSaveStorageDataTables } =
    useContext(TableContext);

  const deleteDataLocalStorage = () => {
    switch (pathname) {
      case "/":
        localStorage.removeItem("homeFormData");
        setIsSaveStorageHomeFormData(false);
        MessageUtil("warning", ``, `Datos removidos con exito!`, `Aceptar`);
        break;
      case "/client":
        localStorage.removeItem("clientFormData");
        setIsSaveStorageClientFormData(false);
        MessageUtil("warning", ``, `Datos removidos con exito!`, `Aceptar`);
        break;
      case "/table":
        localStorage.removeItem("listService");
        localStorage.removeItem("listMaterial");
        setIsSaveStorageDataTables(false);
        MessageUtil("warning", ``, `Datos removidos con exito!`, `Aceptar`);
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setPath("Mis datos");
        setIsSaveLocalStorage(isSaveStorageHomeFormData);
        break;
      case "/client":
        setPath("Cliente");
        setIsSaveLocalStorage(isSaveStorageClientFormData);
        break;
      case "/table":
        setPath("Tablas");
        setIsSaveLocalStorage(isSaveStorageDataTables);
        break;
      case "/pdf":
        setPath("Pdf");
        break;
    }
  }, [
    pathname,
    isSaveStorageHomeFormData,
    isSaveStorageClientFormData,
    isSaveStorageDataTables,
  ]);

  return (
    <header className="header__container">
      <h1>{path}</h1>
      {isSaveLocalStorage && (
        <IconButton onClick={deleteDataLocalStorage}>
          <CloudDoneIcon sx={{ color: "#fff" }} />
        </IconButton>
      )}
    </header>
  );
};

export default Header;
