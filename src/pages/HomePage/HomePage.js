import { useEffect, useState } from "react";
import { getItemsSuccess } from "../../store/actions";
import { useStore } from "../../store/useStore";
import { CharactersList } from "./CharactersList/CharactersList";

export const HomePage = () => {
  // const [data, setData] = useState([]);
  const [state, dispatch] = useStore({ data: [] });

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getItemsSuccess(data.results));
      });
  }, []);

  const handleDelete = (id) => {
    // ваш код
  };

  const handleEdit = () => {
    // ваш код
  };

  const { data } = state;

  return (
    <main>
      <section>
        <CharactersList list={data} />
      </section>
    </main>
  );
};
