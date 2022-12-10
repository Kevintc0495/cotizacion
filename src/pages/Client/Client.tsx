import { useContext } from "react";
import { IconButton } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import "./client.scss";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import InputForm from "../../components/Form/InputForm";
import { ClientContext } from "../../context/ClientContext";

const Client = () => {
  const { clientFormData, handleInputChanges, saveClientFormData } =
    useContext(ClientContext);

  return (
    <Layout>
      <article className="client__container">
        <div className="client__container__subtitle">
          <h3>CLIENTE</h3>
          <IconButton
            color="primary"
            aria-label="save-form"
            component="button"
            onClick={saveClientFormData}
          >
            <SaveAltIcon color="primary" sx={{ fontSize: 25 }} />
          </IconButton>
        </div>
        <InputForm
          label="Nombre"
          className="home__container__form"
          name="name"
          onChange={handleInputChanges}
          value={clientFormData.name}
        />
        <InputForm
          label="Razòn Social"
          className="home__container__form"
          name="business_name"
          onChange={handleInputChanges}
          value={clientFormData.business_name}
        />
        <InputForm
          label="Direcciòn"
          className="home__container__form"
          name="address"
          onChange={handleInputChanges}
          value={clientFormData.address}
        />
        <InputForm
          label="Telèfono"
          className="home__container__form"
          name="cell_phone"
          onChange={handleInputChanges}
          value={clientFormData.cell_phone}
          type="tel"
        />
        <InputForm
          label="Email"
          className="home__container__form"
          name="mail"
          onChange={handleInputChanges}
          value={clientFormData.mail}
          type="email"
        />
        <InputForm
          label="Ruc"
          className="home__container__form"
          name="ruc"
          onChange={handleInputChanges}
          value={clientFormData.ruc}
        />
      </article>
    </Layout>
  );
};

export default Client;
