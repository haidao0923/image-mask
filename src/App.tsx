import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

interface ImageProps {
  maskSrc: string;
}

function App() {
  const mask="https://static.vecteezy.com/system/resources/thumbnails/001/189/352/small/tree.png";
  const [natureString, setNatureString] = useState<number[]>([0,0,0,0,0]);
  const [objectString, setObjectString] = useState<number[]>([0,0,0,0,0]);
  const [animalString, setAnimalString] = useState<number[]>([0,0,0,0,0]);
  const [imageCount, setImageCount] = useState<number>(1);

  const Grid = styled.div<ImageProps>`
  display: grid;
  grid-template-columns: repeat(${imageCount == 4 ? 2 : imageCount}, 1fr);
  grid-template-rows: repeat(${imageCount == 4 ? 2 : 1}, 1fr);
  height: min(30vw, 60vh);
  mask-image: ${(p) => `url("${p.maskSrc}")`};
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  `;

  const StyledImage = styled.img`
    height: min(${imageCount == 4 ? 15 : 30}vw, ${imageCount == 4 ? 30 : 60}vh);
    width: min(${imageCount == 4 ? 15 : 30/imageCount}vw, ${imageCount == 4 ? 30 : 60/imageCount}vh);
  `;

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setImageCount(parseInt(newValue));
  };

  const randomizeImages = () => {
    const newNatureString: number[] = [Math.floor(Math.random() * 10),...Array.from({ length: 4 }, () => Math.floor(Math.random() * 14))];
    setNatureString(newNatureString);
    const newObjectString: number[] = [Math.floor(Math.random() * 11),...Array.from({ length: 4 }, () => Math.floor(Math.random() * 13))];
    setObjectString(newObjectString);
    const newAnimalString: number[] = [Math.floor(Math.random() * 10),...Array.from({ length: 4 }, () => Math.floor(Math.random() * 16))];
    setAnimalString(newAnimalString);
    console.log("Nature: " + newNatureString + "\nObject: " + newObjectString + "\nAnimal: " + newAnimalString);
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
        <div className='choice-group'>
            <div className='choice-text'>Image Count:</div>
            <select id="myDropdown" value={imageCount} onChange={handleDropdownChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button onClick={randomizeImages}>Randomize</button>
        </div>
        <p></p>
        <div className='image-container'>
          <Grid maskSrc={require(`./masks/Nature/${natureString[0]}.png`)}>
                {Array.from({length: imageCount}).map((_, index) => (
                  <StyledImage src={require(`./images/Nature/${natureString[index + 1]}.png`)}/>
                ))}
          </Grid>
          <Grid maskSrc={require(`./masks/Object/${objectString[0]}.png`)}>
                {Array.from({length: imageCount}).map((_, index) => (
                  <StyledImage src={require(`./images/Object/${objectString[index + 1]}.png`)}/>
                ))}
          </Grid>
          <Grid maskSrc={require(`./masks/Animal/${animalString[0]}.png`)}>
                {Array.from({length: imageCount}).map((_, index) => (
                  <StyledImage src={require(`./images/Animal/${animalString[index + 1]}.png`)}/>
                ))}
          </Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
