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
    "A data and UX professional with experience in data-driven decision-making and human-AI interaction research. I bridge the gap between analytics and user experience to create intuitive, impactful solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1A21NtqufakJ4mFmZer8I0BqsRoYaR26b/view?usp=share_link", // Set to empty to hide the button
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
    "I help mission-driven teams unlock the full potential of their data and research, turning insights into actionable strategies that drive better outcomes and enhance user experience.",
  skills: [
    emoji(
      "⚡️ Project & Research Coordination: I use my strong organizational and team management skills to coordinate logistics, streamline workflows, and keep projects on track."
    ),
    emoji(
      "⚡️ Data Governance & Profiling: Audit and unify data to assess its potential, identify gaps, and ensure compliance with governance standards."
    ),
    emoji(
      "⚡️ Data-Driven Insights: Use SQL, visualization tools, and surveys to inform decisions."
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

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
      {
      role: "Product Manager, Data Analytics",
      company: "Clarify Health",
      companylogo: require("./assets/images/clarify_logo.jpeg"),
      date: "June 2023 – February 2025",
      desc: "I directed cross-functional teams to integrate critical healthcare data into our products, enhancing data quality, accessibility, and compliance while continuously improving user experience.",
      descBullets: [
        "Spearheaded cross-functional coordination between offshore and internal teams to integrate CMS-mandated price transparency data into our product, driving improvements in data quality and delivering greater value to users",
        "Engineered SQL-based logic to integrate price transparency data into a unified database, optimizing data accessibility and enhancing functionality",
        "Engaged directly with users and product teams to gather feedback on the rollout of new price transparency data, ensuring the product met their needs and driving continuous improvements based on user insights",
        "Proposed a streamlined data filtering approach that reduced risky patient identification percentages below 0.5%, aligning with HIPAA privacy laws and mitigating legal risk"
      ]
    },
    {
      role: "Data Aggregation Manager",
      company: "Epic",
      companylogo: require("./assets/images/EpicCircularLogo.png"),
      date: "August 2018 – June 2021",
      desc: "I lead successful data integration projects for major healthcare systems, collaborating with executives, project managers, and analytics teams to ensure positive outcomes",
      descBullets: [
        "Developed standardized project management tools that improved workflow efficiency and increased on-time project completion",
        "Managed direct reports, delegating hands-on work while providing guidance, feedback, and professional development support",
        "Designed and tested ETL processes to integrate large-scale claims data while ensuring clinical data quality with a focus on user and client needs",
        "Partnered with clients’ analytics teams to create SQL queries for reporting"
      ]
    },
    {
      role: "Researcher",
      company: "Emotive Computing Lab",
      companylogo: require("./assets/images/CUCircularLogo.png"),
      date: "August 2021 – July 2022",
      desc: "I was a graduate student researcher working under Dr. Sidney D'Mello.",
      descBullets: [
        "Conducted research in the Emotive Computing Lab on human-AI collaboration and its potential applications in educational settings, supported by the NSF National AI Institute for Student-AI Teaming (iSAT)",
        "Applied statistical techniques using Python and R to analyze eye movement patterns in collaborative teams",
        "Studied user-centered design and development by iteratively designing a habit-tracking app, leveraging personas, prototypes, user test scripts, task models, and a comprehensive user research study to refine user experience and ensure alignment with user needs"
      ]
    },
    {
      role: "Researcher",
      company: "kLAB at RIT",
      companylogo: require("./assets/images/RITLogo.png"),
      date: "June 2017 – August 2017",
      desc: "Successfully secured a grant from the National Science Foundation (NSF) to conduct deep learning research as part of the Research Experiences for Undergraduates (REU) program",
      descBullets: [
        "Conducted comprehensive literature review on proposed methods to mitigate “catastrophic forgetting” in deep neural networks",
        "Developed and executed experiments using Python with Keras and TensorFlow libraries to compare mitigation methods, resulting in valuable insights",
        "Co-authored a paper that was accepted and published at the prestigious 2018 AAAI conference"
      ]
    }
  ]
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Colorado Boulder",
      logo: require("./assets/images/CUBoulderCircularLogo.png"),
      subHeader:
        "Completed 12 credits towards a Doctor of Philosophy in Computer Science",
      duration: "August 2021 - May 2022",
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
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle: "",
  projects: [
      {
      image: require("./assets/images/insta_goal.png"),
      projectName: "INSTA-GOAL",
      projectDesc:
        "I conducted an end-to-end user research study to design a habit tracking app.",
      footerLink: [
        {
          name: "See project",
          url: "https://angelina-abitino.github.io/insta-goal/"
        }
        //  you can add extra buttons here.
      ]
    },
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
      title: "CSCI 5839: User-Centered Design and Development",
      subtitle:
        "I completed CSCI 5839 at the University of Colorado Boulder. This course covered personas, prototyping, user test scripts, and task models. We conducted a comprehensive user research study and used Figma to design our own mobile application.",
      image: require("./assets/images/CUBoulderCircularLogo.png"),
      imageAlt: "UC Boulder Logo",
      footerLink: [
        {
          name: "Course Completion",
          url: "github.com/CMSgov/hospital-price-transparency/blob/master/documentation/JSON/schemas/V2.2.0_Hospital_price_transparency_schema.json"
        }
      ]
    },
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
