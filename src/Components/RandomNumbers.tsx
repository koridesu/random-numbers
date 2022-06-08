import { CSSProperties, useEffect, useState } from 'react';

function RandomNumbers() {
  const [isFade, setIsFade] = useState<boolean>(false);
  if (isFade) {

  }
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  const [num, setNum] = useState<number>(randomNumber);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const fontSize = Math.floor(Math.random() * 100) + 30;
  const x = Math.floor(Math.random() * 1400) + 1;
  const y = Math.floor(Math.random() * 1080) + 1;

  const [css, SetCss] = useState<CSSProperties>({
    color: '#' + randomColor,
    fontSize: fontSize,
    position: 'absolute',
    left: x,
    top: y,
  });

  useEffect(() => {
    fadeOut();

  }, [isFade]);

  const fadeOut = async () => {
    const displayTime = Math.floor(Math.random() * 10000) + 4000;

    await new Promise(function () {
      setTimeout(function () {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        setCssStyle();
        setIsFade(!isFade);
      }, displayTime);
    });
  };

  const setCssStyle = async () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const fontSize = Math.floor(Math.random() * 100) + 30;
    const x = Math.floor(Math.random() * 1400) + 1;
    const y = Math.floor(Math.random() * 1080) + 1;
    let cssStyle = {
      color: '#' + randomColor,
      fontSize: fontSize,
      position: 'absolute',
      left: x,
      top: y,
    } as CSSProperties;


    if (isFade) {
      await new Promise(function () {
        setTimeout(function () {
          setNum(randomNumber);
          SetCss(cssStyle);
        }, 3000);
      });
    }
  }


  return <div style={css} className={isFade ? 'fade-in' : 'fade-out'}>
    {num}
  </div>
}

export default RandomNumbers;
