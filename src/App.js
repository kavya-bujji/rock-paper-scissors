import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import styles from "./styles";
import AppStyle from "./app-style";
import Header from "./components/header/Header";
import Rules from "./components/rules/Rules";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";

export default () => {
  const [isModalHide, setModal] = useState(true);

  return (
    <ThemeProvider theme={styles}>
      <AppStyle>
        <Header />
        <Main />
        <Rules isModalHide={isModalHide} setModal={setModal} />
        {!isModalHide ? <Modal setModal={setModal} /> : null}
      </AppStyle>
    </ThemeProvider>
  );
};
