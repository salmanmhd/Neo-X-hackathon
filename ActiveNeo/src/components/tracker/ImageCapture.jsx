'use client';

import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ImageCapture({ setIsImageClicked, setTime }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error('Camera access error:', err);
    }
  };

  const captureImage = () => {
    const context = canvasRef.current?.getContext('2d');
    if (context && videoRef.current) {
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
      setImageSrc(imageDataUrl);

      getLocationAndLogMetadata(imageDataUrl);

      stopCamera();
    }
  };

  const stopCamera = () => {
    const tracks = videoRef.current?.srcObject?.getTracks();
    tracks?.forEach((track) => track.stop());
    setIsCameraActive(false); // Set camera as inactive
  };

  const getLocationAndLogMetadata = (imageDataUrl) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp
    setTime(timestamp);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const imageMetadata = {
            timestamp,
            location: { latitude, longitude },
            imageSize: imageDataUrl.length, // The size of the image data URL (in characters)
            imageType: 'image/jpeg',
          };

          setMetadata(imageMetadata);
          console.log('Image Metadata:', imageMetadata); // Log the metadata
          setIsImageClicked(true); // Notify parent component that image is captured
        },
        (error) => {
          console.error('Error retrieving location:', error);
          // If location access is denied or unavailable, log only the timestamp
          const imageMetadata = {
            timestamp,
            location: null, // No location available
            imageSize: imageDataUrl.length,
            imageType: 'image/jpeg',
          };
          setMetadata(imageMetadata);
          console.log('Image Metadata without location:', imageMetadata);
          setIsImageClicked(true); // Notify parent even if location is unavailable
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      const imageMetadata = {
        timestamp,
        location: null,
        imageSize: imageDataUrl.length,
        imageType: 'image/jpeg',
      };
      setMetadata(imageMetadata);
      console.log('Image Metadata without location:', imageMetadata);
      setIsImageClicked(true); // Notify parent when geolocation is unavailable
    }
  };

  return (
    <div className='flex justify-center items-center  bg-gradient-to-br from-purple-900 to-black text-white'>
      <Card className='w-full max-w-md mx-auto bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center text-purple-300'>
            Image Capture
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='relative aspect-video bg-purple-700 rounded-lg overflow-hidden'>
            {/* Show captured image if available, otherwise show video */}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt='Captured'
                className='w-full h-full object-cover'
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                className={`w-full h-full object-cover ${
                  isCameraActive ? '' : 'hidden'
                }`} // Hide video if camera is not active
              />
            )}
          </div>
          <Button
            className='w-full bg-purple-600 hover:bg-purple-700 text-white'
            onClick={
              imageSrc
                ? startCamera
                : isCameraActive
                ? captureImage
                : startCamera
            }
          >
            <Camera className='w-5 h-5 mr-2' />
            {/* Change button text dynamically */}
            {imageSrc
              ? 'Retake Photo'
              : isCameraActive
              ? 'Capture'
              : 'Open Camera'}
          </Button>
          <canvas ref={canvasRef} className='hidden' width={640} height={480} />
        </CardContent>
      </Card>
    </div>
  );
}
