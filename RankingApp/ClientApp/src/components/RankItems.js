import React, { useEffect, useState } from "react";

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
      {items != null ? (
        items.map((item) => <h3 key={item.id}>{item.Title}</h3>)
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default RankItems;
