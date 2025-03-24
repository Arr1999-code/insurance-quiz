import React, { useState } from "react";

const originalQuizData = [
  {
    question: "If agent Sue completes an application for an insurance policy on behalf of Phil, and the company agrees to insure him, which party made the offer?",
    options: ["Sue, when she made the initial appointment", "Phil, when he completed the application", "The company, when it issued the policy", "Phil, when he received the policy"],
    correct: "The company, when it issued the policy"
  },
  {
    question: "Which of the following types of long-term care benefits would be best suited for a senior citizen who needs supervision, social, and recreational services?",
    options: ["Respite care", "Adult Day care", "Home health care", "Nursing home care"],
    correct: "Adult Day care"
  },
  {
    question: "When a buyer is considering a long-term care policy, they are encouraged to review carefully all policy?",
    options: ["Limitations", "Facilities", "Carriers", "Agents"],
    correct: "Limitations"
  },
  {
    question: "Medicaid is a government-funded program designed to provide health care to?",
    options: ["All individuals over the age of 65", "All individuals who carry Medicare supplemental insurance", "Anyone who does not have a proper caregiver", "Low income state resident"],
    correct: "Low income state resident"
  },
  {
    question: "A policyowner suffers an injury that renders him incapable of performing one or more important job duties. Any decrease in income resulting from this injury would make him eligible for benefits under which provision?",
    options: ["Partial disability", "Non Disabling injury", "Presumptive disability", "Flat amount disability"],
    correct: "Partial disability"
  },
  {
    question: "Group Disability Income Insurance usually involves?",
    options: ["Higher premiums than individual disability policies", "Providing benefits for nonoccupational illnesses and injuries", "A requirement that all employees participate", "Workers who are individually uninsurable because of their high-risk occupations"],
    correct: "Providing benefits for nonoccupational illnesses and injuries"
  },
  {
    question: "Utilization review includes all of the following EXCEPT:",
    options: ["Projected date for release of the patient", "Continues analysis of accident-prone individuals", "Cost-effective ways of handling patients with catastrophic illnesses", "Intermittent analysis of the reasons for the patient to remain in the healthcare facility"],
    correct: "Projected date for release of the patient"
  }
];

const quizData = [...originalQuizData].sort(() => Math.random() - 0.5);

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(
