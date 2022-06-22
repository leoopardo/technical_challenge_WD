import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
import Galaxy_S7 from "../../img/Galaxy_S7.png"
import Honor_10 from "../../img//Honor_10.png"
import IPhone_7 from "../../img/IPhone_7.png"
import Moto_G6 from "../../img/Moto_G6.png"
import Nokia_7 from "../../img/Nokia_7.1.jpg"
import P10_Lite from "../../img/P10_Lite.jpg"
import Xiaomi_MI_A2 from "../../img/Xiaomi_MI_A2.jpeg"
import ZenPhone_5 from "../../img/ZenPhone_5.jpg"

export function PhonesCard(props) {
    return ( <>
        {props.phones.map((currentPhone) =>{
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={currentPhone.imageFileName.split(".")[0]} alt ={currentPhone.imageFileName}/>
                    <Card.Body>
                        <Card.Title>{currentPhone.name}</Card.Title>
                        <Card.Text>
                        {currentPhone.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{currentPhone.price}</ListGroupItem>        
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            )
        })}
    </> );
}
