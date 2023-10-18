import React from 'react';
const params = {
    title: 'Title',
    items:[]
}

export const DetailsTypes = {
  STD:0,
  BTN: 1,
  NAV_VERTICLE:3,
  NAV_HORIZONTAL:4,
}

const testItems = [
    { text: "Item 1", action: () => console.log("Item 1") },
    { text: "Item 2", action: () => console.log("Item 2") },
    { text: "Item 3", action: () => console.log("Item 3") },
    { text: "Item 4", action: () => console.log("Item 5") },
  ]

export const Details = ({ title = "Details Test Summary", items = testItems, type = Details.STD}) => {



  return (
    <details>
      <summary>{title}</summary>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={item?.action}>
              {item.text}
          </li>
        ))}
      </ul>
    </details>
  );
};


