const Awards = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-6 text-[#60A5FA] animate-slide-in-left">Awards</h2>
      <div className="bg-[#112240] p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in">
        <ul className="space-y-3 text-gray-300">
          <li className="animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            • Risk-free Delivery from IBM for Yono Pay (20,000 User registrations in one week)
          </li>
          <li className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            • Delivery Excellence from Quality Kiosk for Covid Loan Implementation
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;