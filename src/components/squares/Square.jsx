import "./squares.css";

export function Square() {
  const getRandomRGB = () => Math.floor(Math.random() * 255);

  const getRandomColor = () => {
    const red = getRandomRGB();
    const green = getRandomRGB();
    const blue = getRandomRGB();

    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <div className='square' style={{ backgroundColor: getRandomColor() }}></div>
  );
}
