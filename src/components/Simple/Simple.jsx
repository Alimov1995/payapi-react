import "./Simple.scss";

import proneX1 from "../Images/phonex1.png";
import proneX2 from "../Images/phonex2.png";

const Simple = () => {
  return (
    <section class="simple">
      <div class="container">
        <div class="simple__element">
          <div class="simple__left left">
            <h2 class="left__title">Simple UI & UX</h2>
            <p class="left__text">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div class="simple__right">
            <img
              class="simple__image"
              src={proneX1}
              alt="phone"
              width="263"
              height="500"
            />
            <img
              class="simple__image"
              src={proneX2}
              alt="phone"
              width="263"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
