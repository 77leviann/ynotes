import React from 'react';
import CardNotes from './CardNotes';

const ArchiveNotes = ({ archivedNotes, onArchiveNote }) => {
  return (
    <div className='notes-list'>
      <div className='notes-list__title'>
        <h2>Catatan Diarsiapkan</h2>
      </div>
      <div className='notes-list__item'>
        {archivedNotes.length === 0 ? (
          <p className='notes-list__empty-message'>Tidak ada catatan yang Diarsiapkan.</p>
        ) : (
          archivedNotes.map((note) => (
            <CardNotes key={note.id} note={note} onArchiveNote={onArchiveNote} />
          ))
        )}
      </div>
    </div>
  );
};

export default ArchiveNotes;
