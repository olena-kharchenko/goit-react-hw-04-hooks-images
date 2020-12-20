import { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

function App() {
  const [imageName, setImageName] = useState('');

  const prevImageRef = useRef('');
  useEffect(() => {
    prevImageRef.current = imageName;
  });
  const prevImageName = prevImageRef.current;

  return (
    <>
      <Searchbar onSubmit={setImageName} />
      <ImagesInfo imageName={imageName} prevName={prevImageName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
