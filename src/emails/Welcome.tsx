import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";


export default function Email() {
  return (
    <Html>
    <Head />
    <Preview>Nouvelle Inscription</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{display:"flex",alignItems:"center",justifyContent:"center"  }}>
        <Img
          src={`http://localhost:5173/logo.png`}
          width="150"
          height="150"
          alt="FecaScrab"
          style={{  borderRadius: 21,
            width: 90,
            height: 90,
             }}
        />
        </Section>
        <Section style={{display:"flex",alignItems:"center",justifyContent:"center"  }}>
        <Heading style={heading}>Nouvelle Inscription</Heading>
        </Section>
        <Section style={{ display:"flex",flexDirection:"column" }}>
        <Section style={{ display:"flex",flexDirection:"row" }}>
          <Row>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Nom :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}> Martin</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Date de Naissance :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}> 08-02-1997</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Nationalité :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}>Camerounaise</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Numéro de Téléphone :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}>690394365</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Email :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}>Camerounaise</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Catégorie d'inscription :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}>Camerounaise</Text></Column>
          </Row>
          <Row style={{ marginTop:"-28px" }}>
            <Column><Heading style={{ fontSize:"18px",fontWeight:"bold" }}>Type de compétition :</Heading></Column>
            <Column> <Text style={{ fontSize:"18px",fontWeight:"normal",marginLeft:"12px" }}>Camerounaise</Text></Column>
          </Row>
        </Section>
          
        </Section>
        <Section style={buttonContainer}>
          <Button style={button} href="https://linear.app">
            Login to Linear
          </Button>
        </Section>
       
        <Hr style={hr} />
        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>
            Team FecaScrab
          </Text>
        </Section>

        

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA
            94043, USA
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            You have received this mandatory email service announcement to
            update you about important changes to your Google Play Developer
            account.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
  );
}


const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraphContent = {
  padding: "0 40px",
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};



const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};