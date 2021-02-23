import React from 'react';
import { useName } from '../state/store';


const Name = () => {
  const [listName, { updateListName }] = useName();

  const onSetName = (name) => updateListName(name);

  return (
    <input
      type="text"
      defaultValue={listName}
      onChange={(event) => onSetName(event.target.value)}
    />
  )
}

export default Name
