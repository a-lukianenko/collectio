import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Footer from "../components/Base/Footer/Footer";
import Header from "../components/Base/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import Content from "../components/Base/Content/Content";

const BaseContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header />
        <Content>
          <HomePage />
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default BaseContainer;
