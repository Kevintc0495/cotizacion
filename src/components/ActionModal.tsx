import { Fragment, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Button, Box } from "@mui/material";
import TableContext from "../context/TableContext";
import { RowTables } from "../interface/table";
import "./actionModal.scss";

interface actionModal {
  open: string;
  handleClose: () => void;
  handleCloseModalParent: () => void;
  rowListTable: RowTables;
  indexListTable: number;
  typeTable: string;
}

function ActionModal({
  open,
  handleClose,
  handleCloseModalParent,
  rowListTable,
  indexListTable,
  typeTable,
}: actionModal) {
  const {
    editRowListService,
    editRowListMaterial,
    deleteRowListService,
    deleteRowListMaterial,
  } = useContext(TableContext);

  const editRow = () => {
    switch (typeTable) {
      case "service":
        editRowListService(rowListTable);
        deleteRowListService(indexListTable);
        break;
      case "material":
        editRowListMaterial(rowListTable);
        deleteRowListMaterial(indexListTable);
        break;
    }
    handleClose();
    handleCloseModalParent();
  };

  const deleteRow = () => {
    switch (typeTable) {
      case "service":
        deleteRowListService(indexListTable);
        break;
      case "material":
        deleteRowListMaterial(indexListTable);
        break;
    }
    handleClose();
  };

  return (
    <>
      <div
        className={`modal__child__layer ${open}`}
        onClick={handleClose}
        data-testid="modal-child-layer"
      ></div>
      <div
        className={`modal__child__contain ${open}`}
        data-testid="modal-child-contain"
      >
        <Box
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: 1,
            paddingX: 2,
            textAlign: "center",
          }}
        >
          <h3>¿Que accion deseas realizar?</h3>
        </Box>
        <Box
          sx={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            display: "flex",
            marginTop: 3,
          }}
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<EditIcon />}
            onClick={editRow}
            aria-label="btn-edit"
          >
            Editar
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<DeleteIcon />}
            color="error"
            onClick={deleteRow}
            aria-label="btn-delete"
          >
            Eliminar
          </Button>
        </Box>
      </div>
    </>
  );
}

export default ActionModal;
