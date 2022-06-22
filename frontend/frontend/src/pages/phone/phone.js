import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./style.modules.css"
export function Phone() {

    const params = useParams()
    const [phone, setPhone] = useState({})

    useEffect(() =>{
        async function getPhone(){
            try{
            const response = await axios.get(`http://localhost:4000/phones/${params.id}`)
                setPhone(response.data)
            } catch(err){
                console.error(err)
            }
        }
        getPhone()
    },[params.id])
    console.log(phone)
    return (
    <section className="PhonePage">     
        <h1>{phone.name}</h1>
        <img src={`../../img/${phone.imageFileName}`} alt={phone.imageFileName}/>
        <p>{phone.description}</p>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Phone processor</th>
                <th>RAM</th>
                <th>Screen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{phone.processor}</td>
                <td>{phone.ram}GB</td>
                <td>{phone.screen}</td>
                </tr>
            </tbody>
            </Table>
            <h4>U$:{phone.price}</h4>
    </section>);
}
