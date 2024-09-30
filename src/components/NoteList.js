import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      <h2>Daftar Catatan</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;