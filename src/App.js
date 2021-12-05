import './App.css';
import CheckList from './CheckList';

import DATA from './data'

function App() {
  return (
    <div className='App'>
      <CheckList data={DATA} />
    </div>
  );
}

export default App;
