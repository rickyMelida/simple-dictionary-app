import React, { useState, useEffect, createContext } from 'react';
import { Search } from './components/Search';
import { WordSearch } from './components/WordSearch';
import { Meaning } from './Meaning';
import { Phonetics } from './Phonetics';

import { dictionary } from '../services/Dictionary';
const WordContext = createContext();

const Index = () => {
  const [wordToSearch, setWordToSearch] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    dictionary(wordToSearch)
      .then((res) => {
        setResult(res);
      })
      .catch((error) => setResult({ error }));
  }, [wordToSearch]);

  return (
    <>
      <Search wordS={(e) => setWordToSearch(e)} />

      <WordContext.Provider value={result}>
        <WordSearch />

        <Phonetics />

        <Meaning />
      </WordContext.Provider>
    </>
  );
};

export { Index, WordContext };
