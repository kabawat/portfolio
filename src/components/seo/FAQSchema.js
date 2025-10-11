import React from 'react';

const FAQSchema = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Mukesh Singh Kabawat offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh Singh Kabawat offers comprehensive Full Stack Development services including web application development, mobile app development, AI solutions, machine learning implementations, database design, API development, and cloud solutions using modern technologies like React, Node.js, Next.js, MongoDB, and Python."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Mukesh Singh Kabawat specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh specializes in React, Node.js, Next.js, MongoDB, JavaScript, TypeScript, Python, Java, C++, Express.js, GraphQL, React Native, Unity Game Development, AI/ML technologies, MERN Stack, MEAN Stack, and various cloud platforms including AWS, Azure, and Google Cloud."
        }
      },
      {
        "@type": "Question",
        "name": "How many years of experience does Mukesh Singh Kabawat have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh Singh Kabawat has over 3 years of professional experience in Full Stack Development, AI Engineering, and Software Development, working with various technologies and delivering innovative solutions for clients across different industries."
        }
      },
      {
        "@type": "Question",
        "name": "Is Mukesh Singh Kabawat available for freelance projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mukesh Singh Kabawat is available for freelance projects, remote work, consulting services, and contract development. He offers flexible engagement models to meet different project requirements and timelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is Mukesh Singh Kabawat's location?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh Singh Kabawat is based in Rajasthan, India, specifically serving clients in Jalore, Sanchore, Bhinmal, and surrounding areas. He also provides remote development services globally."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Mukesh Singh Kabawat for a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Mukesh Singh Kabawat via email at kshatriyakabawat@gmail.com, phone at +91-6377576922, or through his social media profiles on GitHub, LinkedIn, and Instagram. He responds promptly to project inquiries and consultations."
        }
      },
      {
        "@type": "Question",
        "name": "Does Mukesh Singh Kabawat offer AI and Machine Learning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mukesh Singh Kabawat specializes in AI Engineering and Machine Learning solutions. He develops intelligent systems, implements machine learning models, creates AI-powered applications, and provides consultation on AI strategy and implementation."
        }
      },
      {
        "@type": "Question",
        "name": "What types of projects has Mukesh Singh Kabawat completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh has completed various projects including web applications, mobile apps, e-commerce platforms, SaaS solutions, AI-powered systems, database designs, API integrations, cloud deployments, and custom software solutions for startups and enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "Does Mukesh Singh Kabawat provide technical consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mukesh provides comprehensive technical consultation services including technology stack recommendations, system architecture design, code reviews, performance optimization, security audits, and strategic technology planning for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Mukesh Singh Kabawat unique as a developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mukesh Singh Kabawat is unique for being the first AI Engineer in his region (Sanchore, Jalore), combining traditional software development with cutting-edge AI technologies. His expertise spans full-stack development, AI/ML implementation, and innovative problem-solving approaches."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData),
      }}
    />
  );
};

export default FAQSchema;
