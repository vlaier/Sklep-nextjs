import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
