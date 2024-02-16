import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
      <div className='app'>
        <NavBar />
        <ItemListContainer greeting={'Bienvenmidos'} />
      </div>
  )
}

export default App;
