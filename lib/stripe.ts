import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const secret = process.env.STRIPE_SECRET_KEY;
if(!secret) throw "STRIPE_SECRET_KEY not found"


const stripe = new Stripe(secret);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
        {
            price_data: {
            currency: 'usd',
            product_data: {
                name: 'Your Product Name',
            },
            unit_amount: 1000, // Price in cents
            },
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
    });
    res.status(200).json({ id: session.id });
}