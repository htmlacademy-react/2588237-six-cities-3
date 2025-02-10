import { CardType } from '../../const';
import { Offer } from '../../types/offer';
import Card from '../card/card';

type NearCardProps = {
  offer: Offer;
  onListItemHover?: (listItemName: string | undefined) => void;
}

function NearCard({offer, onListItemHover}: NearCardProps): JSX.Element {
  return (
    <Card
      offer={offer}
      cardType={CardType.Near}
      onListItemHover={onListItemHover}
    />
  );
}

export default NearCard;
