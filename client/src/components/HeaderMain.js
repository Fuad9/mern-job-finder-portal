import React from "react";
import NavBar from "./NavBar";
import headerStyles from "../styles/HeaderMain.module.scss";

export default function HeaderMain({ children }) {
  return (
    <section className="container">
      <div className={headerStyles.header}>
        <NavBar />
        <div className={headerStyles.children}>{children}</div>
        <div className={headerStyles.counters}>
          <div>
            <div>
              <h2>1500</h2> <br />
              <h4>Candidates</h4>
            </div>
            <div>
              <h2>70</h2> <br />
              <h4>Jobs Posted</h4>
            </div>
            <div>
              <h2>100</h2> <br />
              <h4>Jobs Filled</h4>
            </div>
            <div>
              <h2>150</h2> <br />
              <h4>Companies</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
