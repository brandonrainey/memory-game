import React, { useState } from 'react';
import './App.css';
import ES1 from './images/ES1.jpg';
import ES2 from './images/ES2.jpg';
import ES3 from './images/ES3.jpg';
import ES4 from './images/ES4.jpg';
import ES5 from './images/ES5.jpg';
import ES6 from './images/ES6.jpg';
import ES7 from './images/ES7.jpg';
import ES8 from './images/ES8.jpg';
import ES9 from './images/ES9.jpg';
import ES10 from './images/ES10.jpg';
import ES11 from './images/ES11.jpg';
import ES12 from './images/ES12.jpg';


const App = () => {
const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const [score, setScore] = useState([]);
const [highScore, setHighScore] = useState(0);


const pics = [ES1, ES2, ES3, ES4, ES5, ES6, ES7, ES8, ES9, ES10, ES11, ES12];
const image = 'image';

shuffle(squares);

  function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
    let newSquares = [...array];

  return newSquares;
  }


  const shiftSquares = (e) => {
    
    
    if (!score.includes(e.target.classList[0])) {
      setScore(prevArray => [...prevArray, e.target.classList[0]]);
    } else {
      setScore([]);
    }

  

    setSquares(() => shuffle(squares));

    if (score.length >= highScore) {
      setHighScore(() => score.length)
    }
console.log(score)
    
  };
  

  return (
    <div >

      <div className='title'>Memory Game</div>

      <div className='leftside'></div>
      <div className='rightside'>
        <div className='scoreboard'>Score: {score.length}</div>
        <div className='highscore'>High Score: {highScore}</div>
      </div>

      
    <div className='wrapper'>
    <div className='container'>
      <div  >
      <img className={`${squares[0]} ${image}`} onClick={shiftSquares} src={pics[squares[0]]} height='400' width='180' alt='img1'/>
      </div>

      <div  >
      <img className={`${squares[1]} ${image}`} onClick={shiftSquares} src={pics[squares[1]]} height='400' width='180' alt='img2'/>
      </div>

      <div  >
      <img className={`${squares[2]} ${image}`} onClick={shiftSquares} src={pics[squares[2]]} height='400' width='180' alt='img3'/>
      </div>

      <div  >
      <img className={`${squares[3]} ${image}`} onClick={shiftSquares} src={pics[squares[3]]} height='400' width='180' alt='img4'/>
      </div>

      <div  >
      <img className={`${squares[4]} ${image}`} onClick={shiftSquares} src={pics[squares[4]]} height='400' width='180' alt='img5'/>
      </div>

      <div  >
      <img className={`${squares[5]} ${image}`} onClick={shiftSquares} src={pics[squares[5]]} height='400' width='180' alt='img6'/>
      </div>

      <div  >
      <img className={`${squares[6]} ${image}`} onClick={shiftSquares} src={pics[squares[6]]} height='400' width='180' alt='img7'/>
      </div>

      <div  >
      <img className={`${squares[7]} ${image}`} onClick={shiftSquares} src={pics[squares[7]]} height='400' width='180' alt='img8'/>
      </div>

      <div  >
      <img className={`${squares[8]} ${image}`} onClick={shiftSquares} src={pics[squares[8]]} height='400' width='180' alt='img9'/>
      </div>

      <div  >
      <img className={`${squares[9]} ${image}`} onClick={shiftSquares} src={pics[squares[9]]} height='400' width='180' alt='img10'/>
      </div>

      <div  >
      <img className={`${squares[10]} ${image}`} onClick={shiftSquares} src={pics[squares[10]]} height='400' width='180' alt='img11'/>
      </div>

      <div  >
      <img className={`${squares[11]} ${image}`} onClick={shiftSquares} src={pics[squares[11]]} height='400' width='180' alt='img12'/>
      </div>
    </div>
    </div>
  </div>
  );
}

export default App;
