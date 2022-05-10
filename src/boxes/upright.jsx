import React, {useEffect} from 'react'

const UpRight = () => {
    const url = "https://api.sl.se/api2/realtimedeparturesV4.json?key=24e8694550204651b656e322387bf0bc&siteid=1365&timewindow=5"
    useEffect(() => {
        fetch(url,  {mode: 'cors'})
        .then((data) => 
            console.log(data) )
    .catch(err => err)

}, [])}

export default UpRight
