import React from "react";
import HeaderComponent from "../components/headercomponent";
import Internship from "../js files/asserts/internship.jpg";
import "../css files/internship.css";
import Footer from "../components/footer";
function InternshipCertificate() {
    return (
        <div >
        <HeaderComponent text="Internship Certificate" />
        <div className="internship-certificate-container">
            <h3 className="Overview">Overview Of The Internship</h3>
            <p className="Intern-Describe">During my internship at Interain as a Data Analyst from September 21, 2024, to 
               November 10, 2024, I focused on key tasks related to data preparation and
               management. My responsibilities included mining data from various sources, cleaning
               and organizing datasets to ensure accuracy and consistency, and converting structured
               data into JSON format for seamless integration with other systems. This experience
               allowed me to enhance my technical skills in data handling and understand the critical
               role of clean, well-structured data in analytics workflows. It was a valuable opportunity to
               contribute to the company's data-driven operations.</p>
               <h3 className="Overview">Responsibilities and Tasks</h3>
               <p className="Intern-Describe">During my internship, my responsibilities primarily involved mining, cleaning, and
                  preparing data for further analysis. I worked with a variety of datasets, some of which
                  were related to verbal ability assessments and others to various academic topics,
                  including Chemistry. My tasks included:</p>
                  <ul className="internship-list">
                    <li>Data Mining</li>
                    <li>Data Cleaning:</li>
                    <li>Data Transformation</li>
                    <li>File Organization</li>
                   </ul>
                 <h3 className="Overview">Projects and Contributions</h3>
                 <p className="Intern-Describe">
                    During my internship at Interain, I contributed to several significant projects related to
                    data mining, cleaning, and preparing datasets for AI applications, specifically involving
                    MCQs in subjects like B.Sc. Chemistry and Verbal Ability. Below is an overview of the
                    projects I was involved in:
                 </p>
                 <ol className="internship-list2">
                    <li>B.Sc. Chemistry MCQ Data Mining and Cleaning:</li>
                    <p className="Intern-Describe2">I worked on extracting large sets of MCQs related to B.Sc. Chemistry from
                     various sources. My responsibilities included identifying relevant questions,
                     ensuring they were correctly categorized (e.g., organic chemistry, inorganic
                     chemistry, etc.), and cleaning up inconsistencies in the data, such as formatting
                     errors or missing information. This helped ensure that the dataset was suitable
                     for use in AI algorithms designed to assess knowledge in chemistry.</p>
                     <li>Verbal Ability Dataset Mining and Error Resolution:</li>
                     <p className="Intern-Describe2">In this project, I focused on mining datasets that contained verbal ability questions
                     I was tasked with mining datasets that contained verbal ability questions used for
                     interview preparation and placement simulations. I identified and resolved errors,
                     such as duplicate entries, incorrect answer choices, or mislabeling of difficulty
                     levels. I also ensured that the data was formatted consistently, removing any
                     ambiguity in question phrasing to improve the quality of the verbal ability dataset.
                     </p>
                     <li>Data Cleaning and Transformation:</li>
                     <p className="Intern-Describe2">
                     For both the Chemistry and Verbal Ability datasets, I utilized Python and other
                     data tools to clean, format, and structure the data. This included handling missing
                     values, addressing outliers, and correcting any inconsistencies. I then
                     transformed the data into JSON format, ensuring that it could be easily integrated
                     into the company’s AI-driven products, such as Interview Simulation and MCQ
                     Bots.
                     </p>
                     <li>Conversion to JSON Format for AI Integration:</li>
                     <p className="Intern-Describe2">After cleaning and organizing the datasets, I converted them into JSON format to
                       ensure compatibility with AI algorithms used in personalized learning tools. This
                       step involved structuring data in a way that was easy for the AI systems to parse,
                       helping improve the efficiency of the learning experience for users.</p>
                    </ol>
                    <h3 className="Overview">Skills Developed</h3>
                    <ul className="internship-list2">
                        <li>Data Mining and Extraction</li>
                        <li>Data Quality Assurance</li>
                        <li>Technical Proficiency</li>
                        <li>Collaboration and Communication</li>
                        <li>Project Management</li>
                    </ul>
            <div className="internship-certificate-image">
            <img src={Internship} alt="Internship Certificate" className="intern-img" />
            </div>
        </div>
        <Footer />
        </div>
    );
    }
export default InternshipCertificate;