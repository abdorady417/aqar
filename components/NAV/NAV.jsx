import styles from "@/styles/NAV.module.css";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import { FaGlobe, FaHeart, FaBuilding, FaUnlock, FaSearch, FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Using FaGlobe instead of FaEarthAmericas
import logo from "@/public/logo.png";
import { useRouter } from "next/router"; 
export default function NAV() {
  const router = useRouter(); 
  const currentURL = window.location.href;  

  const isActiveLink = (path) => {
    return currentURL.includes(path) ? styles.active : ""; 
  };

  return (
    <>
      <div className={styles.nav_top} id="NAV">
        <div className="container">
          <div className={styles.flex}>
            <Link href="#" className={styles.lang_nav} id="en_ar">
              <FaGlobe />
              <p> عربى</p>
            </Link>
            <div className={styles.div}>
              <Dropdown className={styles.ulDropMenu}>
                <Dropdown.Toggle className={styles.userPortfolio} id="dropdown-basic">
                  <span>A</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${styles.ulDropMenu} ${styles.dropdownMenu}`}>
                  <Dropdown.Item as={Link} href="/en/cp" className={styles.userContent}>
                    <div className={styles.userPortfolio}>
                      <span>A</span>
                    </div>
                    <div>
                      <p>hello </p>
                      <h5>abdo rady</h5>
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item as={Link} href="/en/Favourite-Properties" className={styles.langNav}>
                    <FaHeart />
                    <p> Favourite Properties</p>
                  </Dropdown.Item>

                  <Dropdown.Item as={Link} href="/en/provider" className={styles.langNav}>
                    <FaBuilding />
                    <p> advertisements</p>
                  </Dropdown.Item>

                  <Dropdown.Item as={Link} href="/en/security" className={styles.langNav}>
                    <FaUnlock />
                    <p> Security</p>
                  </Dropdown.Item>

                  <Dropdown.Item as={Link} href="/en/mysearches" className={styles.langNav}>
                    <FaSearch />
                    <p> my searches</p>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item as="button" className={`${styles.langNav} bg-transparent`}>
                    <FaSignOutAlt />
                    <p> log out</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link href="/en/login" className={styles.lang_nav}>
                <FaUserCircle />
                <p> Log In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.nav_fixed}>
        <div className="container">
          <nav className={styles.nav_bar}>
            <Link href="/en/" className={styles.logo_img_w}>
              <Image loading="lazy" src={logo} alt="aqar corp" className={styles.logo_main} />
            </Link>
            <ul className={styles.nav_desktop}>
              <li>
                <Link href="/en" className={isActiveLink("/en")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/en/projects" className={isActiveLink("/en/projects")}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/en/RealEstateFinance" className={isActiveLink("/en/RealEstateFinance")}>
                  Real Estate Finance
                </Link>
              </li>
            </ul>
            <div className={`${styles.btn_nav} ${styles.nav_desktop}`}>
              <div className={styles.search_navbar}>
                <FaSearch className="fa-lg" />
              </div>
              <Link href="/en/add-Ad" className={styles.btn_nav_empty}>
                Place Your Ad
              </Link>
            </div>
            <div
              className={styles.y}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <FaBars />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}