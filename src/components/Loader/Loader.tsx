// import { motion } from "framer-motion";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]">
//       <div className="flex flex-col items-center gap-6">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.5,
//             ease: "linear",
//           }}
//           className="h-20 w-20 rounded-full border-4 border-cyan-400 border-t-transparent"
//         />

//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0.4, 1, 0.4] }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.5,
//           }}
//           className="text-2xl font-bold tracking-[8px]"
//         >
//           PRADEEP
//         </motion.h2>
//       </div>
//     </div>
//   );
// };

// export default Loader;


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";


// const Loader = () => {

//   const [progress,setProgress] = useState(0);


//   useEffect(()=>{

//     const timer = setInterval(()=>{

//       setProgress((prev)=>{

//         if(prev >= 100){
//           clearInterval(timer);
//           return 100;
//         }

//         return prev + 2;

//       });

//     },40);


//     return ()=>clearInterval(timer);

//   },[]);



//   return (

//     <motion.div

//       initial={{opacity:1}}
//       animate={{
//         opacity: progress === 100 ? 0 : 1,
//         pointerEvents:
//         progress === 100 ? "none":"auto"
//       }}

//       transition={{
//         duration:.8
//       }}

//       className="
//       fixed
//       inset-0
//       z-[99999]
//       flex
//       flex-col
//       items-center
//       justify-center
//       bg-[#050816]
//       "

//     >


//       <motion.h1

//       initial={{
//         scale:.8,
//         opacity:0
//       }}

//       animate={{
//         scale:1,
//         opacity:1
//       }}

//       className="
//       text-7xl
//       font-black
//       bg-gradient-to-r
//       from-cyan-400
//       to-purple-500
//       bg-clip-text
//       text-transparent
//       "

//       >

//         Pradeep

//       </motion.h1>



//       <div className="
//       mt-10
//       w-72
//       h-2
//       bg-white/10
//       rounded-full
//       overflow-hidden
//       ">


//         <motion.div

//         animate={{
//           width:`${progress}%`
//         }}

//         className="
//         h-full
//         bg-cyan-400
//         "

//         />


//       </div>



//       <p className="
//       mt-5
//       text-gray-400
//       ">

//         {progress}%

//       </p>


//     </motion.div>

//   );

// };


// export default Loader;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Easing function - slower at the end
        const nextProgress = prev + (100 - prev) * 0.08;
        return Math.min(nextProgress, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

    const containerVariants: Variants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

      const letterVariants: Variants = {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? "none" : "auto",
      }}
        transition={{
          duration: 0.6,
        }}
      className="
      fixed
      inset-0
      z-[99999]
      flex
      flex-col
      items-center
      justify-center
      bg-[#050816]/70
      backdrop-blur-md
      "
    >
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[300px]
        h-[300px]
        rounded-full
        bg-cyan-500/20
        blur-[80px]
        "
      />

      {/* Logo/Name */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex gap-1"
      >
        {"PRADEEP".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="
            text-5xl
            sm:text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="relative z-10 mt-12 w-80 sm:w-96">
        <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 25,
            }}
            className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            rounded-full
            shadow-[0_0_20px_rgba(34,211,238,0.5)]
            "
          />
        </div>

        {/* Animated dots */}
        <div className="flex justify-between mt-2 px-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>

      {/* Progress Text */}
      <motion.p
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
        relative
        z-10
        mt-6
        text-sm
        sm:text-base
        text-gray-300
        font-medium
        tracking-widest
        "
      >
        {Math.round(progress)}%
      </motion.p>

      {/* Loading Text */}
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        relative
        z-10
        mt-3
        text-xs
        sm:text-sm
        text-gray-400
        tracking-[3px]
        uppercase
        "
      >
        Loading
      </motion.p>
    </motion.div>
  );
};

export default Loader;