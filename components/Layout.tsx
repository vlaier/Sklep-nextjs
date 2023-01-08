import React from "react";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NextSeo } from "next-seo";
interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NextSeo
        title="Strona główna"
        description="Strona główna sklepu internetowego"
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
