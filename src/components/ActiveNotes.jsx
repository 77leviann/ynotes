import React from 'react';
import CardNotes from './CardNotes';

const ActiveNotes = ({ activeNotes, onRemoveNote, onArchiveNote }) => {
  return (
    <div className='notes-list'>
        <div className='notes-list__tittle'>
            <h2>Catatan Aktif</h2>
        </div>
        <div className='notes-list__item'>
            {activeNotes.length === 0 ? (
            <p className='notes-list__empty-message'>Tidak ada catatan Aktif</p>
        ) : (
            activeNotes.map((note) => (
            <CardNotes
                key={note.id}
                note={note}
                onRemoveNote={onRemoveNote}
                onArchiveNote={onArchiveNote}
            />
            ))
        )}
        </div>
    </div>
  );
};

export default ActiveNotes;
