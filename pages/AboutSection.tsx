import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
const AboutSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">John Doe</h1>
          <p className="text-xl md:text-2xl text-gray-600">Software Developer</p>
        </div>
        {/* Bio Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate software developer with 5 years of experience building web applications.
            I love creating elegant solutions to complex problems and learning new technologies.
            When I'm not coding, you can find me hiking or reading about new tech trends.
          </p>
        </div>
        {/* Skills Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Contact Section */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50"
            onClick={() => window.open('mailto:john@example.com')}
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50"
            onClick={() => window.open('https://github.com')}
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50"
            onClick={() => window.open('https://linkedin.com')}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
