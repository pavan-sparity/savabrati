import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const Feedback =()=>{
const [data, setData] = useState([]);

const loadData = async ()=>{
const response = await axios.get("http://localhost:4000/feedback");
setData(response.data);
};

useEffect(()=>{
loadData();
},[]);

const deleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      axios.delete(`http://localhost:4000/feedback/${id}`);
      toast.success("Contact Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };

return(
    
<div style={{marginTop:"150px"}}>
    <h1>All Feedbacks </h1>
<table className="styled-table">

<thead>
<tr>
<th style={{textAlign:"center"}}>No.</th>
<th style={{textAlign:"center"}}>Name</th>
<th style={{textAlign:"center"}}>Email</th>
<th style={{textAlign:"center"}}>Contact</th>
<th style={{textAlign:"center"}}>Action</th>
</tr>
</thead>

<tbody>
	{data.map((item,index) =>{
	return(
		<tr key={item.id}> 
		<th scope="row">{index+1}</th>
		<td>{item.feedback_name}</td>
		<td>{item.feedback_emaill}</td>
		<td>{item.feedback_message}</td>
		<td>
	<Link to={`/update/${item.id}`}>
	<button className="btn btn-edit">Edit</button></Link>
	<button className="btn btn-delete" onClick={()=>deleteContact()}>Delete</button>

    <Link to={`/views/${item.id}`}>
    <button className="btn-btn-view">View</button>
    </Link>
</td>
</tr>
);})}
</tbody>
 

</table>
<h1>Hii</h1>
<h2>Welcome</h2>
</div>
);
};
export default Feedback;












