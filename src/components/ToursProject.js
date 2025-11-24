import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function ToursProject() {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)

    const Url = "https://www.course-api.com/react-tours-project"

    function removeTour(id){
        const newTours = tours.filter((item)=>id !== item.id)
        setTours(newTours)
    }

    const fetchTours = async()=>{
        try {
            setLoading(true)
            const res = await fetch(Url)
            const data = await res.json()
            setTours(data)
            setLoading(false)
        } catch (error) {
            console.log("ERROR : ",error)
        }
    }

    useEffect(()=>{
        fetchTours()
    },[])

    if(loading){
        return(
            <div className="flex justify-center items-center h-screen">
                <Loading/>
            </div >
        )
    }

    if(tours.length===0){
        return (
            <div className="">
                <h2>NO Tours Left</h2>
                <button onClick={()=>fetchTours()}>
                    Refresh
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
                <Tours tours={tours} removeTour={removeTour}/>
        </div>
    )
}

export default ToursProject