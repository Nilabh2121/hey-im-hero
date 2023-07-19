import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'




const Card = ({ amount, checkoutHandler }) => {
    return (
        <VStack>
            <Text>₹{amount}</Text> 
            <Button onClick={() => checkoutHandler(amount)}>Pay Now</Button>
        </VStack>
    )
}

export default Card