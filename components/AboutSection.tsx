'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'Сверхурожайность',
      description: 'До 25 кг винограда с одного куста при правильном уходе'
    },
    {
      number: '02',
      title: 'Быстрый результат',
      description: 'Первый урожай уже через год после посадки саженца'
    },
    {
      number: '03',
      title: 'Отличный вкус',
      description: 'Сладкие сочные ягоды без косточек с мускатным ароматом'
    },
    {
      number: '04',
      title: 'Морозостойкость',
      description: 'Выдерживает морозы до -21°C без специального укрытия'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Виноградник"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-rose-400/30">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                  <span className="text-rose-200 font-semibold text-sm tracking-wider">О СОРТЕ</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display"
              >
                Виноград для
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">
                  настоящих ценителей
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-300 text-lg leading-relaxed mb-8 font-inter"
              >
                Киш-миш Велес — это уникальный бессемянный сорт винограда розового цвета. 
                Крупные грозди достигают веса до 3 кг, а ягоды отличаются превосходным 
                вкусом с легким мускатным ароматом.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-400 text-base leading-relaxed font-inter"
              >
                Сорт выведен украинским селекционером В.В. Загорулько и быстро завоевал 
                популярность благодаря своим выдающимся характеристикам.
              </motion.p>
            </motion.div>

            {/* Right Content - Benefits Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-rose-400/40 transition-all duration-300 group"
                >
                  {/* Number */}
                  <div className="text-6xl font-black text-rose-400/30 mb-4 group-hover:text-rose-400/50 transition-colors font-display">
                    {benefit.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors font-display">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-inter">
                    {benefit.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '100%', label: 'Без косточек' },
                { value: '25 кг', label: 'Урожай с куста' },
                { value: '1 год', label: 'До плодоношения' },
                { value: '-21°C', label: 'Морозостойкость' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform font-display">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
