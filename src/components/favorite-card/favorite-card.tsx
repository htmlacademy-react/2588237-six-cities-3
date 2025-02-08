import { CardType } from '../../const';
import { Offer } from '../../types/offer';
import Card from '../card/card';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  return <Card offer={offer} cardType={CardType.Favorite}/>;
}

export default FavoriteCard;
