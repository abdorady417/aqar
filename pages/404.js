import Link from 'next/link';
import styles from "@/styles/404.module.css";

export default function NotFound() {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className="row">
          <div className={`col-sm-10  m-auto   text-center`}>
            <div className={styles.four_zero_four_bg}>
              <h1 className="text-center">404</h1>
            </div>

            <div className={styles.contant_box_404}>
              <h3 className={styles.h2}>
                Look like you re lost
              </h3>

              <p>The page you are looking for is not available!</p>

              <Link href="/" className={styles.link_404}>Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
