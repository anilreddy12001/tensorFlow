import React, { useState, useEffect } from 'react';
import { loadModel } from './utils/faceDetection';
import { useFaceDetection } from './hooks/useFaceDetection';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import Results from './components/Results';

function App() {
  const [image, setImage] = useState(null);
  const { predictions, isLoading, analyzeFace } = useFaceDetection();

  useEffect(() => {
    loadModel();
  }, []);

  const handleImageUpload = async (imageData) => {
    setImage(imageData);
    const img = new Image();
    img.src = imageData;
    img.onload = () => analyzeFace(img);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Header />
        <div className="bg-white rounded-lg shadow-md p-6">
          <ImageUpload onImageUpload={handleImageUpload} />
          <Results 
            image={image} 
            predictions={predictions} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;