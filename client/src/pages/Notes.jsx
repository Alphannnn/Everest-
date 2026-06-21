import { useEffect, useState } from 'react';
import {
  fetchNotes,
  createNote,
  deleteNote,
} from '../services/notes.service';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadNotes = async () => {
    try {
      setError('');
      const data = await fetchNotes();
      setNotes(data);
    } catch (err) {
      setError('Could not reach the API. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const note = await createNote({ title: title.trim() });
      setNotes((prev) => [note, ...prev]);
      setTitle('');
    } catch {
      setError('Failed to create note.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch {
      setError('Failed to delete note.');
    }
  };

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-2xl font-bold">Notes</h1>
      <p className="mt-1 text-sm text-slate-500">
        A live CRUD demo: React → Express → MongoDB.
      </p>

      <form onSubmit={handleAdd} className="mt-6 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a note…"
          className="flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="rounded-md bg-sky-600 px-4 py-2 font-medium text-white transition-colors hover:bg-sky-700"
        >
          Add
        </button>
      </form>

      {error && (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <ul className="mt-6 space-y-2">
        {loading ? (
          <li className="text-slate-500">Loading…</li>
        ) : notes.length === 0 ? (
          <li className="text-slate-500">No notes yet — add one above.</li>
        ) : (
          notes.map((note) => (
            <li
              key={note._id}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3"
            >
              <span>{note.title}</span>
              <button
                onClick={() => handleDelete(note._id)}
                className="text-sm font-medium text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default Notes;
