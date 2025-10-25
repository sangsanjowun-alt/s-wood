export default function Home() {
  return (
    <main style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f1ed',
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2c2c2c' }}>S·WOOD Atelier</h1>
      <p style={{ color: '#6f6f6f', marginTop: '10px' }}>
        자연을 담은 수공예의 미학
      </p>
    </main>
  )
}
