import { CardType } from '../../const';
import { TOffer } from '../../types/offer';
import Card from '../card/card';

type FavoriteCardProps = {
  offer: TOffer;
}

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  return <Card offer={offer} cardType={CardType.Favorite}/>;
}

export default FavoriteCard;
