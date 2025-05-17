'use client'

import { motion } from 'framer-motion'
import React from 'react'

const ChatBlankState = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-full text-center font-geist"
      aria-label="Welcome message"
    >
      <div className="flex max-w-3xl flex-col gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Workers
          </h1>
          
          <p className="text-xl text-gray-300 whitespace-nowrap">
            Discover the best AI virtual employees at <span className="font-medium text-blue-400">ai-workers.org</span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="h-[1px] w-[300px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto my-4"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-gray-400 max-w-md mx-auto"
        >
          The App Store for AI virtual employees
          <br /><br />
          Sales, Developers, Customer Service, Accountants and more
        </motion.p>
      </div>
    </section>
  )
}

export default ChatBlankState
