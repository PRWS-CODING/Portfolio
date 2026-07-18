import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');
  
  // This ref links our form directly to EmailJS
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setButtonText('Sending...');

    // Replace these three strings with your actual EmailJS keys!
    emailjs.sendForm(
      'service_5x17dw9', 
      'template_5vwoqzn', 
      form.current, 
      'gp6EdY0W2var1TvKE'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setButtonText('Sent!');
        form.current?.reset(); // Clear the form
        
        // Close the form automatically after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setButtonText('Send Message');
        }, 2000);
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        setButtonText('Failed. Try Again.');
      });
  };

  return (
    <>
      <button 
        className={styles.toggleButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Contact Form"
      >
        {isOpen ? '✕' : '✉'}
      </button>

      {isOpen && (
        <div className={styles.formContainer}>
          <h3 className={styles.header}>Let's Build Something</h3>
          
          {/* Note the ref={form} attached here */}
          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              {/* EmailJS looks at the name="" attribute, not the id! */}
              <input type="text" id="name" name="user_name" required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required className={styles.textarea} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {buttonText}
            </button>
            
          </form>
        </div>
      )}
    </>
  );
}