import React from 'react';

const AboutMe = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Yogesh Kotkar Project Manager Years.pdf'; // Updated path without 'public'
    link.download = 'Yogesh_Kotkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 animate-float">
              Yogesh Kotkar
            </h1>
            <h2 className="text-3xl text-gray-300 animate-slide-in-left hover:text-blue-400 transition-colors duration-300">
              Project Manager / Scrum Master
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-300 text-lg leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-blue-900/30">
              {["Certified Scrum Master CSM® and Project Management Professional PMP® with over 6 years of experience in the Banking sector. I have a robust record in the BFSI sector, elevating success for prominent Banks & NBFC.",
                "Successfully delivered 100 Screen Developments and 80 Requirements in Productions.",
              ].map((text, index) => (
                <span 
                  key={index}
                  className="block animate-slide-in-left"
                  style={{ 
                    animationDelay: `${(index + 1) * 200}ms`,
                    opacity: 0,
                    animation: 'slideInFromLeft 0.5s ease-out forwards'
                  }}
                >
                  {text}
                </span>
              ))}
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="bg-[#60A5FA] text-white px-6 py-3 rounded-lg hover:bg-[#60A5FA]/80 transition-all duration-300 transform hover:scale-105 animate-fade-in flex items-center gap-2"
          >
            Download Resume
          </button>
        </div>
        <div className="relative w-72 h-72 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/10 animate-glow"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg backdrop-blur-sm">
            <img 
              src="/lovable-uploads/09d72e4c-0e8c-409c-a91d-419b39033e4c.png"
              alt="Yogesh Kotkar"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
