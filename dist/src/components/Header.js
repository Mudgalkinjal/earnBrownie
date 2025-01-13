import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const Header = () => {
    return (_jsxs("section", { id: "section1", className: "section w-full h-screen flex flex-col items-center justify-center", children: [_jsx(motion.img, { src: "/bp.png", alt: "Kinjal", className: "rounded-full w-32 h-32 mb-4", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1 } }), _jsx(motion.h1, { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-400", initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1, delay: 0.5 }, children: "KINJAL" }), _jsx(motion.p, { className: "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400", initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1, delay: 1 }, children: "Frontend Visionary | ML Enthusiast | Notion Wizard" })] }));
};
export default Header;