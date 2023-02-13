import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {
  const [currentSearchString, setCurrentSearchString] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchstring(currentSearchString));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search…'
        value={currentSearchString}
        onChange={(e) => setCurrentSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
