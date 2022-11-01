import React from 'react';
import { Definition } from './components/meaning/Definition';
import { Synonymous } from './components/meaning/Synonymous';
import { Antonyms } from './components/meaning/Antonyms';

export const Meaning = () => {
  return (
    <>
      <Definition />
      <Synonymous />
      <Antonyms />
    </>
  );
};
