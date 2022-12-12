import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
 const [count, setCount] = useState(0);
  function myCount() {
    setCount(prevCount=> prevCount + 1);

  } 
  if (count>2) {
    throw new Error("Oops!! An Error occured")

  }
  return (
    <div className="Home">
      <div className="Welcome">
        Welcome To AddCart
        </div>
        <div className="About">
            <p>AddCart helps you connect with new people and collect their info.
              </p>
      </div>
      
      <button onClick={myCount}>Click Me Thrice</button>
      
      </div>
      
      
  );
}
 
export default Home;