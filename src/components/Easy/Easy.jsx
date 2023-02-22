import "./Easy.scss";

const Easy = () => {
  return (
    <section class="easy">
      <div class="container">
        <div class="easy__element">
          <div class="easy__left">
            <div class="easy__box">
              <span class="easy__circle"></span>
              <span class="easy__circle easy__circle--second"></span>
              <span class="easy__circle easy__circle--thirt"></span>
            </div>
            <div class="easy__code code">
              <p class="code__text">
                &#60;form id="form-id" method="GET"&#62; &#60;/form&#62;
                <br />
                &#60;script <br />
                &nbsp;&nbsp;src="https://loremipsum.com/api.js" <br />
                &nbsp;&nbsp;data- client-name="Your Company's Name" <br />
                &nbsp;&nbsp;data-form- id="form-id" <br />
                &nbsp;&nbsp;data-key="test_key" <br />
                &nbsp;&nbsp;data-product="transactions" <br />
                &nbsp;&nbsp;data-env="sandbox"&#62; <br />
                &#60;/script&#62;
              </p>
            </div>
          </div>
          <div class="easy__right right">
            <h2 class="right__title">Easy to implement</h2>
            <p class="right__text">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;
