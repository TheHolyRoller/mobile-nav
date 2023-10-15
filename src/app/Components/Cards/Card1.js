import { Card, Col, Text } from "@nextui-org/react";



// Add in a style sheet here 
import '@/app/Styles/Card1.css'; 


export const Card1 = () => (
  <Card 
  id='my-card'
  isHoverable isPressable
  
  style={{position: 'relative', maxWidth: '800px', outline: '0px solid lime', margin: '0 auto'}}
  >
    {/* style={{position: "absolute", bottom: "0%", transform:"translate(4.4rem, 6.7rem )", margin: "0 auto"}}  */}
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text   id="Card1-text"  size={12} weight="bold" transform="uppercase" color="#ffffffAA">

          What to watch
        </Text>
        <Text id="Card1-header"  h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-4.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);