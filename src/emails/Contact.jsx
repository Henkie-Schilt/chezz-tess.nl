import { Column, Heading, Hr, Row, Section, Text } from "@react-email/components";
import { CONTACT_EMAIL_SUBJECT, CONTACT_EMAIL_TEXT} from "@/config/constants";
import TemplateEmail from "./Template";
import format from "date-fns/format";
import nl from "date-fns/locale/nl";

export const ContactEmail = ({ contact }) => (
    <TemplateEmail preview={`${contact.firstName}, ${CONTACT_EMAIL_SUBJECT}`}>
        <Section style={message}>
            <Heading style={global.heading}>Bedankt voor je bericht</Heading>
            <Text style={global.text}>Beste {contact.firstName},</Text>
            <Text style={{ ...global.text, marginTop: 24 }}>{CONTACT_EMAIL_TEXT}</Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", paddingBottom: "10px" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>Datum</Text>
                    <Text style={track.number}>{format(new Date(), "d MMMM yyyy", { locale: nl })}</Text>
                </Column>
            </Row>
            <Row style={{ display: "inline-flex" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>
                        {contact.firstName} {contact.lastName}
                    </Text>
                    <Text style={{ ...track.number, textDecoration: "none" }}>{contact.email}</Text>
                </Column>
            </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
            <Row>
                <Text style={review}>{contact.message}</Text>
            </Row>
        </Section>
    </TemplateEmail>
);

export default ContactEmail;

const paddingX = {
    paddingRight: "40px",
    paddingLeft: "40px",
};

const paddingY = {
    paddingBottom: "22px",
    paddingTop: "22px",
};

const review = {
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
    textAlign: "left",
    lineHeight: "1.4",
    fontSize: "18px",
    color: "#484848",
    padding: "24px",
};

const global = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    paragraphWithBold: {
        fontWeight: "bold",
        lineHeight: "1.4",
        color: "black",
        margin: "0",
    },
    heading: {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: "-1px",
    },
    text: {
        margin: "0",
        lineHeight: "2",
        color: "#747474",
        fontWeight: "500",
    },
    hr: {
        borderColor: "#E5E5E5",
        margin: "0",
    },
};

const track = {
    container: {
        padding: "22px 40px",
        backgroundColor: "#F7F7F7",
    },
    number: {
        margin: "3px 0 0 0",
        fontWeight: 500,
        lineHeight: "1.4",
        color: "#6F6F6F",
    },
};

const message = {
    padding: "40px 74px",
    textAlign: "center",
};
