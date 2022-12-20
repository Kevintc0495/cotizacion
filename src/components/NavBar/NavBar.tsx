import "./navBar.scss";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Face6Icon from "@mui/icons-material/Face6";
import WorkIcon from "@mui/icons-material/Work";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonsClass, TypeButton } from "../../interface/navBar";

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const secContainRef = useRef<HTMLDivElement>(null);
  const navContainRef = useRef<HTMLDivElement>(null);
  const [widthContainer, setWidthContainer] = useState(0);
  const [widthNav, setWidthNav] = useState(0);
  const [buttonsClass, setButtonsClass] = useState<ButtonsClass>();

  const listButtons = [
    {
      key: "myData",
      path: "/",
      Icon: <Face6Icon />,
      title: "Mis datos",
    },
    {
      key: "client",
      path: "/client",
      Icon: <WorkIcon />,
      title: "Cliente",
    },
    {
      key: "table",
      path: "/table",
      Icon: <TableChartIcon />,
      title: "Tablas",
    },
    {
      key: "pdf",
      path: "/pdf",
      Icon: <PictureAsPdfIcon />,
      title: "Pdf",
    },
  ];

  const positionNavbar = () => {
    if (secContainRef.current)
      setWidthContainer(secContainRef.current.clientWidth);
    if (navContainRef.current) setWidthNav(navContainRef.current.clientWidth);
  };

  const buttonActiveStyle = (path: string) => {
    switch (path) {
      case "/":
        setButtonsClass({
          myData: "item--active",
          myDataIcon: "icon--active",
          myDataText: "text--active",
        });
        break;
      case "/client":
        setButtonsClass({
          client: "item--active",
          clientIcon: "icon--active",
          clientText: "text--active",
        });
        break;
      case "/table":
        setButtonsClass({
          table: "item--active",
          tableIcon: "icon--active",
          tableText: "text--active",
        });
        break;
      case "/pdf":
        setButtonsClass({
          pdf: "item--active",
          pdfIcon: "icon--active",
          pdfText: "text--active",
        });
        break;
    }
  };

  const typeButton = (types: TypeButton) => {
    let { type, isContainer, isIcon, isText } = types;
    switch (type) {
      case "myData":
        if (isContainer) return buttonsClass?.myData;
        if (isIcon) return buttonsClass?.myDataIcon;
        if (isText) return buttonsClass?.myDataText;
        return "";
      case "client":
        if (isContainer) return buttonsClass?.client;
        if (isIcon) return buttonsClass?.clientIcon;
        if (isText) return buttonsClass?.clientText;
        return "";
      case "table":
        if (isContainer) return buttonsClass?.table;
        if (isIcon) return buttonsClass?.tableIcon;
        if (isText) return buttonsClass?.tableText;
        return "";
      case "pdf":
        if (isContainer) return buttonsClass?.pdf;
        if (isIcon) return buttonsClass?.pdfIcon;
        if (isText) return buttonsClass?.pdfText;
        return "";
    }
  };

  useEffect(() => {
    buttonActiveStyle(pathname);
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
        {listButtons.map(({ key, path, Icon, title }, i) => (
          <button
            key={key}
            className={`navBar__container__item ${typeButton({
              type: key,
              isContainer: true,
            })}`}
            onClick={() => navigate(path)}
          >
            <div
              className={`navBar__container__item__icon ${typeButton({
                type: key,
                isIcon: true,
              })}`}
            >
              {Icon}
            </div>
            <span
              className={`navBar__container__item__text ${typeButton({
                type: key,
                isText: true,
              })}`}
            >
              {title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default NavBar;
