import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../redux/store";
import userActions from "../../redux/user/actions";

import Login from "../../components/login";

import SignInWrapper from "./signIn.style";

interface IProps extends RouteComponentProps {}
const SignIn: React.FC<IProps> = ({ history }) => {
  const { t } = useTranslation();
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();

  const handleLogin = (username: string, password: string) => {
    dispatch(userActions.signIn("Test token --:)", username));
    history.push("/app");
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
