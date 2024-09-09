import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, show, onClose, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose(); // Optional callback to handle state
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.toastContainer} ${!show ? styles.hide : ''}`}>
      <span className={styles.toastMessage}>{message}</span>
      <button className={styles.toastClose} onClick={() => setIsVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
