"use client"
import Image from "next/image";
import * as tf from "@tensorflow/tfjs";
import ImageUpload from '../components/ImageUpload';
import { useEffect, useState } from 'react';
import { loadModel } from '../utils/modelUtils';


 
  const Home = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        loadModel().then(setModel);
    });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         
         <div>
            <h1>Image Recognition with MobileNet and Next.js</h1>
            <ImageUpload />
        </div>
    </main>
  );
}

export default Home;
