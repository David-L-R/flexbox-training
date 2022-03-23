export function Squares() {
  const getRandomRGB = () => Math.floor(Math.random() * 255);

  const getRandomColor = () => {
    const red = getRandomRGB();
    const green = getRandomRGB();
    const blue = getRandomRGB();

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className='page'>
      <div className='square-container'>
        <div
          className='square'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className='square'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className='square'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
      </div>
      <div className='main-container flex center'>
        <div
          className='square'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
      </div>
    </div>
  );
}
