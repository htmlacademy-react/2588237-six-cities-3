import GalleryItem from '../gallery-item/gallery-item';

type GalleryProps = {
  images: string[];
}

function Gallery({images}: GalleryProps): JSX.Element {
  const MAX_SHOW_IMAGES = 6;
  const slicedImages = images.length > MAX_SHOW_IMAGES ? images.slice(0, MAX_SHOW_IMAGES) : images;

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {slicedImages.map((src) => <GalleryItem key={`key-${src}`} src={src} />)}
      </div>
    </div>
  );
}

export default Gallery;
