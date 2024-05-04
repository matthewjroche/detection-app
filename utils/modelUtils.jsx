// utils/modelUtils.js
import * as tf from '@tensorflow/tfjs';

export const loadModel = async () => {
    const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
    console.log('Model loaded');
    return model;
};

export const preprocessImage = (imageElement) => {
    return tf.tidy(() => {
        let tensor = tf.browser.fromPixels(imageElement)
            .resizeNearestNeighbor([224, 224])
            .toFloat();
        const offset = tf.scalar(127.5);
        const normalized = tensor.sub(offset).div(offset);
        return normalized.expandDims(0);
    });
};

export const makePrediction = async (imageElement, model) => {
    const processedImage = preprocessImage(imageElement);
    const predictions = await model.predict(processedImage);
    console.log(predictions);
    return predictions;
};
