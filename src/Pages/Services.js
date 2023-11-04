import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import ServiceDetails from './ServiceDetails';

function Services() {
  return (
    <div>
      <h1>Explore Our Imaginary Services</h1>
      <p>
        We offer a wide range of non-existent services tailored to your
        fictional needs. Our services are designed to address the most
        imaginative and challenging requirements. Whether you're looking for
        out-of-this-world consulting, unbelievable design, or dreamlike
        development, our non-existent team has you covered. Browse through our
        list of services to discover what we can offer to meet your unreal
        expectations.
      </p>

      <LinkContainer to="/services/servicedetails">
        <Button> Service Details</Button>
      </LinkContainer>

      {/* <link to={"/services/" + ServiceDetails}><p>Service Details</p></link> */}
    </div>
  );
}

export default Services;
