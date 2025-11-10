"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function TypewriterHero() {
    const [displayedText, setDisplayedText] = useState("")
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    const fullName = "Md. Rabiul Islam Santo"
    const titles = [
        "Java Full Stack Engineer",
        "Enterprise Solutions Architect",
        "Spring Boot Specialist",
        "System Designer",
    ]

    // Typewriter effect for name
    useEffect(() => {
        if (isTyping && displayedText.length < fullName.length) {
            const timer = setTimeout(() => {
                setDisplayedText(fullName.slice(0, displayedText.length + 1))
            }, 80)
            return () => clearTimeout(timer)
        } else if (displayedText.length === fullName.length) {
            setIsTyping(false)
        }
    }, [displayedText, isTyping])

    // Rotate through titles
    useEffect(() => {
        const titleTimer = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }, 3000)
        return () => clearInterval(titleTimer)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-drift" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-drift-reverse" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Name and Titles */}
                <div className="space-y-8 animate-slide-up">
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </div>

                    <div className="h-20 md:h-16">
                        <div className="relative h-full">
                            {titles.map((title, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute transition-all duration-700 ${
                                        idx === currentTitleIndex
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4 pointer-events-none"
                                    }`}
                                >
                                    <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        {title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        className="text-lg text-slate-300 max-w-lg leading-relaxed animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Passionate about building scalable enterprise systems. Currently at BracIT Services Ltd, delivering
                        high-performance solutions with 95% code coverage and 30%+ performance optimization.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 text-center"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div
                    className="relative h-96 md:h-full flex items-center justify-center animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="relative w-72 h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl animate-pulse-glow" />

                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/santo-hNb77PJc0lvJGvxHV1PavUPMmDP1KN.jpg"
                            alt="Md. Rabiul Islam Santo - Java Full Stack Engineer"
                            fill
                            className="object-cover rounded-2xl shadow-2xl ring-1 ring-cyan-500/30 group-hover:ring-cyan-500/60 transition-all duration-500 group-hover:scale-105"
                            priority
                            quality={95}
                        />

                        <div className="absolute -bottom-3 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow z-10">
                            Available for Roles
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
