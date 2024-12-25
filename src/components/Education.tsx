const Education = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-[#60A5FA] animate-slide-in-left">Education</h2>
      
      <div className="bg-[#112240] p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#60A5FA]/20 pb-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-[#60A5FA]">Bachelor of Engineering</h3>
            <p className="text-gray-300">Mumbai University, India</p>
          </div>
          <p className="text-gray-400">June 2017</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-[#60A5FA]">Diploma in Electronics</h3>
            <p className="text-gray-300">MSBTE</p>
          </div>
          <p className="text-gray-400">June 2014</p>
        </div>
      </div>
    </section>
  );
};

export default Education;