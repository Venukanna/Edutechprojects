import React, { useState } from 'react';
import './Faq.css';
import Footer from '../components/Shared/Footer';
import LandHeader from '../landingpage/LandHeader';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('LMS');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = {
    'LMS': [
      {
        question: "What are the next steps after logging into the dashboard?",
        answer: "After logging in, you should explore your dashboard to access course materials, upcoming sessions, assignments, and other resources. Check your 'Today's Session' tab for immediate actions."
      },
      {
        question: "Why can't I see anything after I login to the dashboard?",
        answer: "This might be due to browser cache issues or incomplete profile setup. Try clearing your cache or contact support for assistance."
      },
      {
        question: "Where can I enroll for a new batch?",
        answer: "You can enroll for new batches through your dashboard under the 'My Courses' section or by contacting your program advisor."
      },
      {
        question: "I am not able to join the session from Today's session tab?",
        answer: "Ensure you're using a compatible browser and have stable internet. If issues persist, contact technical support immediately."
      },
      {
        question: "When I click on the join button from today's session tab or my live class and nothing happens, then what should I do?",
        answer: "Check your pop-up blocker settings or try a different browser. If the problem continues, reach out to our technical team."
      },
      {
        question: "We are not able to see anything in pre-recorded material?",
        answer: "This might be a content loading issue. Refresh the page or check back later. If the problem persists, report it to support."
      },
      {
        question: "By when do we have to enroll for any of the new batches?",
        answer: "Enrollment deadlines vary by batch. Check the specific batch details or consult with your program coordinator."
      },
      {
        question: "When will the recording of the class be available?",
        answer: "Recordings are typically available within 24-48 hours after the live session."
      },
      {
        question: "In case the lecture video is not getting played, whom do I contact?",
        answer: "Contact our technical support team immediately with details of the issue you're facing."
      }
    ],
    'Assignments and Projects': [
      {
        question: "Where can I find the assignments?",
        answer: "Assignments are available in the 'Assignments' section of your course dashboard."
      },
      {
        question: "I have completed all assignments and how much time does it take to get a project?",
        answer: "Projects are typically assigned within 1-2 weeks of completing all assignments, depending on course progress."
      },
      {
        question: "I have a few questions on assignments and who can help me?",
        answer: "You can reach out to your assigned mentor or post questions in the course discussion forum."
      },
      {
        question: "How long does it take to evaluate the assignment? And whom to contact?",
        answer: "Assignments are usually evaluated within 5-7 working days. Contact your course mentor for specific queries."
      },
      {
        question: "I have a few assignments pending but I want to start a project. Can I get a project?",
        answer: "Projects are typically assigned only after completing all prerequisite assignments to ensure you're prepared."
      }
    ],
    'Profile preparation / Interview support': [
      {
        question: "When will the resume preparation and mock Interview start?",
        answer: "These services become available after completing core modules. Check your course timeline for specific dates."
      },
      {
        question: "Whom to contact for the resume preparation?",
        answer: "Contact your career counselor or the placement support team for resume preparation assistance."
      },
      {
        question: "I have sent my resume to the resume preparation team. How long should I wait?",
        answer: "You should receive feedback within 3-5 working days. Follow up if you don't hear back within this timeframe."
      },
      {
        question: "Whom to contact for the mock interviews?",
        answer: "Reach out to your placement coordinator to schedule mock interviews."
      }
    ],
    'Certificates': [
      {
        question: "What are all the certificates I am eligible to get?",
        answer: "You'll receive course completion certificates and may earn additional certifications based on your performance and course type."
      },
      {
        question: "How many months of internship will be provided?",
        answer: "Internship duration varies by program. Typically ranges from 1-6 months depending on the course."
      },
      {
        question: "I need certificates without completing assignments/ without executing projects. Can I get it?",
        answer: "Certificates are awarded only upon successful completion of all course requirements including assignments and projects."
      },
      {
        question: "I am applying for a foreign university. Can I get a recommendation letter from you?",
        answer: "Recommendation letters may be provided based on your performance and at the discretion of your instructors."
      }
    ],
    'Batch Management': [
      {
        question: "How would I be informed if a batch is cancelled?",
        answer: "You'll receive email and dashboard notifications for any batch cancellations."
      },
      {
        question: "How early will I be informed if a batch is cancelled?",
        answer: "We strive to provide at least 48 hours notice for any cancellations."
      },
      {
        question: "How would I be informed if the batch is postponed?",
        answer: "You'll receive notifications via email and dashboard alerts for postponements."
      },
      {
        question: "How early will I be informed about the postponement of the batches?",
        answer: "Typically 24-48 hours in advance, except in emergency situations."
      }
    ],
    'Value added courses': [
      {
        question: "What are value added courses offered by ExcelR?",
        answer: "These are supplementary courses that enhance your primary learning, covering additional tools and technologies."
      },
      {
        question: "Are these value-added courses Classroom/Live virtual classroom or recorded videos?",
        answer: "They may be offered in various formats - check the specific course details for delivery method."
      },
      {
        question: "How do I enroll for Value added courses?",
        answer: "Enrollment is typically through your dashboard or by contacting your program advisor."
      },
      {
        question: "How long can I attend Value added courses?",
        answer: "Access duration varies by course - check the specific course details."
      },
      {
        question: "What if I miss a value added course and how can I attend?",
        answer: "Recordings are usually available, or you may join the next scheduled session."
      },
      {
        question: "For which of the courses, Value added courses are available?",
        answer: "Most major programs include value-added courses. Check your program details."
      }
    ],
    'Content / Material': [
      {
        question: "Where Can I get the material?",
        answer: "All course materials are available in the 'Resources' section of your dashboard."
      }
    ],
    'Feedback': [
      {
        question: "Where to give feedback on training?",
        answer: "You can provide feedback through the 'Feedback' section in your dashboard or via email to your program coordinator."
      },
      {
        question: "I have a few concerns on the program / training / trainer and want to speak to someone. Whom to speak?",
        answer: "Contact your program manager or the support team through the helpdesk."
      }
    ],
    'Jumbopass': [
      {
        question: "What is Jumbo Pass? And how do I avail Jumbo Pass?",
        answer: "JumboPass provides access to multiple courses. Contact admissions for enrollment details."
      },
      {
        question: "Do I have to pay extra for availing Jumbo Pass?",
        answer: "JumboPass requires separate enrollment and fees. Check current offerings for pricing."
      },
      {
        question: "What are the courses that are covered under Jumbo pass?",
        answer: "The included courses vary by package. Consult the current JumboPass brochure."
      },
      {
        question: "What is the difference between Lifetime e-learning access and Jumbo Pass?",
        answer: "Lifetime access is for a single course, while JumboPass covers multiple courses for a limited period."
      }
    ],
    'Sales and Refund': [
      {
        question: "Can I cancel my enrollment? How do I get my refund?",
        answer: "Cancellation policies vary by program. Contact admissions for your specific refund options."
      },
      {
        question: "Do I get Group Discounts?",
        answer: "Group discounts are available for multiple enrollments. Contact our sales team."
      },
      {
        question: "What if I want to switch the Program? Is it possible?",
        answer: "Program switches may be possible depending on timing and availability. Consult with admissions."
      },
      {
        question: "Can I Swap my Access with anyone in my family or friends?",
        answer: "Course access is non-transferable per our terms of service."
      },
      {
        question: "I have lost my Concerned person contact details, Whom to reach out to get the information?",
        answer: "Contact our main support line or helpdesk email for assistance."
      }
    ],
    'References': [
      {
        question: "How can I refer a friend?",
        answer: "Use the 'Refer a Friend' feature in your dashboard or share your unique referral link."
      },
      {
        question: "Do I get any referral bonus if I refer a friend? How much would I get?",
        answer: "Yes, referral bonuses vary by program. Current rates are shown in your referral dashboard."
      }
    ],
    'Cross Skilling': [
      {
        question: "How can I enroll for new courses If I want to upskill or cross skill?",
        answer: "Contact your program advisor or visit our website to explore additional courses."
      },
      {
        question: "Being an existing customer of ExcelR, would I get any special discount if I enroll for a new course?",
        answer: "Yes, existing students often qualify for loyalty discounts. Ask your advisor about current offers."
      }
    ],
    'Common List of Holidays': [
      {
        question: "Holiday List",
        answer: "The holiday schedule is available in your dashboard under 'Resources' and is also emailed to all students periodically."
      }
    ]
  };

  return (
    <div className="faq-page">
        <LandHeader />
     
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about ExcelR Solutions IT Training Programs</p>
        </div>

        <div className="faq-categories">
          {Object.keys(faqCategories).map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="faq-accordion">
          {faqCategories[activeCategory].map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Contact our support team for more information</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;