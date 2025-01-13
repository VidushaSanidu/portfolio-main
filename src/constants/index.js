import eCommerce from "../assets/projects/ecommerce.png";
import mernEstate from "../assets/projects/mern-estate.png";
import portfolio from "../assets/projects/portfolio.png";
import mernBlog from "../assets/projects/mern-blog.png";
import gameHub from "../assets/projects/game-hub.png";
import mernChat from "../assets/projects/mern-chat.png";
import biomechAnalysis from "../assets/projects/biomech-analysis.png";
import googleNext from "../assets/projects/google-next.png";
import nextBlog from "../assets/projects/next-blog.png";
import twitterClone from "../assets/projects/twitter-clone.png";
import mernPoetry from "../assets/projects/mern-chinese-poetry.png";
import tsPokerGame from "../assets/projects/ts-poker-game.png";
import mernNetflixClone from "../assets/projects/mern-netflix-clone.png";
import nextStripeStarter from "../assets/projects/next-stripe-starter.png";
export const HERO_CONTENT = `I am a passionate and result-driven full stack developer with a knack for crafting robust and scalable web applications. 
                            With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, 
                            as well as back-end technologies like Node.js, Express, RESTful API, MySQL and MongoDB. 
                            My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
                          With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, RESTful API, MongoDB and MySQL. 
                          My journey in web development began with a deep curiosity for how things work,
                          and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
                          I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const EXPERIENCES = [
  // {
  //   year: "April 2024 - Present",
  //   role: "Software Engineer Internship",
  //   company: "Deakin University",
  //   description:
  //     "In the Biomech Analysis Pipeline project, I led the integration of advanced keypoints detection models like YOLOv8-pose and AlphaPose, optimizing video input processing across single and multi-view camera setups. I automated the transformation of detected keypoints into OpenSim format using Open2Sim, and conducted initial simulations to ensure accuracy. Additionally, I developed a user-friendly, interactive dashboard using React for real-time visualization and managed a robust data backend with SQL and NoSQL databases to efficiently store and retrieve extensive biomechanical data sets.",
  //   technologies: [
  //     "YOLOv8-pose",
  //     "AlphaPose",
  //     "React",
  //     "Open2Sim",
  //     "SQL",
  //     "NoSQL",
  //   ],
  // },
  {
    year: "June. 2023 - Oct. 2024",
    role: "Graduate Fullstack Developer - Partime",
    company: "Expresso Carwash Pty Ltd.",
    description: `• Aligned technical solutions with project goals through clear communication with stakeholders.
                  • Built responsive web interfaces with React and Tailwind CSS, enhancing cross-device user experience.
                  • Implemented Redux Toolkit and custom hooks to optimise state management and reduce rendering overhead.
                  • Designed and integrated RESTful APIs with Node.js and Express, ensuring secure and efficient client-server communication.`,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "NodeJS",
      "Jest",
    ],
  },
  {
    year: "Sept. 2019 - Feb. 2021",
    role: "Web Dev Intern",
    company: "Shanghai Anling Computer Technology Co.,Ltd",
    description: `• Developed responsive front-end pages using HTML, CSS, and JavaScript, improving usability.
                  • Streamlined data processing workflows using PHP and Ruby on Rails, reducing server response times.
                  • Collaborated in Agile teams to meet project deadlines with maintainable and high-quality code.`,
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  // {
  //   title: "GraphQL Expense Tracker",
  //   image: expenseTracker,
  //   description: `This project is a GraphQL Expense Tracker App built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Apollo GraphQL. It features user authentication with Passport.js, data fetching and mutations through GraphQL, and integrates tools like Tailwind CSS for UI design. The app allows efficient management of expenses with secure user sign-up and login, CRUD operations for transactions, and category-based data analysis. It showcases best practices in GraphQL and provides insights into transitioning from traditional REST APIs.`,
  //   url: "https://graphql-expense-tracker-v1.onrender.com/",
  //   technologies: [
  //     "React",
  //     "GraphQL",
  //     "Apollo Server/Client",
  //     "Chart.js",
  //     "MongoDB",
  //     "Passport.js",
  //     "Session Authentication",
  //     "Render",
  //     "Corn job",
  //   ],
  // },
  {
    title: "Netflix Clone",
    image: mernNetflixClone,
    description: `🔐 Authentication with JWT,📱 Responsive UI,🎬 Fetch Movies and Tv Show,🔎 Search for Actors and Movies,🎥 Watch Trailers,🔥  Fetch Search History,🐱‍👤 Get  Similar Movies/Tv Shows,💙 Awesome Landing Page,🌐 Deployment,🚀 And Many More Cool Features`,
    url: "https://netwatch.liuyuelin.xyz/",
    technologies: [
      "React.js",
      "Zustand",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind",
      "JWT",
      "AWS",
      "SystemD",
      "Caddy",
      "Route 53",
    ],
  },
  {
    title: "Stripe Subscription Starter",
    image: nextStripeStarter,
    description: `⚛️ Tech Stack: Next.js 14, TypeScript, Prisma, MongoDB, Stripe, 🔐 Authentication with Kinde Auth, 💸 Monthly and Annually Subscriptions with Stripe, 💵 Building a Stripe Billing Portal, 🛠️ What are Webhooks, 🔄 Stripe Event Types, 🌗 Light/Dark Mode, 🌐 Deployment`,
    url: "https://stripe-subscriptions-yl.vercel.app/",
    technologies: [
      "Next.js 14",
      "Prisma",
      "Stripe",
      "MongoDB",
      "Kinde Auth",
      "Vercel",
    ],
  },
  {
    title: "Twitter Clone",
    image: twitterClone,
    description: `⚛️ Tech Stack: React.js, MongoDB, Node.js, Express, Tailwind
      🔐 Authentication with JSONWEBTOKENS (JWT)
      🔥 React Query for Data Fetching, Caching etc.
      👥 Suggested Users to Follow
      ✍️ Creating Posts
      🗑️ Deleting Posts
      💬 Commenting on Posts
      ❤️ Liking Posts
      🔒 Delete Posts (if you are the owner)
      📝 Edit Profile Info
      🖼️ Edit Cover Image and Profile Image
      📷 Image Uploads using Cloudinary
      🔔 Send Notifications
      🌐 Deployment`,
    url: "https://twitter-clone-qhpp.onrender.com/",
    technologies: [
      "React.js",
      "React Query",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind",
      "DaisyUI",
      "JWT",
    ],
  },
  {
    title: "Next Markdown Blog",
    image: nextBlog,
    description:
      "It is a markdown static blog, features include MDX Components,Shadcn UI, Pagination, Dynamic Open Graph Image and Syntax Highlighting in code block.",
    url: "https://next-blog-alpha-sable-40.vercel.app",
    technologies: [
      "ReactJS 18",
      "NextJS 14",
      "NextJS SEO",
      "TailwindCSS",
      "Shadcn/ui",
      "Velite",
      "Vercel",
    ],
  },
  {
    title: "MERN-Stack Blog Website",
    image: mernBlog,
    description:
      "A platform for creating and publishing blog posts, with features like admin dashboards, rich text editing, comments management, users management and advanced search...",
    url: "https://mern-blog-6atr.onrender.com/",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind",
      "Flowbite",
    ],
  },
  {
    title: "Real Estate Website",
    image: mernEstate,
    description:
      "An application for creating and publishing listings of real estate properties, with features such as advanced property search filters and real-time listings to connect buyers with their ideal homes.",
    url: "https://mern-estate-zw5b.onrender.com/",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Real Time Chat App",
    image: mernChat,
    description:
      "A realtime chat app is built on a robust MERN stack integrated with Socket.io for real-time interactions, and styled using TailwindCSS and Daisy UI. Key features include user authentication and authorization via JWT, real-time messaging, and online user status updates. It leverages Zustand for global state management and ensures thorough error handling on both server and client sides.",
    url: "https://mern-chat-app-9ybq.onrender.com/",
    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Socket.io",
      "TailwindCSS",
      "Daisy UI",
      "Vercel",
    ],
  },
  {
    title: "Game Hub",
    image: gameHub,
    description:
      "Game Hub is an engaging online platform where gamers can explore and enjoy a variety of browser-based games. It offers a diverse library of games across multiple genres, providing entertainment for players of all ages and interests.",
    url: "https://game-hub-two-zeta.vercel.app/",
    technologies: ["vanilla CSS", "React", "TypeScript", "Vercel"],
  },
  {
    title: "MERN Chinese Poetry",
    image: mernPoetry,
    description:
      "This project is a full-stack web application that allows users to search for Chinese poetry based on different dynasties, including Tang and Song poems, as well as Shijing. The application uses React for the frontend and Node.js/Express for the backend. View Random classic Poems at Home Page,Search poems by dynasty (Tang, Song) - Search Shijing poems - Pagination support for browsing multiple pages of results - Responsive design with Tailwind CSS - RESTful API backend with Express and MongoDB",
    url: "https://mern-chinese-poetry.vercel.app/",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "TypeScript React Poker Game",
    image: tsPokerGame,
    url: "https://ts-react-card-game.vercel.app/",
    description:
      "This project is a TypeScript and React application for displaying and shuffling a deck of cards, styled with Tailwind CSS. ",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Google Next",
    image: googleNext,
    description:
      "Google Next is an open source Google-Clone project using React, Next.js and TailwindCSS, aiming for learning Next.js framework",
    url: "https://google-clone-blond.vercel.app/",
    technologies: ["React", "Next.js", "TailwindCSS", "Vercel"],
  },
  {
    title: "Biomech Analysis Pipeline",
    image: biomechAnalysis, // You'll need to replace this with the actual variable or path to the image in your project files.
    description:
      "This project entailed leading the integration of advanced keypoints detection using technologies like YOLOv8-pose and AlphaPose to optimize video input processing for biomechanical analysis. It involved automating the transformation of keypoints into OpenSim format for accurate simulation and developing a React-based dashboard for real-time data visualization. The backend was managed with both SQL and NoSQL databases to efficiently store and process large datasets.",
    url: "#",
    technologies: [
      "YOLOv8-pose",
      "AlphaPose",
      "React",
      "Open2Sim",
      "SQL",
      "NoSQL",
    ],
  },
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    url: "https://react-portfolio-tau-eight-56.vercel.app/",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-Commerce Website",
    image: eCommerce,
    description:
      "A front-end-only e-commerce website with features like product listing, shopping cart.",
    url: "https://liuyuelintop.github.io/ecommerce-website-react/",
    technologies: ["HTML", "CSS", "React", "Vercel"],
  },
];

export const CONTACT = {
  address: "464 Collins St, MEL, VIC 3000",
  phoneNo: "+61 451 690 105 ",
  email: "liuyuelintop@gmail.com",
};
