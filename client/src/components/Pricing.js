import React from "react";
import { Link } from "react-router-dom";
import pricingStyles from "../styles/Pricing.module.scss";

export default function Pricing() {
  return (
    <>
      <section className={`container ${pricingStyles.container}`}>
        <div>
          <h2>Basic</h2>
          <h4>10 jobs post per month</h4>
          <h3>$100</h3>
          <Link to="/payment">
            <button>select</button>
          </Link>
        </div>
        <div>
          <h2>Standard</h2>
          <h4>20 jobs post per month</h4>
          <h3>$200</h3>
          <Link to="/payment">
            <button>select</button>
          </Link>
        </div>
        <div>
          <h2>Premium</h2>
          <h4>30 jobs post per month</h4>
          <h3>$300</h3>
          <Link to="/payment">
            <button>select</button>
          </Link>
        </div>
      </section>
    </>
  );
}
