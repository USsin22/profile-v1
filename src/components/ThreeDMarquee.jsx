"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export const ThreeDMarquee = ({
    images,
    className = "",
    cols = 4,
    speed = 1,
    pauseOnHover = true,
    onImageClick,
    showOverlay = false,
}) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile for responsive adjustments
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Clone the image list for seamless looping
    const duplicatedImages = React.useMemo(
        () => [...images, ...images],
        [images]
    );

    // Calculate group size based on columns
    const groupSize = Math.ceil(duplicatedImages.length / cols);
    const imageGroups = Array.from({ length: cols }, (_, index) =>
        duplicatedImages.slice(index * groupSize, (index + 1) * groupSize)
    );

    const handleImageClick = (image, globalIndex) => {
        if (onImageClick) {
            onImageClick(image, globalIndex);
        } else if (image.href) {
            window.open(image.href, image.target || "_self");
        }
    };

    return (
        <section
            className={`relative bg-[#fff] mx-auto block h-[600px] max-sm:h-[400px] 
        overflow-hidden rounded-3xl ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Optional gradient overlay */}
            {showOverlay && (
                <div className="absolute inset-0 z-10 via-transparent to-white/90 pointer-events-none" />
            )}

            <div
                ref={containerRef}
                className="flex w-full h-full items-center justify-center"
                style={{
                    transform: isMobile
                        ? "rotateX(40deg) rotateY(0deg) rotateZ(45deg) scale(0.8)"
                        : "rotateX(55deg) rotateY(0deg) rotateZ(45deg)",
                }}
            >
                <div className="w-full h-full overflow-hidden scale-90 sm:scale-110">
                    <div
                        className={`relative flex sm:grid h-full w-full origin-center 
              grid-cols-2 sm:grid-cols-${Math.min(cols, 4)} gap-4 sm:gap-8 whitespace-nowrap`}
                    >
                        {imageGroups.map((imagesInGroup, idx) => (
                            <motion.div
                                key={`column-${idx}`}
                                animate={{
                                    y: idx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                                }}
                                transition={{
                                    duration: (30 / speed) * (idx % 2 === 0 ? 1 : 1.2),
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear",
                                }}
                                className="flex flex-col items-center gap-4 sm:gap-8 relative"
                            >
                                {/* Vertical divider line - Subtle for dark theme */}
                                <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-700/30 to-transparent" />

                                {imagesInGroup.map((image, imgIdx) => {
                                    const globalIndex = idx * groupSize + imgIdx;
                                    const isClickable = image.href || onImageClick;

                                    return (
                                        <div
                                            key={`img-${imgIdx}`}
                                            className="relative group w-full"
                                        >
                                            {/* Horizontal divider line - Subtle for dark theme */}
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700/30 to-transparent" />

                                            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                                <motion.img
                                                    whileHover={{
                                                        y: -10,
                                                        scale: 1.02,
                                                        transition: { duration: 0.4, ease: "easeOut" }
                                                    }}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: imgIdx * 0.1,
                                                        ease: "easeOut"
                                                    }}
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`aspect-[16/10] w-full 
                            rounded-xl object-cover 
                            shadow-2xl grayscale-[20%] group-hover:grayscale-0
                            transition-all duration-500
                            ${isClickable ? "cursor-pointer" : ""}`}
                                                    onClick={() => handleImageClick(image, globalIndex)}
                                                />

                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                {/* Hover overlay with info */}
                                                {(image.title || image.description) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileHover={{ opacity: 1, y: 0 }}
                                                        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent 
                              p-6 pt-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 
                              transition-all duration-300"
                                                    >
                                                        {image.title && (
                                                            <h3 className="text-white text-base font-bold mb-1 tracking-tight">
                                                                {image.title}
                                                            </h3>
                                                        )}
                                                        {image.description && (
                                                            <p className="text-gray-400 text-sm font-medium">
                                                                {image.description}
                                                            </p>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Fallback for dynamic grid classes
export const ThreeDMarqueeFallback = () => {
    return (
        <section className="mx-auto block h-[600px] max-sm:h-[400px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 animate-pulse">
            <div className="flex w-full h-full items-center justify-center">
                <div className="w-full overflow-hidden scale-90 sm:scale-100">
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-300 dark:bg-gray-700 rounded-lg aspect-[970/700] w-full max-w-[200px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};