import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUsers } from "react-icons/fa";
import { RiBuildingFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import styles from "@/styles/Hero.module.css"
import { Slider } from 'primereact/slider';
import { CiTwitter } from "react-icons/ci";
import { Container, Dropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [priceRange, setPriceRange] = useState([2500, 7500]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  const handleClickOutside = (event) => {
    // Close dropdown if clicked outside of it
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Use effect to add event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.hero}>
      <video className={styles.hero_vedio} id="ban_video" muted loop autoPlay>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.hero_content}>
        <Container>
          <h2 className="">Your real estate financing <br /> has become easier</h2>
          <form action="" className={styles.back_inputs}>
            <div className="row">
              <div className="col-md-3">
                <select className={`form-select ${styles.formSelect}`}>
                  <option data-display="Condition Of The Property">Condition Of The Property</option>
                  <option value="1">one</option>
                  <option value="2">one</option>
                  <option value="3">one</option>
                  <option value="4">one</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className={styles.input_locatin}>
                  <input type="text" required placeholder="Enter Location" className={`form-control ${styles.formControl}`} />
                  <div className={styles.icon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <select className={`form-select ${styles.formSelect}`}>
                  <option data-display="Enter Location">Enter Location</option>
                  <option value="1">one</option>
                  <option value="2">one</option>
                  <option value="3">one</option>
                  <option value="4">one</option>
                </select>
              </div>
            </div>

            <div className={`row pt-4`}>
              <div className="col-md-3">
                <select className={`form-select ${styles.formSelect}`}>
                  <option data-display="Beds & Baths">Beds & Baths</option>
                  <option value="1">one</option>
                  <option value="2">one</option>
                  <option value="3">one</option>
                  <option value="4">one</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className={`form-select ${styles.formSelect}`}>
                  <option data-display="Area (Sqft)">Area (Sqft)</option>
                  <option value="1">one</option>
                  <option value="2">one</option>
                  <option value="3">one</option>
                  <option value="4">one</option>
                </select>
              </div>
              <div className="col-md-3">
                <div className={styles.dropMenu_hero} ref={dropdownRef}> {/* Attach ref to dropdown */}
                  <div className={styles.niceSelect} onClick={toggleDropdown}>
                    Price
                  </div>
                  <div className={`${styles.uldropMenu} ${isDropdownOpen ? styles.visible : ''}`}>
                    <div className={styles.range_price}>
                      <div className={styles.priceInput}>
                        <div className={styles.field}>
                          <span>From</span>
                          <input
                            type="number"
                            className={styles.inputMin}
                            value={priceRange[0]} // Use value instead of defaultValue for controlled input
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          />
                        </div>
                        <div className={styles.field}>
                          <span>To</span>
                          <input
                            type="number"
                            className={styles.inputMax}
                            value={priceRange[1]} // Use value instead of defaultValue for controlled input
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          />
                        </div>
                      </div>
                      <Slider
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.value)}
                        range
                        min={0} // Set min and max values
                        max={10000}
                        step={100} // Set step value
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <button className={`btn_nav_empty  w-100`}>Find</button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
}