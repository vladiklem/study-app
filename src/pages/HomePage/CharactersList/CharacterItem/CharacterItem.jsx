import React, { useState } from "react";

export const CharactersItem = ({ item, handleSave, handleDelete, handleDuplicate, index }) => {
  const { id, name } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEdit((edit) => !edit);
  };

  const onSave = () => {
    handleSave(id, value);
    setIsEdit(false);
  };

  const onDelete = () => {
    handleDelete(id);
  };

  const onDuplicate = () => {
    handleDuplicate(index, item);
  }

  return (
    <li className="character">
      <div className="character__header">
        {isEdit ? (
          <input value={value} onChange={onChange} />
        ) : (
          <h2 className="character__name">{name}</h2>
        )}
        <div>
          {!isEdit && (
            <div>
              <button onClick={toggleEditMode}>Edit</button>
              <button onClick={onDuplicate}>Duplicate</button>
              <button onClick={onDelete}>X</button>
            </div>
          )}
          {isEdit && (
            <div>
              <button onClick={onSave}>Save</button>
              <button onClick={toggleEditMode}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
