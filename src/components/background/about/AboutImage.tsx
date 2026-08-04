import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const AboutImage = () => {
  return (
    <div className="relative flex justify-center">

      {/* Background Glow */}

      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Main Card */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-[350px]
          h-[430px]
          rounded-[35px]
          border
          border-cyan-500/20
          bg-white/5
          backdrop-blur-xl
          overflow-hidden
          shadow-2xl
        "
      >
        {/* Profile Image */}

        <img
        src="/profile.png"
        alt="Pradeep"
        className="w-full h-full object-cover"
      />

        {/* Bottom Overlay */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black/90
            to-transparent
            p-6
          "
        >
          <h3 className="text-2xl font-bold">
            Pradeep
          </h3>

          <p className="text-cyan-400 mt-1">
            Software Developer
          </p>
        </div>
      </motion.div>

      {/* Experience Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          -top-5
          -left-6
          bg-cyan-500
          text-black
          px-6
          py-4
          rounded-2xl
          font-bold
          shadow-xl
        "
      >
        1+ Years
      </motion.div>

      {/* React Icon */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-6
          top-10
          w-16
          h-16
          rounded-full
          bg-[#111827]
          border
          border-cyan-400
          flex
          items-center
          justify-center
          text-cyan-400
          text-3xl
          shadow-lg
        "
      >
        <FaReact />
      </motion.div>

      {/* Code Icon */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-5
          bottom-20
          w-14
          h-14
          rounded-full
          bg-[#111827]
          border
          border-purple-500
          flex
          items-center
          justify-center
          text-purple-400
          text-2xl
        "
      >
        <FaCode />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          bottom-5
          w-14
          h-14
          rounded-full
          bg-[#111827]
          border
          border-cyan-500
          flex
          items-center
          justify-center
          text-cyan-400
          text-2xl
          shadow-[0_0_24px_rgba(34,211,238,0.25)]
        "
      >
        <FaRocket />
      </motion.div>

    </div>
  );
};

export default AboutImage;