import { Column, Heading, Hr, Img, Row, Section, Text } from "@react-email/components";
import { RECEIPT_EMAIL_SUBJECT, RECEIPT_EMAIL_TEXT } from "@/config/constants";
import { formatPrice, getProduct } from "@/utils/utils";
import TemplateEmail from "./Template";
import format from "date-fns/format";
import isEmpty from "lodash/isEmpty";
import nl from "date-fns/locale/nl";

export const ReceiptEmail = ({ checkout, shoppingCart, deliveryCosts }) => (
    <TemplateEmail preview={`${checkout.firstName}, ${RECEIPT_EMAIL_SUBJECT}`}>
        <Section style={message}>
            <Heading style={global.heading}>Bedankt voor je bestelling</Heading>
            <Text style={global.text}>Beste {checkout.firstName},</Text>
            <Text style={{ ...global.text, marginTop: 24 }}>{RECEIPT_EMAIL_TEXT}</Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", paddingBottom: "10px" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>Datum</Text>
                    <Text style={track.number}>{format(new Date(), "d MMMM yyyy", { locale: nl })}</Text>
                </Column>{" "}
            </Row>
            <Row style={{ display: "inline-flex", paddingBottom: "10px" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>
                        {checkout.firstName} {checkout.lastName}
                    </Text>
                    <Text style={track.number}>
                        {checkout.street}, {checkout.zip} {checkout.city}
                    </Text>
                </Column>
            </Row>
            <Row style={{ display: "inline-flex", paddingBottom: "10px" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>E-mail</Text>
                    <Text style={track.number}>{checkout.email}</Text>
                </Column>
            </Row>
            <Row style={{ display: "inline-flex" }}>
                <Column>
                    <Text style={global.paragraphWithBold}>Telefoonnummer</Text>
                    <Text style={track.number}>{checkout.phone ? checkout.phone : "-"}</Text>
                </Column>
            </Row>
        </Section>
        {!isEmpty(checkout.remarks) ? <Hr style={global.hr} /> : null}
        {!isEmpty(checkout.remarks) ? (
            <Section style={global.defaultPadding}>
                <Row>
                    <Text style={review}>{checkout.remarks}</Text>
                </Row>
            </Section>
        ) : null}
        <Hr style={global.hr} />
        <Section style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}>
            {shoppingCart.map(({ code, amount }) => (
                <Row key={code} style={{ paddingBottom: "3px" }}>
                    <Column style={{ width: "200px" }}>
                        <Img
                            src={`https://${process.env.VERCEL_URL}/static/${code}.jpg`}
                            alt={getProduct(code).name}
                            style={{ float: "left" }}
                            width="150px"
                        />
                    </Column>
                    <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                        <Text style={{ margin: "0", lineHeight: "2", fontWeight: "500" }}>{getProduct(code).name}</Text>
                        <Text style={global.text}>Aantal: {amount}</Text>
                    </Column>
                </Row>
            ))}
            <Row style={{ paddingBottom: "3px" }}>
                <Column style={{ width: "200px" }}></Column>
                <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                    <Text style={{ margin: "0", lineHeight: "2", fontWeight: "500" }}>Verzendkosten</Text>
                    <Text style={global.text}>{formatPrice(deliveryCosts)}</Text>
                </Column>
            </Row>
        </Section>
    </TemplateEmail>
);

export default ReceiptEmail;

const paddingX = {
    paddingLeft: "40px",
    paddingRight: "40px",
};

const paddingY = {
    paddingTop: "22px",
    paddingBottom: "22px",
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

const adressTitle = {
    margin: "0",
    lineHeight: "2",
    fontSize: "15px",
    fontWeight: "bold",
};
