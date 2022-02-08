import destinations from "../data/destinations.json"

export function Destinations(){

  return (
    <>
      <div className="destinationsTitle">
        <h1 style={{marginRight: "35%"}}>Our Destinations</h1>
       <p> 🔍 <input type="search"/></p>
      </div>
      {!destinations && "Loading"}
      <div className="displayDestinations">
        {destinations.map(item => {
          return (
            <div className="destinationCard" key={item.id}>
              <img src={item.imageUrl}/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}