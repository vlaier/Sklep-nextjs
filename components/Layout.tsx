import React from "react";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
