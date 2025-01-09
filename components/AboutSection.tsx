
import { Mail, Github, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const AboutSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in relative">
      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 left-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">Zylto11</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">Robotics Student | Developer</p>
        </div>

        {/* Bio Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, Im Zylto11. This obviously isn's my 'real' name but it is my acting username.
            I am a passionate robotics student that likes to code as my leasure activity of choice.
            My TimeZone is UTC+8:00 and i am a half korean.
          </p>
        </div>
        {/* Skills Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "PyTorch", "C#", "CMake", "JavaScript", "HTML"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
{/* Currently Working On Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Currently Working On</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <h3 className="font-medium text-gray-700 dark:text-gray-200">Emira AI</h3>
                
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-4">
                Creating the next generation of Twitch AI Vtubers.
                She is capable of talking through speech, playing tetris using a RNN, controlling a Vtuber Avatar on her own.
                Her Scheduled debut/relase date is around June,2025 . twitch.tv/zylto11
              </p>
              
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <h3 className="font-medium text-gray-700 dark:text-gray-200">Learning C# Programming</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 pl-4">
                Exploring C# for .NET applications as well as Unity/Unreal game development.
                No Active Projects as of now.
              </p>
              
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-gray-800"
            onClick={() => window.open('admin@zyltoai.xyz')}
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-gray-800"
            onClick={() => window.open('https://github.com')}
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-gray-800"
            onClick={() => window.open('https://x.com')}
          >
            <X className="h-4 w-4" />
            X
          </Button>
        </div>
        
        {/* Updates and License Section */}
        <div className="mt-16 text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Recent Updates</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Added dark mode support - April 2024</li>
              <li>Updated project descriptions - April 2024</li>
              <li>Implemented responsive design - March 2024</li>
            </ul>
          </div>
          <div className="text-center mt-4 pt-4 border-t">
            <p>Licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="underline hover:text-gray-900 dark:hover:text-gray-100">GNU General Public License v3.0</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
