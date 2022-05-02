import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
// import "./Panel.css";
import {toast} from "react-toastify";
import axios from "axios";


const ManageUsers2 =()=>{
    const [data, setData] = useState([]);
    
    const loadData = async ()=>{
    const response = await axios.get("http://localhost:4000/benf/:mobile1");
    setData(response.data.data);
    };
    
    useEffect(()=>{
    loadData();
    },[]);
    
    const deleteContact = (id) => {
        if (
          window.confirm("Are you sure that you wanted to delete that contact ?")
        ) {
          axios.delete(`http://localhost:4000/user/${id}`);
          toast.success("Contact Deleted Successfully");
          setTimeout(() => loadData(), 500);
        }
      };
    
    return(
        
    <div style={{marginTop:"80px"}}>
        <h1 style={{ textAlign:"right", color:"#009879" }}>Manage Blood Requests </h1>
    <table className="styled-table" style={{ display: 'inline-block',overflow: 'scroll',marginLeft: '370px',maxWidth: '140%'}}>
    
    
    <thead>
    <tr>
    <th style={{textAlign:"center"}}>No.</th>
    <th style={{textAlign:"center"}}>Name</th>
    <th style={{textAlign:"center"}}>Age</th>
    <th style={{textAlign:"center"}}>Gender</th>
    <th style={{textAlign:"center"}}>Blood Type</th>
    <th style={{textAlign:"center"}}>Blood Group</th>
    <th style={{textAlign:"center"}}>Units required </th>
    <th style={{textAlign:"center"}}>Accepted Blood Group</th>
    <th style={{textAlign:"center"}}>Deadline</th>
    <th style={{textAlign:"center"}}>Mobile No.</th>
    <th style={{textAlign:"center"}}>Alternate Mobile No.</th>
    <th style={{textAlign:"center"}}>Hospital Name</th>
    <th style={{textAlign:"center"}}>Hospital Address</th>
    <th style={{textAlign:"center"}}>Country</th>
    <th style={{textAlign:"center"}}>State</th>
    <th style={{textAlign:"center"}}>District</th>
    <th style={{textAlign:"center"}}>Area</th>
    <th style={{textAlign:"center"}}>Pincode</th>
    <th style={{textAlign:"center"}}>Status</th>
    <th style={{textAlign:"center"}}>Action</th>
    </tr>
    </thead>
    
    
    <tbody>
        {data.map((item,index) =>{
        return(
            <tr key={item.id}> 
            <th scope="row">{index+1}</th>
            <td>{item.benf_fullname}</td>
            <td>{item.benf_age}</td>
            <td>{item.gender_name}</td>
            <td>{item.blood_type_name}</td>
            <td>{item.bloodgroup_name}</td>
            <td>{item.benf_units_required}</td>
            <td>{item.bloodgroup_name}</td>
            <td>{item.benf_deadline}</td>
            <td>{item.benf_mobile1}</td>
            <td>{item.benf_mobile2}</td>
            <td>{item.benf_hospital_name}</td>
            <td>{item.benf_hospital_address}</td>
            <td>{item.country_name}</td>
            <td>{item.state_name}</td>
            <td>{item.district_name}</td>
            <td>{item.area_name}</td>
            <td>{item.benf_pincode}</td>
            <td>{item.benf_status}</td>
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
    </div>
    );
    };
    export default ManageUsers2;



















// const BloodRequests = () => {
//   return (
//     <div style={{margin:"50px 500px", color:"black", }}>
//         <h1>BloodRequests dcgdh cdvyvd dskcdcd dscdcid csxcyic cdciudvh dcdiud cdciuudd cdciudc cdic</h1>
//         </div>
//   )
// }

// export default BloodRequests