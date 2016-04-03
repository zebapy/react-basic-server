import React from 'react';
import { Link } from 'react-router';

function App(props) {
  return (
    <div>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default App;
