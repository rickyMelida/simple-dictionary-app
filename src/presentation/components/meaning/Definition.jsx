import React, { useContext } from 'react';
import { WordContext } from '../../Index';
import { definitionAdapter } from '../../../adapters/meaningAdapter';

export const Definition = () => {
  const wordData = useContext(WordContext);
  const definitionData = definitionAdapter(wordData);

  if (definitionData.length == 0) return;
  return (
    <>
      <hr />
      <div className="row">
        <div className="col-md-10">
          <h6 className='sub-title'>Definition</h6>
          <p>
            <ul>
              {definitionData.map((element) => (
                <li>{element}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};
