import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import PUIUX_logo from "@/public/PUIUX_logo.svg";

import styles from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-md-4 ${styles.logo_footer}`}>
            <div className={styles["logo-footer"]}>
              <Image src={logo} alt="aqar corp" />
              <p>
                Aqar Corp is a Saudi company that works to provide integrated
                services in the field of real estate marketing.
              </p>
            </div>
          </div>
          <div className={`col-md-2 ${styles.ul_footer}`}>
            <div className={styles["ul-footer"]}>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/en">Home</Link>
                </li>
                <li>
                  <Link href="/en/about">About Us</Link>
                </li>
                <li>
                  <Link href="/en/services">Services</Link>
                </li>
                <li>
                  <Link href="/en/projects">New Projects</Link>
                </li>
                <li>
                  <Link href="/en/RealEstateFinance">
                    Real Estate Finance
                  </Link>
                </li>
                <li>
                  <Link href="/en/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-md-3 ${styles.ul_footer}`}>
            <div className={styles["ul-footer"]}>
              <h4>Contact US</h4>
              <div className={styles["flex-gap-contect-foot"]}>
                <a href="#" target="_blank" className={styles["contact-foot"]}>
                  <FaMapMarkerAlt  />
                  <p>
                    Lorem Ipsum Is Simply Dummy <br /> Text Of The Printing
                  </p>
                </a>

                <a
                  href="mailto:Aqarcorb@Info.Com"
                  target="_blank"
                  className={styles["contact-foot"]}
                >
                  <FaEnvelope />
                  <p>Aqarcorb@Info.Com</p>
                </a>
                <a
                  href="tel:+971507813230"
                  target="_blank"
                  className={styles["contact-foot"]}
                >
                  <FaPhoneAlt />
                  <p> +971 50 781 3230</p>
                </a>
              </div>
            </div>
          </div>
          <div className={`col-md-3 ${styles.sub_footer}`}>
            <div className={styles["foot-sub"]}>
              <h4>Subscribe To Our Newsletter</h4>
              <p>Subscribe Now To Get All The Latest News</p>
              <form className={styles.search} action="#" id="myForm">
                <div className={styles["search__button"]}>
                  <div className={styles["search__icon"]}>
                    <FaEnvelope />
                  </div>
                </div>
                <input
                  placeholder="Enter Your Email"
                  className={styles["search__input"]}
                  id="search__input"
                  type="email"
                />
                <button
                  type="submit"
                  className={styles["btn_nav_empty"]}
                  id="submit_foot"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
              <div className={styles["gap-flex"]}>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <CiTwitter />
                </a>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-snapchat"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["foot-puiux"]}>
          <p>
            All Copy Rights Reserved For <span>Aqar Crop</span> - 2024
          </p>
          <Link href="https://puiux.com/">
            <Image
              loading="lazy"
              src={PUIUX_logo}
              alt="puiux"
              className={styles["puiux-img"]}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
