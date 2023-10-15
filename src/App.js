
import { Heading } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import SetScheme from './Components/SetScheme';
import { useState } from 'react';

function App() {
  const [scheme, setScheme] = useState({
    "A+" : 4,
    "A" : 4,
    "A-" : 3.7,
    "B+" : 3.3,
    "B" : 3,
    "B-" : 2.7,
    "C+" : 2.3,
    "C" : 2,
    "C-" : 1.9,
    "D+" : 1.7,
    "D-" : 1.5,
    "F" : 0
  })

  return (
    <div className="App">
      <Navbar/>
      <Heading w={'100vw'} textAlign={'center'} p={15} mt={5} size={'2xl'} as={'h1'}>Grade Calculator</Heading>
      <Routes >
        <Route path='/' element={<Main scheme={scheme}/>}/>
        <Route path='/setscheme' element={<SetScheme scheme={scheme} setScheme={setScheme}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
