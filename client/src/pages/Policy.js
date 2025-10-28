import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We collect essential information to manage your pet shop efficiently
            (account details, inventory, customer data). This data is used
            solely to provide and improve our service, and may be shared with
            trusted partners who help us operate. We prioritize your data
            security and will never sell your information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
