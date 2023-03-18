import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from "../../Services/http-fetch";
import Pagination from "../../components/pagination";
// import Characters from "../Characters";
import './style.css'

function Home() {


    // const { url } = useParams()
    const [Characters, setCharacters] = useState([])
    const [isloading, setIsloading] = useState(false);
    const [haserror, setHaserror] = useState(false);
    const [number, setNumber] = useState(1);

    const BASE_API = `https://swapi.dev/api/people/?page=${number}`;

    useEffect(() => {
        const fetchpeople = async () => {
            try {

                setIsloading(true)

                const response = await enahncedFetch("GET", BASE_API, Option)
                setCharacters(response.results)
            } catch {
                setHaserror(true)
                console.log('it has error');
                setIsloading(false)
            } finally {
                setIsloading(false)
            }


        }
        fetchpeople()

    }, [BASE_API])
    
    
    const render_list_of_people = ()=>{
        if (isloading) {
                return <p className="is_loading">isloading...</p>
            }
            if (haserror) {
                return <p className="has_error">errored</p>
            }
            return (
                Characters.map((data) => {
                    return  <Link
                            to={`/Characters/${data.url}`}
                            className='people_card'
                            key={data.name} 
                            url={data.url} >  {data.name} </Link>
                })
            )
    }

    return (
        <>

            <div className='list_of_people'>
                <h1 className="top_of_page">Star Wars movie characters</h1>

                <div className='list_of_people_template'>
                    {render_list_of_people()}
                </div>
                <Pagination hasError={haserror} load={isloading} className='pagination' Number={number} NewNumber={setNumber} />

            </div>
        </>
    )
}

export default Home