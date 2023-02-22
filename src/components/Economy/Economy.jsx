import "./Economy.scss";

import personalFinances from "../Images/Personal-Finances.png";
import bankingCoverage from "../Images/Banking-Coverage.png";
import consumerPayments from "../Images/Consumer-Payments.png";

const Economy = () => {
  return (
    <section class="economy">
      <div class="container">
        <ul class="economy__list">
          <li class="economy__item">
            <img
              class="economy__icon"
              src={personalFinances}
              alt="Personal-Finances"
              width="106"
              height="106"
            />
            <h4 class="economy__title">Personal Finances</h4>
            <p class="economy__text">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </li>
          <li class="economy__item">
            <img
              class="economy__icon"
              src={bankingCoverage}
              alt="Banking-Coverage"
              width="106"
              height="106"
            />
            <h4 class="economy__title">Banking & Coverage</h4>
            <p class="economy__text">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </li>
          <li class="economy__item">
            <img
              class="economy__icon"
              src={consumerPayments}
              alt="Consumer-Payments"
              width="106"
              height="106"
            />
            <h4 class="economy__title">Consumer Payments</h4>
            <p class="economy__text">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Economy;
