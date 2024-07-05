import CB_NO_BLUR from "@/public/images/cb-no-blur-2.png";
import CB from "@/public/images/cb-blur-10.png";

export const links = [
  {
    name: "Work",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
];

export const movingWods = [
  {
    name: "Social Media Strategy",
  },
  {
    name: "Content Marketing",
  },
  {
    name: "SEO Optimization",
  },
  {
    name: "Email Campaign Management",
  },
  {
    name: "PPC Advertising",
  },
  {
    name: "Conversion Rate Optimization",
  },
  {
    name: "Digital Analytics",
  },
];

export const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const works = [
  {
    id: "01",
    color: "#525252",
    photoPathName: "audia",
    metaOne: "AUDIA",
    title: "SHARE MUSIC",
    metaTwo: "[MOBILE]",
    src: "getaudia.com.png",
    imgs: [
      "kurt-2.png",
      "main-audia.png",
      "audia-smash-2.jpeg",
      "auda-app-icon-rev.png",
      "auda-black-phones.png",
      "audia-app.png",
    ],
    header: "Audia enables users to share and discover music with friends.",
    subheader:
      "At Audia, I built a full-stack mobile application using React Native, TypeScript, Expo, and Firebase for the user side of the app. We also developed our own RESTful API to connect with various endpoints using Node.js, Express, and MongoDB. Additionally, we utilized AWS S3 for image storage and AWS EC2 for hosting.",
    thirdHeading:
      "Users can post, like, comment, repost, and share songs with friends, as well as create playlists and follow friends to see what they are listening to. We focused heavily on music discoverability, ensuring users could easily find new music they would enjoy. This was achieved by creating a recommendation engine based on user listening habits and a feature that shows what friends are listening to, facilitating music discovery through social connections.",
  },
  {
    id: "02",
    color: "#1e3f59",
    photoPathName: "bright",
    metaOne: "BRIGHT",
    title: "DESIGN AND DEVELOPMENT AGENCY/STUDIO",
    metaTwo: "[WEB]",
    src: "getaudia.com.png",
    imgs: [
      "bright-art.png",
      "BRIGHT_TEXT_LOGO_WHITE.png",
      "bright-full-page.png",
    ],
    header: "Blending Creativity and Technology to Elevate Your Brand",
    subheader:
      "Bright is a design and development agency/studio that I founded. We specialize in creating beautiful and functional websites and applications, working with clients of all sizes—from startups to large corporations—to develop full-stack sites.",
    thirdHeading:
      "We are passionate about what we do and take pride in our work. We are always looking for new and exciting projects to tackle. If you have an idea for a website or application, we would love to hear from you.",
  },
  {
    id: "03",
    color: "#d42a30",
    photoPathName: "reactype",
    metaOne: "REACTYPE",
    title: "NO-CODE BUILDER",
    metaTwo: "[WEB]",
    src: "reactype-red-text.png",
    imgs: [
      "reactype-red-text.png",
      "bubble-bg.png",
      "new-rt-comp-render.png",
      "moving-bubble.png",
      "reactype.dev.png",
      "BLACK_RT_LOGO_WHITE_BG.png",
      "SF_RT_LOGO_WHITE_W_TEXT.png",
    ],
    header: "The Fastest Way to Develop Effective Software",
    subheader:
      "At ReacType, I was a full-stack software engineer, focusing heavily on ReacType's collaboration room where users can join live video rooms and see, in real-time, what their peers are working on. ReacType is built using React, Next.js, Node, Express, MongoDB, AWS, and more.",
    thirdHeading:
      "ReacType is a no-code builder that helps you create web applications faster than ever before. Its intuitive drag-and-drop canvas interface and interactive, real-time component code preview facilitate seamless collaboration and connection with peers. ReacType is a prototyping tool that allows users to visualize their application architecture dynamically with a drag-and-drop canvas display and an interactive, real-time component code preview.",
  },
  {
    id: "04",
    color: "#ffe400",
    photoPathName: "press",
    metaOne: "PRESS",
    title: "SPORTS",
    metaTwo: "[MOBILE]",
    src: "press.com.png",
    imgs: ["press-cover.png", "press-phones-2.png"],
    header: "An Easy Place to Capture Sports Moments",
    subheader:
      "Press Sports was started by former athletes to give athletes (or their parents) a place to capture and share sports moments. You’ll find kids playing sports for the first time, as well as first-round draft picks. Most importantly, you’ll find a supportive community.",
    thirdHeading:
      "Press makes it easy for every athlete to share their unique sports journey. Posting content is simple, and it’s a great way to begin sharing your child’s journey with friends and family so they never miss an important moment.",
  },
  {
    id: "05",
    color: "#a01142",
    photoPathName: "christine",
    metaOne: "MARKETING",
    title: "PINK + GREEN",
    metaTwo: "[WEB/DESIGN]",
    src: "cpd.com2.png",
    imgs: ["green-pink.jpg", "cpd.com2.png", "pink-green-port.png"],
    header:
      "Christine is a marketing director who needed a site to showcase her best work.",
    subheader:
      "She wanted a site that was easy to navigate and showcased her work in a clean and professional way. She also wanted a site that was easy to update and maintain. I built her site using WordPress and Elementor, and created a custom theme. The site is fully responsive and looks great on all devices.",
    thirdHeading:
      "This site was built with Next.js, TailwindCSS, GSAP, and Framer Motion. It is a static site hosted on Vercel and is fully responsive, looking great on all devices.",
  },
];

export const menuLinks = [
  { name: "Home", link: "/" },
  { name: "Works", link: "/works" },
  { name: "contact", link: "/contact" },
  { name: "INFO", link: "/info" },
];

export const menuImagesArray = [
  {
    img: CB_NO_BLUR,
    opacity: 0.8,
    scale: 1,
    zIndex: 2,
    depth: 0,
    perspective: 200,
    tiltMaxAngle: 5.5,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.6,
    scale: 0.93,
    zIndex: 3,
    depth: 0.5,
    perspective: 400,
    tiltMaxAngle: 4.5,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.4,
    scale: 0.86,
    zIndex: 4,
    depth: 1,
    perspective: 600,
    tiltMaxAngle: 3,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.3,
    scale: 0.79,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 1,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.3,
    scale: 0.72,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 0.5,
  },
];

export const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/cyburns/" },
  { name: "github", link: "https://github.com/cyburns" },
  { name: "instagram", link: "https://www.instagram.com/cyrusburns/" },
  {
    name: "spotify",
    link: "https://open.spotify.com/user/1232208178?si=48e88151aab5478b",
  },
];

export const heroImageArray = [
  {
    img: CB_NO_BLUR,
    opacity: 0.1,
    scale: 1.1,
    zIndex: 2,
    depth: 0,
    perspective: 200,
    tiltMaxAngle: 10,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.2,
    scale: 1,
    zIndex: 2,
    depth: 0,
    perspective: 200,
    tiltMaxAngle: 8,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.3,
    scale: 0.9,
    zIndex: 3,
    depth: 0.5,
    perspective: 400,
    tiltMaxAngle: 6,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.4,
    scale: 0.8,
    zIndex: 4,
    depth: 1,
    perspective: 600,
    tiltMaxAngle: 4,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.5,
    scale: 0.7,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 2,
  },
  {
    img: CB,
    opacity: 0.9,
    scale: 0.6,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 2,
  },
];
