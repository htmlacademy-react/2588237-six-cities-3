type InsideListItemProps = {
  good: string;
}

function InsideListItem({good}: InsideListItemProps): JSX.Element {
  return <li className="offer__inside-item">{good}</li>;
}

export default InsideListItem;
