import React from 'react';
import { Audio } from './components/meaning/phonetics/Audio';
import { Phonetic } from './components/meaning/phonetics/Phonetic';

export const Phonetics = () => {
  return (
    <>
      <div className="row">
        <Audio />
        <Phonetic />
      </div>
    </>
  );
};
