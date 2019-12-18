import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";

import { AppState } from "../../redux/store";

import Input from "../../components/ui-kit/input";
import Button from "../../components/ui-kit/button";

import LoginWrapper from "./login.style";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: AppState) => state.AppSetting.theme);

  const handleLogin = () => {};
  return (
    <ThemeProvider theme={theme}>
      <LoginWrapper>
        <div className="login-box">
          <div className="login-box-header">
            <span>{t("login")}</span>
          </div>
          <div className="login-box-body">
            <Input placeholder={t("username")} />
            <Input.Password placeholder={t("password")} />
            <Button onClick={handleLogin}>{t("login")}</Button>
          </div>
        </div>
      </LoginWrapper>
    </ThemeProvider>
  );
};

export default Login;
