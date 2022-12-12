import { useEffect } from "react";
import FetchUsers from "./FetchUsers";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Users = ({ person }) => {
  const navigate = useNavigate();
  console.log();


  return (
    <div className="users">
      <div className="userCard">
        <div className="card">
          <div className="cardfront">
            <figure className="picture">
              <img src={person.picture.large} alt={person.name.first} />

            </figure>
            <div className="userdetail">
              <div className="card-detail">
                <h4>Name:</h4>
                <h2>{`${person?.name.first} ${person?.name.last}`}</h2>
              </div>
              <div className="card-detail">
                <h4>Username:</h4>
                <h2>{person.login.username}</h2>
              </div>
              <div className="card-detail">
                <h4>Email:</h4>
                <h2>{person?.email}</h2>
              </div>
              <div className="card-detail">
                <h4>Phone:</h4>
                <h2>{person?.phone}</h2>
              </div>
            </div>
          </div>
          <div className="more">
             <Button onClick={() => navigate(`/users/${person?.location.city}`)}>
              Learn more
             </Button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Users;