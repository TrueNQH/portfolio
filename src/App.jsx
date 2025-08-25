import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const DATA = {
  name: "Nguyễn Quang Huy",
  role: "Software Engineer | Frontend Developer",
  tagline:
    "ReactJS • UI/UX responsive • REST API integration • AI intergration",
  location: "Đà Nẵng, Việt Nam",
  email: "nguyenquanghuyktd@gmail.com",
  github: "https://github.com/TrueNQH",
  linkedin: "https://www.linkedin.com/",
  website: "https://aiscanner.tech",
 
};

const SKILLS = [
   "React", "Python", "AI Integration" ,
   "JavaScript (ES6+)" ,
   "HTML5/CSS3" ,
   "TypeScript" ,
   "REST API",
   "Git/GitHub" ,
   "Docker", 
];

const PROJECTS = [
  {
    title: "AIscanner.tech",
    desc:
      "Nền tảng quét tài liệu & tạo nội dung; UI React, tích hợp API GPT, code-splitting & lazy load.",
    stack: ["React", "GenAI", "REST API", "GPT API"],
    live: "https://aiscanner.tech",
    code: "https://github.com/TrueNQH/quickquestionAI"
  },
  {
    title: "Salon Booking", 
    desc:
      "Website đặt lịch salon tóc: form validation, auth cơ bản, responsive trên mọi thiết bị.",
    stack: ["React", "React Router", "Tailwind→CSS", "Axios"],
    live: "https://salonxink.ixink.vn/",
    code: "#"
  },
  {
    title: "Chrome Chat Extension",
    desc:
      "Tiện ích mở rộng truy cập chatbot trong trình duyệt; giao tiếp message passing + UI thu gọn.",
    stack: ["JavaScript", "Chrome APIs"],
    live: "#",
    code: "https://github.com/TrueNQH/quickquestionAI/releases/tag/v01"
  }
];

const EXPERIENCE = [
  {
    company: "Công ty cổ phần XINKGROUP",
    role: "AI Developer (Fresher/Intern)",
    period: "02/2024 – 08/2024",
    bullets: [
      "Xây dựng chatbot AI tích hợp GPT-3.5/4, DALL·E 2, Whisper API; triển khai React + Vite.",
      "Nghiên cứu, thử nghiệm mô hình AI mới, tối ưu chi phí API.",
      "Triển khai code-splitting, lazy loading để cải thiện hiệu suất ứng dụng.",
      "Hợp tác nhóm Agile, sử dụng Git/GitHub để quản lý mã nguồn."
    ]
  }
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  

  useEffect(() => {
    const handleScroll = () => {
      console.log("handleScroll called");
      
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
      const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();       
        console.log(rect);

          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
        console.log(current);

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
     

      <Navigation DATA={DATA} activeSection = {activeSection} scrolled={scrolled}/>

      <HeroSection DATA={DATA}/>

      <About DATA = {DATA}/>

      <Skills SKILLS = {SKILLS}/>

      <Projects PROJECTS={PROJECTS} />

      <Experience EXPERIENCE={EXPERIENCE} />

      <Contact />

      <Footer DATA={DATA} />
    </main>
  );
}