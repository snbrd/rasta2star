import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

export default function AnimatedPage({ children }) {
  return (
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  )
}
