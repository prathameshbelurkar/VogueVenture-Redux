import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
