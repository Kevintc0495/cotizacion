import { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./layout.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
  // children: React.PropsWithChildren;
}

const Layout: React.FC<Props> = ({ className, children }) => {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    //137
    setScreen((prevValue)=> ({...prevValue,  width: window.screen.width}));
    setScreen((prevValue)=> ({...prevValue,  height: window.screen.height}));
  }, []);

  return (
    <>
      <Header />
      <main className={`main__container ${className}`} style={{height: screen.height - 137 - 140}}>
        {children}
      </main>
      <NavBar />
    </>
  );
};

export default Layout;
