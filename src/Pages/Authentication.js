import React, { useState } from "react";
import { Footer } from "../Components/Footer";
import { SignIn } from "../Components/SignIn";
import { SignUp } from "../Components/SignUp";

const AuthenticationPage = () => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <div>
      <div className="min-h-screen bg-white  flex flex-row justify-center py-12 px-6 lg:px-8">
        <div className="w-auto max-w-2xl align-middle">
          <img
            className="hidden lg:grid"
            src="https://www.decolore.net/wp-content/uploads/2019/10/undraw.png"
            alt="Checking Reviews"
          />
        </div>
        <div
          font-ariel
          className={`${
            hasAccount ? "grid" : "hidden"
          } min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8`}
        >
          <SignIn hook={setHasAccount} />
        </div>
        <div
          font-ariel
          className={`${
            hasAccount ? "hidden" : "grid"
          } min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8`}
        >
          <SignUp hook={setHasAccount} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthenticationPage;
