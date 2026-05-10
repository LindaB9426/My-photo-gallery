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
        © {new Date().getFullYear()} Trip to Croatia. All rights reserved.
      </p>
    </footer>
  );
}