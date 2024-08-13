import React from "react";
import SteveLogo from "../../../assets/images/DeveloperLogos/IMG_20240717_215350_439.jpg";
import DeveloperDisplay from "./DeveloperDisplay";

function Developers() {
  const developers = [
    {
      name: "kalaiyarasan",
      logo: SteveLogo,
      role: "DevOps",
      position: "Pre Final Year Student in Karpagam College Of Engineering",
    },
    {
      name: "Siranjeevi",
      logo: SteveLogo,
      role: "Web Developer",
      position: "Pre Final Year Student in Karpagam College Of Engineering",
    },
  ];

  return (
    <div>
      {developers.map((developer, index) => (
        <DeveloperDisplay
          key={index}
          name={developer.name}
          logo={developer.logo}
          role={developer.role}
          position={developer.position}
        />
      ))}
    </div>
  );
}

export default Developers;
