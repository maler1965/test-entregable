
import './App.css';
import QuoteBox from './componets/QuoteBox';
import dbQuotes from "./db/quote.json";
import { getRandom } from './util/random'; //para utilizar el archivo random.js
import { useState } from 'react'; //para usar los estados


const bgImages = ["bg1", "bg4", "bg5", "bg7", "bg8", "bg9", "bg10"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes)) //este estado llama la funcion getRandom enviandole como parametro todo el array de la base de dato, y recibe como return solo un elemento del array de la base de datos
  const [bgImage, setbgImage] = useState(getRandom(bgImages)) // aqui, en vez de traer datos desde una base de datos, se usaria para guardar un estado del fondo del contenedor
  // getRandom  //llama a la funcion que esta en el archivo random.js para utilizarlo donde lo necesite


  const handleChangeQuote = () => { //funcion para cambiar el dato aleatorio por otro dato aleatorio
    setQuote(getRandom(dbQuotes)) // la funcion getRandom(dbQuotes) es la que hace el cambio aleatorio del indice del array y saca el elemnto de la base de dato que recibe como parametro
    setbgImage(getRandom(bgImages))
  } //se pasa esta funcion como un props al archivo componente QuoteBox.jsx para que lo utilice el boton con el evento click, o para que lo llame desde alla

  return (
    <main className={`app ${bgImage}`}>  {/* cada etiqueta es un cuadro en la pantalla, y este contenedor solo ocupa por defecto solo el espacio que necesite los hijos, los estilos no se estienden a toda la pagina. hay que poner una clase y ponerle min-height: 100vh*/}

      <section className='app__container' >

        <h1>The Universe</h1>

        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />  {/* todo el codigo que estaba aqui lo pasamos a un componente react aparte, y le pasamos los datos que necesitara en el nuevo archivo, por medio de un props, phrase obtiene el dato y en el otro archivo lo coge con ese dato*/}

        <footer>
          <h3> Author: {quote.author} </h3>
        </footer>

      </section>


    </main>
  )
}

export default App
