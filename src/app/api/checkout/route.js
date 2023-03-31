import { GMAIL_USERNAME, RECEIPT_EMAIL_SUBJECT } from "@/config/constants";
import { render } from "@react-email/components";
import { createTransport } from "nodemailer";
import ReceiptEmail from "@/emails/Receipt";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { checkout, shoppingCart, deliveryCosts } = await request.json();

        const transporter = createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: GMAIL_USERNAME,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const success = await new Promise((resolve, _) => {
            transporter.sendMail(
                {
                    subject: `${checkout.firstName}, ${RECEIPT_EMAIL_SUBJECT}`,
                    text: render(
                        <ReceiptEmail checkout={checkout} shoppingCart={shoppingCart} deliveryCosts={deliveryCosts} />,
                        {
                            plainText: true,
                        }
                    ),
                    html: render(
                        <ReceiptEmail checkout={checkout} shoppingCart={shoppingCart} deliveryCosts={deliveryCosts} />,
                        {
                            pretty: true,
                        }
                    ),
                    from: GMAIL_USERNAME,
                    bcc: GMAIL_USERNAME,
                    to: checkout.email,
                },
                (error, _) => {
                    if (error) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                }
            );
        });

        return NextResponse.json({ success });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ success: false });
    }
}
