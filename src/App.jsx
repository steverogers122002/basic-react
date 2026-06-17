import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black sticky top-0 z-50">
        <h1 className="text-xl font-bold">Virat Kohli</h1>

        <div className="space-x-6 hidden md:block">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#stats">Stats</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-600 to-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Virat Kohli
        </motion.h1>

        <p className="text-xl mt-4">
          Indian Cricketer • Legend • Run Machine
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Virat Kohli is one of the greatest batsmen in cricket history,
          known for his aggression, consistency, and fitness standards.
        </p>
      </section>

      {/* STATS */}
      <section id="stats" className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Career Stats</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "ODI Runs", value: "13,000+" },
            { title: "T20 Runs", value: "4,000+" },
            { title: "Test Runs", value: "8,000+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-6 rounded-xl"
            >
              <h3>{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1600195077070-4f7c6f3a2a01",
            "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
            "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl h-64 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center bg-black">
        Made with ❤️ using React + Tailwind + Framer Motion
      </footer>

    </div>
  );
}

export default App;
/*github
pj667899@gmail.com
steverogers@!122002
*/