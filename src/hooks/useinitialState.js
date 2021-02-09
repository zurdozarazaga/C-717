import { useState, useEffect } from 'react';

const useinitialState = (API) => {
  const [useinitialState, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => setVideos(data));
  }, []);
  return useinitialState;
};

export default useinitialState;
