import React from "react";
import { PageWrapper } from "../styles/components";

export default function Layout(props: any) {
  return <PageWrapper>{props.children}</PageWrapper>;
}
