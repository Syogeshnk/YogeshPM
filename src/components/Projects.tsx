import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mahindra Finance OneApp (Fin2Go)",
    role: "Product Owner",
    company: "IBM",
    teamSize: "9",
    period: "Jan 2024-Present",
    description: "End-to-end loan management system for Mahindra vehicles impacting 2 Lakh users annually",
    expandedContent: "• Loan Origination System (LOS) and Loan Management System (LMS) Development \n • The end-to-end loan management system for Mahindra vehicles is impacting 2 Lack users per year \n • Implemented ACH-Enache for automated payment recovery, registering 7,000 users in the first-month \n • Service Ticket Management for Credit Burau and Profiles payments (Payu, CamsPay)",
    image: "/lovable-uploads/49531533-e773-4d54-ab4c-6a673df88aef.png"
  },
  {
    title: "State Bank of India (YONO Bank)",
    role: "Sr Business Analyst",
    company: "Quality Kiosk",
    teamSize: "8",
    period: "Oct 2021-Dec 2023",
    description: "Enhanced banking experience with innovative features and security improvements",
    expandedContent: "• Enhanced Yono Quick Pay transactions at the pre-login page to increase the transaction rate by 5 % daily.\n • YoNo Cash cardless ATM withdrawals linked to Aadhaar and mobile numbers. Achieved a landmark with an average of 5 million transactions daily in rural India.\n • Launched YoNo Pay for UPI transactions, achieving 20,000 weekly registrations.\n • Initiated Biometric Login for secure transactions under ₹5000.\n •  Maintained IT environments, ensuring uptime and early issue detection reduced downtime by 20%.\n • Launched Covid Loans, opening 50,000 accounts in one week.",
    image: "/lovable-uploads/9023d86f-1766-42ef-bad1-73c28e11483e.png"
  },
  {
    title: "Union Bank",
    role: "Business Analyst",
    company: "AQM",
    teamSize: "9",
    period: "Apr 2018-Jul 2019",
    description: "Led Internet Banking Migration affecting 2400+ branches",
    expandedContent: "• Spearheaded Internet Banking Migration for Corporation Bank, affecting 2400+ branches.\n • Automated 80+ SMS notifications for enhanced customer communication.\n • Boosted savings with Flexi Fixed Deposits, attracting 5K customers in a month.\n • Implemented anti-money laundering measures, analyzing transaction patterns of 2 Cr Customers\n • Monitored and monetized branch records, reinforcing the financial integrity of 2000+ Branches",
    image: "/lovable-uploads/1b5af172-b2e6-4c75-a608-d69c7c62fc04.png"
  }
];

const Projects = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-[#60A5FA]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
