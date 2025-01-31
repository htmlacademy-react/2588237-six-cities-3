type AmenityListProps = {
  goods: string[];
}

function AmenityList({goods}: AmenityListProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li className="offer__inside-item" key={`god-key=${good}`}>
          {good}
        </li>
      ))}
    </ul>
  );
}

export default AmenityList;
