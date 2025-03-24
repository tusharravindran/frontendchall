import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Clock, ThumbsUp, Star, List, Settings, Lightbulb, BarChart, LayoutGrid } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="bg-black">
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
    <div>
      <p>Time: {time}s</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="flex text-3xl">
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
      <div>
        <div className="tabs">
          <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
          <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
          <button onClick={() => setActiveTab("tab3")}>Tab 3</button>
        </div>
        <div className="tab-content">
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
      <div>
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(1)} className="accordion-header">
            Accordion 1
          </button>
          {open === 1 && <div className="accordion-body">This is content for Accordion 1</div>}
        </div>
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(2)} className="accordion-header">
            Accordion 2
          </button>
          {open === 2 && <div className="accordion-body">This is content for Accordion 2</div>}
        </div>
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(3)} className="accordion-header">
            Accordion 3
          </button>
          {open === 3 && <div className="accordion-body">This is content for Accordion 3</div>}
        </div>
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
      <div className="traffic-lights">
        <div className={`light red ${light === "red" ? "active" : ""}`}></div>
        <div className={`light yellow ${light === "yellow" ? "active" : ""}`}></div>
        <div className={`light green ${light === "green" ? "active" : ""}`}></div>
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
      <div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}%</p>
      </div>
    );
  }

  function HolyGrailLayout() {
    return (
      <div className="holy-grail">
        <header className="header">Header</header>
        <aside className="sidebar-left">Left Sidebar</aside>
        <main className="main-content">Main Content</main>
        <aside className="sidebar-right">Right Sidebar</aside>
        <footer className="footer">Footer</footer>
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