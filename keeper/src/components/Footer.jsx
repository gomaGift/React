import React from "react";

function Footer() {
  const currentData = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright {currentData}</p>
    </footer>
  );
}

export default Footer;
