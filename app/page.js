"use client";

import { useState } from "react";
import UploadImage from "../components/UploadImage";
import processImage from "../utils/processImage";

export default function Home() {
  const [predictions, setPredictions] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Convert file to data URL for image preview
    reader.onload = async () => {
      setImageUrl(reader.result); // Set image URL for display
      const preds = await processImage(file);
      setPredictions(preds);
    };
    reader.onerror = () => {
      console.error("Error reading file");
      setImageUrl(null);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue">
      <div className="text-xl font-semibold mb-4">
        Upload an Image for AI Analysis
      </div>
      <UploadImage onFileUpload={handleFileUpload} />
      {imageUrl && (
        <div className="my-4">
          <img
            src={imageUrl}
            alt="Uploaded Preview"
            className="max-w-sm rounded-lg shadow-xl"
          />
        </div>
      )}
      {predictions.length > 0 && (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Predictions:</h2>
            <ul className="list-disc">
              {predictions.map((pred, index) => (
                <li key={index} className="ml-4">{`${
                  pred.className
                }: ${pred.probability.toFixed(3)}`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
