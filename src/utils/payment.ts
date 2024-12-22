import { Note } from '../types';
import { generatePDF, downloadPDF } from './pdfGenerator';
import { showThankYouMessage } from './notifications';

export const initializeRazorpay = (note: Note) => {
  const options = {
    key: 'rzp_test_WgcehTtmdmp3sV',
    amount: note.price * 100,
    currency: 'INR',
    name: 'JNTUH Notes PDF',
    description: `Purchase ${note.subject} Notes (${note.regulation})`,
    handler: async function(response: any) {
      try {
        if (response.razorpay_payment_id) {
          // Generate and download PDF
          const pdfBlob = await generatePDF(note);
          const filename = `${note.subject}_${note.regulation}_${note.branch}.pdf`;
          downloadPDF(pdfBlob, filename);

          // Show thank you message
          showThankYouMessage({
            subject: note.subject,
            branch: note.branch,
            regulation: note.regulation,
            pdfUrl: note.pdfUrl
          });
        }
      } catch (error) {
        console.error('Error processing payment:', error);
        alert('Payment successful, but there was an error downloading the PDF. Please contact support.');
      }
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    theme: {
      color: '#2563EB'
    }
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};