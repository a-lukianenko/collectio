import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Footer from "../components/Base/Footer/Footer";
import Header from "../components/Base/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import Content from "../components/Base/Content/Content";
import Posts from "../components/Posts/Posts";
import AddPost from "../components/AddPost/AddPost";
import Profile from "../components/Profile/Profile";

const BaseContainer = () => {
  const [content, setContent] = useState(<HomePage />);
  const [profileName, setProfileName] = useState("");

  function handleProfileName(name) {
    setProfileName(name);
  }

  function handleClick(e) {
    const { innerText } = e.target;

    if (innerText.startsWith("POSTS")) return setContent(<Posts />);
    if (innerText.startsWith("ADD POST")) return setContent(<AddPost />);
    if (innerText.startsWith("PROFILE"))
      return setContent(<Profile handleProfileName={handleProfileName} />);
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header handleClick={handleClick} profileName={profileName} />
        <Content>{content}</Content>
        <Footer />
      </Container>
    </>
  );
};

export default BaseContainer;
