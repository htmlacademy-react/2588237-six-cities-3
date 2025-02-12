import { CardType } from '../../const';
import { TOffer } from '../../types/offer';
import Card from '../card/card';

type NearCardProps = {
  offer: TOffer;
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
