import { useState } from "react";
import Layout from "./Layout";
import { API_URL } from "../../Api";

export default function Upload() {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (event: any) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!video) {
      alert("Please select a video to upload.");
      return;
    }

    const reader = new FileReader();

    reader.onload = async (e) => {
      const buffer = e.target?.result;

      try {
        console.log("Uploading video...", buffer);
        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
          },
          body: buffer,
        });

        if (response.ok) {
          const data = await response.json();

          //save test result here
          await fetch(`${API_URL}/test/save`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
          });

          alert("Video uploaded successfully: " + JSON.stringify(data));
        } else {
          alert("Failed to upload video.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error uploading video.");
      }
    };

    reader.onerror = (error) => console.log("Error reading file:", error);

    reader.readAsArrayBuffer(video);
  };

  return (
    <Layout>
      <div className="text-white p-5 pl-0">
        <form
          className="flex flex-col bg-primary justify-start items-start p-4"
          onSubmit={handleSubmit}>
          <input
            className=""
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
          <button
            className="border-[1px] border-secondary rounded-2xl py-1 px-4 m-2"
            type="submit">
            Submit Video
          </button>
        </form>
      </div>
    </Layout>
  );
}
