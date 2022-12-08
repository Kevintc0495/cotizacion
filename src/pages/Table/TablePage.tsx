import React, { useRef, useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import {
  Switch,
  IconButton,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import "./tablePage.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import ActionModal from "../../components/ActionModal";
import Modal from "../../components/Modal/Modal";
import InputForm from "../../components/Form/InputForm";
import TableContext from "../../context/TableContext";
import { RowTables, TableMaterial, TableService } from "../../interface/table";
import SaveIcon from "@mui/icons-material/Save";

const TablePage = () => {
  const {
    tableFormData,
    handleInputChanges,
    listService,
    listMaterial,
    addServiceToTable,
    addMaterialToTable,
    saveListService,
    saveListMaterial,
  } = useContext(TableContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalChild, setOpenModalChild] = useState(false);
  const [toggleViewTable, setToggleViewTable] = useState(true);
  const [heightTable, setHeightTable] = useState(0);
  const divContainRef = useRef<HTMLDivElement>(null);
  const [rowListTable, setRowList] = useState<RowTables>({
    quantity: 0,
    description: "",
    unit: "",
    unitPrice: 0,
  });
  const [indexListTable, setIndexListTable] = useState<number>(0);
  const [typeTable, setTypeTable] = useState<string>("");

  const viewContainModal = (table: string) => {
    switch (table) {
      case "service":
        setToggleViewTable(true);
        break;
      case "material":
        setToggleViewTable(false);
        break;
    }
  };

  const handleOpenModal = (contain: string) => {
    viewContainModal(contain);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModalChildByRowListTable = (
    row: TableService | TableMaterial,
    index: number,
    type: string
  ) => {
    setRowList(row);
    setIndexListTable(index);
    setTypeTable(type);
    setOpenModalChild(true);
  };

  const handleCloseModalChild = () => {
    setOpenModalChild(false);
  };

  useEffect(() => {
    setHeightTable(divContainRef.current!.clientHeight);
  }, [openModal]);

  return (
    <Layout>
      <section className="table">
        <article className="table__container">
          <div className="table__container__subtitle">
            <h3>SERVICIO</h3>
            <div className="table__container__subtitle__box">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="button"
                style={{ paddingRight: 12 }}
                onClick={() => handleOpenModal("service")}
              >
                <VisibilityIcon color="primary" sx={{ fontSize: 25 }} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="button"
                onClick={saveListService}
              >
                <SaveIcon color="primary" sx={{ fontSize: 25 }} />
              </IconButton>
              <Switch
                onChange={handleInputChanges}
                name="switchEnableTableService"
                checked={tableFormData.switchEnableTableService}
              />
            </div>
          </div>
          <InputForm
            label="Cantidad"
            className="home__container__form"
            name="quantity_service"
            onChange={handleInputChanges}
            value={tableFormData.quantity_service}
            type="tel"
          />
          <div className="table__container__form">
            <label htmlFor="outlined-multiline-static">Descripcion</label>
            <TextField
              id="outlined-multiline-static"
              name="description_service"
              multiline
              fullWidth={true}
              rows={3}
              onChange={handleInputChanges}
              value={tableFormData.description_service}
            />
          </div>
          <InputForm
            label="Costo unitario"
            className="home__container__form"
            name="unit_price_service"
            onChange={handleInputChanges}
            value={tableFormData.unit_price_service}
            type="tel"
          />
        </article>
        <article className="table__container__btn">
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={addServiceToTable}
          >
            Agregar
          </Button>
        </article>
        <article className="table__container">
          <div className="table__container__subtitle">
            <h3>MATERIAL</h3>
            <div className="table__container__subtitle__box">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="button"
                style={{ paddingRight: 12 }}
                onClick={() => handleOpenModal("material")}
              >
                <VisibilityIcon color="primary" sx={{ fontSize: 25 }} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="button"
                onClick={saveListMaterial}
              >
                <SaveIcon color="primary" sx={{ fontSize: 25 }} />
              </IconButton>
              <Switch
                onChange={handleInputChanges}
                name="switchEnableTableMaterial"
                checked={tableFormData.switchEnableTableMaterial}
              />
            </div>
          </div>
          <InputForm
            label="Cantidad"
            className="home__container__form"
            name="quantity_material"
            onChange={handleInputChanges}
            value={tableFormData.quantity_material}
            type="tel"
          />
          <div className="table__container__form">
            <label htmlFor="outlined-multiline-static">Descripcion</label>
            <TextField
              id="outlined-multiline-static"
              name="description_material"
              multiline
              fullWidth={true}
              rows={3}
              onChange={handleInputChanges}
              value={tableFormData.description_material}
            />
          </div>
          <InputForm
            label="Unidad"
            className="home__container__form"
            name="unit_material"
            onChange={handleInputChanges}
            value={tableFormData.unit_material}
          />
          <InputForm
            label="Costo unitario"
            className="home__container__form"
            name="unit_price_material"
            onChange={handleInputChanges}
            value={tableFormData.unit_price_material}
            type="tel"
          />
        </article>
        <article className="table__container__btn">
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={addMaterialToTable}
          >
            Agregar
          </Button>
        </article>
      </section>
      <React.Fragment>
        <Modal
          open={openModal}
          handleClose={handleCloseModal}
          heightContain={heightTable}
          reference={divContainRef}
        >
          {toggleViewTable ? (
            <article className="table__container">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 600 }}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead className="table__container__table__head">
                    <TableRow>
                      <TableCell align="center" style={{ color: "white" }}>
                        Cant.
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Descripcion
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Costo
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listService.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        onClick={() =>
                          handleOpenModalChildByRowListTable(row, i, "service")
                        }
                      >
                        <TableCell align="center">{row.quantity}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="center">
                          {row.unitPrice.toFixed(2)}
                        </TableCell>
                        <TableCell align="center">
                          {(row.quantity * row.unitPrice).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </article>
          ) : (
            <article className="table__container">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 600 }}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead className="table__container__table__head">
                    <TableRow>
                      <TableCell align="center" style={{ color: "white" }}>
                        Cant.
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Descripcion
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Unidad
                      </TableCell>
                      <TableCell align="center" style={{ color: "white" }}>
                        Precio
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listMaterial.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        onClick={() =>
                          handleOpenModalChildByRowListTable(row, i, "material")
                        }
                      >
                        <TableCell align="center">{row.quantity}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="center">{row.unit}</TableCell>
                        <TableCell align="left">
                          {row.unitPrice.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </article>
          )}
        </Modal>
        <ActionModal
          open={openModalChild}
          handleClose={handleCloseModalChild}
          rowListTable={rowListTable}
          indexListTable={indexListTable}
          typeTable={typeTable}
        />
      </React.Fragment>
    </Layout>
  );
};

export default TablePage;
