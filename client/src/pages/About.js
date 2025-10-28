import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to PetUs, your ultimate solution for streamlined pet shop
            management. We empower pet shop owners to efficiently manage
            inventory, sales, customer data, and appointments, giving you more
            time to focus on what matters most: happy pets and satisfied
            customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
