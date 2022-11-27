import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Pasttrips = (props) => (
 <tr>
   <td>{props.pasttrips.name}</td>
   <td>{props.pasttrips.position}</td>
   <td>{props.pasttrips.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.pasttrips._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deletePasttrips(props.pasttrips._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function PasttripsList() {
 const [pasttrips, setPasttrips] = useState([]);
 
 // This method fetches the pasttrips from the database.
 useEffect(() => {
   async function getPasttrips() {
     const response = await fetch(`http://localhost:3000/pasttrips/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const pasttrips = await response.json();
     setPasttrips(pasttrips);
   }
 
   getPasttrips();
 
   return;
 }, [pasttrips.length]);
 
 // This method will delete a pasttrips
 async function deletePasttrips(id) {
   await fetch(`http://localhost:3000/${id}`, {
     method: "DELETE"
   });
 
   const newPasttrips = pasttrips.filter((el) => el._id !== id);
   setPasttrips(newPasttrips);
 }
 
 // This method will map out the pasttrips on the table
 function pasttripsList() {
   return pasttrips.map((pasttrips) => {
     return (
       <Pasttrips
         pasttrips={pasttrips}
         deletePasttrips={() => deletePasttrips(pasttrips._id)}
         key={pasttrips._id}
       />
     );
   });
 }
 
 // This following section will display the table with the pasttrips of individuals.
 return (
   <div>
     <h3>Past Trips List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{pasttripsList()}</tbody>
     </table>
   </div>
 );
}