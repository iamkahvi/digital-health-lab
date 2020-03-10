import React from "react";
import { PageWrapper, FlexCenter } from "../styles/components";

export default function Layout(props: any) {
  return (
    <FlexCenter>
      <PageWrapper>{props.children}</PageWrapper>
    </FlexCenter>
  );
}
