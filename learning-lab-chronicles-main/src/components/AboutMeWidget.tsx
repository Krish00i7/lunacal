import { useState } from "react";
import { HelpCircle } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"];

const content = {
  "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
  
  "Experiences": `I have over 15 years of experience in sales and customer relationship management. My journey started in enterprise software solutions, where I learned the importance of understanding client needs.

At Salesforce, I've helped numerous companies transform their sales processes and achieve remarkable growth. I specialize in cloud solutions and have a passion for helping businesses leverage technology effectively.`,
  
  "Recommended": `Based on my experience, I highly recommend:

• Building strong relationships with your clients
• Regular follow-ups and personalized communication
• Leveraging CRM tools to track customer interactions
• Continuous learning about new technologies
• Maintaining a healthy work-life balance

These practices have been instrumental in my success and can help you achieve your goals as well.`
};

export function AboutMeWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="bg-widget rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-tab-active text-foreground shadow-lg"
                : "bg-tab-inactive text-muted-foreground hover:bg-tab-active/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-muted-foreground leading-relaxed whitespace-pre-line overflow-y-auto max-h-64 pr-2">
        {content[activeTab as keyof typeof content]}
      </div>
    </div>
  );
}
