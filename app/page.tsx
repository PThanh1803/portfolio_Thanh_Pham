"use client"

import { useState } from "react"
import { Button, Progress, Card, Text, Group, Container, Anchor } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconExternalLink } from "@tabler/icons-react"

const projectsData = [
  {
    id: "weather-app",
    title: "Weather App",
    tagline: "Real-time weather forecasting with beautiful UI",
    description:
      "A comprehensive weather application that provides real-time weather data, forecasts, and interactive maps. Built with modern web technologies to deliver accurate weather information with an intuitive user experience.",
    image: "/weather-app-interface.png",
    features: [
      "Real-time weather data from multiple APIs",
      "5-day weather forecast",
      "Interactive weather maps",
      "Location-based weather detection",
      "Responsive design for all devices",
      "Dark/light theme toggle",
    ],
    technologies: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    demoImages: ["/weather-app-interface.png", "/weather-app-mobile.png", "/weather-forecast-chart.png"],
    liveUrl: "https://weather-app-demo.vercel.app",
    githubUrl: "https://github.com/thanhpham/weather-app",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    tagline: "Interactive game with AI opponent",
    description:
      "A modern take on the classic Tic Tac Toe game featuring an intelligent AI opponent, smooth animations, and multiplayer capabilities. Perfect for both casual gaming and demonstrating game logic implementation.",
    image: "/tic-tac-toe.png",
    features: [
      "Single player vs AI",
      "Two player local multiplayer",
      "Intelligent AI with difficulty levels",
      "Smooth animations and transitions",
      "Game history and statistics",
      "Responsive game board",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Game AI"],
    demoImages: ["/tic-tac-toe.png", "/placeholder-z9cje.png", "/placeholder-3bk0p.png"],
    liveUrl: "https://tic-tac-toe-demo.vercel.app",
    githubUrl: "https://github.com/thanhpham/tic-tac-toe",
  },
  {
    id: "drum-kit",
    title: "Drum Kit",
    tagline: "Virtual drum kit with realistic sounds",
    description:
      "An interactive virtual drum kit that brings the experience of playing drums to the web. Features high-quality sound samples, keyboard controls, and visual feedback for an immersive musical experience.",
    image: "/drum-kit-interface.png",
    features: [
      "High-quality drum sound samples",
      "Keyboard and mouse controls",
      "Visual feedback on drum hits",
      "Recording and playback functionality",
      "Multiple drum kit styles",
      "Touch-friendly mobile interface",
    ],
    technologies: ["JavaScript", "Web Audio API", "HTML5", "CSS3", "Canvas"],
    demoImages: ["/drum-kit-interface.png", "/drum-kit-recording-interface.png", "/drum-kit-mobile.png"],
    liveUrl: "https://drum-kit-demo.vercel.app",
    githubUrl: "https://github.com/thanhpham/drum-kit",
  },
  {
    id: "guess-the-word",
    title: "Guess the Word",
    tagline: "Fun word guessing game with hints",
    description:
      "An engaging word guessing game that challenges players to discover hidden words using strategic guessing and helpful hints. Features multiple difficulty levels and categories for endless entertainment.",
    image: "/word-guessing-game.png",
    features: [
      "Multiple word categories",
      "Hint system for difficult words",
      "Progressive difficulty levels",
      "Score tracking and leaderboards",
      "Timer-based challenges",
      "Multiplayer word battles",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    demoImages: ["/word-guessing-game.png", "/word-guessing-game.png", "/placeholder-jfr56.png"],
    liveUrl: "https://word-game-demo.vercel.app",
    githubUrl: "https://github.com/thanhpham/word-guessing-game",
  },
]

const codeSnippets = [
  "const developer = { name: 'Thành Phạm', role: 'Frontend Developer' };",
  "import React from 'react';",
  "const skills = ['JavaScript', 'React', 'TypeScript', 'Node.js'];",
  "function createAwesomeWebsite() { return 'Amazing UI/UX'; }",
  "export default function Portfolio() {",
  "  const [isAwesome, setIsAwesome] = useState(true);",
  "  useEffect(() => { console.log('Portfolio loaded!'); }, []);",
  "  return <div>Welcome to my portfolio</div>;",
  "}",
  "// Building the future, one component at a time",
  "const passion = 'Frontend Development';",
  "git commit -m 'Another awesome feature'",
  "npm install creativity --save",
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [currentView, setCurrentView] = useState<"portfolio" | "project">("portfolio")
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setCurrentView("project")
  }

  const handleBackToPortfolio = () => {
    setCurrentView("portfolio")
    setSelectedProject(null)
  }

  const skills = [
    { name: "Frontend", level: 95, experience: "Experienced" },
    { name: "ReactJS", level: 90, experience: "Experienced" },
    { name: "TypeScript", level: 75, experience: "Intermediate" },
    { name: "RESTful APIs", level: 85, experience: "Experienced" },
    { name: "Git/GitHub", level: 88, experience: "Experienced" },
  ]

  if (currentView === "project" && selectedProject) {
    return (
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Code Background Overlay */}
        <div className="code-overlay">
          <div className="absolute inset-0 p-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="mb-2" style={{ marginLeft: `${Math.random() * 80}%` }}>
                {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-0 h-full w-20 bg-gray-800/90 backdrop-blur-sm border-r border-gray-700 z-50 flex flex-col items-center py-8">
          <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-12 font-mono font-bold text-black">
            TP
          </div>
        </div>

        {/* Project Detail Content */}
        <div className="ml-20 relative z-10 py-8 px-8 lg:px-16">
          <Container size="xl">
            {/* Back Button */}
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 mb-8 bg-transparent"
              onClick={handleBackToPortfolio}
            >
              ← Back to Portfolio
            </Button>

            {/* Project Header */}
            <div className="mb-12">
              <h1 className="text-5xl lg:text-6xl font-mono font-bold text-white mb-4">{selectedProject.title}</h1>
              <p className="text-xl text-cyan-400 font-mono">{selectedProject.tagline}</p>
            </div>

            {/* About Section */}
            <Card className="bg-gray-800/50 border border-gray-700 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-4">About</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
              </div>
            </Card>

            {/* Main Features Section */}
            <Card className="bg-gray-800/50 border border-gray-700 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-4">Main Features</h2>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Technologies Used Section */}
            <Card className="bg-gray-800/50 border border-gray-700 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Demo Images Section */}
            <Card className="bg-gray-800/50 border border-gray-700 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-4">Demo Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.demoImages.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${selectedProject.title} demo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-gray-600"
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Links Section */}
            <Card className="bg-gray-800/50 border border-gray-700 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-4">Links</h2>
                <Group gap="md">
                  <Button
                    component="a"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 bg-transparent"
                    leftSection={<IconExternalLink size={16} />}
                  >
                    Live Website
                  </Button>
                  <Button
                    component="a"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black transition-all duration-300 bg-transparent"
                    leftSection={<IconBrandGithub size={16} />}
                  >
                    GitHub Repository
                  </Button>
                </Group>
              </div>
            </Card>

            {/* Bottom Back Button */}
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 bg-transparent"
                onClick={handleBackToPortfolio}
              >
                ← Back to Portfolio
              </Button>
            </div>
          </Container>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Code Background Overlay */}
      <div className="code-overlay">
        <div className="absolute inset-0 p-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="mb-2" style={{ marginLeft: `${Math.random() * 80}%` }}>
              {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-gray-800/90 backdrop-blur-sm border-r border-gray-700 z-50 flex flex-col items-center py-8">
        {/* Logo */}
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-12 font-mono font-bold text-black">
          TP
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-8">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "work", label: "Work" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={` text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeSection === item.id ? "text-cyan-400" : "text-gray-400"
              }`}
              
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 relative z-10">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center px-8 lg:px-16">
          <Container size="xl" className="w-full">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-6xl lg:text-8xl font-mono font-bold mb-4">
                  <span className="text-white">Hi,</span>
                  <br />
                  <span className="text-white">I'm </span>
                  <span className="text-cyan-400">Thành Phạm</span>
                  <br />
                  <span className="text-white">Front-End developer</span>
                </h1>
                <p className="text-xl text-gray-300 font-mono mb-8">JavaScript / ReactJS / Frontend Expert</p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact me
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-20 px-8 lg:px-16">
          <Container size="xl">
            <div className="mb-16">
              <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">My Portfolio</h2>
              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
                Welcome to a curated showcase of some of my recent collaborations! These projects have been completed
                individually from companies all over the world. While I specialize in frontend development, I also have
                experience in full-stack development for a wide range of projects I have had the privilege to be a part
                of. Explore this collection as a very glimpse into the vast ocean of my creative endeavors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <Card.Section>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </Card.Section>
                  <div className="p-4">
                    <Text className="font-semibold text-white mb-2">{project.title}</Text>
                    <Text size="sm" className="text-gray-400">
                      {project.tagline}
                    </Text>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 lg:px-16">
          <Container size="xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">Skills & Experience</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I specialize in creating successful responsive websites that are fast, user-friendly, and built with
                  industry best practices. With expertise in front-end development, including HTML, CSS, and JS, I can
                  build small to medium web apps, custom plugins, and interactive websites. I also have experience as a
                  full-stack developer working with popular CMS platforms like WordPress, Drupal, Magento, and
                  Keystone.js. For more details, visit my LinkedIn profile or contact me directly. Let's collaborate and
                  create something amazing!
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <Text className="font-semibold text-white">{skill.name}</Text>
                      <Text size="sm" className="text-cyan-400">
                        {skill.experience}
                      </Text>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        size="lg"
                        className="progress-bar"
                        styles={{
                          bar: {
                            background: "linear-gradient(90deg, #00FFFF 0%, #38BDF8 100%)",
                          },
                          root: {
                            backgroundColor: "#374151",
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Floating Card */}
                <Card className="bg-cyan-400/10 border border-cyan-400/30 mt-8">
                  <div className="p-4">
                    <Text className="font-semibold text-cyan-400 mb-1">Frontend Developer</Text>
                    <Text size="sm" className="text-gray-300">
                      Freelance
                    </Text>
                    <Text size="xs" className="text-gray-400 mt-2">
                      Jan 2022 - Present
                    </Text>
                    <Text size="sm" className="text-gray-300 mt-2">
                      Creating modern web applications and development studies that can bring your online business to
                      the next level.
                    </Text>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* About Me Section */}
        <section className="py-20 px-8 lg:px-16">
          <Container size="xl">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">About me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello and welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and
                a strong foundation in JavaScript and React. I thrive on collaborating with clients and fellow
                developers to bring creative visions to life through clean, efficient, and user-friendly web
                applications. My experience extends to working with RESTful API integrations, ensuring that each project
                I work on not only looks great but also functions flawlessly across different devices and platforms. I
                believe in continuous learning and staying up-to-date with the latest industry trends and technologies.
                Feel free to explore my portfolio to see a showcase of my work and feel free to reach out if you have
                any exciting projects in mind. Let's create something amazing together!
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 lg:px-16">
          <Container size="xl">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">Contact me</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-16">
                I am actively seeking freelance opportunities, particularly those that involve ambitious or large-scale
                projects. If you have any other requests or questions, please feel free to reach out using the form
                provided. I am open to exploring various types of collaborations and would be thrilled to discuss how I
                can contribute to your project. Let's connect and bring your ideas to life!
              </p>

              <div className="text-center">
                <h3 className="text-5xl lg:text-6xl font-mono font-bold mb-8">
                  <span className="text-white">Got a </span>
                  <span className="text-cyan-400">Project?</span>
                  <br />
                  <span className="text-white">Let's talk</span>
                </h3>

                <Button
                  size="xl"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 mb-12 bg-transparent"
                  leftSection={<IconMail size={20} />}
                >
                  Contact me
                </Button>

                <Group justify="center" gap="xl">
                  <Anchor href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <IconBrandGithub size={24} />
                  </Anchor>
                  <Anchor href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <IconBrandLinkedin size={24} />
                  </Anchor>
                  <Anchor href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <IconExternalLink size={24} />
                  </Anchor>
                </Group>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  )
}
