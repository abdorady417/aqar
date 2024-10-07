import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/ProductsHero.module.css"
import title_img from "@/public/title-img.svg"
import { FaHeart, FaMapMarkerAlt, FaArrowRight, FaBed, FaBath, FaRuler } from "react-icons/fa";
export default function ProductsHero() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
    {
      id: 2,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
    {
      id: 3,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
    {
      id: 4,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
    {
      id: 5,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
    {
      id: 6,
      images: [
        "/imgcard3.png",
        "/imgcard2.png",
        "/imgcard3.png",
        "/imgcard4.png",
        "/imgcard5.png",
        "/imgcard6.png",
      ],
      price: "120 AED",
      title: "Super Luxury Finishing Apartment Lorem Ipsum",
      location: "Lorem Ipsum Is Simply Dummy Text",
      rooms: "2 Rooms",
      bathrooms: "1 Bathroom",
      area: "700 M2",
    },
  ]);

  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container >
      <div className={styles.poductsCard}>
        <div className={styles.slider_title}>
          <div className={styles.div}>
            <Image src={title_img} alt="aqar corp" width={50} height={50} />
            <h2>Find the latest <br /> properties here</h2>
          </div>
          <Link href="/projects" className="btn_nav_empty">
            Show All
            <FaArrowRight />
          </Link>
        </div>
        <div className="row">
          {properties.map((property, index) => (
            <div key={property.id} className="col-md-4">
              <div className={styles.pad15}>
                <div className={styles.relative_img}>
                  <Slider {...sliderSettings}>
                    {property.images.map((imageSrc, i) => (
                      <div key={i} className={styles.item}>
                        <Image src={imageSrc} alt={`Property ${index}`} width={300} height={200} />
                      </div>
                    ))}
                  </Slider>
                  <div className={styles.off}>
                    <FaHeart />
                  </div>
                </div>
                <div className={styles.aside1}>
                  <h6>{property.price}</h6>
                  <div className={styles.who_you}>
                    <p>distinct</p>
                  </div>
                </div>
                <h4 className={styles.h4}>{property.title}</h4>
                <div className={styles.aside2}>
                  <FaMapMarkerAlt />
                  <p>{property.location}</p>
                </div>
                <hr />
                <div className={styles.aside3}>
                  <div className={styles.aside2}>
                    <FaBed />
                    <p>{property.rooms}</p>
                  </div>
                  <div className={styles.aside2}>
                    <FaBath />
                    <p>{property.bathrooms}</p>
                  </div>
                  <div className={styles.aside2}>
                    <FaRuler />
                    <p>{property.area}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Container>
  );
}
