import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImage from "../../img/rigo-baby.jpg";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function BasicExample() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>

<Container>
      <Card >
        <Card.Img className="imgSize" variant="top" src={cardImage} />
        <Card.Body className="cardsAlign">
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="cards-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nam
            unde quos est expedita.
          </Card.Text>
        </Card.Body>
        <div className="button-section">
          <Button className="cardsBtn" variant="primary">
            Find Out More!
          </Button>
        </div>
      </Card>
    </Container>

</ThemeProvider>
  );
}

export default BasicExample;
