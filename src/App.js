import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';


function App() {
  return (
    <div>
      <Menu />

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-End? Trabalhando na área"}

      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />


    </div>


  );
}
//Tarefaaaaa
//Fazer o app colocando os componentes e importando-os

export default App;
