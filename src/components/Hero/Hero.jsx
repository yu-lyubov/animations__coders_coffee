import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar.jsx';
import BgImage from '../../assets/bg-slate.png';
import BlackCoffee from '../../assets/black.png';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="p-[5rem]">
          {/* Navbar section */}
          <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative"
              >
                <div className=" relative z-10 space-y-4">
                  <h6 className="text-2xl">Black Lifestyle Lovers,</h6>
                  <p className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eligendi et exercitationem
                    expedita id iusto molestiae nostrum quam quis repudiandae, tenetur unde ut! Ab, aperiam assumenda ea
                    laboriosam quos temporibus.</p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className="relative">
              <motion.img
                src={BlackCoffee}
                alt=""
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.5,
                }}
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              />
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h2 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumler
                </h2>
              </motion.div>

            </div>
            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h6 className="opacity-0 text-7xl font-bold leading-tight ml-14">Blvck Tumbler</h6>
              <div className="relative">
                <div className=" relative z-10 space-y-4">
                  <h6 className="text-2xl">Blvck Tumbler</h6>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Commodi, eligendi et exercitationem, Commodi, eligendi et exercitationem
                    </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu section */}
        {isOpenSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blue-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social icons */}
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaFacebookF/>
                </div>
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaTwitter/>
                </div>
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <FaInstagram/>
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;