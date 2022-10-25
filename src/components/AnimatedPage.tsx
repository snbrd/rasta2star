import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'


export default function AnimatedPage({children}) {
    return(
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0  }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.8 }}>
            {children}
        </motion.div>
    )
}