import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Store } from './Store';

function App(props) {
  const { state } = useContext(Store);

  return (
    <>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episodes</p>
        </div>
        <div>
          <Link to='/'>Home</Link>{' '}
          <Link to='/faves'>favorite(s) {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
export default App;
