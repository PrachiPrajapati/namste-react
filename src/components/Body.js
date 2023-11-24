import Search from './Search'
import Restaurantscard from './Restaurantscard'
import { useState ,useEffect } from 'react'
import Shimmer from './Shimmer'
const Body = () => {
    const [resList,setResList] = useState([]);
    const [filterRes,setFilterRes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetchdata();
    }, [])
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = resList.filter((item) =>
          item.info.name.toLowerCase().includes(value.toLowerCase())
        );
            setFilterRes(filtered);
      };
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0283064&lng=72.4993918&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(resList.length === 0) {
        return <Shimmer />
    }
    return resList.length === 0 ? <Shimmer /> : (
       <>
        <div className="container">
            <div className="header-bottom-menu">
                <Search handleSearch={handleSearch} searchTerm = {searchTerm} />
                <button onClick = {() => { resfilterList = resList.filter((res) => res.info.avgRating > 4); setResList(resfilterList); console.log(resfilterList);} } className="filter-btn">Top Rated Restaurants</button>
            </div>
        </div>
        <div className="container">
            <div className="res-container">
                {
                    filterRes.map((restaurants) => {
                        return <Restaurantscard key={restaurants.info.id} {...restaurants.info}/>
                    })
                }
            </div>
        </div>
       </>
    );
}
export default Body