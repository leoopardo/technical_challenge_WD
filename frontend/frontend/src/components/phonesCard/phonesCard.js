import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
import Galaxy_S7 from "../../img/Galaxy_S7.png"
import Honor_10 from "../../img//Honor_10.png"
import IPhone_7 from "../../img/IPhone_7.png"
import Moto_G6 from "../../img/Moto_G6.png"
import Nokia_7 from "../../img/Nokia_7.1.jpg"
import P10_Lite from "../../img/P10_Lite.jpg"
import Xiaomi_MI_A2 from "../../img/Xiaomi_MI_A2.jpeg"
import ZenPhone_5 from "../../img/ZenPhone_5.jpg"
import {Link} from "react-router-dom"
export function PhonesCard(props) {
    return ( <>
        {props.phones.map((currentPhone) =>{
            function isImage(){
                if((currentPhone.imageFileName.split(".")[0]) === "Galaxy_S7"){
                    return Galaxy_S7
                } else if((currentPhone.imageFileName.split(".")[0]) === "Honor_10"){
                    return Honor_10
                } else if((currentPhone.imageFileName.split(".")[0]) === "IPhone_7"){
                    return IPhone_7
                } else if((currentPhone.imageFileName.split(".")[0]) === "Moto_G6"){
                    return Moto_G6
                } else if((currentPhone.imageFileName.split(".")[0]) === "Nokia_7"){
                    return Nokia_7
                } else if((currentPhone.imageFileName.split(".")[0]) === "P10_Lite"){
                    return P10_Lite
                } else if((currentPhone.imageFileName.split(".")[0]) === "Xiaomi_MI_A2"){
                    return Xiaomi_MI_A2
                } else if((currentPhone.imageFileName.split(".")[0]) === "ZenPhone_5"){
                    return ZenPhone_5
                } 
            }
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={isImage()} alt ={currentPhone.imageFileName}/>
                    <Card.Body>
                        <Card.Title>{currentPhone.name}</Card.Title>
                        <Card.Text>
                        Manufacturer: {currentPhone.manufacturer}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price: U$:{currentPhone.price}.00</ListGroupItem>        
                    </ListGroup>
                    <Card.Body>
                    
                        <Link to={`/phone/${currentPhone.id}`}>About</Link>
                    </Card.Body>
                </Card>
            )
        })}
    </> );
}
