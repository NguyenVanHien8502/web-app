import { Image } from "react-bootstrap";
import styles from "../app/app.module.css";

export default function AppContent() {
  const arr = new Array(25).fill(1);
    return (
      <div className={styles.content}>
        <div className={styles.content__main_container}>
          <div className={styles.main_head}>GỢI Ý HÔM NAY</div>
          <div className={styles.main_content}>
            <div className={styles.main_content__container}>
              {arr.map((item, index) => {
                return (
                  <a className={styles.product_container} key={index} href="/viewProduct">
                    <div className={styles.product_container__image}>
                      <Image
                        src="/images/iphone15.jpg"
                        alt=""
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <div className={styles.product_container__desc}>
                      <div className={styles.product_container__desc__title}>
                        title
                      </div>
                      <div
                        className={styles.product_container__desc__price_sold}
                      >
                        <div className={styles.price}>7.000đ</div>
                        <div className={styles.sold}>Đã bán 10</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}