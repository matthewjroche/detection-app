// import * as tf from '@tensorflow/tfjs';
// import * as mobilenet from '@tensorflow-models/mobilenet';  // Correct import for the MobileNet model

// async function processImage(imageBuffer) {
//   const model = await mobilenet.load();  // Correctly reference the imported mobilenet
//   const imageTensor = tf.browser.fromPixels(imageBuffer);  // Decode image buffer to tensor in the browser
//   const predictions = await model.classify(imageTensor);  // Classify the image using the model
//   imageTensor.dispose();  // Dispose of the tensor to free up memory
//   return predictions;
// }

// export default processImage;


import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

async function processImage(file) {
  const model = await mobilenet.load();
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = async () => {
        const imageTensor = tf.browser.fromPixels(img);
        const predictions = await model.classify(imageTensor);
        imageTensor.dispose();
        resolve(predictions);
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default processImage;
