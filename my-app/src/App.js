import './App.css';
import {React} from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Info from './components/Info/Info.js';
import Card from './components/Card/Card.js';

function App() {
  const stylesDiv = {
    backgroundColor: 'white', 
    justifyContent: '', 
    flexDirection: 'column', 
    alignItems: 'start', 
    BoxSizing: 'border-box', 
    margin: 0, 
    padding: 0,
  }

  const titles = [['Home', "https://www.google.com.br/"], ['Nossa historia', "https://www.google.com.br/"], ['Rede', "https://www.google.com.br/"], ['Trabalhe conosco', "https://www.google.com.br/"], ['Menu', "https://www.google.com.br/"]]
  
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
  
  return (
    <>
      <div style={stylesDiv}>
        <Header bgColor="black" links={titles} txtColor="white"></Header>
        <Main mainText="Senai Roberto Manshi"></Main>
        <Info infoText="Thats my text!" textColor="white" bgColor="black" textTitle="Informations"></Info>
        <Card img={images} bgColor="black"></Card>
      </div>
    </>
  );
}

export default App;

/*
  backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`,
*/
