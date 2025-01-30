import GalleryItem from '../gallery-item/gallery-item';

function Gallery(): JSX.Element {
  return (
    <div className="offer__gallery">
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

export default Gallery;
