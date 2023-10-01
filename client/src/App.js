//  import logo from './logo.svg';
// import Quiz from './Quiz';
// import './App.css';
// import './Signup.css'
// import Signup from './Signup'
import Quiz  from './Quiz';
import register from './Register';
import Login  from './Login';
import Test from './Test';
import Pythontest from './Pythontest';
import Frontendtest from './Frontendtest'
import Home from './Home';
import './App.css'
import { Routes,Route } from 'react-router-dom';
// import Test from './Test';
// import Questions from './Questions';

function App() {
  return (
    <>
    {/* <Test/> */}
    {/* <Questions/> */}
     <Routes>
      <Route  path='/' Component={Quiz}/>
      <Route  path='/register' Component={register}/>
      <Route  path='/login' Component={Login}/>
      <Route path='/home' Component={Home}/>
      <Route path='/test' Component={Test}/>
      <Route path='/pythontest' Component={Pythontest}/>
      <Route path='/frontendtest' Component={Frontendtest}/>
     </Routes>
    </>
  );
}

export default App;
