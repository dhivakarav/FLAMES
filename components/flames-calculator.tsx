"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Users, Home, UserX, UsersRound } from "lucide-react"

type FlamesResult = "F" | "L" | "A" | "M" | "E" | "S" | null

const resultConfig = {
  F: {
    label: "Friends",
    icon: Users,
    message: "You're destined to be besties forever! 👯",
    color: "from-amber-400 to-orange-400",
  },
  L: {
    label: "Love",
    icon: Heart,
    message: "It's a match made in heaven! 💕",
    color: "from-pink-400 to-rose-500",
  },
  A: {
    label: "Affection",
    icon: Sparkles,
    message: "There's definitely a spark here! ✨",
    color: "from-purple-400 to-pink-400",
  },
  M: {
    label: "Marriage",
    icon: Home,
    message: "Get the rings ready! 💍",
    color: "from-rose-400 to-pink-500",
  },
  E: {
    label: "Enemy",
    icon: UserX,
    message: "Yikes... maybe keep your distance! 😬",
    color: "from-red-400 to-orange-500",
  },
  S: {
    label: "Sister",
    icon: UsersRound,
    message: "Like siblings from another crib! 👭",
    color: "from-blue-400 to-cyan-400",
  },
}

export default function FlamesCalculator() {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [result, setResult] = useState<FlamesResult>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState("")

  const validateInput = (value: string): boolean => {
    const regex = /^[a-zA-Z\s]*$/
    return regex.test(value)
  }

  const handleName1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (validateInput(value)) {
      setName1(value)
      setError("")
    }
  }

  const handleName2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (validateInput(value)) {
      setName2(value)
      setError("")
    }
  }

  const calculateFlames = () => {
    if (!name1.trim() || !name2.trim()) {
      setError("Please enter both names!")
      return
    }

    setIsCalculating(true)
    setError("")

    // Simulate processing delay
    setTimeout(() => {
      // Convert to lowercase and remove spaces
      const n1 = name1.toLowerCase().replace(/\s/g, "")
      const n2 = name2.toLowerCase().replace(/\s/g, "")

      // Create arrays from names
      const arr1 = n1.split("")
      const arr2 = n2.split("")

      // Cancel out matching characters
      for (let i = 0; i < arr1.length; i++) {
        const char = arr1[i]
        const index = arr2.indexOf(char)
        if (index !== -1) {
          arr1[i] = ""
          arr2[index] = ""
        }
      }

      // Count remaining characters
      const count = arr1.filter((c) => c !== "").length + arr2.filter((c) => c !== "").length

      // FLAMES elimination logic
      const flames = ["F", "L", "A", "M", "E", "S"]
      let index = 0

      while (flames.length > 1) {
        index = (index + count - 1) % flames.length
        flames.splice(index, 1)
      }

      setResult(flames[0] as FlamesResult)
      setIsCalculating(false)
    }, 2000)
  }

  const reset = () => {
    setName1("")
    setName2("")
    setResult(null)
    setError("")
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-2 border-white/40 bg-white/60 p-8 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {!result && !isCalculating ? (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500"
                  >
                    <Heart className="h-10 w-10 text-white" fill="white" />
                  </motion.div>
                  <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">FLAMES</h1>
                  <p className="text-pretty text-muted-foreground">{"Discover your relationship destiny! 💫"}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name1" className="text-sm font-medium text-foreground">
                      Partner 1
                    </label>
                    <Input
                      id="name1"
                      value={name1}
                      onChange={handleName1Change}
                      placeholder="Enter first name"
                      className="border-2 border-primary/20 bg-white/80 backdrop-blur-sm transition-all focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="name2" className="text-sm font-medium text-foreground">
                      Partner 2
                    </label>
                    <Input
                      id="name2"
                      value={name2}
                      onChange={handleName2Change}
                      placeholder="Enter second name"
                      className="border-2 border-primary/20 bg-white/80 backdrop-blur-sm transition-all focus:border-primary"
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive"
                    >
                      {error}
                    </motion.p>
                  )}

                  <Button
                    onClick={calculateFlames}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-pink-600 hover:to-purple-600 hover:shadow-xl"
                    size="lg"
                  >
                    Calculate ✨
                  </Button>
                </div>
              </motion.div>
            ) : isCalculating ? (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center space-y-6 py-12"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 p-1"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Heart className="h-8 w-8 text-pink-500" fill="currentColor" />
                  </div>
                </motion.div>
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-foreground">Calculating...</h2>
                  <p className="text-muted-foreground">{"Reading the stars ✨"}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="space-y-6 py-4"
              >
                {result && (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="flex flex-col items-center space-y-4"
                    >
                      <div
                        className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${resultConfig[result].color} shadow-lg`}
                      >
                        {(() => {
                          const Icon = resultConfig[result].icon
                          return <Icon className="h-12 w-12 text-white" />
                        })()}
                      </div>
                      <div className="space-y-2 text-center">
                        <h2 className="text-5xl font-bold tracking-tight text-foreground">
                          {resultConfig[result].label}
                        </h2>
                        <p className="text-pretty text-lg text-muted-foreground">{resultConfig[result].message}</p>
                      </div>
                    </motion.div>

                    <div className="space-y-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{name1}</span>
                        <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
                        <span className="font-medium text-foreground">{name2}</span>
                      </div>
                    </div>

                    <Button
                      onClick={reset}
                      variant="outline"
                      className="w-full border-2 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
                      size="lg"
                    >
                      Try Again
                    </Button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  )
}
