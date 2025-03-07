import React from "react";
import Hero from "../../Component/HeroSection/Hero";
import WhatWeDo from "../../Component/WhatWeDoSection/WhatWeDo";
import CostSaving from "../../Component/CostSaving/CostSaving";
import PatientJourney from "../../Component/PatientJourney/PatientJourney";
const LandingPage = () => {
  console.log("inside landing page");
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <PatientJourney />
      <CostSaving />
    </div>
  );
};

export default LandingPage;
