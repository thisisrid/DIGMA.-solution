import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import bannerImg from "../../../Images/bannerImg.png";
const Banner = () => {
  const banner = {
    minHeight: "450px",
    maxHeight: "100vh",
    display: "grid",
    placeItems: "center",
  };
  return (
    <div style={banner}>
      <Row style={{ marginRight: 0 }}>
        <Col
          sm={7}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="px-4 text-center text-light mt-5 ">
            <h2 className="bold">Your Digital Marketing Solution</h2>
            <p>
              Provide all kind of seo services and help to improve seo ranking.
            </p>
            <Button variant="light">LEARN MORE</Button>
          </div>
        </Col>
        <Col sm={5} className="p-4">
          <Image src={bannerImg} fluid />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
