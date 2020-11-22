import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

import "./custom-designs.styles.scss";

const CustomDesigns = () => (
  <Container className='mt-3'>
    <Jumbotron>
      <h1>Have an idea for a perfect design?</h1>
      <p>
        When words fail, say it with flowers, say it with us. Here at INTO YOU,
        we are happy to make custom designs of flowers of your choosing! Price
        will vary depending on the flowers that will be used.
      </p>
      <p>
        <Button variant='primary'>Learn more about custom designs</Button>
      </p>
    </Jumbotron>
  </Container>
);

export default CustomDesigns;
