import React from 'react';

function Note(props) {
  return (
    <li>
      {props.content}
      {/* ... otros elementos de la nota ... */}
    </li>
  );
}

export default Note;

