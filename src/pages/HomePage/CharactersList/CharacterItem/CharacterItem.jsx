import React, { useState } from "react";

export const CharactersItem = ({ created, name }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEdit((edit) => !edit);
  };

  const onSave = () => {
    // ваш код
  };

  return (
    <li key={created} className="character">
      <div className="character__header">
        {isEdit ? (
          <input value={value} onChange={onChange} />
        ) : (
          <h2 className="character__name">{name}</h2>
        )}
        <div>
          {!isEdit && <button onClick={toggleEditMode}>Edit</button>}
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
