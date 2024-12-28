import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../types';
import { Head } from '../components/SEO/Head';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { PDFViewer } from '../components/PDFViewer';
import { AdUnit } from '../components/AdUnit';

export const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setIsLoading(true);
        // Replace this with your actual data fetching logic
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const foundNote = notes.find((n: Note) => n.id === id);
        
        if (foundNote) {
          setNote(foundNote);
        } else {
          setError('Note not found');
        }
      } catch (err) {
        setError('Failed to load note');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">{error || 'Note not found'}</h2>
          <p className="text-gray-400">The note you're looking for might have been removed or doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title={`${note.subject} - JNTUH Notes PDF`}
        description={`Download ${note.subject} notes for ${note.branch} - ${note.regulation}`}
      />

      <AdUnit slot="2468013579" />

      <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-4">{note.subject}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
            {note.branch}
          </span>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            {note.year} Year
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
            {note.regulation}
          </span>
        </div>

        <p className="text-gray-300 mb-8">{note.description}</p>

        {note.pdfUrl && (
          <div className="mt-8">
            <PDFViewer url={note.pdfUrl} onClose={() => {}} />
          </div>
        )}
      </div>

      <AdUnit slot="3579246801" format="horizontal" />
    </div>
  );
};