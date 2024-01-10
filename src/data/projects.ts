import { IProject } from "../models/projects.models";
import KoferemLogo from "../assets/projects/koferem/icon.png";
import KoferemBackground from "../assets/projects/koferem/koferem_background.png";
import Freeblock from "../assets/projects/awex/freeblock.png";
import AwexBackground from "../assets/projects/awex/awex_background.png";
import CoArtLogo from "../assets/projects/coart/CoArt_PNG_logo.png";
import CoArtBackgound from "../assets/projects/coart/coart_background.png";
import EternavoxLogo from "../assets/projects/eternavox/logo.png";
import EternavoxBackground from "../assets/projects/eternavox/eternavox_background.png";
import PlannerSoftLogo from "../assets/projects/planersoft/planer-soft-logo.svg";
import PlannerSoftBackground from "../assets/projects/planersoft/planner-soft-bg.png";
import ClafutiLogo from "../assets/projects/clafuti/clafuti-logo.png";
import ClafutiBackground from "../assets/projects/clafuti/clafuti-bg.png";

export const projects: IProject[] = [
  {
    id: 0,
    title: "Crypto Website Development for Awex",
    name: "Freeblock",
    client: "Freeblock",
    logo: Freeblock,
    description:
      "Awex streamlines invoicing through cryptocurrency, enabling efficient payments and receipts in digital assets",
    about:
      "Awex is an innovative application empowering users to seamlessly generate and settle invoices using cryptocurrency. This platform facilitates secure transactions, offering a user-friendly interface to create invoices and process payments in various digital currencies. It streamlines financial transactions, ensuring efficient and transparent invoicing while leveraging the advantages of blockchain technology for secure and rapid settlements.",
    goal: `The primary goal of the Awex application is to simplify and modernize invoicing processes by enabling users to effortlessly create, manage, and settle invoices using cryptocurrencies. It aims to streamline financial transactions, offering a secure and decentralized platform for invoicing and payments, thereby providing users with greater flexibility and accessibility in conducting business transactions.`,
    execution: `
    The Awex application accomplishes its goal by leveraging blockchain technology, smart contracts, and user-friendly interfaces. It provides a simple and intuitive platform where users can generate invoices, specifying details like payment terms and cryptocurrency preferences. Additionally, it facilitates secure payment processes, allowing seamless settlements in various cryptocurrencies. The app's design focuses on user convenience, ensuring a smooth experience in both creating and settling invoices using crypto`,
    results: `Admin Panel Interface Development: Collaborated closely with the backend team to craft an intuitive and functional admin panel interface. This involved designing user-friendly layouts, integrating functionalities, and ensuring seamless interaction between the front and back ends.

    Layout-based Component Development: Implemented components according to specific layout requirements, adhering closely to design guidelines. This included creating responsive, scalable, and visually consistent elements crucial to the application's interface.
    
    Database Data Visualization: Successfully displayed pertinent data from the database to users, ensuring accurate and real-time information presentation. Implemented effective data rendering methods for a smooth user experience.
    
    Scrum-based Team Collaboration: Employed the Scrum methodology for effective team collaboration, ensuring streamlined communication, efficient task management, and timely project deliveries. Participated actively in sprint planning, daily stand-ups, and sprint reviews, contributing to the project's success through collaborative efforts.`,
    background_image: AwexBackground,
    stack: ["React JS"],
    service: "Web Development",
    website: "https://awex.freeblock.site/personal",
  },
  {
    id: 1,
    title: "Marketplace Website Development for CoArt",
    name: "CoArt",
    client: "CoArt",
    logo: CoArtLogo,
    description:
      "CoArt is a marketplace for art enthusiasts to buy and sell artwork.",
    about: `CoArt is a marketplace for art enthusiasts to buy and sell artwork. It offers a platform for artists to showcase their work and connect with potential buyers. The application features a user-friendly interface, enabling users to easily browse through various artworks and purchase their desired pieces. It also provides artists with a convenient platform to promote their work and expand their reach, facilitating business growth.`,
    goal: `The primary goal of CoArt is to provide a platform for artists to showcase their work and connect with potential buyers. It aims to:
        1. Connect Artists: Provide a centralized platform for artists to showcase their work and connect with potential buyers.
        2. Promote Artwork: Enable artists to promote their work and expand their reach, facilitating business growth.
        3. Facilitate Sales: Provide a convenient platform for users to browse through various artworks and purchase their desired pieces.
        4. Enhance Accessibility: Ensure accessibility by optimizing the site for search engines, making it easy for users to find artworks when in need.`,
    execution: `Planning & Research: Begin by understanding the art market. Identify user needs, competitor analysis, and target audience to shape the platform's features and design.
      
          Design & Development: Utilize React for swift development and SEO-friendly web pages. Design an intuitive interface with clear navigation for users to easily find artworks.
          
          Database Integration: Implement a database to store artwork information, artist profiles, and user data for seamless search functionality.
          
          User Engagement: Incorporate user-friendly features like reviews, ratings, and a query system to engage users, encourage feedback, and build a community.
          
          Testing & Launch: Thoroughly test the platform for usability, performance, and SEO compliance. Ensure seamless functionality across devices before launching the platform.`,
    results: `Increased Visibility: Achieve a prominent online presence through SEO optimization, ensuring higher search engine rankings for artworks.
        
            Enhanced User Experience: Provide an intuitive and informative platform, simplifying the search for artworks. Clear navigation and valuable content foster an engaging user experience.
            
            Expanded Service Reach: Facilitate artists to reach a wider audience. Enable users to discover local and international artists, promoting their work effectively.
            
            Community Engagement: Foster a community of art enthusiasts. User reviews, ratings, and interactive features encourage engagement, feedback, and shared experiences.
            
            Business Growth: Boost the growth of artists by connecting them with potential customers. Increased traffic and inquiries can drive business expansion and revenue.
            
            Valuable Insights: Gather user data and interactions to understand user behavior, preferences, and trends. Use this information for continuous platform improvement and targeted marketing strategies.`,
    background_image: CoArtBackgound,
    stack: ["React", "Web Development"],
    service: "Web Development",
    website: "https://coartmarket.com/",
  },
  {
    id: 2,
    title: "Planner Software Development for PlannerSoft",
    name: "PlannerSoft",
    client: "PlannerSoft",
    logo: PlannerSoftLogo,
    description:
      "Efficient solutions for complex production processes. Each operation is planned considering technology, equipment, and specialists.",
    about: `PlannerSoft is a software solution that enables efficient planning of complex production processes. It offers a platform for businesses to streamline their operations, ensuring seamless planning of production processes. The application features a user-friendly interface, enabling users to easily schedule and manage various operations. It also provides businesses with a convenient platform to optimize their processes and enhance productivity, facilitating business growth.`,
    goal: `The primary goal of PlannerSoft is to provide a platform for businesses to streamline their operations and enhance productivity. It aims to:
        1. Optimize Operations: Provide a centralized platform for businesses to streamline their operations and enhance productivity.
        2. Enhance Accessibility: Ensure accessibility by optimizing the site for search engines, making it easy for users to find the application when in need.
        3. Facilitate Planning: Provide a convenient platform for users to schedule and manage various operations.
        4. Improve Efficiency: Enable businesses to optimize their processes and enhance productivity, facilitating business growth.`,
    execution: `During my tenure as a frontend developer at PlannerSoft, I actively contributed to the collaborative efforts within a multidisciplinary team. My role extended to working closely with backend developers and designers, fostering a cohesive environment where we collectively shaped the project’s success.

    My primary focus encompassed the creation of reusable and scalable components that formed the backbone of our application. This involved an intricate balance between user-centric design and robust functionality, ensuring an optimal end-user experience. I actively participated in the conceptualization, design, and implementation phases, contributing valuable insights into the architectural decisions of the project.
    
    The technological landscape of the project was enriched with a variety of libraries and UI components. Notably, I leveraged tools such as React Charts, Tailwind CSS, react-hook-form, and react-query. Each of these played a pivotal role in enhancing the application’s performance, user interface, and overall functionality.
    
    Furthermore, my role allowed me to navigate through challenges, innovate solutions, and foster an environment of continual improvement. The collaborative atmosphere and the diversity of tools and techniques utilized in PlannerSoft provided an enriching experience, contributing significantly to my expertise as a frontend developer.`,
    results: `The culmination of efforts within the PlannerSoft project was a testament to collaborative innovation. As a frontend developer, my involvement in this venture significantly contributed to its success.

    The application boasted a robust infrastructure built on reusable components, ensuring scalability and seamless functionality. Our meticulous attention to detail in crafting these components resulted in an engaging user interface that harmonized design and functionality flawlessly.
    
    The project's architecture was fortified by a careful selection of cutting-edge technologies and libraries. Employing tools like React Charts, Tailwind CSS, react-hook-form, and react-query elevated the application's performance, responsiveness, and overall user experience.
    
    The outcome of our collective endeavors was an application that not only met but surpassed expectations. The PlannerSoft project stands as a testament to collaboration, innovation, and a commitment to delivering user-centric solutions.`,
    background_image: PlannerSoftBackground,
    stack: ["React"],
    service: "Web Development",
    website: "https://planner-soft.com/",
  },
  {
    id: 3,
    title: "Eternavox Website",
    name: "Eternavox",
    client: "Pet-project",
    logo: EternavoxLogo,
    description: "Eternavox is a website for a social media management.",
    about:
      "Within their portfolio, they showcase a groundbreaking AI-driven social media management application. This innovative tool harnesses AI to streamline content generation, crafting captivating visuals, crafting engaging descriptions, and orchestrating automated scheduling for seamless publishing. Its unique features empower users to effortlessly enhance their social presence, delivering unparalleled efficiency in managing diverse platforms.",
    goal: "The primary goal of this project was to revolutionize social media management by integrating AI technologies. It aimed to simplify content creation, scheduling, and publication processes across various platforms, empowering users to efficiently manage their social presence",
    execution:
      "The Eternavox application accomplishes its goal by leveraging AI technologies, machine learning, and user-friendly interfaces. It provides a simple and intuitive platform where users can create and schedule content for various social media platforms. Additionally, it facilitates seamless publication, enabling users to effortlessly manage their social presence.",
    results:
      "Admin Panel Interface Development: Collaborated closely with the backend team to craft an intuitive and functional admin panel interface. This involved designing user-friendly layouts, integrating functionalities, and ensuring seamless interaction between the front and back ends.",
    background_image: EternavoxBackground,
    stack: ["React", "Node JS", "MongoDB"],
    service: "Web Development",
    website: "https://eternavox.com/",
  },
  {
    id: 4,
    title: "SEO Website Development for ServisCoffee",
    name: "Koferem",
    client: "ServisCoffee",
    logo: KoferemLogo,
    description:
      "SEO optimized coffee machine repair application aimed at promoting the service.",
    about: `The Koferem project represents a fully assembled and SEO-optimized website designed to promote coffee machine repair services. This website was exclusively crafted by me, leveraging Gatsby JS to optimize for search engines and maximize audience engagement.

      Recognizing the significance of boosting visibility for the service, I chose Gatsby JS as the foundation for this website. This framework ensures rapid loading times, dynamic content, and effective interaction with search engines.
      
      Koferem is the culmination of comprehensive development from scratch, utilizing the advantages of Gatsby JS and its server-side rendering (SSR). The product is an intricately designed and SEO-oriented website, tailored to attract and engage potential clients.`,
    goal: `The primary objective behind the 'Koferem' project was to establish a robust online presence for a coffee machine repair service. Employing Gatsby JS as the core technology aimed to create a powerful platform that not only showcased the services but also enhanced discoverability through SEO optimization.

    The goal was to craft a user-centric and search-engine-friendly website that seamlessly integrated the repair services and encouraged user engagement. By harnessing Gatsby JS, the intention was to ensure swift loading, interactivity, and superior performance, fostering increased visibility and accessibility for potential clients seeking coffee machine repair solutions.`,
    execution: `The development journey of the 'Koferem' website was anchored on Gatsby JS, a choice aimed at elevating the platform's performance and SEO prowess.

    The meticulous implementation of meta tags was pivotal, strategically enhancing SEO optimization and bolstering discoverability across search engines. Leveraging the dynamic capabilities of Gatsby JS, the site effortlessly rendered extensive data sets, ensuring seamless navigation and swift user interaction.
    
    From inception to deployment, the project underwent comprehensive development phases, allowing for meticulous customization and optimization for efficient delivery on the live server. The entire process, right from conceptualization to the live deployment, was meticulously crafted to ensure a high-performing and SEO-friendly platform for the coffee machine repair service.`,
    results: `Increased Visibility: Achieve a prominent online presence through SEO optimization, ensuring higher search engine rankings for coffee machine repair services.

    Enhanced User Experience: Provide an intuitive and informative platform, simplifying the search for repair services. Clear navigation and valuable content foster an engaging user experience.
    
    Expanded Service Reach: Facilitate service providers to reach a wider audience. Enable users to discover local and reliable repair options, promoting their services effectively.
    
    Business Growth: Boost the growth of repair businesses by connecting them with potential customers. Increased traffic and inquiries can drive business expansion and revenue.
    
    Valuable Insights: Gather user data and interactions to understand user behavior, preferences, and trends. Use this information for continuous platform improvement and targeted marketing strategies.`,
    background_image: KoferemBackground,
    stack: ["GatsbyJS"],
    service: "Web Development",
    website: "https://koferem.by/",
  },
  {
    id: 5,
    title: "SEO Website Development for Skoniovozijos",
    name: "Clafuti",
    client: "Skoniovizijos",
    logo: ClafutiLogo,
    description: "SEO optimized bakery website aimed at promoting the service",
    about:
      "Clafuti, a meticulously crafted web platform, stands as a testament to the seamless amalgamation of stunning design and strategic SEO integration. Specifically tailored to bolster the online presence of a bakery, Clafuti focuses on optimizing visitor traffic and engagement. By leveraging advanced SEO strategies and a captivating design, the platform is intricately designed to elevate the bakery's visibility while creating an immersive experience for users. The goal was to showcase the bakery's offerings in an aesthetically pleasing yet highly functional manner, ensuring easy navigation and compelling content that entices visitors to explore further. Clafuti embodies a strategic blend of SEO optimization and captivating aesthetics, serving as an enticing digital storefront for the bakery's delectable delights.",
    goal: `The primary objective of the Clafuti website project was to enhance the digital footprint of a local bakery through an elegantly crafted online platform. This endeavor aimed to harness the power of strategic SEO integration and captivating web design to significantly increase the bakery's online visibility and customer engagement. The project sought to create a user-centric website that not only showcases the bakery's products but also entices visitors to explore the offerings, effectively translating online traffic into footfall at the physical bakery location. By focusing on SEO optimization and an intuitive user experience, the goal was to establish Clafuti as an inviting and interactive digital hub for bakery enthusiasts while driving increased patronage for the physical store.`,
    execution: `The development process encompassed multiple facets to ensure a comprehensive application. An intuitive admin panel was meticulously crafted, enabling seamless content management. Leveraging Gatsby JS and Node JS from inception facilitated the creation of a dynamic and efficient application.

    The utilization of a robust database architecture played a pivotal role in storing and rendering data within the application. The integration allowed for the seamless retrieval and presentation of content, ensuring a smooth and responsive user experience.
    
    The project was initiated from scratch, with Gatsby JS forming the frontend backbone and Node JS powering the backend. This holistic approach enabled the creation of a performant and scalable application, meeting the demands of both user interactivity and content management.
    
    The culmination of these efforts resulted in a user-centric application that harmoniously amalgamated frontend sophistication with a robust backend, empowering efficient content management while delivering an engaging user experience.`,
    results: `The culmination of the project materialized into an accomplished web application that not only met the objectives but also bolstered my proficiency in various domains. Implementing Node JS with Express for REST API creation was a significant stride, solidifying my backend development skills.

    The refined admin panel allowed for seamless content management, elevating user interaction and enhancing the overall user experience. Gatsby JS, in conjunction with Node JS, contributed to a performant and scalable application, redefining the development approach and augmenting my expertise in these technologies.
    
    The database integration successfully facilitated data storage and retrieval, showcasing a robust architecture for efficient content rendering. The application's deployment from scratch served as a testament to my capabilities in crafting end-to-end solutions that harmonize user interface intricacies with a robust backend foundation.
    
    The project's success validated the culmination of frontend sophistication, backend robustness, and efficient content management, underscoring my ability to deliver user-centric applications with a cohesive blend of technology and functionality`,
    background_image: ClafutiBackground,
    stack: ["GatsbyJS"],
    service: "Web Development",
    website: "https://coffeeremont24.by/",
  },
];
