import { Card, Col, Row, Button, Text } from "@nextui-org/react";


import '@/app/Styles/Card1.css'; 


export const Card5 = () => (
  <Card  
  // style={{position: 'relative', maxWidth: '850px', outline: '0px solid lime', margin: '0 auto'}}
  id='my-card'
  isHoverable isPressable 
  // css={{ w: "100%", h: "400px" }}
  
  >
    {/* style={{position: "absolute", bottom: "0%", transform:"translate(10rem, 8.6rem )", margin: "0 auto"}}  */}
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
      
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          Your checklist for better sleep
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-5.jpeg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Breathing App
              </Text>
              <Text color="#d1d1d1" size={12}>
                Get a good night's sleep.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Get App
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);