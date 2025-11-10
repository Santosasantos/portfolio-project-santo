"use client"

import { useState, useEffect } from "react"

export const useTypewriter = (words: string[], speed = 80, pauseDuration = 2500) => {
    const [displayedText, setDisplayedText] = useState("")
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[currentWordIndex]
        let timeout: NodeJS.Timeout

        if (!isDeleting) {
            if (displayedText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentWord.slice(0, displayedText.length + 1))
                }, speed)
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true)
                }, pauseDuration)
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, speed / 2)
            } else {
                setIsDeleting(false)
                setCurrentWordIndex((prev) => (prev + 1) % words.length)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayedText, isDeleting, currentWordIndex, words, speed, pauseDuration])

    return displayedText
}
