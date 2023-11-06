// const upcomingEvents = [
//   {
//     id: 1,
//     img: "images/upcomingEvents/mockrbi.webp",
//     title: "Mock RBI",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSdUMANKbgzSJTPriPyq470EuVFw7qtsHOTNrAXoRhlBNLpitw/viewform",
//     date: "18th March 2023",
//     timing: "4:00 PM - 6:00 PM",
//     venue: "D-001",
//     description:
//       "It’s a Mock RBI to know the implications of real-life changes made by RBI through various graphs and situations. One part of the event includes a simplified explanation of monetary policy tools, the banking system, RBI-commercial bank functioning, short-term liquidity crisis, etc. The second part of the event is a simulated discussion where real-life situations will be provided to a mock MPC committee, and accordingly, rates will be changed. The participants will now decide among three options: Save, Invest, or Borrow, and according to the decisions taken, their respective impact will be seen on their balance.",
//     contactLink: "#",
//   },
//   {
//     id: 2,
//     img: "images/upcomingEvents/anirvedaXtedx.webp",
//     title: "Diving in the Tank",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSeCIi0iTRVX3tHU71poNYt3Hz1vG85UkPyrBTN6NJ5UUlALiw/viewform",
//     date: "17th March 2023",
//     timing: "4:00 PM - 6:30 PM",
//     venue: "D-007",
//     description:
//       "The event ‘Diving in the Tank’ is about hearing the untold stories and struggles a startup faces while it starts its journey and reaches a peak point. We will be having a Shark Tank Season 2 participant Soham from AU, who will share his experiences with the audience and then we will have a case study competition where the participants will be given problem statements based on some crisis. They have to find an appropriate solution and present them.",
//     contactLink: "#",
//   },
//   {
//     id: 3,
//     img: "images/upcomingEvents/anirvedaXencode.webp",
//     title: "Getting started with Blockchain Technology",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSd7Zrk0vQf2XMKPb4Yi5QBOzqLYqJC7tW4ijW55B43CYrXZCw/viewform",
//     date: "18th March 2023",
//     timing: "2:00 PM - 5:30 PM",
//     venue: "D-002",
//     description:
//       "A speaker from Polygon will conduct a hands-on workshop revolving around cryptocurrency and smart contracts, which are essential components of Web 3.0.",
//     contactLink: "#",
//   },
//   {
//     id: 4,
//     img: "images/upcomingEvents/anirvedaXsom.webp",
//     title: "Numerology",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSd3PXTMeJbnlqRfgtirItCzYnyaT9LEVQJzPPtLpcdVKKTUBA/viewform",
//     date: "18th March 2023",
//     timing: "10:00 AM - 1:00 PM",
//     venue: "D-002",
//     description:
//       "The event ‘Numerology’ will deal with exposure to regression analysis and its application, followed by a small competition where participants will apply these concepts to a real-world problem.",
//     contactLink: "#",
//   },
//   {
//     id: 5,
//     img: "images/upcomingEvents/anirvedaXvga.webp",
//     title: "Junoon2.0",
//     registrationLink: "https://forms.gle/NXMPvczZQBwVfar7A",
//     date: "18th March 2023",
//     timing: "12:00 PM",
//     venue: "D-007",
//     description:
//       "The event ‘Junoon 2.0’ is a movie/series discussion. Participants shall discuss the aspects of an economics-based movie/series.",
//     contactLink: "#",
//   },
//   {
//     id: 6,
//     img: "images/upcomingEvents/anirvedaXdebsoc.webp",
//     title: "ECOSOC",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSdPia49z0nIsTfNdnqjV2NitcndVPFg_Q6MRB2JaJosLTWWag/viewform",
//     date: "19th March 2023",
//     timing: "10:00 AM - 4:00 PM",
//     venue: "D-001",
//     description:
//       "ECOSOC – The United Nations Economic and Social Council. The participants will be assigned countries (dignitaries), and they have to debate/discuss the given themes.",
//     contactLink: "#",
//   },
//   {
//     id: 7,
//     img: "images/upcomingEvents/anirvedaXbrahmand.webp",
//     title: "Pirates of the Cosmos 2.0",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSf4ltKlgnq8o_ct1IFOL4Hy2wUN06wcB8hG-VdToKfeNPIFww/viewform",
//     date: "19th March 2023",
//     timing: "4:30 PM - 6:30 PM",
//     venue: "D-Foyer",
//     description:
//       "A treasure hunt event where participants will be given clues and hints in various places in college related to economics and technology and reach their ultimate goal.",
//     contactLink: "#",
//   },
//   {
//     id: 8,
//     img: "images/upcomingEvents/anirvedaXsynergy.webp",
//     title: "The Partnership Playoffs",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSdaQy-hwbvWUCqm9OACYwPVoHcKf44X1h1BMmFD5pNtJ-2lVQ/viewform",
//     date: "17th March 2023",
//     timing: "4:00 PM - 6:30 PM",
//     venue: "D-002",
//     description:
//       "Brand Partnership Pitch is a unique event that combines the excitement of a pitching competition with the fun of an impersonation game. The event is designed to bring together startup clubs and established brands for a night of innovative ideas, collaboration and entertainment.",
//     contactLink: "#",
//   },
//   {
//     id: 9,
//     img: "images/upcomingEvents/anirvedaXink.webp",
//     title: "Clues & Chronicles",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLSd_WWXlyg_Gizt-eS4kTCRu3mBSb3mt-uSUJr3JPyGCUCZqYw/viewform",
//     date: "19th March 2023",
//     timing: "1:00 PM - 4:00 PM",
//     venue: "D-002",
//     description:
//       "A 2-round game where participants would go through the process of creating a news article on economics or technology through the clues provided, and then the selected teams would further present solutions to the problem statements on the newspaper industry provided to them.",
//     contactLink: "#",
//   },
//   {
//     id: 10,
//     img: "images/upcomingEvents/anirvedaXmindripple.webp",
//     title: "Wirtschaft",
//     registrationLink:
//       "https://docs.google.com/forms/d/e/1FAIpQLScShfkncxa1mPvW1idhVNesrRIXuEab8ujWlDF5U5D-esBcHQ/viewform",
//     date: "18th March 2023",
//     timing: "10:00 AM - 12:00 PM",
//     venue: "D-001",
//     description:
//       "A quiz with 25 theme-based questions on Global Economics and Econometrics of running a country that will increase the awareness about general terms of macroscale finance and global flow of money",
//     contactLink: "#",
//   },
// ]

