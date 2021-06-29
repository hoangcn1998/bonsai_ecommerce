import { useState } from 'react';
import './App.css';
import Header from './components/Customer/Header';
import Menu from './components/Menu';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function onHandleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="App">
      <Header onHandleToggleMenu={onHandleToggleMenu} showMenu={showMenu} />
      <Menu showMenu={showMenu} onHandleToggleMenu={onHandleToggleMenu} />
    </div>
  );
}

export default App;
