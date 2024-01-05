import "./directory.component.scss";

import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((c) => (
        <DirectoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Directory;
