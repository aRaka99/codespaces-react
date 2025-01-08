import ResCard from "./ResCard"
import resList from "../constant/constant"
import { useState } from "react"


const Body = () => {
  const [List, setList] = useState(resList)
  const [SearchTerm, setSearchTerm] = useState("")

  const filterTopRated = () => {
    const filterList = List.filter((x) => {
      return (
        x.info.avgRatingString > 4.5
      )
    }
    ); // Ensure filter logic is correct
    setList(filterList);
    console.log(filterList); // Debugging output
  };

  const rest = () => {
    setList(resList)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    const searchList = resList.filter((x) =>
      x.info.name.toLowerCase().includes(event.target.value.toLowerCase())
  
    );
    setList(searchList);

  }

  return (
    <>
      <input type="text" placeholder="Search..." value={SearchTerm} onChange={handleSearch} />
      <button className="top-btn" onClick={filterTopRated}>Top Rated</button>
      <button className="rst-btn" onClick={rest}>Reset</button>



      <div className="res-container">
        {
          List.map((x) => {
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