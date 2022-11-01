import React, { useContext } from 'react';
import { WordContext } from '../Index';
import {
  wordAdapter,
  partOfSpeechAdapter,
} from '../../adapters/meaningAdapter';

export const WordSearch = () => {
  const wordData = useContext(WordContext);
  const wordToSearch = wordAdapter(wordData);
  const partOfSpeech = partOfSpeechAdapter(wordData);

  if(!wordToSearch || !partOfSpeech) return ;

  return (
    <>
      <hr />
      <div className="row mt-4">
        <div className="col-md-12 ">
          <h3 className='word'>{wordToSearch}</h3>
          <cite className="fw-light w-100">{partOfSpeech}</cite>
        </div>
      </div>
    </>
  );
};
