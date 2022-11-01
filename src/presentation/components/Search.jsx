import React, { useState, useRef, useEffect } from 'react';

export const Search = ({ wordS }) => {
  const wordToSearch = useRef(null);
  const [word, setWord] = useState();

  useEffect(() => {
    //wordToSearch.current.focus();
  }, [word]);

  const submit = () => {
    wordS(wordToSearch.current.value);
    wordToSearch.current.value = '';
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group text-center ">
            <input
              className="form-control w-50 d-inline"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={wordToSearch}
            />
            <button
              className="btn btn-outline-success mb-3 mx-1"
              type="submit"
              onClick={submit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
