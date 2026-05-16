"use client";

import { useState } from "react";
import styles from "./WhatsAppButton.module.css";

const WHATSAPP_NUMBER = "919882810053"; // +91 9882810053
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I would like to inquire about your environmental monitoring services. Please get in touch."
);

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
      aria-label="Chat with us on WhatsApp"
      id="whatsapp-float-btn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow ring */}
      <span className={styles.glowRing} />

      {/* Main pill button */}
      <span className={styles.pill}>
        {/* WhatsApp icon */}
        <span className={styles.iconWrap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              d="M24 4C12.954 4 4 12.954 4 24c0 3.556.937 6.906 2.572 9.8L4 44l10.476-2.527A19.916 19.916 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4Z"
              fill="#fff"
            />
            <path
              d="M34.57 29.492c-.463-.232-2.738-1.35-3.162-1.504-.424-.155-.732-.232-1.04.232-.309.463-1.194 1.504-1.464 1.813-.27.309-.54.347-1.003.115-.463-.232-1.956-.72-3.726-2.3-1.377-1.228-2.308-2.744-2.578-3.207-.27-.463-.029-.713.203-.944.208-.207.463-.54.694-.81.232-.27.309-.463.463-.772.155-.309.077-.578-.039-.81-.116-.232-1.04-2.508-1.425-3.435-.375-.9-.757-.779-1.04-.793-.27-.013-.578-.016-.886-.016-.309 0-.81.116-1.234.578-.424.463-1.619 1.582-1.619 3.86 0 2.277 1.657 4.477 1.888 4.786.232.309 3.26 4.977 7.9 6.978 1.103.476 1.963.76 2.634.972.768.24 1.468.207 2.022.126.617-.092 1.9-.778 2.168-1.53.27-.755.27-1.401.193-1.536-.077-.135-.309-.232-.772-.463Z"
              fill="#25D366"
            />
          </svg>
        </span>

        {/* Label — expands on hover */}
        <span className={`${styles.label} ${hovered ? styles.labelVisible : ""}`}>
          Chat with us
        </span>

        {/* Live dot */}
        <span className={styles.liveDot} />
      </span>
    </a>
  );
}
