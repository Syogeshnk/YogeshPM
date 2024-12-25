const skillCategories = [
  {
    title: "Project Manager Skills",
    skills: [
      "Project Planning", "Project Analysis", "Stakeholder Engagement", "Gap analysis","Scheduling, Budgeting",
      "Resource Planning", "Risk management", "Conflict Resolution", "Change Control", "Delivery Management"
    ]
  },
  {
    title: "Banking Skills",
    skills: [
      "Core Banking", "Mobile Banking", "Internet Banking", "Payments",
      "Loan Origination System (LOS)", "Loan Management System (LMS)",
      "Banking CRM", "Anti Money Laundering",
    ],
  },
  {
    title: "Documents",
    skills: [
      "Project Plan","Risk Analysis & Mitigation Plan",
      "Project Requirement Document (PRD)","Project Status Report",
      "Project Communication Plan",
      "Project budget",
      "Project Charter",
      "Statement of Work (SOW)",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Jira", "Asana", "Trello", "Browser Stack", "Microsoft Excel",
      "SQL", "Postman", "Miro", "Notion", "Power BI",
    ],
  },
  {
    title: "Project Framework",
    skills: ["Agile Scrum", "Waterfall", "Lean"],
  },
];

const Skills = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        Skills
      </h2>
      <div className="space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="relative backdrop-blur-sm bg-gradient-to-r from-blue-900/40 to-black/40 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-full text-sm text-gray-300 bg-blue-900/30 border border-blue-900/50 hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;