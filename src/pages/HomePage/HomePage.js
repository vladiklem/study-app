import { useEffect, useState } from "react";
import { CharactersList } from "./CharactersList/CharactersList";

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.results.map((item, index) => ({
            ...item,
            id: item.created + index,
          }))
        );
      });
  }, []);

  const handleDelete = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
    // ваш код
  };

  const handleSave = (id, name) => {
    setData((data) =>
      data.map((item) => (item.id === id ? { ...item, name } : item))
    );
    // ваш код
  };

  return (
    <main>
      <section>
        <CharactersList
          handleDelete={handleDelete}
          handleSave={handleSave}
          list={data}
        />
      </section>
    </main>
  );
};
