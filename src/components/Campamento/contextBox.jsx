
import PropTypes from "prop-types";

const ContentBox = ({ content }) => {
  return (
    <div className="content-box">
      <h2 className="content-title">{content.title}</h2>
      <div className="logo-container">
        <img
          className="content-image"
          src={content.image}
          alt={content.alt}
          width="100%"
          height="auto"
        />
      </div>
      <h3 className="content-subtitle">{content.content}</h3>
    </div>
  );
};

ContentBox.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentBox;