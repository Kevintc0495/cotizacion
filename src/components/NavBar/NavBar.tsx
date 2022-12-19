import "./navBar.scss";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Face6Icon from "@mui/icons-material/Face6";
import WorkIcon from "@mui/icons-material/Work";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const [path, setPath] = useState<string>(pathname);
  const navigate = useNavigate();
  const secContainRef = useRef<HTMLDivElement>(null);
  const navContainRef = useRef<HTMLDivElement>(null);
  const [widthContainer, setWidthContainer] = useState(0);
  const [widthNav, setWidthNav] = useState(0);

  const positionNavbar = () => {
    setWidthContainer(secContainRef.current!.clientWidth);
    setWidthNav(navContainRef.current!.clientWidth);
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect(() => {
    positionNavbar();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      positionNavbar();
    });
  }, []);

  return (
    <section ref={secContainRef}>
      <div
        className="navBar__container"
        ref={navContainRef}
        style={{ left: `${widthContainer / 2 - widthNav / 2}px` }}
      >
        <button
          className={`navBar__container__item ${
            path === "/" ? "item--active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          <Face6Icon
            className={`navBar__container__item__icon ${
              path === "/" ? "icon--active" : ""
            }`}
          />
          <span
            className={`navBar__container__item__text ${
              path === "/" ? "text--active" : ""
            }`}
          >
            Mis datos
          </span>
        </button>
        <button
          className={`navBar__container__item ${
            path === "/client" ? "item--active" : ""
          }`}
          onClick={() => navigate("/client")}
        >
          <WorkIcon
            className={`navBar__container__item__icon ${
              path === "/client" ? "icon--active" : ""
            }`}
          />
          <span
            className={`navBar__container__item__text ${
              path === "/client" ? "text--active" : ""
            }`}
          >
            Cliente
          </span>
        </button>
        <button
          className={`navBar__container__item ${
            path === "/table" ? "item--active" : ""
          }`}
          onClick={() => navigate("/table")}
        >
          <TableChartIcon
            className={`navBar__container__item__icon ${
              path === "/table" ? "icon--active" : ""
            }`}
          />
          <span
            className={`navBar__container__item__text ${
              path === "/table" ? "text--active" : ""
            }`}
          >
            Tablas
          </span>
        </button>
        <button
          className={`navBar__container__item ${
            path === "/pdf" ? "item--active" : ""
          }`}
          onClick={() => navigate("/pdf")}
        >
          <PictureAsPdfIcon
            className={`navBar__container__item__icon ${
              path === "/pdf" ? "icon--active" : ""
            }`}
          />
          <span
            className={`navBar__container__item__text ${
              path === "/pdf" ? "text--active" : ""
            }`}
          >
            Pdf
          </span>
        </button>
      </div>
    </section>
  );
};

export default NavBar;
