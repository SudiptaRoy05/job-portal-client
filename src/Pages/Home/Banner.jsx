import { motion } from "framer-motion";
import team1 from '../../assets/image/team1.jpg';

export default function Banner() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center flex-col">
                        <motion.img
                            src={team1}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: [100, 70, 100] }}
                            transition={{
                                duration: 5, // Increased duration to slow it down
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            className="max-w-sm border-l-4 w-64 border-blue-600 border-b-4 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                            alt="Stock Job Image"
                        />
                        <motion.img
                            src={team1}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: [100, 70, 100] }}
                            transition={{
                                duration: 5, // Increased duration to slow it down
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: 2.5, // Offset the animation timing for the second image (half of duration)
                            }}
                            className="max-w-sm border-l-4 w-64 border-blue-600 border-b-4 rounded-t-[40px] rounded-br-[40px] shadow-2xl mt-4"
                            alt="Stock Job Image"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <motion.div
                            className="text-center" // Center-align the text
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-5xl font-bold"
                                animate={{
                                    y: [0, -10, 0], // Creates a bouncing effect
                                }}
                                transition={{
                                    duration: 3, // Duration for one bounce
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut",
                                }}
                            >
                                Latest{" "}
                                <motion.span
                                    animate={{
                                        color: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#3b82f6"], // Cycle through colors
                                    }}
                                    transition={{
                                        duration: 4, // Duration of one color cycle
                                        repeat: Infinity, // Infinite loop
                                        ease: "easeInOut",
                                    }}
                                >
                                    Jobs
                                </motion.span>{" "}
                                for you
                            </motion.h1>


                            <motion.p
                                className="py-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </motion.p>
                            <motion.button
                                className="btn btn-primary"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
