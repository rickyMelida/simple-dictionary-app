import React, { useRef } from 'react';
import { Index } from './presentation/Index';
import './style.css';

/*
URL EXAMPLE:
https://api.dictionaryapi.dev/api/v2/entries/en/hello

*/

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4 title">Dictionary App</h1>
      <Index />
    </div>
  );
}
