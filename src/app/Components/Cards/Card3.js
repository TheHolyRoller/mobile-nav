import { Card, Col, Text } from "@nextui-org/react";
import '@/app/Styles/Card1.css'; 

export const Card3 = () => (
  <Card 
  
  id='my-card'
  
  isHoverable css={{ bg: "$black", w: "100%" }}
  
  // style={{position: 'relative', maxWidth: '800px', outline: '0px solid lime', margin: '0 auto'}}

  >
    {/* style={{position: "absolute", bottom: "0%", transform:"translate(3.3rem, 6.7rem )", margin: "0 auto"}}  */}
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Supercharged
        </Text>
        <Text h4 color="white">
          Creates beauty like a beast
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);