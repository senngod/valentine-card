import { useState } from "react";
import { motion } from "framer-motion";

export default function LoveMessage() {
  const compliments = [
    "Ты самая прекрасная! 💖",
    "У тебя самая красивая улыбка! 😊",
    "Ты делаешь мой мир ярче! 🌟",
    "Ты невероятно добрая и милая! 💕",
    "Ты — мое вдохновение! ✨",
    "Ты мой лучик солнца в пасмурный день! ☀️",
    "Ты прекрасна, как волшебная звезда! ✨",
    "Твоя доброта делает этот мир лучше! 💗",
    "Ты мой самый дорогой человек на свете! 💞",
    "Ты наполняешь мою жизнь счастьем! 😍",

  ];

  const [message, setMessage] = useState("Нажми на кнопку!");
  const [showNote, setShowNote] = useState(false);
  const [startScreen, setStartScreen] = useState(true);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setMessage(compliments[randomIndex]);
    setShowNote(true);
  };

  if (startScreen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-red-400 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold"
        >
          💌 Лерочка, вот тебе моя валентинка! 💌
        </motion.h1>
        <button
          onClick={() => setStartScreen(false)}
          className="mt-6 bg-white text-red-500 px-6 py-2 rounded-full shadow-lg text-xl hover:bg-gray-200 transition-all"
        >
          Открыть
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-300 to-red-400 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.5, 1] }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 text-6xl text-white"
      >
        💞
      </motion.div>
      <div className="p-6 shadow-xl bg-white rounded-2xl text-center w-80 relative z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-red-500 text-6xl"
        >
          ❤️
        </motion.div>
        <div className="mt-4">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-pink-600"
          >
            {message}
          </motion.p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-lg transition-all transform hover:scale-110"
        >
          Нажми меня
        </button>
      </div>
      {showNote && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-6 bg-white p-6 rounded-lg shadow-lg w-64 text-center text-pink-600 border-4 border-red-400 relative"
        >
          ✨ Моя дорогая, ты самая особенная в моей жизни!✨ Special For Satakomi!
          <motion.div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-3xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💌
          </motion.div>
        </motion.div>
      )}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="absolute bottom-10 text-4xl text-white"
      >
        От Женечки.
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 text-6xl text-white"
      >
        💖
      </motion.div>
    </div>
  );
}
