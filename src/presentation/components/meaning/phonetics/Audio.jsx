import React, { useContext, useRef, useEffect } from 'react';
import { WordContext } from '../../../Index';
import { audioAdapter } from '../../../../adapters/phoneticAdapter';
import './style.css';

export const Audio = () => {
  const wordContect = useContext(WordContext);
  const audioData = audioAdapter(wordContect);
  const audioRef = useRef(null);

  const playImg =
    'https://img.freepik.com/free-icon/rounded-play-button_318-9366.jpg?w=740&t=st=1667229825~exp=1667230425~hmac=eda83328d0be1a25758210ab094fea29ec4f71994eb517b8067a6cffe5d799da';

  if (audioData.length == 0) return;

  return (
    <>
      <hr />
      <div className="col-1">
        <audio ref={audioRef}>
          <source src={audioData}></source>
        </audio>
        <img
          onClick={() => audioRef.current.play()}
          src={playImg}
          className="my-audio d-inline"
        />
      </div>
    </>
  );
};
