const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {
  const cellCollectionTop = [];
  const cellCollectionMiddle = [];
  const cellCollectionBottom = [];
  const cellCollectionWorst = [];

  function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
    if (rankNum > 0) {
      let item = items.find((o) => o.ranking === rankNum);
      cellCollection.push(
        <div
          key={`rank-${rankNum}`}
          id={`rank-${rankNum}`}
          onDrop={drop}
          onDragOver={allowDrop}
          className="rank-cell"
        >
          {item != null ? (
            <img
              id={`item-${item.id}`}
              src={imgArr.find((o) => o.id === item.imageId)?.image}
              draggable="true"
              onDragStart={drag}
            />
          ) : null}
        </div>
      );
    } else {
      cellCollection.push(
        <div key={`row-label-${rowLabel}`} className="row-label">
          <h4>{rowLabel}</h4>
        </div>
      );
    }
  }

  function createCellsForRow(rowNum) {
    let rankNum = 0;
    let currCollection = [];
    let label = "";
    const numCells = 5;

    for (var a = 1; a <= numCells; a++) {
      rankNum = a === 1 ? 0 : numCells * (rowNum - 1) + a - rowNum;

      if (rowNum === 1) {
        currCollection = cellCollectionTop;
        label = "Top Tier";
      } else if (rowNum === 2) {
        currCollection = cellCollectionMiddle;
        label = "Middle Tier";
      } else if (rowNum === 3) {
        currCollection = cellCollectionBottom;
        label = "Bottom Tier";
      } else if (rowNum === 4) {
        currCollection = cellCollectionWorst;
        label = "Worst Tier";
      }
      pushCellMarkupToArr(currCollection, rankNum, label);
    }
  }

  function createRowsForGrid() {
    return (
      <div className="rankings">
        <div className="rank-row top-tier">{cellCollectionTop}</div>
        <div className="rank-row middle-tier">{cellCollectionMiddle}</div>
        <div className="rank-row bottom-tier">{cellCollectionBottom}</div>
        <div className="rank-row worst-tier">{cellCollectionWorst}</div>
      </div>
    );
  }

  function createRankingGrid() {
    for (var row = 1; row <= 4; row++) {
      createCellsForRow(row);
    }
    return createRowsForGrid();
  }

  return createRankingGrid();
};

export default RankingGrid;
