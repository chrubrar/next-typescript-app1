"use client"

import React from 'react'
import { useState } from 'react'
import ChildrenPropExample from '../2-children-prop-example/page';
import { UserType } from '../types/types';



const UseStateExample = () => {

    const [username, setUsername] = useState("");
    //const [user, setUser] = useState<UserType |null>(null);
    const [user, setUser] = useState<UserType>();

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        console.log("user name submitted")
        setUser({
            name: username,
            sessionId: Math.random(),          

        })

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      };


  return (
  <div className="useStateExample">
    {user ? ( 
        `${user.name} logged in`
    ): (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>

    )}
    {user?.name}
    

  </div>
  );
};

export default UseStateExample