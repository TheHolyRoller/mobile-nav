import { Card, Col, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card
  isHoverable isPressable
  
  css={{ w: "100%" }}>
    <Card.Header style={{position: "absolute", bottom: "0%", transform:"translate(4.3rem, 6.7rem )", margin: "0 auto"}} css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Plant a tree
        </Text>
        <Text h4 color="white">
          Contribute to the planet
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-3.jpeg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);