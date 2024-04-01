import LoginForm from "./components/loginForm";
import GoogleLoginButton from "./components/googleLoginButtom";

export default function loginPage() {
  return (
    <div className="min-h-screen flex bg-[#200E3A]">
      <div className="flex w-full max-w-md m-auto  rounded-lg shadow-default py-10 px-16">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-medium text-[#ffffff] mb-8">Log In</h1>
          <LoginForm />
          <a className="text-xs text-white hover:underline p-2" href="#">
            Forgot password?
          </a>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col items-center justify-center m-4">
            <GoogleLoginButton />

            <button className="flex justify-center items-center border border-[#3887BE] p-2 mt-2 mb-4 rounded-full focus:outline-none focus:ring-1 bg-[#271245] px-12 text-white font-semibold pl-2 md:pr-2">
              <img
                src="/public/assets/icons/fb.svg"
                alt="Facebook"
                className="mr-1"
              />
              Facebook
            </button>
          </div>
          <div className="text-xs mt-4 text-center text-gray-400">
            Don't have an account ?
            <a
              className="text-secondary hover:underline pl-1 font-semibold"
              href="/auth/register">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        {" "}
        {/* Adjusted for flex layout */}
        <img
          src="/public/assets/Frame.png"
          alt="Background"
          className="max-h-[805.43px] ml-24"
        />
      </div>
    </div>
  );
}
