import { CONTACT_EMAIL_SUBJECT, GMAIL_USERNAME } from "@/config/constants";
import { render } from "@react-email/components";
import { createTransport } from "nodemailer";
import ContactEmail from "@/emails/Contact";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const contact = await request.json();

        const transporter = createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const success = await new Promise((resolve, _) => {
            transporter.sendMail(
                {
                    subject: `${contact.firstName}, ${CONTACT_EMAIL_SUBJECT}`,
                    text: render(<ContactEmail contact={contact} />, { plainText: true }),
                    html: render(<ContactEmail contact={contact} />, { pretty: true }),
                    from: GMAIL_USERNAME,
                    bcc: GMAIL_USERNAME,
                    to: contact.email,
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
