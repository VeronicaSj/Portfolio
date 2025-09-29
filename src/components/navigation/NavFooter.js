import React from 'react';
import ReactDOM from 'react-dom/client';

function NavFooter() {
    const footerStyle = {
        width: "100%",
        padding: "20px 0",
        backgroundColor: "var(--clr-funct-high-light-1)",
        color: "var(--clr-funct-font)",
        textAlign: "center",
        fontSize: "16px",
    };

  return (
    <footer style={footerStyle}>
        <p>&copy; 2025 Veronica Sanchez Justicia - All rights reserved.</p>
    </footer>
  );
}

export default NavFooter;