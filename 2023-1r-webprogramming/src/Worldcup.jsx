import { useCallback, useEffect, useState } from 'react';
import p01 from './assets/image/눈꽃소다.jpg';
import p02 from './assets/image/데미소다.jpg';
import p03 from './assets/image/딸기에몽.jpg';
import p04 from './assets/image/딸기우유.jpg';
import p05 from './assets/image/밀키스.jpg';
import p06 from './assets/image/비락식혜.jpg';
import p07 from './assets/image/사이다.jpg';
import p08 from './assets/image/이슬톡톡.jpg';
import p09 from './assets/image/초코우유.jpg';
import p10 from './assets/image/칸타타.jpg';
import p11 from './assets/image/커피우유.jpg';
import p12 from './assets/image/케토레이.jpg';
import p13 from './assets/image/코카콜라.jpg';
import p14 from './assets/image/코코팜.jpg';
import p15 from './assets/image/파워에이드.jpg';
import p16 from './assets/image/피크닉.jpg';
import './Worldcup.css'
  
function worldcup() {
  const candidate = [
    {name:'눈꽃소다', src:p01},
    {name:'데미소다', src:p02},
    {name:'딸기에몽', src:p03},
    {name:'딸기우유', src:p04},
    {name:'밀키스', src:p05},
    {name:'비락식혜', src:p06},
    {name:'사이다', src:p07},
    {name:'이슬톡톡', src:p08},
    {name:'초코우유', src:p09},
    {name:'칸타타', src:p10},
    {name:'커피우유', src:p11},
    {name:'게토레이', src:p12},
    {name:'코카콜라', src:p13},
    {name:'코코팜', src:p14},
    {name:'파워에이드', src:p15},
    {name:'피크닉', src:p16},
  ];

  const [game, setGame] = useState([]); 
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [selectedImage1, setSelectedImage1] = useState(false);
  const [selectedImage2, setSelectedImage2] = useState(false);

  useEffect(() => {
    setGame(candidate.map(c => {
      return {name: c.name, src : c.src, order:Math.random()}
    }).sort((l,r) => {
      return l.order -r.order;
    }));
  },[]);

  useEffect(() => {
    if(game.length>1 && round + 1 >game.length / 2) {
      setGame(nextGame);
      setNextGame([]);
      setRound(0);
    }
  }, [round])

  useEffect(() => {
    if (selectedImage1) {
      const images = document.getElementsByClassName('img2')
      images[0].style.opacity = 0;
  
      setTimeout(() => {
        setSelectedImage1(false);
        images[0].style.opacity = 1;
      }, 3000);
    }
  }, [selectedImage1]);

  useEffect(() => {
    if (selectedImage2) {
      const images = document.getElementsByClassName('img1')
      images[0].style.opacity = 0;
  
      setTimeout(() => {
        setSelectedImage2(false);
        images[0].style.opacity = 1;
      }, 3000);
    }
  }, [selectedImage2]);

  if(game.length === 1) {
    return <div className='box'>
      <p className='title'>이상형 월드컵 우승</p>
      <div className='box image final'>
        <img src={game[0].src}/> 
      </div>
      <div className='description final'>
        <p>{game[0].name}</p>
      </div>
    </div>
  }

  if(game.length === 0 || round +1 > game.length /2 ) return <p>로딩중입니다</p>;
  return <div className='box'>
    <p className='title'>음료수 월드컵!! {round +1} /{game.length / 2} <b>{game.length === 2 ? '결승' :game.length+'강'}</b> </p>
    <div className='box image'>
      <img className='img1' src={game[round *2].src} onClick={() => {
        setSelectedImage1(true)
        setTimeout(() =>{
          setNextGame((prev) => prev.concat(game[round * 2]))
          setRound(round => round +1);
        }, 3000)
      }} />

      <img className='img2' src={game[round *2 + 1].src} onClick={() => {
        setSelectedImage2(true)
        setTimeout(() =>{
          setNextGame((prev) => prev.concat(game[round * 2 + 1]))
          setRound(round => round +1);
        }, 3000)
      }}/>
    </div>
    <div className='description'>
      <p>{game[round*2].name}</p>
      <p>{game[round*2+1].name}</p>
    </div>
    
  </div>
}

export default worldcup;