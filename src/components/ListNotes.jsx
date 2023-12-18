import React from 'react';
import Swal from 'sweetalert2';
import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';

const ListNotes = ({ notes, onRemoveNote, onArchiveNote, searchKeyword }) => {
  const filteredNotes = searchKeyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : notes;

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  const handleRemoveNote = (note) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda akan menghapus catatan ini.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        onRemoveNote(note);
        Swal.fire('Sukses!', 'Catatan berhasil dihapus.', 'success');
      }
    });
  };

  const handleArchiveNote = (note) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda akan mengarsipkan catatan ini.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Arsipkan!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        onArchiveNote(note);
        Swal.fire('Sukses!', 'Catatan berhasil diarsipkan.', 'success');
      }
    });
  };

  if (filteredNotes.length === 0) {
    Swal.fire({
      title: 'Tidak Ada Catatan',
      text: 'Catatan yang Anda cari tidak ditemukan.',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  }

  return (
    <div>
      <ActiveNotes
        activeNotes={activeNotes}
        onRemoveNote={handleRemoveNote}
        onArchiveNote={handleArchiveNote}
      />
      <ArchiveNotes archivedNotes={archivedNotes} onArchiveNote={onArchiveNote} />
    </div>
  );
};

export default ListNotes;
