import ResCard from "./ResCard"
import resList from "../constant/constant"
const Body = () => {
    return (
      <>
        <div className="res-container">
          {
            resList.map((x)=>{
              return (
                <>
                  <ResCard rescard={x} />
                </>
              )
            })
          }
        </div>
      </>
    )
  }
  export default Body