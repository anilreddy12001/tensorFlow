import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

let model = null;

export const loadModel = async () => {
  if (!model) {
    model = await blazeface.load();
  }
  return model;
};

export const detectFaces = async (imageElement) => {
  if (!model) {
    model = await loadModel();
  }
  
  const predictions = await model.estimateFaces(imageElement, false);
  return predictions;
};