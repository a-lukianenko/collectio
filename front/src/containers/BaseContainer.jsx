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
import CatchProfileNameError from "../components/ErrorBoundaries/CatchProfileNameError";

import userData from "../userData";

const BaseContainer = () => {
  const [content, setContent] = useState(<HomePage />);
  const [profileName, setProfileName] = useState("");

  function handleProfileName(name) {
    setProfileName(name);
  }

  function handleClick(e) {
    const { innerText } = e.target;

    const components = {
      posts: "POSTS",
      addPost: "ADD_POST",
      profile: "PROFILE",
    };

    if (innerText.startsWith(components.posts))
      return setContent(<Posts userData={userData} />);
    if (innerText.startsWith(components.addPost))
      return setContent(<AddPost />);
    if (innerText.startsWith(components.profile))
      return setContent(
        <CatchProfileNameError>
          <Profile handleProfileName={handleProfileName} />
        </CatchProfileNameError>
      );
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