const upcomingEvents = [
  // {
  //   id: 1,
  //   img: "images/upcomingevents/introvia.jpg",
  //   title: "Introvia",
  //   timing: "5:00 PM - 6:00 PM",
  //   date: "28 August 2023",
  //   venue: "D-001",
  //   description:
  //     "We are thrilled to officially invite you to our world of technology👩🏻‍💻and economics🤑 , a combination that you’ve probably never heard of before, intrigued yet👀? If you want to know more, join us in our introductory event: Introvia ‘23",
  //   registrationLink: "https://avforms-introvia.streamlit.app",
  // },
  // {
  //   id: 2,
  //   img: "images/upcomingevents/introvia.jpg",
  //   title: "Datanomics",
  //   timing: "2:00 PM - 6:00 PM",
  //   date: "25 September 2023",
  //   venue: "D-205",
  //   description:
  //     "Datanomics is a hands-on workshop having a crossover of Data Science and Economics. The participants will learn how to use data science and apply it to various economic requirements in a fun way, which will ultimately upskill them, enable them to use data science to their advantage and take well-informed decisions.",
  //   // registrationLink: "/registration",
  //   state: "datanomics", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
  // {
  //   id: 3,
  //   img: "images/upcomingevents/ipl.jpg",
  //   title: "IPL Auction",
  //   timing: "10:00 PM - 5:00 PM",
  //   date: "28 October 2023",
  //   venue: "D-007",
  //   description:
  //     "Assemble your team of cricket enthusiasts, polish your auctioneer skills, and prepare for rollercoaste ride of bidding wars, unexpected twists, and stratergic maneuvers",
  //   registrationLink:
  //      "https://forms.gle/NAWRKRHBYqJWkBHs7",
  //   //state: "ipl", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
  // {
  //   id: 4,
  //   img: "images/upcomingevents/ambush.jpg",
  //   title: "Ambush Marketing",
  //   timing: "9:00 AM",
  //   date: "5 November 2023",
  //   venue: "BLT-01",
  //   description:
  //     "Ambush Marketing An engaging event featuring a roast battle and ambush marketing competition, where participants showcase their wit and creativity in attacking rival companies' strategies to emerge victorious, focusing on economics, technology, science fiction, multiverse, and superheroes themes.",
  //   registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc0A1HyUWl80ALRI4I2Ny9zAsQJHYgCDQ3kHiisq3RhnkqkZg/viewform?usp=sf_link",
  //   //state: "ambush", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
  // {
  //   id: 5,
  //   img: "images/upcomingevents/global.jpg",
  //   title: "Global-O-Poly",
  //   timing: "9:00 AM",
  //   date: "4 November 2023",
  //   venue: "D-008",
  //   description:
  //     "Global - o - poly Teams bid on resources from various universes based on assigned countries' economic profiles and policies, using 1% of their GDP as funds, competing in a strategic auction event",
  //   registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGEmzjcIrssCuJ3s2C_Cx0tQHzzAGJCp3ffbSPhBe6L-GPGQ/viewform?usp=sf_link",
  //   //state: "global", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
  // {
  //   id: 6,
  //   img: "images/upcomingevents/mock23.jpg",
  //   title: "Mock Rbi",
  //   timing: "3:00 PM - 6:00 PM",
  //   date: "4 November 2023",
  //   venue: "E-003",
  //   description:
  //     "Mock RBI An online economic simulation game by Anirveda, where participants represent different countries, making strategic decisions to navigate real-life economic challenges, including historical crises, aiming to earn points and be declared the ultimate conqueror of the economy",
  //   registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeEA_r9RelmKzUqL6tNFKEm-9ricj7HwES6c4u_CkDv_HUhlA/viewform?usp=sf_link",
  //   //state: "rbi", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
  // {
  //   id: 7,
  //   img: "images/upcomingevents/wot1.jpg",
  //   title: "World Of Tech",
  //   timing: "12:00 PM - 2:00 PM",
  //   date: "4 November 2023",
  //   venue: "TBA",
  //   description:
  //     "World Of Tech A sophisticated quiz event structured as a narrative journey, exploring the latest trends and innovations in technology through intricate question stories.",
  //   registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRyKgHesuogYhFVAOvvr8sYDyifKSxDU1Fx9jiRYcbTPBRxQ/viewform?usp=sf_link",
  //   //state: "wot", // This field is used to identify the event in the registration page. It will be used directly in the DB.
  // },
]

export default upcomingEvents
