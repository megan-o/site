import React, { useState, useEffect } from "react";
import MyCard from "./MyCard";
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function New() {
  const [formattedData, setFormattedData] = useState([]);
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const total= `https://sheets.googleapis.com/v4/spreadsheets/10lIiQ8yqJFay3e6MR_6BkXJsb7Ix9W2LWKg-yuvQMQs/values/Sheet1?key=${GOOGLE_API_KEY}`
    fetch(total)
      .then((response) => response.json())
      .then((data) => {
        convertToJson(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  function convertToJson(data) {
    const headers = data.values[0];
    const result = data.values.slice(1).map((row) => {
      return headers.reduce((obj, header, index) => {
        obj[header] = row[index];
        return obj;
      }, {});
    });
    setFormattedData(result);
    console.log(formattedData);
  }

  return (
    <div className="data-list">
      <br/>
        {formattedData.map((item) => (
          <>
          <MyCard items={item}/>
          <br/>        
          </>
        ))}
    </div>
  );
}

export default New;
