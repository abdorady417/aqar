import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Container, Dropdown } from "react-bootstrap";
import styles from "@/styles/Home.module.css"
import title_img from "@/public/title-img.svg"
import { FaHeart, FaMapMarkerAlt, FaArrowRight, FaBed, FaBath, FaRuler } from "react-icons/fa";
export default function Page() {


    return (
        <Container >
            <div className={styles.searches}  >
                <div className={styles.title_searches}>
                <Image src={title_img} alt="aqar corp" width={50} height={50} />
                    <h2>Popular searches <br /> in the UAE</h2>
                </div>

                {/* Dubai Apartments */}
                <div className={styles.searches_content}>
                    <h2 className="">Dubai Apartments</h2>
                    <div className="row ">
                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select" >
                                    Dubai Apartments
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Abu Dhabi Apartments
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Apartments In Other Emirates
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Dubai Villas */}
                <div className={styles['searches_content']}>
                    <h2 className="">Dubai Villas</h2>
                    <div className="row ">
                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Dubai Villas
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Dubai Villas
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Villas In Other Emirates
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Dubai Lands */}
                <div className={styles['searches_content']}>
                    <h2 className="">Dubai Lands</h2>
                    <div className="row ">
                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Dubai Lands
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Dubai Lands
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="form-select">
                                    Lands In Other Emirates
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} href="/abu-dhabi-apartments">Abu Dhabi Apartments</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/dubai-marina">Dubai Marina</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/jlt">Jumeirah Lake Towers (JLT)</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/downtown-dubai">Downtown Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/business-bay">Business Bay</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
