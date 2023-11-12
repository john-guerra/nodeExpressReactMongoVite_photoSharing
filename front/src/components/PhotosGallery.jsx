import PropTypes from "prop-types";

export function PhotosGallery({ photos }) {


  console.log("👏🏻 Render PhotosGallery photos=", photos);

  function renderPhotos() {
    function renderPhoto(photo) {
      return (
        <div className="col-4" key={photo._id}>
          <img src={photo.url} alt={photo.caption} />
          <div>{photo.caption}</div>
          <div>{photo.owner}</div>
          <div>{photo.timestamp}</div>
        </div>
      );
    }

    return (
      photos
        .map(renderPhoto)
    );
  }

  return <div className="row">{renderPhotos()}</div>;
}

PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  )
};
