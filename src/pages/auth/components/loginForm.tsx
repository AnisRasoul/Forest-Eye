import React, { useState } from "react";

import { useSelector, useDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../redux/auth/authActions";

export default function LoginForm() {
  const errorMessage = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await dispatch(loginAction(email, password));
    if (success) navigate("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <h3 className="ml-3">{errorMessage}</h3>
        <div className="space-y-4">
          <input
            className="w-full border border-[#3887BE] p-2 mt-2  rounded-full focus:outline-none focus:ring-1 bg-[#271245] text-white placeholder-gray-400"
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border mb-16 border-[#3887BE] p-2 mt-2 rounded-full focus:outline-none focus:ring-1 bg-[#271245] text-white placeholder-gray-400"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-[#3887BE] py-2 mt-8 mb-4 rounded-full font-medium text-white">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
