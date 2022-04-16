import styles from "./styles.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function ScrollToTop() {
  const [scrollPx, setScrollPx] = useState(0);
  AOS.init();

  window.addEventListener("scroll", () => {
    setScrollPx(window.scrollY);
  });
  console.log(scrollPx);

  return (
    <div
      className={`scrollToTopContainer ${scrollPx < 500 && "d-none"}`}
      onClick={() => window.scrollTo(0, 0)}
      data-aos="fade-left"
    >
      <button className="cta">
        <span className="hover-underline-animation"> Scroll to top </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ScrollToTop;
