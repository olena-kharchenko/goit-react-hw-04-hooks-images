import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImagesStatus from './components/ImagesStatus';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);

  const [page, setPage] = useState(1);

  const onSearch = name => {
    setImageName(name);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      <ImagesStatus
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
