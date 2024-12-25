const experiences = [
  {
    title: "Project Manager",
    company: "IBM",
    period: "Oct 2021 - Present",
    achievements: [
      "Mahindra Finance Mobile & Web Application development Costing around 5 million $ and 400+ Screen, 9 MVPs",
      "Created Project Plans, Assess Risks, for 8 MVPs Schedules, and Manage Budgets. Identify Project Risk and Prioritization and resolve Risk, Gap Analysis, and Creating Risk Log, Action, and Issue Log for 9 Continuous Sprints",
      "Work closely with 10+ teams. and provide servant leadership and maintain team Relationships",
      "Ensure stakeholder engagement throughout the end-to-end process. Prioritize Timely Project Delivery of 8 MVPS",
      "Identify Risk perform Risk Analysis using different technique and prepare mitigation plan in Brainstorming session",
    ],
  },
  {
    title: "Sr Business Analyst",
    company: "Quality Kiosk Technologies",
    period: "Jul 2019 – Oct 2021",
    achievements: [
      "Requirement Gathering: Identify and document business needs through stakeholder interviews and workshops and create a Functional Document (FSD/ BRD/ BRS) wrote 18 FSDs and designed 40 Wireframe",
      "Stakeholder Communication: Act as a liaison between business and technical teams to ensure clear communication between 8 Different teams and 30 + Stakeholders.",
      "Requirement Gathering from Different Stakeholders Requirement Analysis and Creating FRD of 30 Requirements",
      "SBI (YONO) Mobile Banking Application Development Impacting 60 million Customer's Life",
      "Developed and upheld customers and Business requirements in alignment with functional and technical specifications for ongoing projects for 100% success",
    ],
  },
   {
    title: "Business Analyst",
    company: "AQMTechnologies",
    period: "Apr 2018 – Jul 2019",
    achievements: [
      "Core Banking & CRM Solution for Corporation Bank impacting the life of 60Thousand Loan Officers Daily work",
      "Internet Banking Implementation Impacting 9 Million Customers of Corporation Bank and 60Thousand Bankers",
      "Employ Miro to design a Mind Map and Workflow diagram. & Figma for Wireframe Creation of 90+ Screens.",
      "Demonstrated software before the client and trained over 3000+ bankers on new software.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-6 text-[#60A5FA] animate-slide-in-left">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.title + exp.company}
            className="bg-[#112240] p-8 rounded-lg hover:transform hover:scale-[1.02] transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#60A5FA]">
                {exp.title} at {exp.company}
              </h3>
              <span className="text-gray-400">{exp.period}</span>
            </div>
            <ul className="space-y-3">
              {exp.achievements.map((achievement, achievementIndex) => (
                <li 
                  key={achievementIndex} 
                  className="text-gray-300 animate-slide-in-left"
                  style={{ animationDelay: `${(index * 100) + (achievementIndex * 50)}ms` }}
                >
                  • {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;