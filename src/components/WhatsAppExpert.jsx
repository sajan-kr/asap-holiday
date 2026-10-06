import React from "react";
import "./WhatsAppExpert.css";

const WhatsAppExpert = () => {
  const phoneNumber = "919205129996";

  const message = encodeURIComponent(
    "Hi ASAP Holidays, I would like to speak with a travel expert."
  );

  return (
    <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="whatsapp-expert"
      aria-label="Talk to an ASAP Holidays travel expert">
      {/* Pulse */}
      <span className="whatsapp-pulse"></span>
      {/* WhatsApp Icon */}
      <span className="whatsapp-expert-icon">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="currentColor" d="M19.11 17.33c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.58-.65 1.8-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path fill="currentColor" d="M16.02 3.2C9.04 3.2 3.36 8.88 3.36 15.86c0 2.22.58 4.38 1.68 6.28L3.2 28.8l6.83-1.79a12.61 12.61 0 0 0 5.99 1.52h.01c6.98 0 12.66-5.68 12.66-12.66S23 3.2 16.02 3.2zm0 23.06h-.01a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-4.05 1.06 1.08-3.95-.25-.4a10.42 10.42 0 1 1 8.91 4.97z" />
        </svg>
      </span>
      {/* Text */}
      <span className="whatsapp-expert-content">
        <small>Need help?</small>
        <strong>Talk to an Expert</strong>
      </span>

      {/* Arrow */}
      <span className="whatsapp-expert-arrow">
        →
      </span>
    </a>
  );
};

export default WhatsAppExpert;