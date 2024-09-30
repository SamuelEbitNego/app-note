import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== '') {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Tambahkan catatan..."
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default NoteForm;