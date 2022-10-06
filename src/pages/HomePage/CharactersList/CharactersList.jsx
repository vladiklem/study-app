import React from "react";

import { CharactersItem } from "./CharacterItem/CharacterItem";

export const CharactersList = ({ list }) => (
    <ul>
        {list.map((item) => (
            <CharactersItem {...item} />
        ))}
    </ul>
);