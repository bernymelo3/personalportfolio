"use client"

import React, { useState } from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import TabButton from "./TabButton";


// Define types for your skill items and categories
type SkillItem = {
  name: string;
  rating?: number;
  icon: string;
};

type Categories = {
  Languages: SkillItem[];
  Web: SkillItem[];
  Database: SkillItem[];
  Cloud: SkillItem[];
  Cybersecurity: SkillItem[];
  AI: SkillItem[];
  Software: SkillItem[];
};

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
};

type Profile = {
  Certificates: CertificateItem[];
  Education: EducationItem[];
}

// Define the type for the keys of Categories
type CategoryName = keyof Categories;


const Skills = () => {


  const renderProgressBar = (rating: number | undefined) => {
    const safeRating = rating ?? 0; // Default to 0 if rating is undefined
    const percentage = `${safeRating * 20}%`; // Use safeRating here
    return (
      <div className="progress-container">
        <div className="progress-bar" style={{ width: percentage }}></div>
      </div>
    );
  };

  // Set the type of activeTab to CategoryName
  const [activeTab, setActiveTab] = useState<CategoryName>('Languages');

  // Define your categories with types
  // Define your categories with types
  const categories: Categories = {
    Languages: [
      { name: 'Python', rating: 5, icon: 'path-to-python-icon' },
      { name: 'C', rating: 4, icon: 'path-to-c-icon' },
      { name: 'C++', rating: 4, icon: 'path-to-cpp-icon' },
      { name: 'Prolog', rating: 3, icon: 'path-to-prolog-icon' },
      { name: 'Java', rating: 4, icon: 'path-to-java-icon' },
      { name: 'JavaScript', rating: 5, icon: 'path-to-javascript-icon' },
      { name: 'R', rating: 3, icon: 'path-to-r-icon' },
      { name: 'TypeScript', rating: 5, icon: 'path-to-typescript-icon' },
      { name: 'Assembly', rating: 3, icon: 'path-to-assembly-icon' },
      // ... more languages ...
    ],
    Web: [
      { name: 'HTML', rating: 5, icon: 'path-to-html-icon' },
      { name: 'CSS', rating: 5, icon: 'path-to-css-icon' },
      { name: 'Node.js', rating: 4, icon: 'path-to-nodejs-icon' },
      { name: 'REST APIs', rating: 4, icon: 'path-to-rest-icon' },
      { name: 'JSON', rating: 4, icon: 'path-to-json-icon' },
      { name: 'Next.js', rating: 5, icon: 'path-to-nextjs-icon' },
      { name: 'React.js', rating: 5, icon: 'path-to-reactjs-icon' },
      // ... more web development skills ...
    ],
    Database: [
      { name: 'SQL', rating: 4, icon: 'path-to-sql-icon' },
      { name: 'NoSQL', rating: 3, icon: 'path-to-nosql-icon' },
      { name: 'MySQL', rating: 4, icon: 'path-to-mysql-icon' },
      { name: 'PostgreSQL', rating: 4, icon: 'path-to-postgresql-icon' },
      // ... more database management skills ...
    ],
    Cloud: [
      { name: 'AWS', rating: 4, icon: 'path-to-aws-icon' },
      { name: 'Azure', rating: 4, icon: 'path-to-azure-icon' },
      { name: 'Google Cloud', rating: 3, icon: 'path-to-googlecloud-icon' },
      { name: 'Kubernetes', rating: 4, icon: 'path-to-kubernetes-icon' },
      { name: 'Docker', rating: 4, icon: 'path-to-docker-icon' },
      // ... more cloud computing skills ...
    ],
    Cybersecurity: [
      { name: 'Ethical Hacking', rating: 4, icon: 'path-to-hacking-icon' },
      { name: 'Encryption', rating: 4, icon: 'path-to-encryption-icon' },
      { name: 'Network Security', rating: 4, icon: 'path-to-network-security-icon' },
      { name: 'Firewalls', rating: 3, icon: 'path-to-firewalls-icon' },
    ],
    AI: [
      { name: 'TensorFlow', rating: 4, icon: 'path-to-tensorflow-icon' },
      { name: 'PyTorch', rating: 4, icon: 'path-to-pytorch-icon' },
      { name: 'Natural Language Processing', rating: 3, icon: 'path-to-nlp-icon' },
      { name: 'Computer Vision (Vision AI)', rating: 3, icon: 'path-to-computer-vision-icon' },
    ],
    Software: [
      { name: 'Agile Methodology', rating: 5, icon: 'path-to-agile-icon' },
      { name: 'Scrum', rating: 4, icon: 'path-to-scrum-icon' },
      { name: 'Kanban', rating: 3, icon: 'path-to-kanban-icon' },
      { name: 'Software Lifecycle Management', rating: 4, icon: 'path-to-lifecycle-management-icon' },
      { name: 'Debugging', rating: 4, icon: 'path-to-debugging-icon' },
    ],
    // ... you can define more categories like DevOps, Cybersecurity, etc. based on the skills from your CV ...
  };

  return (
    <section id="skills" className="skills-section">
      {/* Tab Buttons for education and certificates help me out here*/}


      {/* Tab Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {(Object.keys(categories) as CategoryName[]).map((categoryName) => (
          <button
            key={categoryName}
            onClick={() => setActiveTab(categoryName)}
            className={`custom-button ${activeTab === categoryName ? 'active' : ''}`}
          >
            {categoryName}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {categories[activeTab].map((item, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{item.name}</span>
            {renderProgressBar(item.rating)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
