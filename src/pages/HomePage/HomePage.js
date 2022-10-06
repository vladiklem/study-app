import { useEffect, useState } from "react";
import { CharactersList } from "./CharactersList/CharactersList";

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleDelete = () => {};

  const handleEdit = () => {};

  return (
    <main>
      <section>
        <CharactersList list={data} />
      </section>
    </main>
  );
};
