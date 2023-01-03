import React from "react";
import SideDash from "../../components/molecules/SideDash";
import LoginOrganism from "../../components/organisms/Login";
import WelcomePage from "../../components/template/WelcomePage";

const Login = () => {
  return (
    <WelcomePage>
      <LoginOrganism />
    </WelcomePage>
  );
};

export default Login;
