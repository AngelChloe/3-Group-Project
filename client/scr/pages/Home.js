import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Carousel />
            <Container className="my-5">
                <Row>
                    <Col data-aos="fade-up" className="m-4 default">
                        <h1>Ready to go on a Vacation?</h1>
                        <p>
                            Trips take a lot of planning, so let us help you out!.</p>

                            With our app, you and your traveling companions can:
                            <ul><li>Collaborate together to create a plan of 
                                <strong>when</strong> to go, <strong>where</strong> to go, and the AMAZING attractions you all would like to visit.</li>
                            <li>Chat and organize the details of your upcoming trip.</li>
                            <li>View the schedule for your trip.</li>
                            <li>Get your whole group on the same page.</li>
                            <li>See a countdown to the start of your trip!</li>
                        </ul>
                        <p>Get you group ready to get away with 3-Group!</p>
                        <hr />
                        <h6>If you’re new, please press “Register” at the top of this page (it is free). If you have already started organizing a trip, just “Log In” to resume your plans.</h6>
                    </Col >
                </Row>
            </Container>

        </>
    );
};

export default Home;