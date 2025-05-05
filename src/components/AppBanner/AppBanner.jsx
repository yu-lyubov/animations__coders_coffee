import React from "react";
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
}

const AppBanner = () => {
  return (
    <div className="pl-[5rem] pr-[5rem] my-14">
      <div style={BannerStyle} className="sm:min-h-[400px] flex justify-end items-center rounded-xl">
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h6
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h6>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="tet-center sm:px-20"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quidem recusandae sed.
            </motion.p>
            {/* image link */}
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <motion.img
                  src={AppStoreImg}
                  alt="app store"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                />
              </a>
              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <motion.img
                  src={PlayStoreImg}
                  alt="play store"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;