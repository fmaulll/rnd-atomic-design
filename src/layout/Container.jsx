import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import WelcomePage from "../components/template/WelcomePage";

const Container = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>{!user ? <WelcomePage>{children}</WelcomePage> : <div>{children}</div>}</>
  );
};

export default Container;
