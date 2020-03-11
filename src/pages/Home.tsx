import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { TextWrapper } from "../styles/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <TextWrapper>
          <h1>Home</h1>
          <p>This is the homepage. It's responsive!</p>
        </TextWrapper>
      </Layout>
    </div>
  );
}
