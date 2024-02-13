import { NextPage } from "next";
import { Attribution } from "@personaxyz/attribution-sdk";

const About: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <h1>You can also track events here</h1>
      <button
        onClick={() => {
          Attribution.track("about-page-button-click", { foo: "bar" });
        }}
      >
        Track on about page
      </button>
    </div>
  );
};

export default About;
