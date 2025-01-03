
const ResCard = (props) =>{
    const {rescard}= props
    const{name,cuisines,avgRatingString,costForTwo,cloudinaryImageId}= rescard.info
    return(
      <>
        <div className="res-card">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
          <h1>{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <h2>{costForTwo}</h2>
          <h2>{avgRatingString} Star</h2>
          
        </div>
      </>
    )
  }
  export default ResCard