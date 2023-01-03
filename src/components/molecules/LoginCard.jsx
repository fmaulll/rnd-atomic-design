import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import LinkAccountButton from "../atoms/LinkAccountButton";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { googleSignIn, googleSignOut } from "../../store/authSlice";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../../helpers/firebase";
import { loading } from "../../store/uiSlice";

const LoginCard = () => {
  const dispatch = useDispatch();

  const handleClickGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(googleSignIn(currentUser.auth.currentUser))
      dispatch(loading())
    })
      
  };

  const handleSignOut = () => {
    dispatch(googleSignOut())
  }

  return (
    <div className="shadow rounded-md w-[385px] flex justify-center items-center flex-col pt-10 pb-[18px] px-5">
      <div className="w-full mb-[30px]">
        <h1 className="text-[#403F63] text-xl font-semibold mb-[5px]">
          Welcome
        </h1>
        <p className="text-[13px] text-[#403F63] font-light">
          Please login to your account
        </p>
      </div>
      <div className="w-full mb-5">
        <InputText placeholder="Username Or Email" />
      </div>
      <div className="w-full mb-5">
        <InputText placeholder="Password" />
        <div className="w-full text-right">
          <Link className="text-xs text-[#575DFB]">Forgot Password?</Link>
        </div>
      </div>
      <div className="mb-[30px]">
        <LinkAccountButton handleClick={handleClickGoogle}>
          <FcGoogle className="mr-2" size={"24px"} /> Continue with Google{" "}
        </LinkAccountButton>
      </div>
      <Button handleClick={handleSignOut}>Login</Button>
    </div>
  );
};

export default LoginCard;
