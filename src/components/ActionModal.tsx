import { Fragment, useContext } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Button, Box } from "@mui/material";
import TableContext from "../context/TableContext";
import { RowTables } from "../interface/table";

interface actionModal {
  open: boolean;
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
    <Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            width: 280,
            bgcolor: "background.paper",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            pb: 3,
            borderRadius: 2,
          }}
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
            >
              Editar
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<DeleteIcon />}
              color="error"
              onClick={deleteRow}
            >
              Eliminar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default ActionModal;
