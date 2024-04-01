import { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TestPage() {
  const fileInputRef = useRef(null);

  const handleClick = () => {};

  return (
    <div className="bg-primary">
      <Navbar />

      <div className="flex justify-center my-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white mt-4">
          <h1 className="text-4xl font-bold leading-tight xl:text-4xl">
            Welcome to our <span className="text-secondary">AI </span>
            <span className="block">
              Fire Detection <span className="text-secondary">Test</span> Page
            </span>
          </h1>
          <h3 className="my-5">
            Join us in revolutionizing the way we protect our forests and
            communities through the power of AI technology.
          </h3>
          <div className="mt-8 flex sm:flex-row flex-col justify-center items-center gap-4">
            <div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e: any) => {
                  console.log(e.target.files[0]);
                }}
              />
              <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12  cursor-pointer rounded-full">
                Select your file
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
