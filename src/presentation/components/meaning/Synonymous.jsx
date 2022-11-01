import React, { useContext } from 'react';
import { WordContext } from '../../Index';
import { synonymsAdapter } from '../../../adapters/meaningAdapter';

export const Synonymous = () => {
  const wordData = useContext(WordContext);
  const synonymousData = synonymsAdapter(wordData);

  if (synonymousData.length == 0) return;

  return (
    <>
      <hr />
      <div className="row">
        <div className="col-10">
          <h6 className='sub-title'>Synonymous</h6>

          <p className="">
            {synonymousData.map((element) => (
              <span>{` - ${element}`} </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
