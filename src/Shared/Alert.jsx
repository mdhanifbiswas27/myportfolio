import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import resume from '../assets/My-resume.pdf';
const Alert = () => {
  const [showModal, setShowModal] = useState(true);

  const handleDownloadClick = () => {
    

    
    fetch(`${resume}`)
      .then((response) => response.blob())
      .then((blob) => {
        
        const url = window.URL.createObjectURL(blob);

       
        const a = document.createElement('a');
        a.href = url;
        a.download = 'My-resume.pdf';

       
        document.body.appendChild(a);
        a.click();

       
        document.body.removeChild(a);

       
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
       
      });
  };

  useEffect(() => {
   
    if (showModal) {
      Swal.fire({
        title: 'Welcome to My Portfolio',
        text: 'Click below to download my resume.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Download Resume',
        cancelButtonText: 'Close',
      }).then((result) => {
        if (result.isConfirmed) {
          
          handleDownloadClick();
        } else {
         
          setShowModal(false);
        }
      });
    }
  }, [showModal]);

  return null; 
};

export default Alert;