const Certifications = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-[#60A5FA] animate-slide-in-left">Certifications</h2>
      <div className="bg-[#112240] p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in">
        <ul className="space-y-4 text-gray-300">
          <li className="animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            • Project Manager Professional PMP® From PMI
          </li>
          <li className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            • Certified Scrum Master® CSM® from Scrum Alliance
          </li>
          <li className="animate-slide-in-left" style={{ animationDelay: '300ms' }}>
            • Retail Banking NBFC® From NSE
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
