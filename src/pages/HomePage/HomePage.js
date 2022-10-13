import { useEffect, useState } from "react";
import { deleteItemAction, duplicateItemAction, getDataSuccessAction, saveItemAction } from "../../store/actions";
import { useStore } from "../../store/useStore";
import { CharactersList } from "./CharactersList/CharactersList";

export const HomePage = () => {
  // const [data, setData] = useState([]);
  const [state, dispatch] = useStore({ data: [] });

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getDataSuccessAction(data.results))
      });
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteItemAction(id));
  };

  const handleSave = (id, name) => {
    dispatch(saveItemAction(id, name));
  };

  const handleDuplicate = (index, item) => {
    dispatch(duplicateItemAction(index, item));
  };

  return (
    <main>
      <section>
        <CharactersList
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleDuplicate={handleDuplicate}
          list={state.data}
        />
      </section>
    </main>
  );
};
