import {useEffect, useState, } from "react";
import './App.css';
import Modal from "./Modal";
import "./index.css";

function Data() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=200&idStarts=1001").then((result)=>{
      result.json().then((resp)=> {
        // console.log('result',resp)
        setMyData(resp)
      })
    })
  },[])
  console.log(myData)
  return (
    <div>
      <h1>Employee Table</h1>

      <h2>{<Modal />}</h2> 
      <table className="Table" border="1px">
        <tr>
          <td className="tr" >ID</td>
          <td className="tr" >Name</td>
          <td className="tr" >Contact Number</td>
          <td className="tr" >email</td>
          <td className="tr" >Age</td>
          <td className="tr" >DOB</td>
          <td className="tr" >Image</td>
        </tr>
        {
          myData.map((item)=>
          <tr className="tr" >
          <td className="tr" >{item.id}</td>
          <td className="tr" >{item.firstName} {item.lastName}</td>
          <td className="tr" >{item.contactNumber}</td>
          <td className="tr" >{item.email}</td>
          <td className="tr" >{item.age}</td>
          <td className="tr" >{item.dob}</td>
          <td><img src={item.imageUrl} /></td>
        </tr>
          )
        }
      </table>
    </div>
  );
}

export default Data;
