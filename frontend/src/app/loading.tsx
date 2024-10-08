'use client';
import React from 'react';
const Loading = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <div className="loading"></div>
        <h3 className="text-2xl font-bold text-primary-400">Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
