import { Note } from '../types';

export const shareNote = async (note: Note) => {
  try {
    const shareUrl = `${window.location.origin}/notes/${note.id}`;
    
    if (navigator.share) {
      // Use Web Share API if available
      await navigator.share({
        title: note.subject,
        text: `Check out these ${note.subject} notes for ${note.branch} - ${note.regulation}`,
        url: shareUrl
      });
    } else {
      // Fallback to clipboard copy
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing:', error);
    alert('Failed to share. Please try again.');
  }
};