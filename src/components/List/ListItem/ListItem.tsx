import React from "react";
import { Item } from "utils/props";

export const ListItem: React.FC<Item> = ({ currentItem }) => {
  return (
    <li key={currentItem.name}>
      {currentItem.name && currentItem.icon && (
        <>
          <div key={currentItem.name}>{currentItem.icon}</div>
          <div key={currentItem.name} className="last_child">
            {currentItem.name}
          </div>
        </>
      )}
      {!currentItem.name && currentItem.icon && <div>{currentItem.icon}</div>}
      {currentItem.name && !currentItem.icon && (
        <div className="last_child" key={currentItem.name}>
          <a key={currentItem.name}>{currentItem.name}</a>
        </div>
      )}
    </li>
  );
};
