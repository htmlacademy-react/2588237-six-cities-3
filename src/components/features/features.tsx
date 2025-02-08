type FeaturesProps = {
  features: {
    type: string;
    bedrooms: number;
    maxAdults: number;
  };
}

function Features({features}: FeaturesProps): JSX.Element {
  const {type: houseType, bedrooms, maxAdults} = features;

  const bedroomTitle = bedrooms > 1 ? `${bedrooms} bedrooms` : `${bedrooms} bedroom`;
  const adultsTitle = maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {houseType}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedroomTitle}
      </li>
      <li className="offer__feature offer__feature--adults">
        {adultsTitle}
      </li>
    </ul>
  );
}

export default Features;
