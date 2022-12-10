import { useContext } from "react";
import { TextField, IconButton } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import "./home.scss";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import InputForm from "../../components/Form/InputForm";
import { HomeContext } from "../../context/HomeContext";

const Home = () => {
  const { homeFormData, handleInputChanges, saveHomeFormData } =
    useContext(HomeContext);

  return (
    <Layout>
      <section className="home">
        <article className="home__container">
          <div className="home__container__subtitle">
            <h3>EMPRESA</h3>
            <IconButton
              color="primary"
              aria-label="save-form"
              component="button"
              onClick={saveHomeFormData}
            >
              <SaveAltIcon color="primary" sx={{ fontSize: 25 }} />
            </IconButton>
          </div>
          <InputForm
            label="Nombre"
            className="home__container__form"
            name="name"
            onChange={handleInputChanges}
            value={homeFormData.name}
          />
          <InputForm
            label="Razòn Social"
            className="home__container__form"
            name="business_name"
            onChange={handleInputChanges}
            value={homeFormData.business_name}
          />
          <InputForm
            label="Direcciòn"
            className="home__container__form"
            name="address"
            onChange={handleInputChanges}
            value={homeFormData.address}
          />
          <InputForm
            label="Telèfono"
            className="home__container__form"
            name="cell_phone"
            onChange={handleInputChanges}
            value={homeFormData.cell_phone}
            type="tel"
          />
          <InputForm
            label="Email"
            className="home__container__form"
            name="mail"
            onChange={handleInputChanges}
            value={homeFormData.mail}
            type="email"
          />
          <InputForm
            label="Cuenta BCP"
            className="home__container__form"
            name="bank_account"
            onChange={handleInputChanges}
            value={homeFormData.bank_account}
          />
          <InputForm
            label="Ruc"
            className="home__container__form"
            name="ruc"
            onChange={handleInputChanges}
            value={homeFormData.ruc}
          />
        </article>
        <article className="home__container">
          <div className="home__container__subtitle">
            <h3>DESCRIPCIÒN DEL SERVICIO</h3>
            <IconButton
              color="primary"
              aria-label="save-form"
              component="label"
              onClick={saveHomeFormData}
            >
              <SaveAltIcon color="primary" sx={{ fontSize: 25 }} />
            </IconButton>
          </div>
          <div className="home__container__form">
            <TextField
              id="outlined-multiline-static"
              label="Descripcion del servicio"
              name="service_description"
              multiline
              fullWidth
              rows={4}
              onChange={handleInputChanges}
              value={homeFormData.service_description}
            />
          </div>
        </article>
        <article className="home__container">
          <div className="home__container__subtitle">
            <h3>DOCUMENTO</h3>
            <IconButton
              color="primary"
              aria-label="save-form"
              component="button"
              onClick={saveHomeFormData}
            >
              <SaveAltIcon color="primary" sx={{ fontSize: 25 }} />
            </IconButton>
          </div>
          <InputForm
            label="Fecha"
            className="home__container__form"
            name="date"
            onChange={handleInputChanges}
            value={homeFormData.date}
            type="date"
          />
          <InputForm
            label="Nombre de archivo"
            className="home__container__form"
            name="file_name"
            onChange={handleInputChanges}
            value={homeFormData.file_name}
          />
        </article>
        <article className="home__container">
          <div className="home__container__subtitle">
            <h3>NOTA</h3>
            <IconButton
              color="primary"
              aria-label="save-form"
              component="label"
              onClick={saveHomeFormData}
            >
              <SaveAltIcon color="primary" sx={{ fontSize: 25 }} />
            </IconButton>
          </div>
          <div className="home__container__form">
            <TextField
              id="outlined-multiline-static"
              label="Descripcion de la nota"
              name="note"
              multiline
              fullWidth
              rows={4}
              onChange={handleInputChanges}
              value={homeFormData.note}
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
