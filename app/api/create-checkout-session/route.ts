import Stripe from 'stripe';

const secret = process.env.STRIPE_SECRET_KEY;
if(!secret) throw "STRIPE_SECRET_KEY not found";

const stripe = new Stripe(secret);

export async function POST(req: Request) {
    if (req.method !== 'POST')
        return Response.json({error: "method not allowed"}, {status: 405})

    try {
        const body = await req.json();
        const items = body.items;

        console.log(JSON.stringify(items));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item: any) => ({
                price_data: {
                currency: 'usd',
                product_data: { name: item.name },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity ?? 1,
            })),
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
        });

        return Response.json({ sessionId: session.id });
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}