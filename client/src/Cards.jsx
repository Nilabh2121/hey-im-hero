import React from 'react' 
import { Button, Box, Stack, VStack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";
import "./pages/Tags/Tags.css"
//import * as api from "./api/index";
import { useNavigate } from 'react-router-dom'







const Cards = () => {
  const navigate = useNavigate();
  const checkoutHandler = async (amount) => {
    try {
        const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
            amount
        })
        

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Stack-Overflow",
            description: "Pay to ask Question",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsw-13bqG5augwlAaAFXQk7BshYGosH7bv_EvF4WLvQ&s",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
                name: "Pranjal Tripathi",
                email: "yashansh24@gmail.com@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
            const razor = new window.Razorpay(options);
            razor.open();
            // setPost(1); 
            // navigate('/AskQuestion');
            
    } catch (error) {
        console.log(error)
    }
}





const handleClick = () => { 
    navigate('/AskQuestion')
}

  return (
    <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
              
              
                <div className='tags-list-container tag' >
                    <p style={{textAlign:"center", backgroundColor:"#e1ecf4", color:"#39739d"}}>5 questions/day(Silver Plan)</p>
                    <p style={{textAlign:"center"}}>(Rs.100/month)</p>
                    <Card amount={100} checkoutHandler={checkoutHandler}  />
                    
                </div>
                <div className='tags-list-container tag' >
                    <p style={{textAlign:"center", backgroundColor:"#e1ecf4", color:"#39739d"}}>Unlimited questions/day(Gold Plan)</p>
                    <p style={{textAlign:"center"}}>(Rs.1000/month)</p>
                    <Card amount={1000} checkoutHandler={checkoutHandler} />
                 
                </div>
                <div className='tags-list-container tag' >
                    <p style={{textAlign:"center", backgroundColor:"#e1ecf4", color:"#39739d"}}>1 question/day(Free Plan)</p>
                    <p style={{textAlign:"center"}}>(Free)</p>
                    <p style={{textAlign:"center"}}>₹0</p>
                    <VStack>
                        <Button type='button' onClick={handleClick}>Pay Now</Button>
                    </VStack>
                    
                </div>
                    
                
               
            </Stack>

    </Box>
  )
}

export default Cards