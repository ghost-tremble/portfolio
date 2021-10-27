import React from "react";
import { ReactComponent as ReactLogo } from "../images/brackets.svg";
import { ReactComponent as ReactAndroid } from "../images/android-svgrepo-com.svg";
import { ReactComponent as ReactBackend } from "../images/error-svgrepo-com.svg";
const services = [
  {
    name: "Website devlopment",
    description: [
      "Web design & development",
      "E-commerce development",
      "Build fully functional web applications",
      "hosting and deployment ",
    ],
    icon: <ReactLogo />,
  },
  {
    name: "Android  development",
    description: [
      "Custom Android app development to make your vision",
      "Android app user interface designers",
      "needs and requirements for an app, become a reality",
      "QA testing the app to ensure full functionality and a positive user experience",
    ],
    icon: <ReactAndroid />,
  },
  {
    name: "Backend development",
    description: [
      "Database management and creation",
      "Api Integration and development",
      "Creation of microservices based architecture ",
      "Complete Backend solution development",
    ],
    icon: <ReactBackend />,
  },
];
export default services;
