import React from "react";
import { ThemeProvider } from "styled-components";
import styles from "./Styles";
import AppStyle from "./app-style";
import Header from "./components/header/Header";
import Rules from "./components/rules/Rules";
import Main from "./components/main/Main";

export default () => {
  return (
    <ThemeProvider theme={styles}>
      <AppStyle>
        <Header />
        <Main />
        <Rules />
      </AppStyle>
    </ThemeProvider>
  );
};
