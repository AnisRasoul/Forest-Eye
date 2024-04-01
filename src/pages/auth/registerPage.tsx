import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Api";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) return navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      return alert("Error registering user.");
    }
  };
  return (
    <div className="min-h-screen flex bg-[#200E3A]">
      <div className="hidden md:flex">
        {" "}
        {/* Adjusted for flex layout */}
        <img
          src="/public/assets/registerbg.png"
          alt="Background"
          className="h-[805.43px] mr-24"
        />
      </div>
      <div className="flex w-full max-w-md m-auto  rounded-lg shadow-default py-10 px-16 mr-20">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-medium text-[#ffffff] mb-8">Sign Up</h1>
          <input
            className="border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] text-white placeholder-gray-400"
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] text-white placeholder-gray-400"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] text-white placeholder-gray-400"
            type="password"
            id="password"
            placeholder="Repeat Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button
            onClick={handleRegister}
            className="w-full bg-[#3887BE] py-2 mt-4 mb-4 rounded-full font-medium text-white">
            Sign Up
          </button>
          <a className="text-xs text-white hover:underline" href="#">
            Forgot password?
          </a>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex justify-center">
            <button className="flex items-center border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] mx-3 px-5 text-white font-semibold pr-10 md:pr-6">
              <img
                src="/public/assets/icons/google.svg"
                className="h-5 w-5 mx-2"
                alt="Google"
              />
              Google
            </button>
            <button className="flex items-center border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] px-5 text-white font-semibold pr-10 md:pr-6">
              <img
                src="/public/assets/icons/fb.svg"
                className="h-5 w-5 mx-2"
                alt="Facebook"
              />
              Facebook
            </button>
          </div>
          <div className="text-xs mt-4 text-center text-gray-400">
            Already have an account ?
            <a
              className="text-secondary hover:underline pl-1 font-semibold"
              href="/auth/login">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
