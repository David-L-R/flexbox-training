import destinations from "../data/destinations.json";

export function Destinations() {
  return (
    <>
      <div className='destinations-title'>
        <div className='empty'></div>
        <h1>Our Destinations</h1>
        <div className='input-container'>
          🔍 <input type='search' />
        </div>
      </div>
      {!destinations && "Loading"}
      <div className='display-destinations'>
        {destinations.map((item) => {
          return (
            <div className='destination-card' key={item.id}>
              <img src={item.imageUrl} />
              <div className="destination-card-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
