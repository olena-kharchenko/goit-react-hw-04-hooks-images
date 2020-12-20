import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast('Please enter search query');
      return;
    }

    onSubmit(imageName);

    setImageName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          value={imageName}
          onChange={event =>
            setImageName(event.currentTarget.value.toLowerCase())
          }
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="SearchForm-button">
          <ImSearch />
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
