import { GMAIL_USERNAME, WEBSHOP_NAME, WEBSHOP_URL } from "@/config/constants";
import products from "@/config/products";
import filter from "lodash/filter";
import uniq from "lodash/uniq";
import map from "lodash/map";
import {
    Body,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";

export const TemplateEmail = ({ children, preview }) => (
    <Html>
        <Head />
        <Preview>{preview}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={{ padding: "40px 40px", textAlign: "center" }}>
                    <Link href={`https://${WEBSHOP_URL}`}>
                        <Img
                            src={`https://${process.env.VERCEL_URL}/static/logo.png`}
                            style={{ margin: "auto" }}
                            alt={WEBSHOP_NAME}
                            height="120"
                            width="120"
                        />
                    </Link>
                </Section>
                <Hr style={global.hr} />
                {children}
                <Hr style={global.hr} />
                <Section style={paddingY}>
                    <Text style={global.heading}>Favorieten</Text>
                    <Row style={favorites.container}>
                        {filter(products, ["favorite", true]).map(({ code, name, description }) => (
                            <Column
                                style={{ ...favorites.product, paddingLeft: "4px", width: "31%" }}
                                align="center"
                                key={code}
                            >
                                <Link href={`${WEBSHOP_URL}/product/${code}`}>
                                    <Img
                                        src={`https://${process.env.VERCEL_URL}/static/${code}.jpg`}
                                        width="100%"
                                        alt={name}
                                    />
                                    <Text style={favorites.title}>{name}</Text>
                                    <Text style={favorites.text}>{description}</Text>
                                </Link>
                            </Column>
                        ))}
                    </Row>
                </Section>
                <Hr style={global.hr} />
                <Section style={paddingY}>
                    <Text style={global.heading}>{WEBSHOP_NAME}</Text>
                    <Row style={categories.container}>
                        {uniq(map(products, "category")).map((category) => (
                            <Column key={category} align="center">
                                <Link
                                    href={`https://${WEBSHOP_URL}/webshop?category=${category}`}
                                    style={{ paddingLeft: "10px", paddingRight: "10px", ...categories.text }}
                                >
                                    {category}
                                </Link>
                            </Column>
                        ))}
                    </Row>
                </Section>
                <Hr style={{ ...global.hr, marginTop: "12px" }} />
                <Section style={paddingY}>
                    <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
                        Als je vragen hebt, neem dan even{" "}
                        <Link href={`https://${WEBSHOP_URL}/contact`} style={categories.text}>
                            contact
                        </Link>{" "}
                        met me op.
                    </Text>
                    <Text style={footer.text}>©️ {WEBSHOP_NAME}</Text>
                    <Text style={footer.text}>
                        <Link href={`mailto:${GMAIL_USERNAME}`} style={{ ...footer.text, paddingRight: "10px" }}>
                            {GMAIL_USERNAME}
                        </Link>
                        <Link href={`https://${WEBSHOP_URL}`} style={footer.text}>
                            {WEBSHOP_URL}
                        </Link>
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default TemplateEmail;

const paddingX = {
    paddingLeft: "40px",
    paddingRight: "40px",
};

const paddingY = {
    paddingTop: "22px",
    paddingBottom: "22px",
};

const global = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    heading: {
        letterSpacing: "-1px",
        textAlign: "center",
        fontWeight: "700",
        lineHeight: "1.3",
        fontSize: "32px",
        color: "black",
    },
    text: {
        fontWeight: "500",
        color: "#747474",
        lineHeight: "2",
        margin: "0",
    },
    hr: {
        borderColor: "#E5E5E5",
        margin: "0",
    },
};

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    border: "1px solid #E5E5E5",
    margin: "10px auto",
    width: "600px",
};

const favorites = {
    container: {
        padding: "20px 0",
    },
    product: {
        verticalAlign: "top",
        paddingRight: "2px",
        paddingLeft: "2px",
        textAlign: "left",
    },
    title: {
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingTop: "12px",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "1",
        color: "black",
        margin: "0",
    },
    text: {
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingTop: "4px",
        color: "#747474",
        fontSize: "15px",
        lineHeight: "1",
        margin: "0",
    },
};

const categories = {
    container: {
        paddingTop: "12px",
        width: "370px",
        margin: "auto",
    },
    text: {
        fontWeight: "500",
        color: "#000",
    },
};

const footer = {
    policy: {
        width: "166px",
        margin: "auto",
    },
    text: {
        textAlign: "center",
        fontSize: "13px",
        color: "#AFAFAF",
        margin: "0",
    },
};
