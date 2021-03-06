import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar';
import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import Spinner from './components/Loader';
import Button from './components/Button';
import ErrorView from './components/ErrorView';
import imageAPI from './services/apiService';
import idleImage from './images/the-future-of-search.jpg';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  const handleFormSubmit = query => {
    if (query === searchQuery) return;

    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setStatus(Status.PENDING);
  };

  useEffect(() => {
    if (!searchQuery) return;

    setStatus(Status.PENDING);

    imageAPI
      .fetchImages(searchQuery, page, error)
      .then(images => {
        if (images.length === 0) {
          toast.error(`No images found on ${searchQuery}.`);
          setStatus(Status.REJECTED);
          return;
        }
        setImages(state => {
          return [...state, ...images];
        });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(data => {
        window.scrollTo({
          top: document.documentElement.scrollHeight - 995,
          behavior: 'smooth',
        });
      });
  }, [searchQuery, page, error]);

  const onClickLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />

      {status === Status.IDLE && (
        <img
          src={idleImage}
          alt="lets-give-it-a-try"
          style={{ marginTop: 100 }}
        ></img>
      )}

      {status === Status.REJECTED && <ErrorView />}

      {images.length > 0 && <ImageGallery images={images} />}

      {status === Status.RESOLVED && <Button onClick={onClickLoadMore} />}

      {status === Status.PENDING && <Spinner />}

      <ToastContainer
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
