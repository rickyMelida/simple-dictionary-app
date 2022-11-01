import React, { useContext } from 'react';
import { WordContext } from '../../Index';
import { antonymsAdapter } from '../../../adapters/meaningAdapter';

export const Antonyms = () => {
  const wordData = useContext(WordContext);
  const antonymsData = antonymsAdapter(wordData);

  if (antonymsData.length == 0) return;

  return (
    <>
      <hr />
      <div className="row">
        <div className="col-10">
          <h6 className='sub-title'>Antonyms</h6>
          <p className="">
            {antonymsData.map((element) => (
              <span>{` - ${element}`} </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
