import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);
  if (favoriteCards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>No cards...</PageTitle>
      </div>
    );
  }
  return (
    <div className={styles.favorite}>
      <PageTitle>favorite</PageTitle>
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
