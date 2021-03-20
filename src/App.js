import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div
        style={{
          background: 'hsl(195deg, 20%, 86%)',
          width: '100%',
          height: '40vh',
          position: 'fixed',
          bottom: '0',
          zIndex: '-1',
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
