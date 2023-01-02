import React from "react";
import LoginCard from "../molecules/LoginCard";
import SideDash from "../molecules/SideDash";

const LoginOrganism = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex ml-[115px] items-center justify-center">
        <LoginCard />
      </div>
      <SideDash />
    </div>
  );
};

export default LoginOrganism;
