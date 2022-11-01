import React, { useContext } from 'react';
import { WordContext } from '../../../Index';
import { phoneticAdapter } from '../../../../adapters/phoneticAdapter';

export const Phonetic = () => {
  const wordContect = useContext(WordContext);
  const phoneticData = phoneticAdapter(wordContect);
  const dataToView = phoneticData.length == 0 ? <p></p> : <p>{phoneticData}</p>;

  return <div className="col-4">{dataToView}</div>;
};
