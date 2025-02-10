import InsideListItem from '../inside-list-item/inside-list-item';

type InsideListProps = {
  goods: string[];
}

function InsideList({goods}: InsideListProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => <InsideListItem key={`god-key=${good}`} good={good} />)}
    </ul>
  );
}

export default InsideList;
