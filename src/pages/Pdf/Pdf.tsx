import Layout from "../../components/Layout/Layout";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import MyDocument from "../../components/Pdf/MyDocument";
import "./pdf.scss";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IconButton from "@mui/material/IconButton";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";
import { ClientContext } from "../../context/ClientContext";
import TableContext from "../../context/TableContext";

const Pdf = () => {
  const [totalPriceTableService, setTotalPriceTableService] = useState(0);
  const [totalPriceTableMaterial, setTotalPriceTableMaterial] = useState(0);
  const { homeFormData } = useContext(HomeContext);
  const { clientFormData } = useContext(ClientContext);
  const { tableFormData, listService, listMaterial } = useContext(TableContext);

  const downloadPdf = async () => {
    const { file_name } = homeFormData;

    const blob = await pdf(
      <MyDocument
        homeFormData={homeFormData}
        clientFormData={clientFormData}
        tableFormData={tableFormData}
        listService={listService}
        listMaterial={listMaterial}
        totalPriceTableService={totalPriceTableService}
        totalPriceTableMaterial={totalPriceTableMaterial}
      />
    ).toBlob();
    saveAs(blob, file_name ? file_name.trim() : "Cotizacion.pdf");
  };

  useEffect(() => {
    let totalPriceTableService = 0;
    let totalPriceTableMaterial = 0;

    listService.forEach(({ quantity, unitPrice }) => {
      totalPriceTableService += quantity * unitPrice;
    });

    listMaterial.forEach(({ quantity, unitPrice }) => {
      totalPriceTableMaterial += quantity * unitPrice;
    });

    setTotalPriceTableService(totalPriceTableService);
    setTotalPriceTableMaterial(totalPriceTableMaterial);
  }, [listService, listMaterial]);

  return (
    <Layout>
      <div className="pdf__container">
        <PDFViewer className="pdf__container__document">
          <MyDocument
            homeFormData={homeFormData}
            clientFormData={clientFormData}
            tableFormData={tableFormData}
            listService={listService}
            listMaterial={listMaterial}
            totalPriceTableService={totalPriceTableService}
            totalPriceTableMaterial={totalPriceTableMaterial}
          />
        </PDFViewer>
        <div className="pdf__container__download" onClick={downloadPdf}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <DownloadForOfflineIcon color="primary" sx={{ fontSize: 60 }} />
          </IconButton>
        </div>
      </div>
    </Layout>
  );
};

export default Pdf;
