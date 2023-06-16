import React, { useEffect, useState } from "react";
import MovieImageArr from "./MovieImages";
import RankingGrid from "./RankingGrid";

const RankItems = () => {
  const [items, setItems] = useState([]);
  const dataType = 1;

  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Request failed");
        }
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <RankingGrid items={items} imgArr={MovieImageArr}/>
      <div className="items-not-ranked">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="unranked-cell" key={item.id}>
              <img
                id={`item-${item.id}`}
                src={MovieImageArr.find((o) => o.id === item.imageId)?.image}
              />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
};

export default RankItems;
