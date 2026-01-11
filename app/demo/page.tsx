"use client"
import { useState } from "react";
import { Button, Container, Title } from "@mantine/core";
import { stripePromise } from "@/utils/stripe";

const products = [
  { id: '1', name: 'Product 1', price: 1000 },
  { id: '2', name: 'Product 2', price: 2000 },
];

export default function Demo() {
    const [cart, setCart] = useState(products);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        console.log(JSON.stringify(cart));

        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: cart }),
        });

        const { sessionId } = await response.json();
    };

    return (
        <Container c="white">
            <Title>Products</Title>

            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.name} - {item.price / 100}€</p>
                </div>
            ))}

            <Button onClick={handleCheckout}>Checkout</Button>
            
            <a
                href="https://buy.stripe.com/test_4gM5kCcqrdYJ5OP2rvebu00"
                target="_blank"
                rel="noopener noreferrer"
            >Checkout</a>
        </Container>
    )
}