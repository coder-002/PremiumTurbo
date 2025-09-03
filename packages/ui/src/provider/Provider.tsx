import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Provider;
