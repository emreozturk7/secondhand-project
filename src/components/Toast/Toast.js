/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Toast.module.css';

const Toast = ({ toastList, position }) => {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
        toastList.map((toast, i) => (
          <div key={i} className={`${styles.notification} ${styles.toast}`} style={{ backgroundColor: toast.backgroundColor }}>
            <button>X</button>
            <div>
              <p className={styles.title}> {toast.title}</p>
              <p className={styles.description}> {toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>

  );
};
export default Toast;