import "./Wrapper.scss";

import wrapperImg from "../Images/wrapper-img.png";
const Wrapper = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__element">
          <div className="wrapper__left">
            <h1 className="wrapper__title">
              Start building with our APIs for absolutely free.
            </h1>
            <form>
              <input
                type="email"
                className="wrapper__email"
                name="Your email"
                placeholder="Enter email address"
                autocomplete="off"
                required
              />
              <button type="submit" className="wrapper__btn">
                Schedule a Demo
              </button>
            </form>
            <p className="wrapper__text">Have any questions? Contact Us</p>
          </div>
          <div className="wrapper__right">
            <img
              className="wrapper__image"
              src={wrapperImg}
              alt="phone-image"
              width="263"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
