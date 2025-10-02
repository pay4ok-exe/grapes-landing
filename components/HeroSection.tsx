'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  // Floating grape animations
  const floatingGrapes = [
    { id: 1, delay: 0, duration: 6, x: '10%', y: '15%', size: 60 },
    { id: 2, delay: 1, duration: 7, x: '15%', y: '70%', size: 40 },
    { id: 3, delay: 2, duration: 8, x: '5%', y: '45%', size: 50 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-400 via-pink-300 to-purple-300">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 via-transparent to-purple-400/30"></div>
      
      {/* Decorative Background Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 select-none pointer-events-none">
        <h2 className="text-[280px] font-black text-white font-display leading-none">
          FRESH
        </h2>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-block mb-8"
              >
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-white font-semibold tracking-wide">ПРЕМИУМ СОРТ</span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h3 className="text-white/90 text-xl sm:text-2xl font-medium mb-4 tracking-wider font-inter">
                  КИШ-МИШ ВЕЛЕС
                </h3>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.95] font-display">
                  Идеальный
                  <br />
                  Виноград
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-inter"
              >
                Сохраните здоровье вашего тела, выращенный из свежих и натуральных фруктов, чтобы освежить вас.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Button
                  className="bg-white hover:bg-white/90 text-rose-600 px-12 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
                >
                  Купить сейчас
                </Button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { icon: '🍇', label: 'Натуральный виноград' },
                  { icon: '🌿', label: 'Свежие фрукты' },
                  { icon: '✨', label: '100% Чистый' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Large Grape Image */}
            <div className="relative lg:h-[800px] h-[600px]">
              {/* Main Large Grape Bunch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -20, 0]
                }}
                transition={{
                  opacity: { duration: 1, delay: 0.5 },
                  scale: { duration: 1, delay: 0.5 },
                  rotate: { duration: 1, delay: 0.5 },
                  y: { 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] lg:w-[600px] lg:h-[700px] drop-shadow-2xl"
              >
                <Image
                  src="/grape_wihout_bg2.png"
                  alt="Виноград Велес"
                  fill
                  className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.3)]"
                  priority
                />
              </motion.div>

              {/* Floating Single Grapes */}
              {floatingGrapes.map((grape) => (
                <motion.div
                  key={grape.id}
                  className="absolute"
                  style={{
                    left: grape.x,
                    top: grape.y,
                    width: grape.size,
                    height: grape.size,
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [100, -50, -100, -150],
                    x: [0, 10, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: grape.duration,
                    delay: grape.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/one_grape_without_bg.png"
                    alt="Ягода винограда"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </motion.div>
              ))}

              {/* Additional Floating Grape Cluster */}
              <motion.div
                className="absolute left-0 bottom-20 w-[200px] h-[150px]"
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: [0, 1, 1],
                  x: [-100, 0, 0],
                  y: [0, -15, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  opacity: { duration: 1, delay: 1.2 },
                  x: { duration: 1, delay: 1.2 },
                  y: {
                    duration: 3,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 4,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <Image
                  src="/grape_without_bg.png"
                  alt="Гроздь винограда"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;