import { useState } from "react";
import { ChevronDown, ChevronUp, Building, Users, Calendar, Briefcase } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  company: string;
  teamSize: string;
  period: string;
  description: string;
  expandedContent: string;
  image: string;
}

const ProjectCard = ({ 
  title, 
  role,
  company,
  teamSize,
  period,
  description, 
  expandedContent, 
  image
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-900/40 to-black/40 backdrop-blur-sm border border-blue-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="relative z-20 p-6 -mt-20 space-y-4">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {title}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-gray-300 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="hover:text-blue-400 transition-colors">{role}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-blue-400" />
              <span className="hover:text-blue-400 transition-colors">{company}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Team: {teamSize}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{period}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <span>{isExpanded ? "Show less" : "Learn more"}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-4 text-gray-300 animate-fade-in space-y-2">
            {expandedContent.split('\n').map((line, index) => (
              <p key={index} className="leading-relaxed">{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;