import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy | ShopEase"}>
      <div className="row contactus ">
        <div className="col-md-8">
        <h1 className="bg-dark p-3 text-white text-center">PRIVACY POLICY</h1>
          <p>1. We collect personal information such as name, email address, and shipping address to process orders and provide customer support.</p>
          <p>2. We may use cookies and similar technologies to enhance your browsing experience and track usage patterns on our website.</p>
          <p>3. Your information may be shared with third-party service providers for order fulfillment, payment processing, and marketing purposes.</p>
          <p>4. We are committed to protecting your privacy and will not sell or rent your personal information to third parties.</p>
          <p>5. You have the right to access, update, and delete your personal information stored on our website.</p>
  
        </div>
      </div>
    </Layout>
  );
};

export default Policy;