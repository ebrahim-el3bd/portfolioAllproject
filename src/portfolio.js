/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Profile from './containers/profile/Profile';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "SamiColon",
  title: "Hi all, I'm Ibrahim El3bd",
  subTitle: emoji(
    " I fell in love with programming and I have at least learnt something, I think… , I am fluent in classics like React and Javascript. My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing. Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js ..."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EbRnkIX9o9W34GunqHkS_BuNmv3GS2Ma/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ebrahim-el3bd",
  linkedin: "https://www.linkedin.com/in/ebrahim-elabd-198b92213/",
  facebook: "https://www.facebook.com/ebrahem.elabd.7",
  medium: "https://medium.com/@ebrahimelabd798",
  twitter: "https://twitter.com/ebrahim_elabd34",
  whatsapp:"https://wa.me/01027182684",
  gmail:"ebrahimelabd30@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};





/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I MANAGED TO CREATE DURING MY TRAINING PERIOD",
  projects: [
    {
      image: require("./assets/images/Bolby.png"),
      projectName: "Bolby",
      projectDesc: "This Site Was Created By Html And Css And Use Preprocessors SASS And Use Font Awesome And JavaScript",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: " https://ebrahim-el3bd.github.io/Bolby/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Bolby"
        }
      ]
    },
    {
      image: require("./assets/images/SpecilDesign.png"),
      projectName: "Specil Design",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use LocalStorage To Save Some Settings.",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Design-Ze/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Design-Ze"
        }
      ]
    },
    {
      image: require("./assets/images/Bandi.png"),
      projectName: "Bandi",
      projectDesc: "This Site Was Created By Html And Css And Javascript And BootStrap5 And JQuery And Preprocessors SASS",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/bondi/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/bondi"
        }
      ]
    },
    {
      image: require("./assets/images/Weather.png"),
      projectName: "Weather",
      projectDesc: "This Site Was Created By Html And Css And Javascript And JQuery And Use API ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Weather/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Weather"
        }
      ]
    },
    {
      image: require("./assets/images/Crud.png"),
      projectName: "Crud",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use LocalStorage To Save All Data ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: " https://ebrahim-el3bd.github.io/Cruds/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Cruds"
        }
      ]
      },
    {
      image: require("./assets/images/WaZaker.png"),
      projectName: "WaZaker",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use API",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/WaZaker/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/WaZaker"
        }
      ]
    },
    {
      image: require("./assets/images/Eleman.png"),
      projectName: "Eleman",
      projectDesc: "This Site Was Created By Html And Css And Javascript And JQuery And Use API",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Eleman-WebSite/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Eleman-WebSite"
        }
      ]
    },
    {
      image: require("./assets/images/Profile.png"),
      projectName: "Profile",
      projectDesc: "This Site Was Created By Html And Css And Javascript And JQuery And Flaticon",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: " https://ebrahim-el3bd.github.io/Profile/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Profile"
        }
      ]
    },
    {
      image: require("./assets/images/Registration.png"),
      projectName: "Registration",
      projectDesc: "This Site Was Created By Html And Css And JavaScript Use LocalStorage To Save All Data",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "  https://ebrahim-el3bd.github.io/Registration/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Registration"
        }
      ]
    },
    {
      image: require("./assets/images/Brunch.png"),
      projectName: "Brunch",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And BootStrap And JQuery And OwlCarousel ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "  https://ebrahim-el3bd.github.io/Brunch/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Brunch"
        }
      ]
    },
    {
      image: require("./assets/images/Character.png"),
      projectName: "Character",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Character/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Character"
        }
      ]
    },
    {
      image: require("./assets/images/Rento.png"),
      projectName: "Rento",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And popper",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Rento/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Rento"
        }
      ]
    },
    {
      image: require("./assets/images/Scorilo.png"),
      projectName: "Scorilo",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And BootStrap",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Scorilo/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Scorilo"
        }
      ]
    },
    {
      image: require("./assets/images/SixteenColothing.png"),
      projectName: "Sixteen Colothing",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And BootStrap",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Sixteen_Clothing/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Sixteen_Clothing"
        }
      ]
    },
    {
      image: require("./assets/images/CrudOp.png"),
      projectName: "Crud",
      projectDesc: "This Site Was Created By Html And Css And JavaScript Use LocalStorage To Save All Data",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/CrudOp/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/CrudOp"
        }
      ]
    },
    {
      image: require("./assets/images/SimpleHouse.png"),
      projectName: "Simple House",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/SimpleHouse/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/SimpleHouse"
        }
      ]
    },
    {
      image: require("./assets/images/Spicyo.png"),
      projectName: "Spicyo",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And BootStrap And OwlCarousel And Popper And FontAwesome",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Spicyo/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Spicyo"
        }
      ]
    },
    {
      image: require("./assets/images/GymsoFitness.png"),
      projectName: "Gymso Fitness",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And BootStrap And FontAwesome Smoothscroll",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Gymso-Fitness/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Gymso-Fitness"
        }
      ]
    },{
      image: require("./assets/images/CrispyKitchen.png"),
      projectName: "Crispy Kitchen",
      projectDesc: "This Site Was Created By Html And Css And JavaScript And JQuery And BootStrap ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Crispy-Kitchen/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Crispy-Kitchen"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};








const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind and want to discuss ? Feel free to connect me over here 😌",
  number: "+201027182684",
  email_address: "ebrahimelabd30@gmail.com"
};

// Twitter Section


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
