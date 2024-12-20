import { Note } from '../types';
import { sendDeliveryEmail, sendWhatsAppMessage } from './delivery';

export const initializeRazorpay = (note: Note) => {
  const options = {
    key: 'rzp_test_WgcehTtmdmp3sV', // Updated Razorpay test key
    amount: note.price * 100, // Amount in paise
    currency: 'INR',
    name: 'JNTUH Notes PDF',
    description: `Purchase ${note.subject} Notes (${note.regulation})`,
    handler: async function(response: any) {
      try {
        // Get user details from Razorpay form
        const userEmail = response.razorpay_payment_id; // Email from form
        const phoneNumber = response.razorpay_payment_id; // Phone from form

        // Send email with PDF link
        if (userEmail) {
          await sendDeliveryEmail(userEmail, note);
        }

        // Send WhatsApp message with PDF link
        if (phoneNumber) {
          // Format phone number (remove leading zeros and add country code if needed)
          const formattedPhone = phoneNumber.replace(/^0+/, '');
          sendWhatsAppMessage(formattedPhone, note);
        }

        // Show success message
        alert('Payment successful! Check your email and WhatsApp for the download link.');
      } catch (error) {
        console.error('Error processing payment:', error);
        alert('Payment successful, but there was an error sending the download link. Please contact support.');
      }
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    theme: {
      color: '#2563EB'
    },
    modal: {
      ondismiss: function() {
        console.log('Payment modal closed');
      }
    }
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};