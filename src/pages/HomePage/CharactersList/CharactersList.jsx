import React from "react";

import { CharactersItem } from "./CharacterItem/CharacterItem";

export const CharactersList = ({ list, handleDelete, handleSave }) => (
  <ul>
    {list.map((item) => (
      <CharactersItem
        key={item.id}
        {...item}
        handleDelete={handleDelete}
        handleSave={handleSave}
      />
    ))}
  </ul>
);
