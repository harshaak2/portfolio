import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Hello! I'm Sri Harsha Kurra, a pre-final year Computer Science Engineering student at the Indian Institute of Information Technology, Sri City.`;

export const ABOUT_TEXT = `With a robust foundation in computer science, my academic journey has been enriched by a diverse portfolio of projects in web development, machine learning. I have published a research paper on fog computing. In addition to my technical pursuits, I was a member of the Student Development Council, where I contribute to enhancing the student experience and fostering a collaborative community. As the lead of the Epoch Club, I have organized workshops, hackathons, and study groups to promote learning and innovation in machine learning among my peers. My passion for technology and problem-solving is matched by a commitment to continuous learning and innovation. I thrive on tackling complex challenges and am eager to bring my skills and knowledge to dynamic, forward-thinking environments.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024", 
    role: "Intern",
    company: "Satish Dhawan Space Centre, ISRO, Sriharikota",
    description: `Worked at the Range Operations Unit of Satish Dhawan Space Center (SDSC) on a project to predict statistical sub-parameters of temperature and humidity using a Long Short Term Memory (LSTM) model. The Range Operations Unit is responsible for launch coordination, tracking and telemetry, communication systems, flight safety analysis, and post-launch analysis.`,
    technologies: ["Python"],
  },
];

export const RESPONSIBILITIES = [
  {
    year: "Jan 2024 - May 2024", 
    role: "Lead",
    department: "Epoch Club",
    description: `Led the club and have introduced five new domains in the club during my tenure as the Lead. Organized a hackathon as part of Abhisarga'24, which had a participation of 400+ students across India.`,
  },
  {
    year: "October 2023 - March 2024", 
    role: "Co-Lead",
    department: "Sponsorship Team, Abhisarga'24",
    description: `Co-Led the team responsible for bringing in funds for college's annual techno-cultural fest. I got the opportunity to coordinate with potential sponsors, negotiate sponsorship deals, and secured significant funding for a successful event.`,
  },
  {
    year: "Aug 2023 - Jan 2024", 
    role: "Co-Lead",
    department: "Epoch Club",
    description: `Co-Led the club and have taken multiple session on Machine Learning. Co-organized a hackathon as part of Utkrishta'24, an intra-college techno-cultural fest. `,
  },
  {
    year: "March 2023 - Aug 2024", 
    role: "Member",
    department: "Epoch Club",
    description: `As an active member, I helped the club in organizing and coordinating the hackathon for Abhisarga'23 and prepared sessions content focused on Python.`,
  },
  {
    year: "September 2022 - May 2023", 
    role: "Member",
    department: "Student Development Council",
    description: `Oversaw 15 technical and non-technical clubs as a member of SDC, organizing events benefiting the student community and introducing 2 new clubs. Co-organized Abhisarga'23, a techno-cultural fest attracting 1900 students from across India.`,
  },
  
];

export const PUBLICATIONS = [
  {
    title: "2DP-FHS: 2D Pareto Optimized Fog Head Selection for Multiple EEG Healthcare Data Analysis and Computations",
    conference: "8th International Conference on Advances in Computing and Data Sciences (ICACDS-2024), Paris",
    description: "Published a research paper on fog computing, which proposes a 2D Pareto optimized fog head selection algorithm for multiple EEG healthcare data analysis and computations. Manuscript to be published in Springer's CCIS.",
  }
]

export const PROJECTS = [
  {
    title: "StorySphere",
    image: project1,
    link: "https://github.com/harshaak2/story-sphere",
    description:
      "A fullstack blog website where users can read blog posts on various topics. The admin has the privilege of posting content, managing posts and comments with an admin dashboard. The UI has both light and dark modes, and is very responsive for any device. The backend is built with NodeJS, ExpressJS, and MongoDB, and the frontend is built with ReactJS and TailwindCSS. The application uses Redux for state management, Redis for caching, and JWT for authentication.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "Redux", "Redis", "JWT"],
  },
  {
    title: "RowlingGPT",
    image: project2,
    link: "https://github.com/harshaak2/rowling-gpt",
    description:
      'Implemented and fine-tuned a Generative Pretrained Transformer(GPT) model with 7.16M parameters using PyTorch based on the manuscript "Attention is All You Need" by Vaswani et al. The model was trained on the “Harry Potter and the Sorcerers Stone” by JK Rowling. The model was able to generate text when a context was passed into the model',
    technologies: ["Python", "PyTorch"],
  },
  {
    title: "LlamaQA",
    image: project3,
    link: "https://github.com/harshaak2/LlamaQA",
    description:
      "Built a Retrieval Augmented Generation(RAG) model which answers questions based on a PDF file. The model uses a retriever to find the most relevant paragraphs from the PDF file which acts as a knowledge base for the model. The model then generates an answer based on the context of the question and the retrieved paragraphs from the vector store. The model uses Llama3 with 8B parameters as the generational model.",
    technologies: ["Python", "Langchain", "Llama3"],
  },
  {
    title: "VRent",
    image: project4,
    link: "https://github.com/harshaak2/VRent-Project",
    description:
      "A command line vechicle rental application developed using Java as a frontend and MySQL database in the backend, and used JDBC for connecting Java frontend with the backend database. A user can register and rent a vehicle for a date and also can cancel the booking.",
    technologies: ["Java", "MySQL", "JDBC"],
  },
  {
    title: "BizMaven",
    image: project5,
    link: "https://github.com/RohanArava/bmaven/tree/master",
    description:
      "A MERN stack business listing website where businesses can register and list their services, along with an admin privilege to overlook both users and vendors. Users can search for businesses based on location and category. The backend is built with NodeJS, ExpressJS, and MongoDB, and the frontend is built with ReactJS. The application uses Redux for state management, Redis for caching, and JWT for authentication, and indexed search using MongoDB.",
    technologies: ["MongoDB", "ExpressJS", "NodeJS", "ReactJS", "Redux", "Redis", "JWT"],
  },
];

export const CONTACT = {
  address: "Indian Institute of Information Technology, Sri City",
  phoneNo: "+91 8985256656",
  email: "sriharshakurra15@gmail.com",
};
