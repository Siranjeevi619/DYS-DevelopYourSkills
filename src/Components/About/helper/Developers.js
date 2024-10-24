import React from "react";
import meganthanImage from "../../../assets/images/DeveloperLogos/meganthan.jpeg";
import kalaiyarasanImage from "../../../assets/images/DeveloperLogos/kalaiyarasan.jpeg";
import steveImage from "../../../assets/images/DeveloperLogos/IMG_20240717_215350_439.jpg";
// function Developers() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Developers

// const pseudoDevelopers = [
//   {
//     name: "Siranjeevi selvam",
//     role: "web developer",
//     imgUrl: steveImage,
//     linkedInUrl: "https://www.linkedin.com/in/siranjeevi-selvam-003626258/",
//   },
//   {
//     name: "Meganthan ",
//     role: "web developer",
//     imgUrl: meganthanImage,
//     linkedInUrl: "https://www.linkedin.com/in/meganthan-m-35608926a/",
//   },
//   {
//     name: "Kavibharathan",
//     role: "content writer",
//     imgUrl: "",
//     linkedInUrl: "",
//   },
// ];
const pseudoDevelopers = []

const actualDevelopers = [
  {
    name: "Siranjeevi",
    role: "developer",
    imgUrl: steveImage,
    linkedInUrl: "https://www.linkedin.com/in/siranjeevi-selvam-003626258/",
  },
  {
    name: "Kalaiyarasan",
    role: "admin",
    imgUrl: kalaiyarasanImage,
    linkedInUrl: "https://www.linkedin.com/in/kalaiyarasan-m-030048258/",
  },
];

const DevelopersData = pseudoDevelopers.length < 0 ? pseudoDevelopers : actualDevelopers;

export default DevelopersData;
