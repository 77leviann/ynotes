import React, { useState } from 'react';
import SearchNotes from './SearchNotes';

const AppBar = ({ onSearch }) => {
  return (
    <header className='note-app__header'>
      <h1 className='note-app__brand'>YNotes</h1>
      <SearchNotes onSearch={onSearch} />
    </header>
  );
};

export default AppBar;
