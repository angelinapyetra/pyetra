function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#fef6f9',
      height: '100vh',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#e91e63' }}>🧵 Pure Threads 🛍️</h1>
      <p style={{ fontSize: '1.3rem', color: '#444' }}>
        Bem-vinda à loja mais fofa da internet!
      </p>
      <button style={{
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#e91e63',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        marginTop: '20px',
        cursor: 'pointer'
      }}>
        Ver produtos
      </button>
    </div>
  );
}

export default App;
