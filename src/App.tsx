import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import ClientProvider from "./context/ClientContext";
import HomeProvider from "./context/HomeContext";
import { TableProvider } from "./context/TableContext";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Pdf from "./pages/Pdf/Pdf";
import Table from "./pages/Table/TablePage";

function App() {
  return (
    <>
      <HomeProvider>
        <ClientProvider>
          <TableProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/client" element={<Client />} />
                <Route path="/table" element={<Table />} />
                <Route path="/pdf" element={<Pdf />} />
              </Routes>
            </Router>
          </TableProvider>
        </ClientProvider>
      </HomeProvider>
    </>
  );
}

export default App;
