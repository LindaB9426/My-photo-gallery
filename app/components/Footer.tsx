"use client";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px 0",
        
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        Trip to Croatia. All rights reserved © {new Date().getFullYear()}
      </p>
    </footer>
  );
}