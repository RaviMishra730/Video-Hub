// import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Youtube from './components/Youtube';
function App() {
  return (
    <Router>
      <Header/>
      {/* <Button colorScheme={'whatsapp'}>click me</Button> */}
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/Videos' element = {<Videos/>} />
        <Route path = '/Upload' element = {<Upload/>} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = '/SignUp' element = {<SignUp/>} />
        <Route path = '/Youtube' element = {<Youtube/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
