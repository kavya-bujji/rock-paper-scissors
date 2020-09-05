import React from "react";
import styled, { ThemeProvider } from "styled-components";
import styles from "./Styles";
import AppStyle from "./app-style";
import Header from "./components/header/Header";
import Rules from "./components/rules/Rules";

export default () => {
  return (
    <ThemeProvider theme={styles}>
      <AppStyle>
        <Header />
        <Rules />
      </AppStyle>
    </ThemeProvider>
  );
};
