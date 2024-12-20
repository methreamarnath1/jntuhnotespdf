import { Note } from '../types';

// Function to send email using EmailJS
export const sendDeliveryEmail = async (
  userEmail: string,
  note: Note
) => {
  const templateParams = {
    to_email: userEmail,
    subject: note.subject,
    download_link: note.pdfUrl,
    regulation: note.regulation,
    branch: note.branch,
    year: note.year,
    semester: note.semester
  };

  try {
    await emailjs.send(
      'service_vcpzxtx',
      'template_4xxraof',
      templateParams,
      'OGy0okoUIrjVhFj1v'
    );
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Function to send WhatsApp message using WhatsApp API
export const sendWhatsAppMessage = (phoneNumber: string, note: Note) => {
  // Format the message
  const message = encodeURIComponent(
    `Thank you for purchasing ${note.subject} notes!\n\n` +
    `Branch: ${note.branch}\n` +
    `Year: ${note.year}\n` +
    `Semester: ${note.semester}\n` +
    `Regulation: ${note.regulation}\n\n` +
    `Download your PDF here: ${note.pdfUrl}\n\n` +
    `For support, email us at jntuhnotespdf@gmail.com`
  );
  
  // Generate WhatsApp deep link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
};