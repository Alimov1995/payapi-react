import "./Who.scss";
import tesla from "../Images/tesla.png"
import microsoft from "../Images/microsoft.png"
import hp from "../Images/hp.png"
import oracle from "../Images/oracle.png"
import google from "../Images/google.png"
import nvidia from "../Images/nvidia.png"

const Who = () => {
  return (
    <section class="who">
      <div class="container">
        <div class="who__element">
          <div class="who__left">
            <h2 class="who__title">Who we work with</h2>
            <p class="who__text">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <button class="who__btn">About Us</button>
          </div>
          <div class="who__right">
            <img src={tesla} alt="tesla" width="129" height="17" />
            <img
              src={microsoft}
              alt="microsoft"
              width="145"
              height="31"
            />
            <img src={hp} alt="hp" width="140" height="27" />
            <img src={oracle} alt="oracle" width="131" height="17" />
            <img src={google} alt="google" width="96" height="33" />
            <img src={nvidia} alt="nvidia" width="137" height="26" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Who;
