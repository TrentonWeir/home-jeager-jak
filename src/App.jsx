import './App.css'
import Index from './pages'
import Test from './pages/test';

function App() {
  //window.location.replace(new URL('https://github.com/TrentonWeir'));
  const isTest = !false;
  if(isTest){
    return(<Test/>)
  }
  return (
    <>
      <Index />
    </>
  )
}

export default App
