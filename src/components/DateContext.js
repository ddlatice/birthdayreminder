import React, { useState, createContext, useEffect } from 'react'

export const DateContext = createContext();

export const DateProvider = (props) => {

    //localStorage implementation

const ALL_DATES = localStorage.getItem('dates')
? JSON.parse(localStorage.getItem('dates'))
: []

const [dates,setDates] = useState(ALL_DATES);

    /*
    const [dates, setDates] = useState([
        {item: "Dad's Birthday", date: "2020-03-03", isFamily: true},
        {item: "Mom's Birthday", date: "2020-05-03",  isFamily: true},
        {item: "Arnie's Birthday", date: "2020-10-08", isFamily: false},
        {item: "Maya's Birthday", date: "2020-10-19", isFamily: false}


    ])

    */

    //localStorage

   useEffect(() => {
    localStorage.setItem('dates', JSON.stringify(dates))
  }, [dates])

    return (
        <DateContext.Provider value={[dates,setDates]}>
            {props.children}
        </DateContext.Provider>

    )


}
