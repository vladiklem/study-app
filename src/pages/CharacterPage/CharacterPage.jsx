import React from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const { id } = useParams();

  return <div>Character page with ID ${id}</div>;
};
