import React, { useContext } from 'react'
import Dates from './Dates';
import { DateContext } from '../components/DateContext';


function DateList() {
    const [dates] = useContext(DateContext);
    return (
        <div>
    

        {dates.map((date, index) => 
        <Dates key={index} index={index} item={date.item} date={date.date} isFamily={date.isFamily} />)}

        </div>
    )
}

export default DateList
