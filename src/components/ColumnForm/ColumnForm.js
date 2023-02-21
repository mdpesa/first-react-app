import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId}));
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:{' '}
      <input
        className={styles.input}
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:{' '}
      <input
        className={styles.input}
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
