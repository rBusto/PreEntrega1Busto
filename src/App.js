import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Portada from './components/portada/Portada';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/paginas/Inicio';


function App() {
  return (
      <Router>

        <Portada />
        <Navbar />
        <Inicio />
        <ItemListContainer texto='Ramiro' />


      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      <MostrarNombre />
      </Router>
  );
}

const MostrarNombre = () => {
  return <h1>Ramiro</h1>
}

export default App;
