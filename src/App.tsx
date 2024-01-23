import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

interface ImageProps {
  maskSrc: string;
}

const Grid = styled.div<ImageProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  mask-image: ${(p) => `url("${p.maskSrc}")`};
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
`;

function App() {
  const mask="https://static.vecteezy.com/system/resources/thumbnails/001/189/352/small/tree.png";
  const [animalString, setAnimalString] = useState<number[]>([0,0,0,0,0]);

  const randomizeImages = () => {
    const newRandomNumbers: number[] = [Math.floor(Math.random() * 10),...Array.from({ length: 4 }, () => Math.floor(Math.random() * 16))];
    setAnimalString(newRandomNumbers);
    console.log("Animal: " + newRandomNumbers);
  };

  useEffect(() => {
    randomizeImages();
  }, [])

  return (
    <div className="App">
      <header className="background">
        {/*The font is Bodidly*/}
        <img className='title' src={require("./images/Logo2.png")}></img>
        <h2 className='description'>Randomly generate art matching a themed silhouette</h2>
        <button onClick={randomizeImages}>Randomize</button>
        <div className='image-container'>
          <Grid maskSrc={mask}>
                <img className='image' src={require("./images/Nature/0.png")}/>
                <img className='image' src={require("./images/Nature/1.png")}/>
                <img className='image' src={require("./images/Nature/2.png")}/>
                <img className='image' src={require("./images/Nature/3.png")}/>
          </Grid>
          <Grid maskSrc={require("./masks/Animal/2.png")}>
                <img className='image' src={require("./images/Nature/0.png")}/>
                <img className='image' src={require("./images/Nature/1.png")}/>
                <img className='image' src={require("./images/Nature/2.png")}/>
                <img className='image' src={require("./images/Nature/3.png")}/>
          </Grid>
          <Grid maskSrc={require(`./masks/Animal/${animalString[0]}.png`)}>
                <img className='image' src={require(`./images/Animal/${animalString[1]}.png`)}/>
                <img className='image' src={require(`./images/Animal/${animalString[2]}.png`)}/>
                <img className='image' src={require(`./images/Animal/${animalString[3]}.png`)}/>
                <img className='image' src={require(`./images/Animal/${animalString[4]}.png`)}/>
          </Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
