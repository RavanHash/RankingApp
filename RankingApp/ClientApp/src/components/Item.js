const Item = ({ item, drag, itemImgObj }) => {
  if (!itemImgObj || !itemImgObj.image) {
    return (
      <div className="unranked-cell">
        <img
          src="placeholder.jpg"
          style={{ cursor: "pointer" }}
          draggable="true"
          onDragStart={drag}
        />
      </div>
    );
  }

  return (
    <div className="unranked-cell">
      <img
        id={`item-${item.id}`}
        src={itemImgObj.image}
        style={{ cursor: "pointer" }}
        draggable="true"
        onDragStart={drag}
      />
    </div>
  );
};
export default Item;
