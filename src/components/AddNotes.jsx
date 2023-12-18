import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddNotes = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [remainingCharacters, setRemainingCharacters] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setRemainingCharacters(50 - newTitle.length);
    }
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleAddNote = (e) => {
    e.preventDefault(); 
    let errorMessage = '';

    if (!title && !body) {
      errorMessage = 'Judul dan isi catatan wajib diisi.';
    } else if (!title) {
      errorMessage = 'Judul wajib diisi.';
    } else if (!body) {
      errorMessage = 'Isi catatan wajib diisi.';
    }

    if (errorMessage) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: errorMessage,
      });
      return;
    }

    const id = +new Date();
    const createdAt = new Date().toISOString();

    const newNote = {
      id,
      title,
      body,
      archived: false,
      createdAt,
    };

    onAddNote(newNote);

    setTitle('');
    setBody('');
    setRemainingCharacters(50);
  };

  return (
    <form className='add-note'>
      <input
        className='add-note__title'
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Masukkan judul catatan..."
      />
      <p>Karakter Tersisa: {remainingCharacters}</p>
      <textarea
        className='add-note__body'
        id="add-note__body"
        value={body}
        onChange={handleBodyChange}
        placeholder="Masukkan isi catatan..."
      />
      <button type="button" onClick={handleAddNote}>Tambah Catatan</button>
    </form>
  );
};

export default AddNotes;
