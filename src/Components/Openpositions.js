import React from 'react';
import './Openpositions.css';

// import {Table } from 'react-bootstrap'









export default function Openpositions() {


let positions = [
    {
        employer: "Deski",
        role: "Frontend Developer",
        location: "Remote-Global",
        referrals: "50",
        bounty : "$5000"
      },
    {
      employer: "Talentd",
      role: "Software Engineer",
      location: "Remote-Global",
      referrals: "42",
      bounty : "$2000"
    },
    {
        employer: "Dover",
        role: "Product Manager",
        location: "Remote-Global",
        referrals: "12",
        bounty : "$5000"
      },
      {
        employer: "Spring",
        role: "Data Scientist",
        location: "Remote-Global",
        referrals: "42",
        bounty : "$2000"
      },
]





    return (
        <div id="openpositions">

            <div className="big-container">   
         <h2 className="open-heading">open Job Bounties</h2>
         <div className="positions-div"> 

            {positions.map(position => ( 

                <div className="positions">
                <p stye={{textAlign:"left"}}>{position.employer}</p>
                <p>{position.role}</p>
                <p>{position.location}</p>
                <p>{position.referrals}</p>
                <p>{position.bounty}</p>

                <button className="refer-btn">Refer</button>
               
                </div>
            )
            )}
         </div>

       
    
        </div>


        </div>

    )
}
