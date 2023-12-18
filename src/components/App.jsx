import React, { useState } from 'react';
import { getInitialData } from '../utils';
import AppBar from './AppBar';
import ListNotes from './ListNotes';
import AddNotes from './AddNotes';
import FooterBar from './FooterBar';

const App = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleRemoveNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleArchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className='note-app'>
      <AppBar onSearch={handleSearch} />
      <div className='note-app__body'>
        <AddNotes onAddNote={handleAddNote} />
        <ListNotes
          notes={notes}
          onRemoveNote={handleRemoveNote}
          onArchiveNote={handleArchiveNote}
          searchKeyword={searchKeyword}
        />
      </div>
      <FooterBar />
    </div>
  );
};

export default App;