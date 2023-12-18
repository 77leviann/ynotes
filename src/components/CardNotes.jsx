import React from 'react';
import { showFormattedDate } from '../utils';

const CardNotes = ({ note, onRemoveNote, onArchiveNote }) => {
  return (
    <div className='card-note'>
      <div className='card-note__content'>
        <h3 className='card-note__tittle'>{note.title}</h3>
        <p className='card-note__date'>{showFormattedDate(note.createdAt)}</p>
        <p className='card-note__body'>{note.body}</p>
      </div>
      <div className='card-note__action'>
        <button className='card-note__delete-button' onClick={() => onRemoveNote(note.id)}>Remove</button>
        <button className='card-note__archive-button' onClick={() => onArchiveNote(note.id)}>
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        </div>
    </div>
  );
};

export default CardNotes;

