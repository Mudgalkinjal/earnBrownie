import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const AboutSection = () => {
    return (_jsx("section", { className: "section w-full h-screen flex flex-col items-center justify-center bg-gray-900", children: _jsxs(motion.div, { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1 }, viewport: { once: true }, className: "max-w-3xl bg-gray-800 rounded-lg p-8 shadow-lg", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center", children: "About Me" }), _jsxs("div", { className: "text-base mt-6 text-gray-400", children: [_jsxs("p", { className: "mb-6", children: ["Hello! I\u2019m ", _jsx("span", { className: "font-bold text-white", children: "Kinjal" }), ", a passionate", ' ', _jsx("span", { className: "font-bold text-white", children: "Full Stack Developer" }), ' ', "with over 7 years of experience building robust web applications and scalable solutions. My work spans a wide spectrum of modern web development, data analytics, machine learning, and blockchain technology, always with a focus on delivering seamless user experiences and high-performance applications."] }), _jsx("h2", { className: "text-xl font-semibold text-white", children: "A Glimpse Into My Expertise" }), _jsxs("ul", { className: "list-disc list-inside mt-4 space-y-2", children: [_jsxs("li", { children: ["\uD83C\uDF10", ' ', _jsx("span", { className: "font-bold text-white", children: "Web Development & Full Stack" }), ": From intuitive front-end designs to efficient back-end systems, I enjoy bringing ideas to life using tools like React, Node.js, and AWS."] }), _jsxs("li", { children: ["\uD83D\uDCCA ", _jsx("span", { className: "font-bold text-white", children: "Data Analytics" }), ": I love working with data\u2014building ETL pipelines, analyzing trends, and creating insightful dashboards that empower informed decision-making."] }), _jsxs("li", { children: ["\uD83E\uDD16 ", _jsx("span", { className: "font-bold text-white", children: "Machine Learning" }), ": Exploring data patterns and crafting intelligent solutions with Python and cloud-based tools has been a rewarding part of my journey."] }), _jsxs("li", { children: ["\uD83D\uDD17", ' ', _jsx("span", { className: "font-bold text-white", children: "Blockchain Solutions" }), ": While not my starting point, I\u2019ve successfully contributed to blockchain-based applications, focusing on transparency, security, and usability."] })] }), _jsx("h2", { className: "text-xl font-semibold text-white mt-6", children: "How I Work" }), _jsx("p", { className: "mt-4", children: "I thrive in collaborative environments, whether leading technical discussions, reviewing code, or mentoring peers. My approach is rooted in agility, adaptability, and a relentless drive to deliver impactful results. Every project I tackle is an opportunity to learn, grow, and innovate." })] })] }) }));
};
export default AboutSection;
