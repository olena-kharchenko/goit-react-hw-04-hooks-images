import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

function App() {
  const [imageName, setImageName] = useState('');

  return (
    <>
      <Searchbar onSubmit={setImageName} />
      <ImagesInfo imageName={imageName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
