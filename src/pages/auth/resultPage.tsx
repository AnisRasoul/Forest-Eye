import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RestPage() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 text-center text-white mt-4">
        <h1 className="text-4xl font-bold leading-tight xl:text-4xl">
          Experience the speed, precision, and reliability that define our
          commitment to early fire{" "}
          <span className="text-secondary">detection</span>
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row  text-white rounded-lg overflow-hidden shadow-xl max-w-[900px] w-full space-x-10">
          <div className="md:w-1/2 border border-1 border-secondary rounded">
            <img
              alt="Forest with fire detection"
              className="object-cover w-full h-full"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-6 border border-1 border-secondary rounded">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Results</h2>
              <p className="text-sm">
                "Welcome to our AI Fire Detection Test Page, where innovation
                meets safety! This interactive platform showcases the prowess of
                our advanced artificial intelligence in detecting fires. Upload
                images or videos to witness our cutting-edge AI algorithms in
                action. Experience the speed, precision, and reliability that
                define our commitment to early fire detection. Join us in
                revolutionizing the way we protect our forests and communities
                through the power of AI technology."
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#312e81] px-4 py-2 rounded-md">
                <p className="font-mono text-lg">AT :</p>
                <p className="font-mono text-3xl">22:02:13 - 29/02/2024</p>
              </div>
              <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2 px-4 rounded-md">
                Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
