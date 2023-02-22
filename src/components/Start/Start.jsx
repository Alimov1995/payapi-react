import "./Start.scss";

const Start = () => {
  return (
    <section class="start">
      <div class="container">
        <div class="start__element">
          <h2 class="start__title">Ready to start?</h2>
          <form>
            <input
              type="email"
              class="wrapper__email"
              name="Your email"
              placeholder="Enter email address"
              autocomplete="off"
              required
            />
            <button type="submit" class="wrapper__btn">
              Schedule a Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Start;
