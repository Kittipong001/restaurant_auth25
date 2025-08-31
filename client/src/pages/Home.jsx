import React,{useState, useEffect} from "react";
import Restaurants from "../Component/Restaurants";
import RestaurantService from "../service/restaurant.service";
import swal from "sweetalert2";


const Home = () => {
  const [restaurant,setRestaurants] = useState([]);
  const [filetedRestaurants,setFilteredRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    if(keyword ===""){
      setFilteredRestaurants(restaurant);
      return;
    }
    const result = restaurant.filter((restaurant)=>{
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
setFilteredRestaurants(result);
  };
  useEffect(()=>{
    const getAllRestaurants = async () =>{
      try {
        const response = await RestaurantService.getAllRestaurants();
        console.log(response);

        if (response.status === 200){
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      }catch (error) {
        swal.fire({
          title:"Get All Restaurants",
          text: error?.response?.data?.message || error.message
        });
      }
    };
    getAllRestaurants();
  },[]);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="titel-justify-center text-3xl text-center m-5 p-5">
          Grad Restaurant
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center">
        <label className="input flex item-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
          type="search" 
          name="keyword" 
          onChange={(e) => handleSearch(e.target.value)} 
          required 
          placeholder="Search" />
        </label>
      </div>
      <Restaurants restaurant={filetedRestaurants}/>
    </div>
  );
};

export default Home;