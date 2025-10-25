"use client";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Pretendard, sans-serif",
        backgroundColor: "#f8f5f1",
        color: "#3a2f27",
        minHeight: "100vh",
        margin: 0,
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          background: "#fff",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#2c1f0d",
            marginBottom: "20px",
          }}
        >
          S·WOOD Atelier
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#6b5c4a",
            marginBottom: "40px",
          }}
        >
          자연을 담은 수공예의 미학
          <br />
          감성과 정성이 깃든 원목 작품
        </p>

        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "#3a2f27",
              borderBottom: "2px solid #c7b198",
              paddingBottom: "4px",
            }}
          >
            공방소개
          </a>
          <a
            href="#works"
            style={{
              textDecoration: "none",
              color: "#3a2f27",
              borderBottom: "2px solid #c7b198",
              paddingBottom: "4px",
            }}
          >
            작품보기
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#3a2f27",
              borderBottom: "2px solid #c7b198",
              paddingBottom: "4px",
            }}
          >
            문의하기
          </a>
        </nav>
      </section>

      <footer
        style={{
          marginTop: "60px",
          fontSize: "0.9rem",
          color: "#9a8f85",
        }}
      >
        © 2025 S·WOOD Atelier. All Rights Reserved.
      </footer>
    </main>
  );
}
