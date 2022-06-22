import { useState, useEffect } from "react";
import axios from "axios"
import { PhonesCard } from "../../components/phonesCard/phonesCard";

export function Home() {
    const [phones, setPhones] = useState([])
    useEffect(() =>{
        async function getPhones(){
            try{
                const response = await axios.get("http://localhost:4000/phones")
                setPhones(response.data)
            } catch(err){
                console.error(err)
            }
        }
        getPhones()
    }, [])
    console.log(phones)
    return ( <>
        <PhonesCard phones = {phones} />
    </> );
}
