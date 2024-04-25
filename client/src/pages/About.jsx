import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us | ShopEase"}>
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
          Welcome to our e-commerce website, where we strive to provide you with a seamless shopping experience. Our passion for quality products and excellent customer service drives everything we do. We curate a diverse selection of items, from fashion and accessories to home goods and electronics, ensuring there's something for everyone. Our team is dedicated to meeting your needs and exceeding your expectations. Thank you for choosing us for your online shopping needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;