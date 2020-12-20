import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imagesAPI from '../services/images-api';
import ImagesErrorView from '../ImagesErrorView';
import ImagePendingView from '../ImagePendingView';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImagesInfo({ imageName, prevName }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (imageName !== prevName) {
      setImages([]);
      setPage(1);
      setError(null);
    }
  }, [imageName, prevName]);

  useEffect(() => {
    if (imageName === '') {
      console.log('Имени нет');
      return;
    }

    setStatus(Status.PENDING);

    imagesAPI
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  }, [imageName, page, prevName]);

  if (status === Status.IDLE) {
    return <p>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <ImagePendingView />;
  }

  if (status === Status.REJECTED) {
    return <ImagesErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        <Button onClick={() => setPage(page + 1)} />
      </>
    );
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImagesInfo;
