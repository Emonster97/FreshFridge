import { useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import {useNavigate} from "react-router-dom";

export default function Info() {
  const { user, logout, setUser } = useContext(authContext);
  const location = useNavigate();

  function onLogout() {
    logout();
    location("/");
  }

  function heightChange(event) {
    let value = event.target.value;
    setUser(user => {
      return {
        ...user,
        height: parseInt(value)
      }
    });
  }

  function weightChange(event) {
    let value = event.target.value;
    setUser(user => {
      return {
        ...user,
        weight: parseInt(value)
      }
    });
  }

  function ageChange(event) {
    let value = event.target.value;
    setUser(user => {
      return {
        ...user,
        age: parseInt(value)
      }
    });
  }

  //Weight plan
  function exercisePlan(value) {
    setUser(user => {
      return {
        ...user,
        exercise: (value)
      }
    });
  }

  function exclusionsChange(event) {
    let value = event.target.value;
    setUser(user => {
      return {
        ...user,
        exclusions: (value)
      }
    });
  }

  

  // Show user Info
  return (
    <div>
      <div className="UserInfo">
        
      <section className="controls">
        You are logged in as {user.name}<br/>
        Email: {user.email}<br/>
        User Id: {user.id}<br/>
        Height: {user.height} in<br/>
        Weight: {user.weight} lbs<br/>
        Age: {user.age} yrs<br/>
        Exercise: {user.exercise} * BMR<br/>
        Goal: {user.goal} Net Calories<br/>
        Exclusions: {user.exclusions}<br/>
        Diet: {user.diet}<br/><br/>


        <form className="form-group">
            <label htmlFor="exercisePlan">Choose Your Level of Exercise:</label>
        <select value={user.exercise} id="exercisePlan" className="custom-select form-control" onChange={(e) => exercisePlan(e.target.value)}>
              <option value="1.2">Little or no Exercise</option>
              <option value="1.375">Light Exercise/Sports 1-3 Days/Week</option>
              <option value="1.55">Moderate Exercise/Sports 3-5 Days/Week</option>
              <option value="1.725">Hard Exercise/Sports 6-7 Days a Week</option>
              <option value="1.9">Very Hard Exercise/Sports & Physical Job or 2x Training</option>
            </select>
            </form>
            
        <div>
        Choose your Height(inches):&nbsp;&nbsp;
        <input
          type="number"
          placeholder="Height(in) (e.g. 72)"
          onChange={heightChange}
        />
        </div>
        <br/>

        <div>
        Choose your Weight(lbs):&nbsp;&nbsp;
        <input
          type="number"
          placeholder="Weight(lbs) (e.g. 180)"
          onChange={weightChange}
        />
        </div>
        <br/>
        
        <div>
        Choose your Age(years):&nbsp;&nbsp;
        <input
          type="number"
          placeholder="Age(years) (e.g. 25)"
          onChange={ageChange}
        />
        </div>
        <br/>

        <div>
        Enter any Ingredients or Allergens to exclude (comma-seperated):&nbsp;&nbsp;
        <input
          type="text"
          placeholder="(e.g. shellfish, olives)"
          onChange={exclusionsChange}
        />
        </div>
        </section>
      </div >
      <div>
        <button type="button" onClick={onLogout}>Logout</button>
      </div>

    </div>
  );
};