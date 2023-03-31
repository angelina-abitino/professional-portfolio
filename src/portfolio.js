/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Angelina Abitino",
  title: "Hi, I'm Angelina",
  subTitle: emoji(
    "A passionate Data Analyst with experience creating data visualizations 📊 using SQL / Python / R / Tableau."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yk9_g7QLETGbxJ_SXlKakLJ755w2dT7w/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/angelina-abitino",
  linkedin: "https://www.linkedin.com/in/angelinaabitino/",
  gmail: "angelina.abitino@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ENTHUSIASTIC DATA ANALYST WHO WANTS TO LEVERAGE DATA TO ITS FULLEST EXTENT",
  skills: [
    emoji(
      "⚡️ Deeply explore, analyze, and understand data using SQL and data visualization tools"
    ),
    emoji(
      "⚡️ Craft thoughtfully designed visualizations that make it easy for you to gain insights"
    ),
    emoji(
      "⚡️ Communicate data analysis and offer recommendations to improve outcomes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Colorado Boulder",
      logo: require("./assets/images/CUBoulderCircularLogo.png"),
      subHeader: "Doctor of Philosophy in Computer Science (In Progress)",
      duration: "August 2021 - Present",
      desc: "Participated in research to support AI for education sponsored by the National Science Foundation AI Institute.",
      descBullets: [
        "Abitino, A., Pugh, S. L., Peacock, C. E., & D’Mello, S. K. (2022, July). Eye to Eye: Gaze Patterns Predict Remote Collaborative Problem Solving Behaviors in Triads. In Artificial Intelligence in Education: 23rd International Conference, AIED 2022, Durham, UK, July 27–31, 2022, Proceedings, Part I (pp. 378-389).",
        "Moulder, R., Booth, B., Abitino, A., & D'Mello, S. (2023, March). Recurrence Quantification Analysis of Eye Gaze Dynamics During Team Collaboration. In LAK23: 13th International Learning Analytics and Knowledge Conference (pp. 430-440)."
      ]
    },
    {
      schoolName: "Swarthmore College",
      logo: require("./assets/images/SwarthmoreCircularRedLogo.png"),
      subHeader:
        "Bachelor of Science in Engineering, Bachelor of Arts in Computer Science",
      duration: "September 2014 - May 2018",
      desc: "Courses",
      descBullets: [
        "Data Structures",
        "Algorithms",
        "Artificial Intelligence",
        "Computer Vision",
        "Robotics",
        "Bioinformatics",
        "Electronic Circuits"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Aggregation Manager",
      company: "Epic",
      companylogo: require("./assets/images/EpicCircularLogo.png"),
      date: "August 2018 – June 2021",
      desc: "I lead large-scale data integration projects for major healthcare systems and worked with C-suite stakeholders, project managers, and analytics teams to ensure successful outcomes.",
      descBullets: [
        "Managed multiple team members in delivering high quality Tableau dashboards for monitoring cost and utilization metrics for value-based healthcare insurance contracts",
        "Developed and tested ETL processes to import large scale insurance claims data into healthcare systems’ data warehouses and validated the data met clinical standards",
        "Worked with clients' analytics teams to develop SQL queries for reporting"
      ]
    },
    {
      role: "Researcher",
      company: "Emotive Computing Lab",
      companylogo: require("./assets/images/CUCircularLogo.png"),
      date: "August 2021 – July 2022",
      desc: "I was a graduate student researcher working under Dr. Sidney D'Mello.",
      descBullets: [
        "Used machine learning and deep learning techniques to analyze eye movement patterns in teams working on a remote collaboration task to support the future development of AI collaborators",
        "Performed statistical analyses using Python and R libraries",
        "First authored paper on research supported by NSF National AI Institute for Student-AI Teaming (iSAT) and published in the 2022 Artificial Intelligence in Education (AIED) conference"
      ]
    },
    {
      role: "Researcher",
      company: "kLAB at RIT",
      companylogo: require("./assets/images/RITLogo.png"),
      date: "June 2017 – August 2017",
      desc: "I was awarded a grant from the National Science Foundation (NSF) to engage in deep learning research through the Research Experience for Undergraduate (REU) program.",
      descBullets: [
        "Conducted systematic literature review on proposed methods to reduce “catastrophic forgetting” in deep neural networks",
        "Designed and implemented experiments to evaluate and compare mitigation methods with Python using Keras and TensorFlow libraries",
        "Co-authored paper published in 2018 AAAI conference"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Data Stories",
  subtitle: "DATA ANALYSIS PROJECTS I'VE DONE",
  projects: [
    {
      image: require("./assets/images/chinook.png"),
      projectName: "Chinook Music Store",
      projectDesc:
        "I analyzed the Chinook Music Store sales by using SQL and Excel to create visualizations and presented my findings in a slideshow presentation.",
      footerLink: [
        {
          name: "See repo",
          url: "https://github.com/angelina-abitino/Analytics-Portfolio/tree/main/Chinook%20Music%20Store"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rentalVizHouse.png"),
      projectName: "U.S. Rental Market Explorer",
      projectDesc:
        "I created a tool that allows users to explore trends in the U.S. rental market and identify regions that suit their personal budget.",
      footerLink: [
        {
          name: "See viz",
          url: "https://public.tableau.com/app/profile/angelina.abitino/viz/U_S_RentalMarketExplorer/DataStory"
        }
      ]
    },
    {
      image: require("./assets/images/superStoreSimple.png"),
      projectName: "Superstore Discounts and Profits",
      projectDesc:
        "I analyzed the popular Superstore dataset to determine if discounts are being used effectively and offer recommendations to increase profits.",
      footerLink: [
        {
          name: "See viz",
          url: "https://public.tableau.com/app/profile/angelina.abitino/viz/SuperstoreDiscountsandProfitsDataStory/Week4DataStory"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle:
    "Achievements and certifications that have made me a better data analyst!",

  achievementsCards: [
    {
      title: "Data Visualization with Tableau",
      subtitle:
        "I completed the Data Visualization with Tableau specialization by UC Davis. Through these courses, I learned about visual design principles, how to navigate Tableau, and how to create data stories for your intended audience.",
      image: require("./assets/images/UCDavis.png"),
      imageAlt: "UC Davis Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/ac9f6ff231af3bb9a1a9f25155067f87"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle: "",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://aaai.org/papers/11651-measuring-catastrophic-forgetting-in-neural-networks/",
      title: "Measuring Catastrophic Forgetting in Neural Networks",
      description:
        "Kemker, R., McClure, M., Abitino, A., Hayes, T., & Kanan, C. (2018, April). Measuring catastrophic forgetting in neural networks. In Proceedings of the AAAI conference on artificial intelligence (Vol. 32, No. 1)."
    },
    {
      url: "https://link.springer.com/chapter/10.1007/978-3-031-11644-5_31",
      title:
        "Eye to Eye: Gaze Patterns Predict Remote Collaborative Problem Solving Behaviors in Triads",
      description:
        "Abitino, A., Pugh, S. L., Peacock, C. E., & D’Mello, S. K. (2022, July). Eye to Eye: Gaze Patterns Predict Remote Collaborative Problem Solving Behaviors in Triads. In Artificial Intelligence in Education: 23rd International Conference, AIED 2022, Durham, UK, July 27–31, 2022, Proceedings, Part I (pp. 378-389). Cham: Springer International Publishing."
    },
    {
      url: "https://dl.acm.org/doi/abs/10.1145/3576050.3576113",
      title:
        "Recurrence Quantification Analysis of Eye Gaze Dynamics During Team Collaboration",
      description:
        "Moulder, R., Booth, B., Abitino, A., & D'Mello, S. (2023, March). Recurrence Quantification Analysis of Eye Gaze Dynamics During Team Collaboration. In LAK23: 13th International Learning Analytics and Knowledge Conference (pp. 430-440)."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Publications",
  subtitle: "",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Shoot me an email if you want to discuss a project or just want to say hey!",
  email_address: "angelina.abitino@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
