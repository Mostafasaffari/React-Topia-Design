import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";

import { AppState } from "../../redux/store";

import Login from "../../components/login";

import SignInWrapper from "./signIn.style";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: AppState) => state.AppSetting.theme);

  const handleLogin = (username: string, password: string) => {
    console.log(username, password);
  };
  return (
    <ThemeProvider theme={theme}>
      <SignInWrapper>
        <Login
          title={t("login")}
          usernamePlaceholder={t("username")}
          passwordPlaceholder={t("password")}
          onLoginClick={handleLogin}
          buttonText={t("login")}
        />
      </SignInWrapper>
    </ThemeProvider>
  );
};

export default SignIn;
