import { CardType } from '../../const';
import { Offer } from '../../types/offer';
import Card from '../card/card';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
  return <Card offer={offer} cardType={CardType.Offer} />;
}

export default OfferCard;
