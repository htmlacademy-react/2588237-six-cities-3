import { CardType } from '../../const';
import { TOffer } from '../../types/offer';
import Card from '../card/card';

type OfferCardProps = {
  offer: TOffer;
  onListItemHover?: (listItemName: string | undefined) => void;
}

function OfferCard({offer, onListItemHover}: OfferCardProps): JSX.Element {
  return (
    <Card
      offer={offer}
      cardType={CardType.Offer}
      onListItemHover={onListItemHover}
    />
  );
}

export default OfferCard;
