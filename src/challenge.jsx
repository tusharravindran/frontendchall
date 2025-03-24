import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Clock, ThumbsUp, Star, List, Settings, Lightbulb, BarChart, LayoutGrid } from "lucide-react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="p-4">
      <p className="text-xl">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => increment(count)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Increment
        </button>
        <button
          onClick={() => decrement(count)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
    >
      {!liked ? "🤍" : "❤️"}
    </button>
  );
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="space-y-2">
      <p className="text-xl">Time: {time}s</p>
      <div className="space-x-2">
        <button
          onClick={() => setRunning(!running)}
          className={`px-4 py-2 ${running ? 'bg-red-500' : 'bg-green-500'} text-white rounded hover:bg-${running ? 'red' : 'green'}-400`}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => setTime(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="flex space-x-1 text-3xl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={rating >= star ? "text-yellow-500" : rating >= star - 0.5 ? "text-yellow-300" : "text-gray-300"}
          onClick={() => setRating(star)}
          onMouseEnter={() => setRating(star - 0.5)} // Simulate half-star hover
          onMouseLeave={() => setRating(rating)} 
        >
          {rating >= star ? "★" : rating >= star - 0.5 ? "☆" : "☆"}
        </span>
      ))}
    </div>
  );
}

function Tabs() {
    const [activeTab, setActiveTab] = useState("tab1");
  
    return (
      <div className="space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 py-2 rounded ${activeTab === "tab1" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`px-4 py-2 rounded ${activeTab === "tab2" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`px-4 py-2 rounded ${activeTab === "tab3" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Tab 3
          </button>
        </div>
        <div className="tab-content p-4 border border-gray-200 rounded">
          {activeTab === "tab1" && <p className="font-bold">This is content for Tab 1</p>}
          {activeTab === "tab2" && <p>This is content for Tab 2</p>}
          {activeTab === "tab3" && <p>This is content for Tab 3</p>}
        </div>
      </div>
    );
}

function Accordion() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {[1, 2, 3].map((index) => (
        <div key={index} className="accordion-item border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="accordion-header px-4 py-2 w-full text-left font-semibold text-gray-700 hover:bg-gray-200 rounded"
          >
            Accordion {index}
          </button>
          {open === index && <div className="accordion-body px-4 py-2">This is content for Accordion {index}</div>}
        </div>
      ))}
    </div>
  );
}

function TrafficLights() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        return "red";
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center space-x-4 py-4">
      <div className={`light w-10 h-10 rounded-full ${light === "red" ? "bg-red-500" : "bg-gray-300"}`}></div>
      <div className={`light w-10 h-10 rounded-full ${light === "yellow" ? "bg-yellow-500" : "bg-gray-300"}`}></div>
      <div className={`light w-10 h-10 rounded-full ${light === "green" ? "bg-green-500" : "bg-gray-300"}`}></div>
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => setProgress((prev) => prev + 10), 1000);
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <div className="space-y-2">
      <div className="w-full h-4 bg-gray-300 rounded">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xl">{progress}%</p>
    </div>
  );
}

function HolyGrailLayout() {
  return (
<div className="">
  <header className="bg-gray-800 text-white p-4">Header</header>
  <div className="grid grid-cols-3 gap-4 border-red">
    <aside className="bg-gray-200 p-4">Left Sidebar</aside>
    <main className="bg-gray-100 p-4">Main Content</main>
    <aside className="bg-gray-200 p-4">Right Sidebar</aside>
  </div>

  <footer className="bg-gray-800 text-white p-4">Footer</footer>
</div>

  );
}
  
  const challenges = [
    { name: "Counter", icon: Home },
    { name: "Stopwatch", icon: Clock },
    { name: "Like Button", icon: ThumbsUp },
    { name: "Star Rating", icon: Star },
    { name: "Tabs", icon: List },
    { name: "Accordion", icon: Settings },
    { name: "Traffic Lights", icon: Lightbulb },
    { name: "Progress Bar", icon: BarChart },
    { name: "Holy Grail Layout", icon: LayoutGrid },
  ];
  
  export default function Challenges() {
    const [activeChallenge, setActiveChallenge] = useState("Counter");
  
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col">
          <h1 className="text-2xl font-bold mb-6">Frontend Challenges</h1>
          <ul className="space-y-3">
            {challenges.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                  activeChallenge === name ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveChallenge(name)}
              >
                <Icon className="w-5 h-5 mr-3" />
                {name}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="w-3/4 p-8">
          <motion.div
            key={activeChallenge}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">{activeChallenge}</h2>
            {activeChallenge === "Counter" && <Counter />}
            {activeChallenge === "Stopwatch" && <Stopwatch />}
            {activeChallenge === "Like Button" && <LikeButton />}
            {activeChallenge === "Star Rating" && <StarRating />}
            {activeChallenge === "Tabs" && <Tabs />}
            {activeChallenge === "Accordion" && <Accordion />}
            {activeChallenge === "Traffic Lights" && <TrafficLights />}
            {activeChallenge === "Progress Bar" && <ProgressBar />}
            {activeChallenge === "Holy Grail Layout" && <HolyGrailLayout />}
          </motion.div>
        </div>
      </div>
    );
  }