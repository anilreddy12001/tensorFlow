import React from 'react';
import Canvas from './Canvas';

const Results = ({ image, predictions, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600">Processing image...</p>
      </div>
    );
  }

  if (!image || !predictions) {
    return null;
  }

  return (
    <div>
      <p className="mb-4">
        Found {predictions.length} face{predictions.length !== 1 ? 's' : ''}.
      </p>
      <Canvas image={image} predictions={predictions} />
    </div>
  );
};

export default Results;