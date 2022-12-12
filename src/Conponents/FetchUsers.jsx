import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Users from "./Users";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    // console.log(setUsers)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
           console.log(data.results)
          setLoading(false);
          setUsers(data.results);
        });
    }, []);
    return (
            
          <div className="loading">
            {loading?
              <h1>Loading...</h1>:
              <Pagination
            data={users}
            pageLimit={5}
            dataLimit={12}
            RenderComponent={Users}
          />}
          </div>
    );
};


export default FetchUsers;
