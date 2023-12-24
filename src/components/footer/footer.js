import React from 'react'
import styles from"./footer.module.css"
export const Footer = () => {
  return <div className={`text-center position-fixed bottom-0 w-100 bg-primary text-white ${styles.footer}`}>
    &copy; rights belongs to me.
  </div>
}
