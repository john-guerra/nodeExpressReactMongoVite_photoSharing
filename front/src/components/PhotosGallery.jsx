import PropTypes from "prop-types";

export function PhotosGallery({photos}) {
  function renderPhoto(d, i) {
    return (
      <div key={`photos_${i}`}>
        <img src={d.url} alt={d.caption} />
        <div>{d.caption}</div>
        <div>{d.owner}</div>
        <div>{d.timestamp}</div>
      </div>
    );
  }

  function renderPhotos() {
    return <div>{photos.map(renderPhoto)}</div>;
  }

  console.log("Render Photos Gallery photos=", photos);
  return (
    <div className="PhotosGallery">
      {" "}
      <h2>Photos</h2>
      <div>{renderPhotos()}</div>
    </div>
  );
}


PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
}