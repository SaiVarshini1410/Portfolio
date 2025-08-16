import github from '../assets/github.png'
import springboot from '../assets/springBoot.png'
import eclipse from '../assets/eclipse.png'
import trackIt from '../assets/track-it.png'
import palette from '../assets/palette.png'
import glaucoma from '../assets/glaucoma.png'
import covidImage from '../assets/covid-safe-room.png'
import foodOrder from '../assets/foodOrder.jpg'

export const projectsJson = [
    {
        "src": trackIt, 
        "alt": "Track-It",
        "title":"Track-It", 
        "desc": [
            "Inspired by real placement-season chaos—designed to help students avoid missing interviews or callbacks due to poor tracking.",
            "A full-stack web application built using HTML, CSS, ReactJS for the frontend and Node.js, Express.js, MongoDB for the backend.",
            "Allows users to add, edit, and delete job applications, categorizing them into three statuses: Pending, Interview, and Declined for clarity and organization.",
            "Designed an intuitive and responsive UI with React, improving usability and helping users manage their job hunt stress-free.",
            "Implemented contextual UI states and page transitions for seamless navigation between views.",
            "Built secure RESTful APIs to handle user registration, login, and CRUD operations on job data.",
            "Integrated bcrypt for password hashing and salting, enhancing security.",
            "Added rateLimiter middleware to prevent abuse by limiting repeated requests to 10 per IP.",
            "Developed filtering and sorting features based on job attributes like title, company, or application date.",
            "Applied state management using React Hooks to maintain dynamic job status views and persistent form states.",
            "Used Normalize.css for cross-browser consistent styling, and React Icons for a visually appealing interface.",
            "Architected the system with modularity for future enhancements — such as resume tracking, notifications, analytics, and custom reminders.",
            "Hosted the application on Heroku, ensuring easy access and deployment scalability.",
            "Gained full-cycle development experience including frontend/backend integration, API authentication, production deployment, and UI design.",
        ],
        "githubLink" : "https://github.com/SaiVarshini1410/TrackIt",
        "hostedLink" : "https://github.com/SaiVarshini1410/TrackIt"
    },
    { 
        "src": glaucoma, 
        "alt": "Automated Glaucoma Detection",
        "title":"Automated Glaucoma Detection",
        "desc": [
            "Designed and developed a diagnostic ML tool for early-stage glaucoma detection using fundus eye images from the RIGA dataset (2,664 high-resolution retinal scans).",
            "Achieved a peak accuracy of 94% by implementing and evaluating multiple classification algorithms including CNN, SVM, and KNN, benchmarking them across various parameter spaces.",
            "Conducted extensive data preprocessing to enhance model precision — including contrast normalization, ROI segmentation, and noise filtering, improving retinal feature clarity.",
            "Applied 5-fold cross-validation, confusion matrix evaluation, and performance metrics (accuracy, sensitivity, specificity) to validate model robustness and real-world reliability.",
            "Focused on optic disc and cup region analysis, a critical indicator for glaucoma progression — enhancing the model’s clinical relevance and diagnostic specificity.",
            "Published in a peer-reviewed international journal, emphasizing the tool’s applicability for early screening in rural and under-resourced clinical setups, potentially reducing preventable vision loss.",
            "Explored the ethical and social implications of deploying AI in healthcare diagnostics, advocating for explainability, accuracy, and safe adoption.",
            "This project strengthened my knowledge in computer vision, medical image processing, and AI for social good, and gave me experience in end-to-end research workflows — from ideation to publication.",

        ],
        "githubLink" : "https://journal.esrgroups.org/jes/article/view/640",
        "hostedLink" : "https://journal.esrgroups.org/jes/article/view/640"
    },
    { 
        "src": palette,
        "alt": "Spectrum", 
        "title":"Spectrum", 
        "desc": [
            "A fun and creative side project inspired by the \"Flat-UI Colors\" website — built to apply and experiment with the front-end skills I had been learning in React.",
            "Developed a responsive web app using ReactJS, Bootstrap, and JavaScript, allowing users to create, delete, and manage custom color palettes.",
            "Users can copy any color shade in HEX, RGB, or RGBA format using the react-copy-to-clipboard package, streamlining design workflows.",
            "All palettes — default and custom — are stored in local storage, enabling persistent access without a backend.",
            "Styled using both Bootstrap and MaterialUI’s withStyles to achieve clean, pixel-perfect palette card rendering.",
            "Designed the app with full customization support, allowing users to start from scratch or modify built-in palettes.",
            "Learned and practiced key front-end concepts like state-driven UI, component reusability, and responsive layout structuring.",
            "This project was a blend of creativity and technical exploration — turning something simple into a hands-on playground for deeper learning.",

        ],
        "githubLink" : "https://github.com/SaiVarshini1410/Spectrum",
        "hostedLink" : "https://github.com/SaiVarshini1410/Spectrum"
    },
    { 
        "src": covidImage,
        "alt": "Covid Safe Room", 
        "title":"Covid Safe Room", 
        "desc": [
            "A purpose-driven IoT project built during the height of the COVID-19 pandemic to automate room safety by monitoring body temperature and real-time occupancy, helping reduce virus spread.",
            "Designed using Arduino UNO, PIR sensors, a contactless MLX90614 infrared temperature sensor, an LCD display, and a servo motor to control door automation.",
            "Developed logic to automatically allow or restrict entry based on body temperature and room density — with a configurable limit of up to 50 individuals.",
            "Integrated PIR sensors to detect entry and exit events, updating room occupancy dynamically and accurately.",
            "Displayed real-time feedback (temperature, current count, access permission) on the LCD panel, making the system user-friendly and easy to monitor.",
            "Programmed the servo motor to open or close the door depending on whether an individual passed the temperature threshold and if the room capacity was within limits.",
            "Ensured safety by implementing non-contact screening, critical for reducing cross-contamination in high-risk zones like hospitals, classrooms, or offices.",
            "Through this project, I gained deep understanding of embedded systems, sensor calibration, interrupt handling, hardware-software integration, and event-driven programming.",
            "One of my most fulfilling and timely projects, built not just as a tech experiment but as a genuine attempt to contribute to public health and safety.",
            "Reinforced my belief in the power of engineering when it directly meets human need — where lines of C code and wires on a breadboard can truly help save lives.",
        ],
        "githubLink" : "https://github.com/SaiVarshini1410/Covid-Safe-Room",
        "hostedLink" : "https://github.com/SaiVarshini1410/Covid-Safe-Room"
    },
    { 
        "src": foodOrder,
        "alt": "Online Food Ordering System", 
        "title":"Online Food Ordering System", 
        "desc": [
            "A pure Java-based console application designed to simulate a real-world food ordering system — allowing users to browse menus, place orders, and receive a final bill, without waiting in long queues.",
            "Built using core Java concepts like classes, inheritance, interfaces, and exception handling — structured across three main modules: Login, Restaurants, and Billing.",
            "Included features such as dynamic menu listings, discount calculations, estimated delivery time, and a simple authentication mechanism for user login.",
            "Employed file handling for storing customer data, order details, and restaurant menus — simulating backend persistence in a lightweight setup.",
            "Modeled an object-oriented design, laying the foundation for future GUI/Android app upgrades using the same business logic layer.",
            "Planned scope for enhancement includes integration with MySQL for persistent storage, a JavaFX or Swing-based GUI, and eventual deployment as a web app using Spring Boot.",
            "This project was a strong practice in building logic-heavy, modular applications from scratch, helping reinforce my confidence in Java fundamentals, clean architecture, and system extensibility.",
        ],
        "githubLink" : "https://github.com/SaiVarshini1410/Online-Food-Ordering-System",
        "hostedLink" : "https://github.com/SaiVarshini1410/Online-Food-Ordering-System"
    }
];