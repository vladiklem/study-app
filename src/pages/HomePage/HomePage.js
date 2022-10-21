import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemAction,
  duplicateItemAction,
  getDataSuccessAction,
  saveItemAction,
  getDataRequestAction,
} from "../../redux-store/entity/actions";
import {
  charactersSelector,
  characterStatusSelector,
} from "../../redux-store/entity/selectors";
import { CharactersList } from "./CharactersList/CharactersList";

export const HomePage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const status = useSelector(characterStatusSelector);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch(getDataRequestAction());
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
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {status === FETCH_STATUSES.REQUEST ? (
          <p>Loading...</p>
        ) : (
          <CharactersList
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleDuplicate={handleDuplicate}
            list={characters}
          />
        )}
      </section>
    </main>
  );
};
