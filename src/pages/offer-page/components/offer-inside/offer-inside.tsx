import InsideList from '../inside-list/inside-list';

type OfferInsideProps = {
  goods: string[];
}

function OfferInside({goods}: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>

      <InsideList goods={goods} />
    </div>
  );
}

export default OfferInside;
