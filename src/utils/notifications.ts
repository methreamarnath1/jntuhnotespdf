interface ThankYouMessageProps {
  subject: string;
  branch: string;
  regulation: string;
  pdfUrl: string;
}

export const showThankYouMessage = (props: ThankYouMessageProps) => {
  const message = `
    Thank you for purchasing ${props.subject} notes!
    
    Details:
    - Subject: ${props.subject}
    - Branch: ${props.branch}
    - Regulation: ${props.regulation}
    
    Your PDF has been downloaded to your computer.
    Backup download link: ${props.pdfUrl}
    
    For support, contact: jntuhnotespdf@gmail.com
  `;

  alert(message);
};