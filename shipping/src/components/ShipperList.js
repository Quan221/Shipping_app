import {  useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { authApi, endpoints } from "../config/Apis";
import CardShipper from "./CardShipper";
 
export default function ShipperList(){
    const [shipper,setShipper]= useState([])
 
 
    useEffect(()=>{
        const loadShipper= async()=>{
   
            const res = await authApi().get(endpoints['shippers'])
            setShipper(res.data)
        }
         loadShipper()
 
     
 
    },[])

    return(
 
        <Container>
       
           
            <Row>
                <h1 className="text-center text-danger">Danh Sach Shipper</h1>
                {shipper.map(c =>
                    <CardShipper id={c.id} avatar={c.user['avatar']} first_name={c.user['first_name']}  />
                )}
               
            </Row>
        </Container>
    )
 
 
 
   
 
 
 
}
