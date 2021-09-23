import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from '../src/AppUI'

// import './App.css';

// const defaultTodos = [
//   { text: 'Bienvenido a TODODist', completed: false },
//   { text: 'Anota aquí tus metas', completed: true },
//   { text: 'Y conviertelas en logros!!', completed: false }
// ];




function App () {
  
  // ----UI---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
