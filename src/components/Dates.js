import React, { useContext } from 'react';
import { DateContext } from '../components/DateContext';

function Dates({index, item , date, isFamily}) {

    const [dates,setDates] = useContext(DateContext);

    //get dates to compare.
    //if passed in date is after today's date but less than 30 days from now.
    //add soon class to div style, to mark it as upcoming.

    let today = new Date();
    today.setDate(today.getDate());
    let todayString = today.toISOString().split('T')[0]; 

    let lastDay = new Date();
    lastDay.setDate(lastDay.getDate() + 30);
    let lastDayString = lastDay.toISOString().split('T')[0]; 


    function getDates(x) {

        let newArr = x.split("-");
        let month = newArr[1];
        let day = newArr[2];
        return month + "/" + day;
    }

    function handleClick(e) {

        const newBdays = [...dates];
        newBdays.splice(index, 1);
        setDates(newBdays);

    }



    return (
        <div className= { (date > todayString) && (date  < lastDayString) ? "date-container soon" : "date-container" }>
        <span className={isFamily ? "star" : "star-transparent"}></span><h3>{item}</h3> <h6>{getDates(date)}</h6> 
        <i className="fas fa-trash" onClick={handleClick}></i>
        </div>
    )
}

export default Dates
