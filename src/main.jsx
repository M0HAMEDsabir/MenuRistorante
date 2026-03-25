import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react'
import { listaRicette } from './ricette.js'


function ListaRicette() {

  
  const [likes, setLikes] = useState({});
  const like = (id) => {
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }
  const dislike = (id) => {
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
  }

  return (
    <div>
      <h1>Ricette Italiane</h1>
      <div className="ricette-container">
        {listaRicette.map((ricetta) => (
          <div key={ricetta.id} className="ricetta">
            <h2>{ricetta.nome}</h2>
            <p> <strong>Descrizione:</strong>  {ricetta.descrizione}</p>
            <img src={ricetta.immagine} alt={ricetta.nome} style={{ width: '300px', height: '200px' }} />
            <button onClick={() => like(ricetta.id)} disabled={ricetta.numeroDiMiPiace + (likes[ricetta.id] || 0) >= 50}>
              {ricetta.numeroDiMiPiace + (likes[ricetta.id] || 0) >= 50 ? "Disabilitato" : "Like"}
            </button>

              <button onClick={() => dislike(ricetta.id)} disabled={ricetta.numeroDiMiPiace + (likes[ricetta.id] || 0) <= 0}>
              {ricetta.numeroDiMiPiace + (likes[ricetta.id] || 0) <= 0 ? "Disabilitato" : "Dislike"}
              </button>
            <span>{ricetta.numeroDiMiPiace + (likes[ricetta.id] || 0)} Mi Piace</span>
          </div>
        ))}
      </div>
    </div>  
  )

}

const ricetteApp = createRoot(document.getElementById('root'));
ricetteApp.render( <ListaRicette /> )
