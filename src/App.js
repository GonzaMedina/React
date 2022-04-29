import './App.css';
import Componente from './Componentes/Componente';
import Propiedades from './Componentes/Propiedades';
// import Estado from './Componentes/Estado';
// import RenderizadoCondicional from './Componentes/RenderizadoComponente';
// import RenderizadoElementos from './Componentes/RenderizadoElementos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <Componente msg="Hola soy un Componente"></Componente> 
        <Propiedades>
        cadena="Esto es una cadena de texto" 
        numero = "19" 
        booleano = {true}
        arreglo = {[1,2,3]}
        objeto = {{nombre:"gonzalo", correo:"elgonzaexe@gmail.com"}}
        elementoReact = {<i>Esto es un elemento react</i>}
        </Propiedades> 
        <hr></hr>
        {/* <Estado></Estado>
        <hr></hr>
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr></hr>
        <RenderizadoElementos></RenderizadoElementos> */}
        </section>
      </header>
    </div>
  );
}

export default App;
