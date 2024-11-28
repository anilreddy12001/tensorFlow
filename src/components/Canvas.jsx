import React, { useRef, useEffect } from 'react';

const Canvas = ({ image, predictions }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image || !predictions || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image
      ctx.drawImage(img, 0, 0);

      // Draw face rectangles
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;

      predictions.forEach(prediction => {
        const start = prediction.topLeft;
        const end = prediction.bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];

        ctx.strokeRect(start[0], start[1], size[0], size[1]);

        // Draw landmarks
        prediction.landmarks.forEach(landmark => {
          ctx.fillStyle = '#ff0000';
          ctx.beginPath();
          ctx.arc(landmark[0], landmark[1], 3, 0, 2 * Math.PI);
          ctx.fill();
        });
      });
    };

    img.src = image;
  }, [image, predictions]);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full border border-gray-300 rounded"
    />
  );
};

export default Canvas;