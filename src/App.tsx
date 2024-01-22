import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

interface ImageProps {
  maskSrc: string;
}

const Image = styled.img<ImageProps>`
  mask-image: ${(p) => `url("${p.maskSrc}")`};
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const Quadrant = styled.div<{ position: string }>`
  position: absolute;
  width: 50%;
  height: 50%;
  overflow: hidden;

  ${(props) => {
    switch (props.position) {
      case 'top-left':
        return `
          top: 0;
          left: 0;
        `;
      case 'top-right':
        return `
          top: 0;
          left: 50%;
        `;
      case 'bottom-left':
        return `
          top: 50%;
          left: 0;
        `;
      case 'bottom-right':
        return `
          top: 50%;
          left: 50%;
        `;
      default:
        return '';
    }
  }}
`;

const Layout = styled.div`
  padding: 2rem;
`;

function App() {
  const image="https://images.unsplash.com/photo-1655043126269-d93dc7917a1e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU5Mzc4ODU&ixlib=rb-1.2.1&q=80";
  const mask="https://static.vecteezy.com/system/resources/thumbnails/001/189/352/small/tree.png";

  return (
    <div className="App">
      <header className="App-header">
        <div className='image-container'>
          <Grid>
              <Quadrant position="top-left">
                <Image src={require("./images/Nature/0.png")} maskSrc={mask} />
              </Quadrant>
              <Quadrant position="top-right">
                <Image src={require("./images/Nature/0.png")} maskSrc={mask} />
              </Quadrant>
          </Grid>
        </div>

      </header>
    </div>
  );
}

export default App;
