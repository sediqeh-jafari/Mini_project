// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import enahncedFetch from "../../Services/http-fetch";
import './style.css'
// import enahncedFetch from "../../Services/http-fetch";
// import { Link } from "react-router-dom";


function Characters() {
    // Personol_Information
    const { url } = useParams();
    const [Data, setData] = useState([]);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);

    const Personol_Information = `https://swapi.dev/api/people/${url}`

    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Personol_Information, Option)
                setData(response)

            } catch {
                setHaserror(true)
                setIsloading(false)
            } finally {
                setIsloading(false)
            }
        }
        fetchrequest()
    }, []);

    //    Planet_information
    const [Planet_information, setPlanet_information] = useState([]);
    const [Isloading_Planet_information, setIsloading_Planet_information] = useState(false);
    const [HasError_Planet_information, setHaserror_Planet_information] = useState(false);
    const Planet_Own_information = `https://swapi.dev/api/planets/${url}`

    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading_Planet_information(true)
                const response = await enahncedFetch('Get', Planet_Own_information, Option)
                setPlanet_information(response)

            } catch {
                setHaserror_Planet_information(true)
                setIsloading_Planet_information(false)
            } finally {
                setIsloading_Planet_information(false)
            }
        }
        fetchrequest()
    }, []);

    const loading_people = () => {
        if (Isloading) {
            return <p>Isloading...</p>
        }
        return (
            <>
                <p>{Data.name}</p>
                <p>birth year is : {Data.birth_year}</p>
                <p>hear color is : {Data.hair_color}</p>

                <p className="last_line">height : {Data.height}</p>
            </>
        )

    }
    const isloading_planet = () => {
        if (Isloading_Planet_information) {
            return <p>Isloading...</p>
        }
        return (
            <>
                <p>planet name : {Planet_information.name}</p>
                <p>terrain is : {Planet_information.terrain}</p>
                <p>population is : {Planet_information.population}</p>
                <p className="last_line">climate of planet : {Planet_information.climate}</p>
            </>
        )
    }
    // if (!HasError || HasError_Planet_information)


    // {HasError && <p>HasError!</p>}
    return (
        <>

            <h1 className="top_of_page2">Star Wars movie characters</h1>
            <div className="charecters">

                <div className="Personol_Information">
                    {loading_people()}

                </div>
                <div className="Planet_information">
                    {isloading_planet()}
                </div>


            </div>

        </>



    )
}

export default Characters