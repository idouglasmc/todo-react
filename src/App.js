import logo from './logo.svg';
import './App.css';
import ClassComponent from './Componentes/primeraclase/ClassComponet';
import { FunctionComponent } from './Componentes/primeraclase/FunctionComponet';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionComponent/>
    </div>
  );
}

export default App;
