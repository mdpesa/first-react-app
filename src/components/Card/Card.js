import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const clickTrash = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          className={clsx(styles.button, props.isFavorite && styles.isActive)}
          onClick={handleClick}
        >
          <i className={'fa fa-star-o'} />
        </button>
        <button className={styles.button} onClick={clickTrash}>
          <i className={'fa fa-trash'} />
        </button>
      </div>
    </li>
  );
};

export default Card;
