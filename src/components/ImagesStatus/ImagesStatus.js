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

function ImagesStatus({ imageName, images, page, setImages, setPage }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (imageName === '') {
      console.log('Имени нет');
      return;
    }

    setStatus(Status.PENDING);

    imagesAPI
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total > 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setStatus(Status.RESOLVED);
          newImages.total < 12 ? setShowButton(false) : setShowButton(true);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setError(err);
        console.log(typeof err);
        setStatus(Status.REJECTED);
      });
  }, [imageName, page, setImages]);

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
        {showButton && <Button onClick={() => setPage(page + 1)} />}
      </>
    );
  }
}

ImagesStatus.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImagesStatus;
