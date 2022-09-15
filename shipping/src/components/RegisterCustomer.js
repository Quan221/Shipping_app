import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Apis, { authApi, endpoints } from "../config/Apis";

export default function RegisterCustomer(){
    
    
    const addCustomer = async (event) =>{

        event.preventDefault()
        const res = await authApi().post(endpoints['registercustomer'])
        console.log(res.data)
        
        
    }
    
    


    return(
        <>
        <h1 className="text-center text-danger">Get Start</h1>
       
        <Form onSubmit={addCustomer} >
            <Button variant="primary" type="submit" className="position ">
                Start
            </Button>
        </Form>
       
        </>
    )





}