import { useState } from 'react';
import { detectFaces } from '../utils/faceDetection';

export const useFaceDetection = () => {
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeFace = async (img) => {
    setIsLoading(true);
    try {
      const faces = await detectFaces(img);
      setPredictions(faces);
    } catch (error) {
      console.error('Error detecting faces:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    predictions,
    isLoading,
    analyzeFace
  };
};