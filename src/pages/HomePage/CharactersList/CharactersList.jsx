import React from "react";

import { CharactersItem } from "./CharacterItem/CharacterItem";

export const CharactersList = ({ list, handleDelete, handleSave, handleDuplicate }, index) => (
  <ul>
    {list.map((item) => (
      <CharactersItem
        key={item.id}
        item={item}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleDuplicate={handleDuplicate}
        index={index}
      />
    ))}
  </ul>
);
