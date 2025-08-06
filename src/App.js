import React from 'react';
import './App.css';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <footer style={{
        background: 'linear-gradient(90deg, #B91B54 0%, #8938D8 100%)',
        color: '#fff',
        textAlign: 'center',
        padding: '24px 0',
        marginTop: '48px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        letterSpacing: '1px'
      }}>
        &copy; {new Date().getFullYear()} Bihari Ji & Sons Tent House. Developed by Anand Prakash.
      </footer>
    </div>
  );
}

export default App;