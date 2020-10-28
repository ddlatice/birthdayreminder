import React, { useContext} from 'react'
import { DateContext } from './DateContext';

function Header() {

    const [dates] = useContext(DateContext);

    let today = new Date();
    today.setDate(today.getDate());
    let todayString = today.toISOString().split('T')[0]; 

    let lastDay = new Date();
    lastDay.setDate(lastDay.getDate() + 30);
    let lastDayString = lastDay.toISOString().split('T')[0]; 


    const dateFilter = dates.filter(date => date.date > todayString && date.date < lastDayString).length;

    return (
        <div className="header">
            <h1> Remember This! </h1>
            <h2>Birthday Edition.</h2>
            <small>There are <span className="dateFilter">{dateFilter}</span> birthdays this month! 🎉 </small>
        </div>
    )
}

export default Header
