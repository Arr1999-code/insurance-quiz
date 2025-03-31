import React, { useState } from "react";

const originalQuizData = [
  // ... your full question array remains unchanged
  {
  question: "A policyowner suffers an injury that renders him incapable of performing one or more important job duties. Any decrease in income resulting from this injury would make him eligible for benefits under which provision?",
  options: [
    "A. Partial disability",
    "B. Non Disabling injury",
    "C. Presumptive disability",
    "D. Flat amount disability"
  ],
  answer: "A. Partial disability"
},
{
  question: "Medicaid is a government-funded program designed to provide health care to",
  options: [
    "A. all individuals over the age of 65..",
    "B. All individuals who carry Medicare supplemental insurance.",
    "C. Anyone who does not have a proper caregiver.",
    "D. Low income state resident."
  ],
  answer: "D. Low income state resident."
},
{
  question: "Group Disability Income Insurance usually involves",
  options: [
    "A. Higher premiums than individual disability policies.",
    "B. Providing benefits for nonoccupational illnesses and injuries.",
    "C. A requirement that all employees participate",
    "D. Workers who are individually uninsurable because of their high-risk occupations"
  ],
  answer: "B. Providing benefits for nonoccupational illnesses and injuries."
},
{
  question: "Utilization review includes all of the following EXCEPT",
  options: [
    "A. Projected date for release of the patient",
    "B. Continues analysis of accident-prone individuals",
    "C. Cost-effective ways of handling patients with catastrophic illnesses.",
    "D. Intermittent analysis of the reasons for the patient to remain in the healthcare facility"
  ],
  answer: "A. Projected date for release of the patient"
},


{
  question: "Which of the following types of long-term care benefits would be best suited for a senior citizen who needs supervision, social, and recreational services?",
  options: [
    "A. Respite care",
    "B. Adult Day care",
    "C. Home health care",
    "D. Nursing home care"
  ],
  answer: "B. Adult Day care"
},
{
  question: "If agent Sue completes an application for an insurance policy on behalf of Phil, and the company agrees to insure him, which party made the offer?",
  options: [
    "A. Sue, when she made the initial appointment",
    "B. Phil, when he completed the application",
    "C. The company, when it issued the policy",
    "D. Phil, when he received the policy"
  ],
  answer: "C. The company, when it issued the policy"
},
{
  question: "When a buyer is considering a long-term care policy, they are encouraged to review carefully all policy",
  options: [
    "A. Limitations.",
    "B. Facilities.",
    "C. Carriers.",
    "D. Agents."
  ],
  answer: "A. Limitations."
},
{
  question: "According to the Fair Credit Reporting Act, an insurer does NOT need to",
  options: [
    "A. Inform the applicant that an investigation is being conducted",
    "B. Discuss any credit history inconsistencies with the application",
    "C. Inform the applicant about the scope of an investigation",
    "D. Notify the applicant if an application is denied"
  ],
  answer: "C. Inform the applicant about the scope of an investigation"
},
{
  question: "Which of the following is NOT considered advertising?",
  options: [
    "A. A policy illustration",
    "B. An AM Best company rating",
    "C. A direct mailing by an insurer",
    "D. An agent’s oral sales presentation"
  ],
  answer: "B. An AM Best company rating"
},
{
  question: "How many days after an accident and health policy has been reinstated is there coverage for sickness?",
  options: [
    "A. 1 day",
    "B. 3 days",
    "C. 5 days",
    "D. 10 days"
  ],
  answer: "D. 10 days"
},
{
  question: "A Key Person Disability Income Policy pays benefits to the",
  options: [
    "A. Spouse",
    "B. Dependent",
    "C. Employee",
    "D. Employer"
  ],
  answer: "D. Employer"
},
{
  question: "A 65-year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health insurance coverage is primary?",
  options: [
    "A. Medicaid",
    "B. An individual's plan",
    "C. Workers’ compensation",
    "D. His employer’s group plan"
  ],
  answer: "C. Workers’ compensation"
},
{
  question: "Under Workers Compensation, injured employees are covered for all the following losses EXCEPT",
  options: [
    "A. Loss of wages",
    "B. Pain and suffering",
    "C. Medical expenses",
    "D. Occupational illness"
  ],
  answer: "B. Pain and suffering"
},
{
  question: "Group long-term disability benefit amounts are usually limited to what percentage of the participant's income?",
  options: [
    "A. 40",
    "B. 60",
    "C. 80",
    "D. 100"
  ],
  answer: "B. 60"
},
{
  question: "Under New York’s cybersecurity regulation, multi-factor authentication would NOT include the use of a",
  options: [
    "A. Key card",
    "B. Fingerprint scan",
    "C. Password or passcode",
    "D. Text message on a smartphone"
  ],
  answer: "D. Text message on a smartphone"
},
{
  question: "Insurance plans that are terminated for an entire group generally allow an extension of benefits to which type of employee?",
  options: [
    "A. Temporary",
    "B. Disabled",
    "C. Full time",
    "D. Laid off"
  ],
  answer: "D. Laid off"
},
{
  question: "Which of the following is a primary consideration in replacing a health insurance policy?",
  options: [
    "A. Shorter elimination periods",
    "B. The commission schedule of the proposed insurer",
    "C. The limitations and exclusions in the new policy",
    "D. The doctor’s recommendation to the proposed insured"
  ],
  answer: "C. The limitations and exclusions in the new policy"
},
{
  question: "The purpose of Medicare Supplement Insurance is to address gaps in Medicare coverage, which can include",
  options: [
    "A. Medicare in-hospital deductible",
    "B. Replacing HMO coverage",
    "C. Covering chiropractic treatment",
    "D. Treatment provided in a government hospital"
  ],
  answer: "A. Medicare in-hospital deductible"
},
{
  question: "A plan is designed to provide coverage that is actuarially equivalent to 80% of the full actuarial value of the benefits provided under the plan. What type of plan is this?",
  options: [
    "A. Gold",
    "B. Silver",
    "C. Bronze",
    "D. Platinum"
  ],
  answer: "A. Gold"
},
{
  question: "If there is a conflict between a policy provision and state statutes, the policy",
  options: [
    "A. Must be reviewed by the insurance commissioner",
    "B. Must meet minimum statute requirements",
    "C. Can be submitted as written",
    "D. Supersedes state statutes"
  ],
  answer: "B. Must meet minimum statute requirements"
},




 {
  question: "Sam gets a new job with a small employer and enrolls in a health benefit plan that includes dependent coverage. Sam’s 6-year-old daughter has Type-1 Diabetes and is on an insulin pump. When will claims related to her pre-existing condition be covered?",
  options: [
    "A. Immediately",
    "B. After a waiting period of 90 days",
    "C. After a waiting period of 12 months",
    "D. After proving she has been complication-free for 6 months"
  ],
  answer: "A. Immediately"
},
{
  question: "An individual accident and health insurance policy must include",
  options: [
    "A. An automatic reinstatement provision",
    "B. A 10-day right of rescission provision",
    "C. Only the optional uniform provision",
    "D. A 60-day grace period"
  ],
  answer: "A. An automatic reinstatement provision"
},
{
  question: "An insurer’s intentional relinquishment of a known right is",
  options: [
    "A. A waiver",
    "B. An endorsement",
    "C. A surrender",
    "D. A declaration"
  ],
  answer: "A. A waiver"
},
{
  question: "The following statement refers to which type of clause? “We have issued the policy in consideration of the representation in your applications and payment of the first-term premium.”",
  options: [
    "A. A contestability clause",
    "B. A consideration clause",
    "C. A concealment clause",
    "D. A whole contract clause"
  ],
  answer: "B. A consideration clause"
},
{
  question: "Which of the following is NOT included in an entire contract provision?",
  options: [
    "A. Unapproved changes made by the agent",
    "B. Insurance application",
    "C. Endorsement, if any",
    "D. Insurance policy"
  ],
  answer: "A. Unapproved changes made by the agent"
},
{
  question: "Health insurance contracts covering 2 to 50 employees and providing hospital and/or medical benefits are issued in the state ONLY when the contract",
  options: [
    "A. Is community-rated",
    "B. Has received a counteroffer",
    "C. Is unconditional",
    "D. Is modified through coercion"
  ],
  answer: "A. Is community-rated"
},
{
  question: "Which of the following is a feature of a major medical plan?",
  options: [
    "A. It covers doctors only",
    "B. It includes long-term care",
    "C. It only covers hospitalization",
    "D. May include a deductible and coinsurance"
  ],
  answer: "D. May include a deductible and coinsurance"
},
{
  question: "Which of the following clauses states that insureds are totally disabled when they CANNOT perform the major duties of their regular occupations?",
  options: [
    "A. Own occupation clause",
    "B. Forbidden work clause",
    "C. Regular Occupation Clause",
    "D. Any Occupation Clause"
  ],
  answer: "A. Own occupation clause"
},
{
  question: "Disability policies MOST often pay benefits in the form of",
  options: [
    "A. An annuity",
    "B. Periodic Income",
    "C. A lump sum reimbursement for wages lost",
    "D. A lump sum reimbursement for medical expenses"
  ],
  answer: "B. Periodic Income"
},
{
  question: "Which of the following Medicare plans allows participants to choose to receive their benefits through a Managed Health Care Plan?",
  options: [
    "A. Part A",
    "B. Part B",
    "C. Part C",
    "D. Part D"
  ],
  answer: "C. Part C"
},
{
  question: "On or after January 1, 2014, employers with no more than 25 full-time equivalent employees (FTEs) with an average annual wage of less than $50,000 may be eligible for a tax credit of up to how much of the premiums paid by the owner?",
  options: [
    "A. 10%",
    "B. 25%",
    "C. 50%",
    "D. 70%"
  ],
  answer: "C. 50%"
},
{
  question: "A single contract for group medical insurance issued to an employer is known as",
  options: [
    "A. A group policy",
    "B. A master policy",
    "C. An employer policy",
    "D. A certificate policy"
  ],
  answer: "B. A master policy"
},
{
  question: "An Individual Employer Group Health Plan is noncontributory when",
  options: [
    "A. A minimum of 75% of all employees must be covered.",
    "B. An employer pays the premium and all employees are covered.",
    "C. The employees (rather than the employer) pay most of the premiums for the plan.",
    "D. Employee dependents will not be covered."
  ],
  answer: "B. An employer pays the premium and all employees are covered."
},
{
  question: "Penalties that may be levied by the Department of Insurance for committing insurance fraud do NOT include",
  options: [
    "A. Fines.",
    "B. License revocation.",
    "C. License suspension.",
    "D. Probation."
  ],
  answer: "B. License revocation"
},
{
  question: "According to the Affordable Care Act, a child can remain on a parent’s health benefit plan until the child",
  options: [
    "A. Marries.",
    "B. Reaches age 19.",
    "C. Reaches age 26.",
    "D. Graduates from college."
  ],
  answer: "C. Reaches age 26."
},
{
  question: "Hospital care under a typical health insuring corporation (HIC) plan includes all of the following EXCEPT:",
  options: [
    "A. Private duty nursing.",
    "B. In-hospital laboratory work and X-rays.",
    "C. Inpatient laboratory services.",
    "D. Inpatient mental health care."
  ],
  answer: "A. Private duty nursing."
},


{
  question: "Which of the following documents describes the coverage, conditions, and limitations found in the master policy of a group contract?",
  options: [
    "A. Schedule A.",
    "B. Certificate of authority.",
    "C. Administrative services agreement.",
    "D. Certificate of coverage and benefits."
  ],
  answer: "D. Certificate of coverage and benefits."
},
{
  question: "When members use the services of a Preferred Provider Organization (PPO), they are typically",
  options: [
    "A. Not required to pay any user fees.",
    "B. Not charged a deductible.",
    "C. Charged a copayment amount.",
    "D. Assessed a set rate, regardless of services performed."
  ],
  answer: "D. Assessed a set rate, regardless of services performed."
},
{
  question: "The type of care that is continuous 24-hour care provided by a licensed medical professional under the direct supervision of a physician is",
  options: [
    "A. Custodial care.",
    "B. Intermediate nursing care.",
    "C. Skilled nursing care.",
    "D. Respite care."
  ],
  answer: "C. Skilled nursing care."
},
{
  question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
  options: [
    "A. Maternity and newborn care.",
    "B. Routine vision care for adults.",
    "C. Preventive and wellness services.",
    "D. Mental health and substance use disorder."
  ],
  answer: "B. Routine vision care for adults."
},
{
  question: "For three weeks next month a company’s employees will choose to be enrolled in their HMO or change health plans. What is this situation called?",
  options: [
    "A. Annual open enrollment",
    "B. Annual gatekeeper enrollment",
    "C. Coverage authorization period",
    "D. Employer sponsored health plan"
  ],
  answer: "A. Annual open enrollment"
},
{
  question: "In most cases, enrollment in which Medicare Coverage Part requires no premium and is automatic for individuals who receive Social Security Benefits?",
  options: [
    "A. Part A",
    "B. Part B",
    "C. Part C",
    "D. Part D"
  ],
  answer: "B. Part B"
},
{
  question: "Which of the following services is usually covered by fee-for-service health insurance plans?",
  options: [
    "A. Optional cosmetic surgery",
    "B. Physical fitness equipment",
    "C. Workers’ compensation-related injuries",
    "D. Diseases of the eye"
  ],
  answer: "D. Diseases of the eye"
},
{
  question: "Under the Affordable Care Act, insurer may refuse to accept an internal appeal on a denied claim if",
  options: [
    "A. The claim is under $500",
    "B. The insured is unable to pay an appeal fee.",
    "C. The appeal is filed more than 190 days after the claim denial",
    "D. The insured has submitted three appeals within the calendar year"
  ],
  answer: "C. The appeal is filed more than 190 days after the claim denial"
},
{
  question: "Which of the following is covered peril in health insurance?",
  options: [
    "A. Dismemberment",
    "B. Accidental injury.",
    "C. Accidental death.",
    "D. Sickness and Death"
  ],
  answer: "B. Accidental injury."
},
{
  question: "Which of the following is NOT considered a limited policy?",
  options: [
    "A. Accidental death and dismemberment",
    "B. Comprehensive coverage",
    "C. Hospital indemnity critical illness",
    "D. Critical illness"
  ],
  answer: "A. Accidental death and dismemberment"
},
{
  question: "In a health insurance policy, an insured has an out-of-pocket limit of $10,000, a deductible of $500, and an 80%/20% coinsurance. The insured incurs $50,000 of covered losses in an accident. How much will the insurer have to pay?",
  options: [
    "A. $35,500",
    "B. $39,600",
    "C. $40,000",
    "D. $49,500"
  ],
  answer: "C. $40,000"
},
{
  question: "The PRIMARY difference between a noncancellable policy and a guaranteed renewable policy is that only with a noncancellable policy can the insurer",
  options: [
    "A. Retain the right to refuse to renew the policy at a certain age",
    "B. Cancel for excessive claims",
    "C. Allow renewal of policy for 5 years if the insured is over age 54",
    "D. Never raise premiums."
  ],
  answer: "D. Never raise premiums."
},
{
  question: "Under the New York Disability Benefits Law, employees eligible for benefits include which of the following?",
  options: [
    "A. Food service staff",
    "B. Railroad workers",
    "C. Farm laborers",
    "D. Day students"
  ],
  answer: "B. Railroad workers"
},
{
  question: "Which of the following is a common exclusion to a vision rider on a policy?",
  options: [
    "A. Eye examination",
    "B. Cost of lenses and frames",
    "C. Cost of contact lenses",
    "D. Laser eye surgery"
  ],
  answer: "D. Laser eye surgery"
},
{
  question: "How long can an insurer exclude coverage for preexisting conditions on a Medicare Supplement Policy?",
  options: [
    "A. 6 months",
    "B. 12 months",
    "C. 18 months",
    "D. 24 months"
  ],
  answer: "A. 6 months"
},
{
  question: "Some states have laws ensuring that health insurance coverages are available at a reasonable cost and under reasonable conditions for small employers. Small employers are defined as having no more than",
  options: [
    "A. 200 employees",
    "B. 150 employees",
    "C. 100 employees",
    "D. 75 employees"
  ],
  answer: "C. 100 employees"
},
{
  question: "Which of the following is described when a selected group of practitioners, in a certain area, agrees to provide services at a pre-arranged cost on a fee-for-service basis?",
  options: [
    "A. Preferred provider organization",
    "B. Indemnity organization",
    "C. Risk purchasing group",
    "D. Coalition group"
  ],
  answer: "A. Preferred provider organization"
},
{
  question: "A health insuring corporation (HIC) member receives all preventive and routine medical care from the:",
  options: [
    "A. Primary care physician",
    "B. Medical director",
    "C. Routine care physician",
    "D. Provider association"
  ],
  answer: "A. Primary care physician"
},
{
  question: "Mutual companies are owned by which of the following?",
  options: [
    "A. Insurers.",
    "B. Policyowners.",
    "C. Stockholders.",
    "D. Board of directors."
  ],
  answer: "B. Policyowners."
},
{
  question: "Which of the following statements is TRUE regarding a licensed individual changing his/her name?",
  options: [
    "A. A name change does not have a direct impact on the status as an agent/broker in New York.",
    "B. The agent/broker is required to file a name change form of the next license renewal.",
    "C. The agent/broker in New York must notify the Superintendent upon changing his/her legal name",
    "D. New York Insurance Law strictly prohibits name changes for the purpose of marketing insurance products."
  ],
  answer: "C. The agent/broker in New York must notify the Superintendent upon changing his/her legal name"
},
{
  question: "If a long-term care insurance policy or certificate replaces another long-term care policy, what does the replacing policy have to do?",
  options: [
    "A. Allow a 45-day “free look” period",
    "B. Waive any preexisting condition requirements after 30 days and allow for a 45-day “free look” period",
    "C. Waive any time periods applicable to preexisting conditions to the extent that similar exclusions have been satisfied under the original policy",
    "D. Waive any time periods applicable to preexisting conditions as long as the client agrees in writing to stay on a doctor recommended treatment schedule"
  ],
  answer: "C. Waive any time periods applicable to preexisting conditions to the extent that similar exclusions have been satisfied under the original policy"
},


{
  question: "Group health contracts must cover mentally or physically dependent children:",
  options: [
    "A. Up to age 19",
    "B. Up to age 23",
    "C. For life",
    "D. Until they become self-supporting"
  ],
  answer: "C. For life"
},
{
  question: "When trying on wedding rings at a jewelry store, a woman left her engagement ring on the countertop only to return later and find it missing. The woman experienced a",
  options: [
    "A. Transfer of risk",
    "B. Hazard",
    "C. Peril",
    "D. Loss"
  ],
  answer: "B. Hazard"
},
{
  question: "Which of the following is an example of an unfair claim settlement practice?",
  options: [
    "A. Delaying the settlement of claims submitted in which liability has become clear",
    "B. Replacing a policy when it is in the best interest of the insured.",
    "C. Adopting and implementing standards to settle claims in a timely manner.",
    "D. Disclosing the settlement terms and provisions of the contract of insurance."
  ],
  answer: "A. Delaying the settlement of claims submitted in which liability has become clear"
},
{
  question: "Someone who sells, solicits, or negotiates insurance contracts compensation is called",
  options: [
    "A. An independent insurance adjuster.",
    "B. An insurance producer.",
    "C. An insurance adviser.",
    "D. A life insurer."
  ],
  answer: "B. An insurance producer."
},
{
  question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation.",
  options: [
    "A. Unpaid premium",
    "B. Payment actions.",
    "C. Payment of claims.",
    "D. Misstatement of age."
  ],
  answer: "A. Unpaid premium"
},
{
  question: "Which of the following contracts enables the business owner who becomes disabled to transfer the business to a new owner and receive payment?",
  options: [
    "A. Key-employee disability insurance",
    "B. Business overhead expense policy.",
    "C. Disability buy-sell policy.",
    "D. Disability reducing term policy"
  ],
  answer: "C. Disability buy-sell policy."
},
{
  question: "Which of the following is a mechanism to ensure a policy does NOT lapse?",
  options: [
    "A. Reinstatement period",
    "B. Elimination period",
    "C. Waiting period",
    "D. Grace period"
  ],
  answer: "D. Grace period"
},
{
  question: "With regard to Disability Insurance, the waiting period is to",
  options: [
    "A. Exclude payments for a short-term illness.",
    "B. Determine severity of the illness",
    "C. Accurately calculate medical expenses.",
    "D. Determine policy owner's eligibility"
  ],
  answer: "D. Determine policy owner's eligibility"
},
{
  question: "Which of the following services must be provided by a health benefit plan issued on or after January 1, 2014?",
  options: [
    "A. Adult eye care services",
    "B. Long-term care services.",
    "C. Adult dental care services",
    "D. Preventive health services"
  ],
  answer: "D. Preventive health services"
},
{
  question: "Under the New York Disability Benefits Law, Benefits are usually computed as how much of an individual’s average weekly wages in the preceding 8-week period?",
  options: [
    "A. 25%",
    "B. 50%",
    "C. 75%",
    "D. 100%"
  ],
  answer: "B. 50%"
},
{
  question: "Which of the following is an example of a presumptive disability?",
  options: [
    "A. Loss of a hand.",
    "B. Loss of one foot.",
    "C. Loss of sight.",
    "D. Loss of three toes on one foot."
  ],
  answer: "C. Loss of sight."
},
{
  question: "When an accident and health policy requires payment of an additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
  options: [
    "A. 60",
    "B. 31",
    "C. 14",
    "D. 10"
  ],
  answer: "B. 31"
},
{
  question: "A specified coverage plan would provide coverage for which of the following?",
  options: [
    "A. Cancer.",
    "B. Broken leg.",
    "C. Pneumonia.",
    "D. Vasectomy."
  ],
  answer: "D. Vasectomy."
},
{
  question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
  options: [
    "A. The insured attempts to add more than 3 additional dependents.",
    "B. The insured makes an intentional misrepresentation of a material fact.",
    "C. An insurer adds benefits to a plan offered on another tier at a comparable price.",
    "D. More than 30% of individuals covered under the plan qualify for additional tax credits."
  ],
  answer: "B. The insured makes an intentional misrepresentation of a material fact."
},
{
  question: "Long-term care policies cover expenses for care when the insured CANNOT perform all of the following activities of daily living EXCEPT",
  options: [
    "A. Bathing",
    "B. Shopping",
    "C. Toileting",
    "D. Transferring"
  ],
  answer: "B. Shopping"
},
{
  question: "What does Medicare Part B cover?",
  options: [
    "A. Hospital expenses.",
    "B. Prescription drugs.",
    "C. Doctor’s charges.",
    "D. Custodial Care."
  ],
  answer: "C. Doctor’s charges."
},
{
  question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
  options: [
    "A. Accidental death benefit",
    "B. Accelerated death benefit",
    "C. Term rider",
    "D. Cost of living rider"
  ],
  answer: "A. Accidental death benefit"
},
{
  question: "A Medicare Supplement policy must NOT contain benefits which",
  options: [
    "A. Charge additional premiums.",
    "B. Duplicate Medicare benefits.",
    "C. Cover more than Medicare coverage.",
    "D. Are covered by Workers Compensation"
  ],
  answer: "B. Duplicate Medicare benefits."
},
{
  question: "Which type of policy pays an amount per day for hospitalization to the insured regardless of the insured’s other health insurance?",
  options: [
    "A. Hospital indemnity",
    "B. Blanket",
    "C. Medigap",
    "D. Limited-amount per diem"
  ],
  answer: "A. Hospital indemnity"
},
{
  question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
  options: [
    "A. Emergency room coverages",
    "B. Coordination of benefits",
    "C. Self-inflicted injuries",
    "D. Chiropractic services"
  ],
  answer: "C. Self-inflicted injuries"
},
{
  question: "The MAIN difference between occupational coverage and nonoccupational coverage is that occupational coverage",
  options: [
    "A. Does not provide full coverage",
    "B. Is mainly for those in hazardous occupations.",
    "C. Covers both on and off-the job injuries",
    "D. Does not take into account the risks associated with the insured job."
  ],
  answer: "B. Is mainly for those in hazardous occupations."
},
{
  question: "Which of the following events, if any, will terminate guaranteed renewable insurance coverage?",
  options: [
    "A. Misstatement of age",
    "B. Nonpayment of premiums.",
    "C. Coverage cannot be terminated.",
    "D. Coverage offered under spouse’s policy."
  ],
  answer: "B. Nonpayment of premiums."
},
{
  question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
  options: [
    "A. Emergency Services",
    "B. Laboratory Services.",
    "C. Alternative Medicine.",
    "D. Maternity and Newborn Care"
  ],
  answer: "C. Alternative Medicine."
},
{
  question: "An individual buying disability insurance is concerned that the benefits may decrease over time. Which provision would MOST likely address this concern?",
  options: [
    "A. Cost of living benefit.",
    "B. Policy inflation option.",
    "C. Vocational disability benefit.",
    "D. Additional monthly benefit."
  ],
  answer: "A. Cost of living benefit"
},
{
  question: "Which of the following is an element of insurable risks?",
  options: [
    "A. Risk must be expected",
    "B. The lost must be calculable",
    "C. Risk must be financially insignificant",
    "D. Cost of insurance must be unaffordable"
  ],
  answer: "B. The lost must be calculable"
},
{
  question: "Which of the following benefits is NOT provided under the Healthy New York Program?",
  options: [
    "A. Prostate cancer screening.",
    "B. Mammograms.",
    "C. Mental health.",
    "D. Hospitalization."
  ],
  answer: "C. Mental health."
},
{
  question: "Under the Affordable Care Act, an insurer may place dollar limits on coverage for",
  options: [
    "A. Laboratory services",
    "B. Mental health services",
    "C. Maternity and newborn care",
    "D. Routine adult dental services"
  ],
  answer: "C. Maternity and newborn care"
},
{
  question: "Dependent children can continue to be covered under a parent’s medical contract after the reaching age 23 if",
  options: [
    "A. They are unable to support themselves due to a physical handicap",
    "B. They are full-time students",
    "C. They are married, but living in the parent’s home",
    "D. They are unemployed due to a layoff at work"
  ],
  answer: "A. They are unable to support themselves due to a physical handicap"
},
{
  question: "Making a statement that is false or maliciously critics of the financial condition of an insurer is known as",
  options: [
    "A. Coercion.",
    "B. Defamation",
    "C. Intimidation",
    "D. False advertising"
  ],
  answer: "B. Defamation"
},
{
  question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary’s cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers Compensation?",
  options: [
    "A. John",
    "B. Mary.",
    "C. John and Mary.",
    "D. Neither."
  ],
  answer: "A. John"
},
{
  question: "An application for an insurance license must be accompanied by:",
  options: [
    "A. A letter of reference from a licensed agent",
    "B. An official set of fingerprints of the applicant",
    "C. Payment of a filing fee",
    "D. A transcript of college grades"
  ],
  answer: "C. Payment of a filing fee"
},


{
  question: "Dependent children can be covered under an individual’s group plan up to what age?",
  options: [
    "A. 18",
    "B. 19",
    "C. 25",
    "D. 26"
  ],
  answer: "D. 26"
},
{
  question: "The illegal occupation provision ensures that the insurer is NOT liable for losses incurred while the policy owner was",
  options: [
    "A. Under the influence of prescription drugs.",
    "B. Attempting to commit a felony",
    "C. Pursuing a criminal",
    "D. Not at work."
  ],
  answer: "D. Not at work."
},
{
  question: "Individuals who are eligible for Medicare on the first day of the month in which they turn age 65 are automatically enrolled in",
  options: [
    "A. Part A",
    "B. Part B",
    "C. Part C",
    "D. Part D"
  ],
  answer: "B. Part B"
},
{
  question: "Some health plans pay benefits on a “usual, customary and reasonable” (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
  options: [
    "A. Loss menu.",
    "B. Coverage chart.",
    "C. Benefit schedule.",
    "D. Listing of benefit amounts."
  ],
  answer: "C. Benefit schedule."
},
{
  question: "According to the Health Insurance Portability and Accountability Act (HIPAA), when can a group health policy renewal be denied?",
  options: [
    "A. There have been too many claims in the previous year.",
    "B. The size of the group has increased by more than 10%.",
    "C. Participants or contribution rules have been violated.",
    "D. Participation or contribution rules have been changed."
  ],
  answer: "C. Participants or contribution rules have been violated."
},
{
  question: "What level of agent authority is given when the principal gives the agent authority in writing?",
  options: [
    "A. Express",
    "B. Implied",
    "C. Apparent",
    "D. Direct"
  ],
  answer: "A. Express"
},
{
  question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
  options: [
    "A. Sponsor",
    "B. Employee",
    "C. Employer",
    "D. HMO"
  ],
  answer: "B. Employee"
},
{
  question: "Health insurance policies that can be purchased to cover specific low frequency diseases are",
  options: [
    "A. Group health policies",
    "B. Group specific policies.",
    "C. Individual health policies",
    "D. Individual limited policies."
  ],
  answer: "D. Individual limited policies."
},
{
  question: "When managing a health insurance plan for a group, the insured's administrative cost for each insured person",
  options: [
    "A. Varies among all group members.",
    "B. Equals the cost of insuring each member individually",
    "C. Is less than the cost if each member was individually insured",
    "D. Is more than the cost if each member was individually insured"
  ],
  answer: "C. Is less than the cost if each member was individually insured"
},
{
  question: "Long-term care policies MUST cover which of the following conditions?",
  options: [
    "A. Alcoholism or drug addiction.",
    "B. Acts of war while serving in the military",
    "C. Self-inflicted injuries.",
    "D. Alzheimer’s disease"
  ],
  answer: "D. Alzheimer’s disease"
},
{
  question: "The cause of a loss is called",
  options: [
    "A. A peril",
    "B. A hazard",
    "C. An exposure",
    "D. A risk"
  ],
  answer: "A. A peril"
},
{
  question: "For the purpose of the Producer Compensation Transparency Regulation, a “Purchaser” does NOT include",
  options: [
    "A. Any person or entity to be a charger under an insurance contract.",
    "B. An owner of a life insurance policy or annuity contract",
    "C. An applicant for insurance, bond or annuity",
    "D. Wholesale brokers"
  ],
  answer: "D. Wholesale brokers"
},
{
  question: "All of the following preventive care services are provided by health insuring corporation (HIC) primary care physicians EXCEPT:",
  options: [
    "A. Well-baby checkups",
    "B. Immunization for children",
    "C. Hearing screenings for adults",
    "D. Physical Examinations"
  ],
  answer: "C. Hearing screenings for adults"
},
{
  question: "Under the Volunteer Firefighter’s Benefit, which of the following activities is NOT covered under the Workers’ Compensation benefit law?",
  options: [
    "A. Participating at a fire",
    "B. Travel to and from, and during a fire call",
    "C. Competitive events in which volunteer members are competing",
    "D. Attendance at a fire instruction school or meeting of the fire company"
  ],
  answer: "C. Competitive events in which volunteer members are competing"
},
{
  question: "Which of the following gifts from an agent would NOT be considered rebating?",
  options: [
    "A. $5 pen with the insurer’s name.",
    "B. $20 t-shirt without insurer’s name.",
    "C. $25 clock with insurer’s name.",
    "D. $25 clock without insurer’s name."
  ],
  answer: "A. $5 pen with the insurer’s name."
},
{
  question: "In a hospital indemnity plan, an elimination period refers to the number of days",
  options: [
    "A. For which the insured can receive benefits for each hospital visit.",
    "B. For which the insured can receive benefits for the term of the plan.",
    "C. An insured must wait before becoming eligible to receive benefits for the term of the plan.",
    "D. An insured must wait before becoming eligible to receive benefits for each hospital stay."
  ],
  answer: "C. An insured must wait before becoming eligible to receive benefits for the term of the plan."
},
{
  question: "The Health Insurance Portability and Accountability Act (HIPAA) ensures that qualified individuals who change jobs will have access to group health insurance with their new employer without",
  options: [
    "A. Having to satisfy a new preexisting condition period.",
    "B. Having any increase in premium costs.",
    "C. Having to meet a new deductible.",
    "D. Any change in the level of benefits they receive."
  ],
  answer: "A. Having to satisfy a new preexisting condition period."
},
{
  question: "The MAIN difference between occupational coverage and nonoccupational coverage is that occupational coverage",
  options: [
    "A. does not provide full coverage",
    "B. is mainly for those in hazardous occupations",
    "C. covers both on and off the job injuries",
    "D. does not take into account the risks associated with the insured's job"
  ],
  answer: "B. is mainly for those in hazardous occupations."
},
{
  question: "If a consumer requests more information about an insurance producer's compensation for a proposed insurance policy, the producer MUST disclose which of the following?",
  options: [
    "A. The producer's role in the sale of the insurance contract",
    "B. The amount of compensation the producer will receive for selling the insurance contract.",
    "C. Whether the producer will receive compensation from the insurer for selling the insurance contract.",
    "D. Whether the producer will receive compensation from a third party for selling the insurance contract."
  ],
  answer: "B. The amount of compensation the producer will receive for selling the insurance contract."
},
{
  question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
  options: [
    "A. Sponsor",
    "B. Employee",
    "C. Employer",
    "D. HMO"
  ],
  answer: "B. Employee"
},
{
  question: "An example of an alien insurer would be",
  options: [
    "A. a United States-based insurer providing policies for immigrants to the United States.",
    "B. an insurer formed according to the legal requirements of another country.",
    "C. a Tennessee-based insurer providing insurance policies for travel to foreign countries",
    "D. A Virginia-based insurer that also insures people from foreign countries"
  ],
  answer: "B. an insurer formed according to the legal requirements of another country."
},
{
  question: "Which of the following is a life insurance contact written on the life of an individual?",
  options: [
    "A. Insurance",
    "B. Survivorship Policy",
    "C. Joint Life Contract",
    "D. Single-Life Insurance"
  ],
  answer: "D. Single-Life Insurance"
},
{
  question: "As a form of level premium permanent insurance, ordinary life insurance accumulates a reserve that eventually",
  options: [
    "A. Equal the face amount of the policy",
    "B. Results in a dividend payment to the policyowner",
    "C. Ceases to earn interest or grow in a positive earnings direction",
    "D. Requires mandatory cash value distributions"
  ],
  answer: "A. Equal the face amount of the policy"
},
{
  question: "Which nonforfeiture option allows the policyowner to purchase less coverage for life?",
  options: [
    "A. Reduced paid-up Insurance",
    "B. Cash Surrender Value",
    "C. Settlement Value",
    "D. Extended Term"
  ],
  answer: "A. Reduced paid-up Insurance"
},
{
  question: "Which of the following is a health insuring corporation (HIC) provider of specialty care?",
  options: [
    "A. A neurologist",
    "B. The admissions nurse at a designated HIC provider hospital",
    "C. An HIC medical director",
    "D. A preferred provider organization (PPO) director"
  ],
  answer: "C. An HIC medical director"
},
{
  question: "Which of the following dividend options will increase the death benefit?",
  options: [
    "A. Guaranteed insurability.",
    "B. Accelerated endowment.",
    "C. Paid-up additions.",
    "D. Extended term."
  ],
  answer: "C. Paid-up additions."
},
{
  question: "The insurer relies on the truthfulness and integrity of the applicant when issuing a policy. This is a characteristic of",
  options: [
    "A. contract of adhesion.",
    "B. utmost good faith.",
    "C. subrogation.",
    "D. coinsurance."
  ],
  answer: "B. utmost good faith."
},
{
  question: "An annuity product linked to a market-related rate of return is called",
  options: [
    "A. a fixed annuity.",
    "B. an indexed annuity",
    "C. a deferred annuity.",
    "D. a tax-sheltered annuity."
  ],
  answer: "B. an indexed annuity"
},
{
  question: "Which of the following services must be provided by a health benefit plan issued on or after January 1, 2014?",
  options: [
    "A. Adult eye care services.",
    "B. Long-term care services.",
    "C. Adult dental services.",
    "D. Preventive health service"
  ],
  answer: "D. Preventive health service"
},
{
  question: "For a contract to be valid, it MUST be for a legal purpose and",
  options: [
    "A. Involve consideration.",
    "B. be offered.",
    "C. involve warranties.",
    "D. be written."
  ],
  answer: "A. Involve consideration."
},
{
  question: "Under Workers' Compensation, injured employees are covered for all of the following losses EXCEPT",
  options: [
    "A. loss of wages.",
    "B. pain and suffering.",
    "C. medical expenses.",
    "D. occupational illness."
  ],
  answer: "B. pain and suffering."
},
{
  question: "Which of the following is described when a selected group of practitioners, in a certain area, agrees to provide services at a pre-arranged cost on a fee-for-service basis?",
  options: [
    "A. preferred provider organization",
    "B. indemnity organization",
    "C. risk purchasing group",
    "D. coalition group"
  ],
  answer: "A. preferred provider organization"
},
{
  question: "In a health insurance policy, an insured has an out-of-pocket limit of $10,000, a deductible of $500, and an 80%/20% coinsurance. The insured incurs $50,000 of covered losses in an accident. How much will the insurer have to pay?",
  options: [
    "A. 35500",
    "B. 39600",
    "C. 40000",
    "D. 49500"
  ],
  answer: "B. 39600"
},
{
  question: "An applicant for a Medicare supplement policy must sign a receipt acknowledging delivery of a Buyer’s Guide when the",
  options: [
    "A. policy is delivered.",
    "B. applicant is over age 70.",
    "C. agent takes the application.",
    "D. policy is a direct response solicitation."
  ],
  answer: "D. policy is a direct response solicitation."
},
{
  question: "All forms of insurance determine exposure through",
  options: [
    "A. the Affordable Care Act.",
    "B. data from population tables.",
    "C. risk pooling and the law of large numbers",
    "D. knowledge of the average age and gender of a specific area"
  ],
  answer: "C. risk pooling and the law of large numbers"
},
{
  question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
  options: [
    "A. the insured attempts to add more than 3 additional dependents",
    "B. the insured makes an intentional misrepresentation of a material fact",
    "C. an insurer adds benefits to a plan offered on another tier at a comparable price",
    "D. more than 30% of individuals covered under the plan qualify for additional tax credits."
  ],
  answer: "B. the insured makes an intentional misrepresentation of a material fact"
},
{
  question: "All the following policies qualify for a 1035 Exchange EXCEPT",
  options: [
    "A. a whole life policy to another whole life policy.",
    "B. whole life policy to an annuity.",
    "C. an annuity to another annuity.",
    "D. an annuity to a whole life policy"
  ],
  answer: "D. an annuity to a whole life policy"
},

{
  question: "Which rider allows the policyowner to increase the face amount to adjust for inflation?",
  options: [
    "A. Return of premium.",
    "B. Cost of living.",
    "C. Payor benefit.",
    "D. Guaranteed insurability."
  ],
  answer: "B. Cost of living."
},
{
  question: "A Payor Benefit Rider would be found on which type of policy?",
  options: [
    "A. A whole life policy",
    "B. A juvenile life policy",
    "C. An adjustable life policy",
    "D. A joint and survivor policy"
  ],
  answer: "B. A juvenile life policy"
},
{
  question: "Dependent children can be covered under an individual's group plan up to what age?",
  options: [
    "A. 18",
    "B. 19",
    "C. 25",
    "D. 26"
  ],
  answer: "D. 26"
},
{
  question: "Which of the following is a common exclusion to a vision rider on a policy?",
  options: [
    "A. Eye examination.",
    "B. Cost of lenses and frames.",
    "C. Cost of contact lenses.",
    "D. Laser eye surgery."
  ],
  answer: "D. Laser eye surgery."
},
{
  question: "If a person advertises the availability of life settlements they MUST be licensed as a",
  options: [
    "A. special purpose entity",
    "B. related provider trust.",
    "C. life insurance company.",
    "D. Life settlement broker."
  ],
  answer: "D. Life settlement broker."
},
{
  question: "A policy illustration given at time of sale does NOT typically include the",
  options: [
    "A. cash value of the policy.",
    "B. names of the beneficiary",
    "C. effective interest rate for policy loans.",
    "D. 10th and 20th year cost surrender value."
  ],
  answer: "D. 10th and 20th year cost surrender value."
},
{
  question: "What is a Life Settlement Contract?",
  options: [
    "A. A bona fide business succession planning arrangement.",
    "B. An assignment of a policy as collateral for a loan made by a licensed financial institution.",
    "C. The paying of predetermined surrender benefit by the insurer of the policy.",
    "D. An agreement to pay a policyowner less than the expected death benefit."
  ],
  answer: "D. An agreement to pay a policyowner less than the expected death benefit."
},
{
  question: "The purpose of Medicare Supplement insurance is to address gaps in Medicare coverage, which can include",
  options: [
    "A. Medicare in-hospital deductible",
    "B. replacing HMO coverage.",
    "C. covering chiropractic treatment",
    "D. treatment provided in a government hospital."
  ],
  answer: "A. Medicare in-hospital deductible"
},
{
  question: "If the premium is not paid at the time of application, a Statement of Good Health MUST be signed by the policyowner at the time of",
  options: [
    "A. the medical examination",
    "B. underwriter review.",
    "C. policy delivery",
    "D. application."
  ],
  answer: "D. application."
},
{
  question: "Under the Affordable Care Act, insurer may refuse to accept an internal appeal on a denied claim if",
  options: [
    "A. the claim is under $500.",
    "B. the insured is unable to pay an appeal fee.",
    "C. the appeal is filed more than 180 days after the claim denial.",
    "D. The insured has submitted three appeals within the calendar year."
  ],
  answer: "C. the appeal is filed more than 180 days after the claim denial."
},
{
  question: "An individual accident and health insurance policy must include",
  options: [
    "A. An automatic reinstatement provision",
    "B. AIO-day right of rescission provision",
    "C. Only the optional uniform provisions",
    "D. A 60-day grace period"
  ],
  answer: "D. A 60-day grace period"
},
{
  question: "When underwriting group life insurance, the underwriter",
  options: [
    "A. typically evaluates the group as a whole",
    "B. requires every group member to be covered.",
    "C. evaluates the groups on an individual basis.",
    "D. requires medical information from each individual."
  ],
  answer: "A. typically evaluates the group as a whole"
},
{
  question: "Which is NOT excluded in a long-term care policy?",
  options: [
    "A. Alcoholism",
    "B. Alzheimer's disease",
    "C. Non-cognitive mental disorders",
    "D. Treatment caused by participation in criminal behavior"
  ],
  answer: "B. Alzheimer's disease"
},
{
  question: "Employees changing employers CANNOT be denied group health coverage under their new employer's plan even if they have preexisting conditions, according to the",
  options: [
    "A. Social Security Act.",
    "B. Health Insurance Portability and Accountability Act (HIPAA).",
    "C. Americans with Disabilities Act",
    "D. Consolidated Omnibus Budget Reconciliation Act (COBRA)."
  ],
  answer: "B. Health Insurance Portability and Accountability Act (HIPAA)."
},
{
  question: "Loans may generally be obtained against the cash value of a personal life insurance policy and policy loan proceeds",
  options: [
    "A. accelerate the benefits under the policy.",
    "B. are not treated as taxable income",
    "C. are subject to Federal estate tax.",
    "D. generate nontaxable interest income."
  ],
  answer: "B. are not treated as taxable income"
},
{
  question: "What is required before human immunodeficiency virus (HIV) testing can be performed as part of individual accident and health insurance?",
  options: [
    "A. The applicant must sign an agreement to pay for the testing.",
    "B. The agent must sign and deliver a notification form.",
    "C. The applicant must sign a consent form",
    "D. The applicant's physician must sign a release form."
  ],
  answer: "C. The applicant must sign a consent form"
},
{
  question: "Predicting an individual's future earning potential and determining how much incorporates the",
  options: [
    "A. loss exposure approach.",
    "B. salary projection approach.",
    "C. personal needs approach.",
    "D. human value approach."
  ],
  answer: "D. human value approach."
},
{
  question: "Which of the following is an example of a presumptive disability?",
  options: [
    "A. Loss of a hand.",
    "B. Loss of one foot.",
    "C. Loss of sight.",
    "D. Loss of three toes on one foot."
  ],
  answer: "C. Loss of sight."
},
{
  question: "Under the New York Disability Benefits Law, benefits are usually computed as how much of an individual's average weekly wages in the preceding 8-week period?",
  options: [
    "A. 0.25",
    "B. 0.5",
    "C. 0.75",
    "D. 1"
  ],
  answer: "B. 0.5"
},
{
  question: "Long-term care policies MUST cover which of the following conditions?",
  options: [
    "A. Alcoholism or drug addiction.",
    "B. Acts of war while serving in the military.",
    "C. Self-inflicted injuries.",
    "D. Alzheimer’s disease."
  ],
  answer: "D. Alzheimer’s disease."
},


{
  question: "The PRIMARY reason for purchasing life insurance is to provide",
  options: [
    "A. Death benefits",
    "B. College tuition",
    "C. Retirement income",
    "D. Safety of principal"
  ],
  answer: "B. College tuition"
},
{
  question: "A Medicare Supplement policy must NOT contain benefits which",
  options: [
    "A. charge additional premiums.",
    "B. duplicate Medicare benefit",
    "C. cover more than Medicare coverage.",
    "D. are covered by Workers Compensation."
  ],
  answer: "B. duplicate Medicare benefit"
},
{
  question: "Which of the following is NOT a requirement of a qualified plan?",
  options: [
    "A. It must be permanent",
    "B. It must have a vesting schedule.",
    "C. it must discriminate as to who can participate.",
    "D. It must be written and communicated to all participants."
  ],
  answer: "A. It must be permanent"
},
{
  question: "Some health plans pay benefits on a 'usual, customary, and reasonable' (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
  options: [
    "A. Loss menu.",
    "B. Coverage chart.",
    "C. Benefit schedule.",
    "D. Listing of benefit amounts."
  ],
  answer: "D. Listing of benefit amounts."
},
{
  question: "Which of the following describes the cause of a loss?",
  options: [
    "A. Risk",
    "B. Hazard",
    "C. Peril",
    "D. Insurance"
  ],
  answer: "C. Peril"
},
{
  question: "Which approach considers the future needs of the survivors in determining amounts of life insurance?",
  options: [
    "A. Human Life Value Approach.",
    "B. Cost Comparison Approach.",
    "C. Living Benefits Approach",
    "D. Needs Approach"
  ],
  answer: "D. Needs Approach"
},
{
  question: "Replacing a policy when it is NOT in the best interest of a client is known as",
  options: [
    "A. discrimination",
    "B. defamation",
    "C. twisting",
    "D. rebating"
  ],
  answer: "C. twisting"
},
{
  question: "Under a Universal Life insurance policy, a corridor represents the",
  options: [
    "A. gap between the total death benefit and the policy's cash value.",
    "B. time allotted to the insured to convert a group policy to an individual policy.",
    "C. stipulated time period that a policy may be reinstated after it has lapsed.",
    "D. percentage of benefits paid to each of the policy’s beneficiaries."
  ],
  answer: "A. gap between the total death benefit and the policy's cash value."
},
{
  question: "The insured, who is 59 years of age decides to replace a long-term care policy they had for five years for a new policy. Which of the following is true of the insurer?",
  options: [
    "A. The original insurer will reimburse benefit dollars not used under the original policy period.",
    "B. The replacement insurer will probationary period and preexisting condition limitations.",
    "C. The replacement insurer will not honor previous exclusions that had previously been satisfied under the original policy.",
    "D. The replacement insurer will waive probationary periods pertaining to preexisting conditions satisfied under the original policy."
  ],
  answer: "C. The replacement insurer will not honor previous exclusions that had previously been satisfied under the original policy."
},
{
  question: "A travel accident policy and a dread disease contract are examples of",
  options: [
    "A. group health policies.",
    "B. family health policies.",
    "C. personal health policies.",
    "D. limited health insurance policies."
  ],
  answer: "D. limited health insurance policies."
},
{
  question: "A 65 Year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health coverage is primary?",
  options: [
    "A. Medicaid",
    "B. an individual plan",
    "C. workers' compensation",
    "D. his employer’s group plan"
  ],
  answer: "C. workers' compensation"
},
{
  question: "The PRIMARY difference between a noncancellable policy and guaranteed renewable policy is that only with a noncancelable policy can the insurer",
  options: [
    "A. Retain the right to refuse to renew the policy at a certain age",
    "B. cancel for excessive claims.",
    "C. allow renewal of policy for 5 years if the insured is over age 54.",
    "D. never raise premiums."
  ],
  answer: "A. Retain the right to refuse to renew the policy at a certain age"
},
{
  question: "Sue Ellen is the sister of a licensed New York insurance producer, Frank Gillespie. Frank was recently killed in a car accident and Sue Ellen has been issued a temporary license to run Frank's agency. For what period of time is the initial temporary license valid?",
  options: [
    "A. 3 months.",
    "B. 6 months.",
    "C. 1 year.",
    "D. 2 years."
  ],
  answer: "B. 6 months."
},
{
  question: "Which of the following is a characteristic of level premium term life insurance",
  options: [
    "A. It provides for lower benefits.",
    "B. It can be used for cash value.",
    "C. It matches the level amount of protection on the insured's life expectancy.",
    "D. The cost of insurance is averaged throughout the contract."
  ],
  answer: "D. The cost of insurance is averaged throughout the contract."
},
{
  question: "Some states have laws ensuring that health insurance coverages are available at a reasonable cost and under reasonable conditions for small employers. Small employers are defined as having no more than",
  options: [
    "A. 200 employees.",
    "B. 150 employees.",
    "C. 100 employees.",
    "D. 75 employees."
  ],
  answer: "C. 100 employees."
},
{
  question: "Hospital care under a typical health insuring corporation (HIC) plan includes all of the following EXCEPT:",
  options: [
    "A. Private duty nursing",
    "B. In-hospital laboratory work and X-rays",
    "C. Inpatient laboratory services",
    "D. Inpatient mental health care"
  ],
  answer: "A. Private duty nursing"
},
{
  question: "In disability income insurance, which of the following is excluded from coverage?",
  options: [
    "A. Accidental self-inflicted injuries.",
    "B. Attempted suicide",
    "C. Passengers on a commercial flight.",
    "D. Passengers on a private flight."
  ],
  answer: "D. Passengers on a private flight."
},
{
  question: "Under the Affordable Care Act, an insurer may place dollar limits on coverage for",
  options: [
    "A. laboratory services.",
    "B. mental health services.",
    "C. maternity care and newborn care",
    "D. Routine adult dental services"
  ],
  answer: "D. Routine adult dental services"
},
{
  question: "For a group to be acceptable for group health insurance underwriting, it should be",
  options: [
    "A. formed for the purpose of obtaining health insurance that is not individually underwritten.",
    "B. formed for a purpose other than to obtain low-cost health insurance.",
    "C. open to only healthy individuals with no preexisting conditions.",
    "D. consist of individuals employed by the same employer."
  ],
  answer: "D. consist of individuals employed by the same employer."
},
{
  question: "Which of the following documents describes the coverage, conditions, and limitations found in the master policy of a group contract?",
  options: [
    "A. Schedule",
    "B. Certificate of authority.",
    "C. Administrative services agreement.",
    "D. Certificate of coverage and benefits."
  ],
  answer: "D. Certificate of coverage and benefits."
},
{
  question: "An individual who is NOT acceptable by an insurer at standard rates because of health, habits, or occupation is called",
  options: [
    "A. rating risk.",
    "B. standard risk.",
    "C. preferred risk.",
    "D. substandard risk."
  ],
  answer: "D. substandard risk."
},
{
  question: "Insurance agents have duties and responsibilities to the insured and the insurer. Which of the following responsibilities does an agent owe the insured during the policy year?",
  options: [
    "A. Help the insured file and follow up on claims.",
    "B. Notify the insurance department when claims are paid.",
    "C. Work with rating bureaus to establish insurer ratings.",
    "D. Pay the insured's premiums if they are unable to do so."
  ],
  answer: "A. Help the insured file and follow up on claims."
},
{
  question: "Two business partners own life insurance on each other. If one partner dies, which of the following contracts allows the surviving partner to use the death benefit to purchase the deceased owner's interest?",
  options: [
    "A. Buy-sell agreement.",
    "B. Key employee life insurance.",
    "C. Business continuation.",
    "D. Accidental death."
  ],
  answer: "A. Buy-sell agreement."
},
{
  question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary's cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers' Compensation?",
  options: [
    "A. John.",
    "B. Mary.",
    "C. John and Mary.",
    "D. Neither."
  ],
  answer: "A. John."
},
{
  question: "The levels of coverage defined in the Affordable Care Act are",
  options: [
    "A. HMO, EPO, POS, and PPO.",
    "B. Bronze, Silvery Gold, and Platinum.",
    "C. Individual, Parent-Child, Spousal, and Family.",
    "D. Child Only, Limited Benefit Plan, Catastrophic, and Major Medical"
  ],
  answer: "B. Bronze, Silvery Gold, and Platinum."
},
{
  question: "Which of the following products is designed to pay benefits that can provide a stream of retirement income to the purchaser?",
  options: [
    "A. annuity contract",
    "B. tax-deferred growth",
    "C. variable life insurance",
    "D. modified endowment contract"
  ],
  answer: "A. annuity contract"
},
{
  question: "Who is eligible for Child Health Plus?",
  options: [
    "A. A New York resident under the age of 19",
    "B. A 27-year-old full-time student",
    "C. A 10-year-old attending a summer camp in New York who resides in Pennsylvania",
    "D. The 30-year-old parents of a 3-year-old child"
  ],
  answer: "A. A New York resident under the age of 19"
},
{
  question: "Which of the following statements BEST describes a single premium cash value policy?",
  options: [
    "A. It requires only one payment to make the policy paid up.",
    "B. It provides for only one premium to be paid without evidence of insurability.",
    "C. It waives one future premium if the owner becomes disabled.",
    "D. It requires the policyowner to pay one premium annually."
  ],
  answer: "B. It provides for only one premium to be paid without evidence of insurability."
},
{
  question: "Which kind of retirement plan can a 1,500-employee for-profit corporation establish?",
  options: [
    "A. 401 (k).",
    "B. 403 (b).",
    "C. Keogh.",
    "D. Simplified Employee Pension Plan."
  ],
  answer: "A. 401 (k)."
},
{
  question: "Which of the following is a basic benefit of Medicare Supplemental insurance?",
  options: [
    "A. First 3 pints of blood each year.",
    "B. At-home recovery.",
    "C. Basic drugs limit of $1,250.",
    "D. Preventive care."
  ],
  answer: "D. Preventive care."
},
{
  question: "A Key Person Disability Income Policy pays benefits to the",
  options: [
    "A. spouse",
    "B. dependent",
    "C. employee",
    "D. employer"
  ],
  answer: "D. employer"
},
{
  question: "A Section 457 Deferred Compensation plan is provided specifically for employees of",
  options: [
    "A. sole proprietorships.",
    "B. religious organizations.",
    "C. non-profit organizations.",
    "D. states, counties, or municipalities"
  ],
  answer: "D. states, counties, or municipalities"
},



{
  question: "A health insurance policy has $1,000 deductible and 80%/20% coinsurance of the next $3,000. The Insured receives a medical bill of $5,000. How much would the insured be responsible to pay?",
  options: [
    "A. $1,000",
    "B. $1,800",
    "C. $3,000",
    "D. $4,000"
  ],
  answer: "B. $1,800"
},
{
  question: "Which statement is NOT a characteristic of a Group Life Insurance Plan?",
  options: [
    "A. master contract.",
    "B. Probationary periods.",
    "C. Individual underwriting",
    "D. Certificate of insurance."
  ],
  answer: "C. Individual underwriting"
},
{
  question: "If the age of an insured under a life insurance policy is misstated, the following is CORRECT concerning the death benefit amount?",
  options: [
    "A. The amount of the death benefit will be paid to the insured.",
    "B. The amount indicated in the policy will be paid to the beneficiary.",
    "C. The amount paid will be what the premium would have purchased at the correct age.",
    "D. The amount paid will be reduced by the unfunded dividend reserve."
  ],
  answer: "C. The amount paid will be what the premium would have purchased at the correct age."
},
{
  question: "Which of the following benefits is NOT provided under the Healthy New York Program?",
  options: [
    "A. Prostate cancer screening",
    "B. Mammograms",
    "C. Mental health",
    "D. Hospitalization"
  ],
  answer: "C. Mental health"
},
{
  question: "In order to reinstate an individual life insurance policy, the policy owner MUST do all of the following EXCEPT",
  options: [
    "A. complete a reinstatement application.",
    "B. provide evidence of insurability.",
    "C. pay all overdue premiums with interest.",
    "D. sign a statement saying the policy will not lapse again"
  ],
  answer: "D. sign a statement saying the policy will not lapse again"
},
{
  question: "All of the following are considered a risk EXCEPT the",
  options: [
    "A. nature of the insured's occupation.",
    "B. amount the insured charges for services",
    "C. location of the insured's business.",
    "D. proximity of the insured's location to emergency services."
  ],
  answer: "B. amount the insured charges for services"
},
{
  question: "The applicant must face the possibility of losing something of value in the event of the insured's death. This principle is known as",
  options: [
    "A. insurable interest",
    "B. adverse selection.",
    "C. indemnification.",
    "D. viatical settlement."
  ],
  answer: "A. insurable interest"
},
{
  question: "An annuity transaction has all of the following assumptions EXCEPT:",
  options: [
    "A. the consumer has been reasonably informed.",
    "B. the insurer may have adequate training for the recommendation.",
    "C. the particular annuity is suitable for the consumer.",
    "D. there is a benefit for the consumer based off some feature of the annuity."
  ],
  answer: "B. the insurer may have adequate training for the recommendation."
},
{
  question: "Which of the following groups is NOT eligible for the Healthy New York Program",
  options: [
    "A. Large employer",
    "B. Sole proprietors",
    "C. Small employers",
    "D. Working uninsured"
  ],
  answer: "A. Large employer"
},
{
  question: "Which of the following is covered by Medicare Part A?",
  options: [
    "A. Physician services.",
    "B. Prescription drugs.",
    "C. Inpatient hospital services.",
    "D. Diagnostic tests."
  ],
  answer: "C. Inpatient hospital services."
},
{
  question: "Group Disability Income insurance usually involves",
  options: [
    "A. higher premiums than individual disability policies.",
    "B. providing benefits for nonoccupational illnesses and injuries.",
    "C. A requirement that all employees participate.",
    "D. workers who are individually uninsurable because of their high-risk occupations."
  ],
  answer: "B. providing benefits for nonoccupational illnesses and injuries."
},
{
  question: "What is the purpose of the policy review when an agent delivers a new life insurance policy to the insured?",
  options: [
    "A. to confirm that the insured understands all aspects of the policy",
    "B. to give the agent a chance to sell another policy to the insured",
    "C. to allow the insured to return the policy for a refund of the premium",
    "D. to permit the parties to revise the policy provisions, terms, and conditions"
  ],
  answer: "A. to confirm that the insured understands all aspects of the policy"
},
{
  question: "An insured individual purchases a disability policy with a waiver of premium rider on January 1. The individual is disabled on June 1. On July 1, he receives proof of permanent and total disability, and submits a claim. He begins receiving benefits on July 15. When are his premiums waived?",
  options: [
    "A. January 1",
    "B. June 1",
    "C. July 1",
    "D. July 15"
  ],
  answer: "C. July 1"
},
{
  question: "Which of the following guarantees that the annuitant CANNOT outlive their benefits?",
  options: [
    "A. Right of survivorship.",
    "B. Guaranteed lifetime withdrawal benefits.",
    "C. Guaranteed minimum accumulation benefit.",
    "D. Simple income rider."
  ],
  answer: "B. Guaranteed lifetime withdrawal benefits."
},
{
  question: "To avoid tax consequences, a rollover from a Traditional IRA to another IRA MUST be done within",
  options: [
    "A. 30 days.",
    "B. 45 days.",
    "C. 60 days.",
    "D. 90 days."
  ],
  answer: "C. 60 days."
},
{
  question: "If Term Life Insurance is renewable, the policyowner is purchasing the right to renew the policy",
  options: [
    "A. with proof of insurability.",
    "B. without an increase in premiums at renewal.",
    "C. for an unlimited number of times.",
    "D. without showing proof of insurability"
  ],
  answer: "D. without showing proof of insurability"
},
{
  question: "If there is a conflict between a policy provision and state statutes the policy",
  options: [
    "A. must be reviewed by the insurance commissioner.",
    "B. must meet minimum statute requirements.",
    "C. can be submitted as written.",
    "D. supersedes state statutes."
  ],
  answer: "B. must meet minimum statute requirements."
},
{
  question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
  options: [
    "A. emergency room coverages",
    "B. coordination of benefits",
    "C. self-inflicted injuries",
    "D. chiropractic services"
  ],
  answer: "C. self-inflicted injuries"
},
{
  question: "When an accident and health policy requires payment of an additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
  options: [
    "A. 60",
    "B. 31",
    "C. 14",
    "D. 10"
  ],
  answer: "B. 31"
},

  {
    question: "Which of the following is TRUE concerning the conversion group life insurance coverage to an individual policy?",
    options: [
      "A. It applies whenever life insurance coverage terminates.",
      "B. The insured receives a paid-up conversion policy upon termination of employment unless he or she informs the insurer otherwise.",
      "C. An insurer cannot require evidence of insurability before issuing a conversion policy.",
      "D. The premiums under the conversion policy will be the same."
    ],
    answer: "B. The insured receives a paid-up conversion policy upon termination of employment unless he or she informs the insurer otherwise."
  },
  {
    question: "Survivorship life insurance policies are useful in estate planning because they",
    options: [
      "A. Accumulate a sum of money for retirement.",
      "B. Can provide money to pay taxes on assets.",
      "C. Redistribute the premium obligation during the early years of the policy.",
      "D. Provide funeral insurance and pre-need burial insurance."
    ],
    answer: "B. Can provide money to pay taxes on assets."
  },
  {
    question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
    options: [
      "A. Emergency Services.",
      "B. Laboratory Services.",
      "C. Alternative Medicine.",
      "D. Maternity and Newborn Care"
    ],
    answer: "C. Alternative Medicine."
  },
  {
    question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
    options: [
      "A. Accidental death benefit.",
      "B. Accelerated death benefit.",
      "C. Term rider.",
      "D. Cost of living rider."
    ],
    answer: "A. Accidental death benefit."
  },
  {
    question: "Who of the following is REQUIRED to be licensed as an insurance producer?",
    options: [
      "A. An underwriter at an insurer.",
      "B. An officer or director of a licensed insurer.",
      "C. An administrator of a group plan.",
      "D. An individual selling a policy for commission."
    ],
    answer: "D. An individual selling a policy for commission."
  },
  {
    question: "Non-statutory group short-term disability benefits are typically paid",
    options: [
      "A. Daily.",
      "B. Weekly.",
      "C. Bi-weekly.",
      "D. Monthly."
    ],
    answer: "B. Weekly."
  },
  {
    question: "If an insured under a life insurance policy dies with an outstanding loan balance then the death benefit will",
    options: [
      "A. Be reduced by the amount of the loan and interest owed.",
      "B. Not be paid until the loan is repaid.",
      "C. Be paid less the amount of the loan but not the interest.",
      "D. Be paid less the amount of the loan interest but not the principal."
    ],
    answer: "A. Be reduced by the amount of the loan and interest owed."
  },
  {
    question: "When does an employee who has permanent kidney failure become eligible for Medicare coverage?",
    options: [
      "A. Once off group plan",
      "B. Once on disability",
      "C. Age 65 and older",
      "D. At any age"
    ],
    answer: "D. At any age"
  },
  {
    question: "How long is the contestable period for a life insurance policy?",
    options: [
      "A. 1 year",
      "B. 2 years",
      "C. 4 years",
      "D. 10 years"
    ],
    answer: "B. 2 years"
  },
  {
    question: "Penalties that may be levied by the Department of insurance for committing insurance fraud do NOT include",
    options: [
      "A. Fines.",
      "B. License revocation.",
      "C. License suspension.",
      "D. Probation."
    ],
    answer: "D. Probation."
  },
  {
    question: "If an annuitant dies during the accumulation period, his or her beneficiary will receive",
    options: [
      "A. The greater of the accumulated cash value or the total premiums paid.",
      "B. The lesser of the accumulated cash value or the total premiums paid.",
      "C. No monetary funds.",
      "D. Both the accumulated cash value and the total premiums paid."
    ],
    answer: "D. Both the accumulated cash value and the total premiums paid."
  },
  {
    question: "Which of the following is true about applying for Medicare Supplement policies outside open enrollment?",
    options: [
      "A. Coverage will be issued on a guaranteed issue basis.",
      "B. It is not possible to get coverage after the initial enrollment period.",
      "C. Coverage will be issued with longer elimination periods and higher deductibles.",
      "D. There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines."
    ],
    answer: "D. There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines."
  },
  {
    question: "The type of care that is continuous 24-hour care provided by licensed medical professionals under the direct supervision of a physician is",
    options: [
      "A. Custodial care.",
      "B. Intermediate nursing care.",
      "C. Skilled nursing care.",
      "D. Respite care."
    ],
    answer: "C. Skilled nursing care."
  },
  {
    question: "A PRIMARY difference between pre-certification provision and concurrent review is that only the pre-certification provision",
    options: [
      "A. Is designed to be a cost containment measure.",
      "B. Involves a review by the physician.",
      "C. Requires the consent of the patient.",
      "D. Occurs before the treatment is provided."
    ],
    answer: "D. Occurs before the treatment is provided."
  },
  {
    question: "What is a certificate of authority?",
    options: [
      "A. A document indicating an insurer's membership in the guarantee fund.",
      "B. The approval by the department of insurance for an insurer to use its advertising.",
      "C. The license required for an insurer to conduct business in the state.",
      "D. An insurer’s contract with its agents."
    ],
    answer: "C. The license required for an insurer to conduct business in the state."
  },
  {
    question: "When delivering a specified disease insurance policy, an agent might be expected to collect on delivery from the new policy owner any of the following EXCEPT",
    options: [
      "A. a signed statement of continued good health.",
      "B. the premium, if not paid with the application.",
      "C. a modified application form with a new signature.",
      "D. a signed statement acknowledging an impairment rider."
    ],
    answer: "D. a signed statement acknowledging an impairment rider."
  },
  {
    question: "According to Health insurance Portability and Accountability Act (HIPAA), can a group health policy renewal be denied?",
    options: [
      "A. There have been too many claims in the previous year.",
      "B. The size of the group has increased by more than 10%.",
      "C. Participation or contribution rules have been violated.",
      "D. Participation or contribution rules have been changed."
    ],
    answer: "D. Participation or contribution rules have been changed."
  },
  {
    question: "Which of the following is TRUE about agents' life insurance sales advertisements in New York State?",
    options: [
      "A. It may not call attention to any unauthorized insurers.",
      "B. It may call attention to the fact that the New York Life Insurance Guaranty Fund provides full coverage for the policy.",
      "C. It may not call attention to cash value policies.",
      "D. It may call attention to a New York licensed insurer without indicating the full name of the insurer."
    ],
    answer: "D. It may call attention to a New York licensed insurer without indicating the full name of the insurer."
  },
  {
    question: "The only beneficiary named in a life insurance policy died before the insured. The policyowner did not name a new beneficiary. When a claim is filed, the death benefit would be paid to the",
    options: [
      "A. beneficiary's estate.",
      "B. insured's estate.",
      "C. insured's next of kin.",
      "D. policyowner."
    ],
    answer: "B. insured’s estate."
  },
  {
    question: "Insurance that is designed to pay the balance of a loan if the insured dies before the loan has been repaid in full is",
    options: [
      "A. life settlement",
      "B. whole life",
      "C. universal life",
      "D. credit life"
    ],
    answer: "D. credit life"
  },
  {
    question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
    options: [
      "A. Maternity and newborn care",
      "B. Routine vision care for adults",
      "C. Preventive and wellness services",
      "D. Mental health and substance use disorder"
    ],
    answer: "B. Routine vision care for adults"
  },
  {
    question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation?",
    options: [
      "A. Unpaid premium",
      "B. Payment actions",
      "C. Payment of claims",
      "D. Misstatement of age"
    ],
    answer: "A. Unpaid premium"
  },
  {
    question: "What is the purpose of the Insurance Frauds Prevention Act?",
    options: [
      "A. Identify the requirement that underwriters need to follow in order to evaluate risk.",
      "B. Regulates the use of advertising an insurer can use when selling insurance products.",
      "C. Protects the consumer against illegal activity in the issuance of policies and Payment of claims.",
      "D. Requires an insurer to publicly disclose its capital reserves for each fiscal year."
    ],
    answer: "C. Protects the consumer against illegal activity in the issuance of policies and Payment of claims."
  },
  {
    question: "An annuity that guarantees a given number of income payments, whether or not annuitant is alive to receive them, is referred to as",
    options: [
      "A. a life annuity certain.",
      "B. an assured life annuity.",
      "C. a guaranteed survivor annuity.",
      "D. an irrevocable endowed annuity."
    ],
    answer: "A. a life annuity certain."
  },
  {
    question: "Health insurance contracts covering 2 to 50 employee and providing hospital and/or medical benefits are issued in the state ONLY when the contract",
    options: [
      "A. is community rated.",
      "B. has received a counteroffer.",
      "C. is unconditional.",
      "D. is modified through coercion."
    ],
    answer: "A. is community rated."
  },
 {
    question: "What is the PRIMARY purpose of disability insurance?",
    options: [
      "A. provide thorough medical care",
      "B. replace workers' compensation coverage",
      "C. provide an individual a means to replace wages",
      "D. ensure that an individual can return to work as soon as possible"
    ],
    answer: "C. provide an individual a means to replace wages"
  },
  {
    question: "The general enrollment period for Medicare Part B ends on",
    options: [
      "A. March 31",
      "B. May 31",
      "C. June 30",
      "D. December 31"
    ],
    answer: "D. December 31"
  },
  {
    question: "A trust may NOT be used in connection with a new life insurance policy when the intent is to",
    options: [
      "A. name the trust as the policy beneficiary and another party as the policyowner.",
      "B. conceal that a life settlement provider is financing the purchase of the policy.",
      "C. prohibit a spouse from directing the policy death benefit to a stepchild.",
      "D. minimize the estate taxes that will be paid to the government at the insured’s death."
    ],
    answer: "C. prohibit a spouse from directing the policy death benefit to a stepchild."
  },
  {
    question: "Term life insurance differs from permanent life insurance in that MOST often, term life insurance",
    options: [
      "A. accumulates a much smaller cash value.",
      "B. has a longer premium payment period.",
      "C. remains in force for a specific period of time.",
      "D. is automatically renewable at the end of the term period."
    ],
    answer: "C. remains in force for a specific period of time."
  },
  {
    question: "An insurance producer's license is valid for no longer than",
    options: [
      "A. 12 months",
      "B. 18 months",
      "C. 24 months",
      "D. 36 months"
    ],
    answer: "C. 24 months"
  },
  {
    question: "Upon the death of an insured individual, what does life insurance guarantee to deliver to the beneficiary?",
    options: [
      "A. An annuity",
      "B. A specific sum of money",
      "C. A dividend",
      "D. A final expense fund"
    ],
    answer: "B. A specific sum of money"
  },
  {
    question: "With regard to Disability Insurance, the waiting period is to:",
    options: [
      "A. Exclude payments for a short-term illness",
      "B. Determine severity of illness",
      "C. Accurately calculate medical expense",
      "D. Determine policyowner's eligibility"
    ],
    answer: "D. Determine policyowner’s eligibility"
  },
  {
    question: "Who would Not be covered under an additional insured rider attached to a life insurance policy?",
    options: [
      "A. A spouse",
      "B. Employee",
      "C. Minor children",
      "D. Dependent parents"
    ],
    answer: "B. Employee"
  },
  {
    question: "A policy may contain provisions excluding or restricting coverage as specified in the event of death under all of the following EXCEPT:",
    options: [
      "A. A fare-paying passenger traveling via commercial transportation",
      "B. A licensed pilot of a personal aircraft",
      "C. War, or act of war",
      "D. Suicide"
    ],
    answer: "A. A fare-paying passenger traveling via commercial transportation"
  },
  {
    question: "The entity that has the power to revoke a producer's insurance license is the:",
    options: [
      "A. Insurer",
      "B. Local agency",
      "C. Department of Insurance",
      "D. National Association of Insurance Commissioners (NAIC)"
    ],
    answer: "D. National Association of Insurance Commissioners (NAIC)"
  },
  {
    question: "Disclosure provisions are established for what purpose?",
    options: [
      "A. Explain grievance procedure",
      "B. Available for just life and disability coverage",
      "C. Used for certain changes in benefits and premiums",
      "D. Offer endorsement only after applicant is approved"
    ],
    answer: "C. Used for certain changes in benefits and premiums"
  },
  {
    question: "A person covered under a certain life insurance contract who seeks to sell their policy and enter into a life settlement contract is the:",
    options: [
      "A. Settlement broker",
      "B. Policyowner",
      "C. Insurer",
      "D. Settlement provider"
    ],
    answer: "B. Policyowner"
  },
  {
    question: "An insured owns a whole life policy that has accumulated cash value. Which of the following statements is true about the policy's cash value?",
    options: [
      "A. The policy's cash value is viewed as investment growth and therefore subject to taxation for each calendar year",
      "B. The growth of the policy’s cash value is not subjected to income tax while the policy is in force",
      "C. It is subject to fluctuations of the company's overall performance",
      "D. The cash value is not guaranteed"
    ],
    answer: "B. The growth of the policy’s cash value is not subjected to income tax while the policy is in force"
  },
  {
    question: "Prior to annuitization, what is the nonforfeiture value of an annuity?",
    options: [
      "A. Only premiums vested in the account three years prior to withdrawal.",
      "B. All premiums paid",
      "C. Total accumulation of cash growth value",
      "D. All premiums paid, plus interest, minus any withdrawals and surrender charges"
    ],
    answer: "D. All premiums paid, plus interest, minus any withdrawals and surrender charges"
  },
  {
    question: "An insurer would consider which of the following in determining whether to accept a group life plan?",
    options: [
      "A. Grace period",
      "B. Beneficiary",
      "C. Average age",
      "D. Dependents"
    ],
    answer: "C. Average age"
  },
  {
    question: "In New York, insurable interest in the life of another person MUST exist",
    options: [
      "A. At the time the contract is made",
      "B. At the time of the claim",
      "C. From the effective date to the time of claim",
      "D. Five years after the policy has been in effect"
    ],
    answer: "A. At the time the contract is made"
  },
  {
    question: "Which of the clauses states that insureds are totally disabled when they CANNOT perform the major duties of their regular occupation?",
    options: [
      "A. Own occupation clause",
      "B. Forbidden work clause",
      "C. Regular occupation clause",
      "D. Any occupation clause"
    ],
    answer: "A. Own occupation clause"
  },
  {
    question: "Which of the following is a characteristic of conversion from group to permanent life insurance?",
    options: [
      "A. Proof of insurability is required",
      "B. Conversion must be to term insurance",
      "C. Conversion must be applied for within thirty-one days of termination",
      "D. Premiums for the new policy will be based on the age when first covered by the group policy"
    ],
    answer: "C. Conversion must be applied for within thirty-one days of termination"
  },

 {
  question: "The change of beneficiary provision states the policyowner has the right to change the beneficiary UNLESS the beneficiary is",
  options: [
    "A. Uninsurable",
    "B. Irrevocable",
    "C. Contingent",
    "D. Deceased"
  ],
  answer: "B. Irrevocable"
},
{
  question: "Mortality is based on a large risk pool of",
  options: [
    "A. Income and time",
    "B. People and time",
    "C. Geographic area and time",
    "D. Family history and hobbies"
  ],
  answer: "B. People and time"
},
{
  question: "What element of a contract does the application represent?",
  options: [
    "A. Offer",
    "B. Acceptance",
    "C. Consideration",
    "D. Competent parties"
  ],
  answer: "C. Consideration"
},
{
  question: "Which of the following statements BEST describes a disability elimination period?",
  options: [
    "A. A time deductible rather than a dollar deductible",
    "B. A benefit or utilization period",
    "C. A dollar deductible rather than a time deductible.",
    "D. A qualifying period"
  ],
  answer: "A. A time deductible rather than a dollar deductible"
},
{
  question: "With respect to a life settlement contract, no person shall directly or indirectly pay a referral or finder’s fee to any person other than the",
  options: [
    "A. Owner’s physician",
    "B. Insurance consultant",
    "C. Owner's accountant",
    "D. Life settlement broker"
  ],
  answer: "D. Life settlement broker"
},
{
  question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation?",
  options: [
    "A. Unpaid premium",
    "B. Payment actions",
    "C. Payment of claims",
    "D. Misstatement of age"
  ],
  answer: "A. Unpaid premium"
},
{
  question: "A single premium immediate annuity is MOST often used for",
  options: [
    "A. Retirement income",
    "B. Children’s college expenses",
    "C. Mortgage payments",
    "D. Vacation expenses"
  ],
  answer: "A. Retirement income"
},
{
  question: "Which term is a result of a calculation based on the average number of months the insured is projected to live due to medical history and mortality factors?",
  options: [
    "A. Mortality rate",
    "B. Life expectancy",
    "C. Risk exposure",
    "D. Net premium"
  ],
  answer: "A. Mortality rate"
},
{
  question: "In order to reduce premiums, a life insurance policy can legally be backdated up to",
  options: [
    "A. 3 months",
    "B. 4 months",
    "C. 6 months",
    "D. 12 months"
  ],
  answer: "C. 6 months"
},
{
  question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
  options: [
    "A. Sponsor",
    "B. Employee",
    "C. Employer",
    "D. HMO"
  ],
  answer: "B. Employee"
},
{
  question: "Which of the following level of care do NOT contribute to the improvement of the insured’s medical condition?",
  options: [
    "A. Acute",
    "B. Custodial",
    "C. Intermediate",
    "D. Skilled"
  ],
  answer: "A. Acute"
},
{
  question: "An insured has a policy with a cash value of $1,500 and an outstanding loan of $500. How much money will the insured receive under the cash surrender value option?",
  options: [
    "A. $500",
    "B. $1,000",
    "C. $1,500",
    "D. $2,000"
  ],
  answer: "B. $1,000"
},
{
  question: "Which of the following is a characteristic of level premium term life insurance?",
  options: [
    "A. It provides for lower benefits",
    "B. It can be used for cash value",
    "C. It matches the level amount of protection on the insured’s life expectancy",
    "D. The cost of insurance is averaged throughout the life of the contract"
  ],
  answer: "D. The cost of insurance is averaged throughout the life of the contract"
},
{
  question: "The PRIMARY difference between a noncancellable policy and guaranteed renewable policy is that only with a noncancellable policy can the insurer",
  options: [
    "A. Retain the right to refuse to renew the policy at a certain age",
    "B. Cancel for excessive claims",
    "C. Allow renewal of policy for 5 years if the insured is over age 54",
    "D. Never raise premiums"
  ],
  answer: "D. Never raise premiums"
},
{
  question: "Under workers’ compensation, injured employees are covered for all of the following losses EXCEPT",
  options: [
    "A. Loss of wages",
    "B. Pain and suffering",
    "C. Medical expenses",
    "D. Occupational illness"
  ],
  answer: "B. Pain and suffering"
},
{
  question: "Which kind of retirement plan can a 75-employee for Profit Corporation establish?",
  options: [
    "A. Roth IRA",
    "B. 403b",
    "C. Simple IRA",
    "D. Keogh"
  ],
  answer: "C. Simple IRA"
},
{
  question: "The guarantee insurability option offered on a long-term care policy provides",
  options: [
    "A. Future purchase option with no additional premium charge",
    "B. Future periodic increases in coverage without proof of insurability",
    "C. Automatic increase in the daily benefit amount to protect against inflation",
    "D. Paid up coverage if the insured cancels the policy due to nonpayment of premium"
  ],
  answer: "B. Future periodic increases in coverage without proof of insurability"
},
{
  question: "Who may terminate an agent appointment?",
  options: [
    "A. The insurer",
    "B. The policyowner",
    "C. The agent",
    "D. The insured"
  ],
  answer: "A. The insurer"
},
{
  question: "Which of the following contract enables the business owner who becomes disabled to transfer the business to new owner and receive payment?",
  options: [
    "A. Key-employee disability insurance",
    "B. Business overhead expenses policy",
    "C. Disability buy-sell policy",
    "D. Disability reducing term policy"
  ],
  answer: "C. Disability buy-sell policy"
},
{
  question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
  options: [
    "A. Maternity and newborn care",
    "B. Routine vision care for adults",
    "C. Preventive and wellness services",
    "D. Mental health and substance use disorder"
  ],
  answer: "B. Routine vision care for adults"
},
{
  question: "Without written consent, a policyowner CANNOT change the beneficiary if he has named",
  options: [
    "A. A contingent beneficiary",
    "B. A revocable beneficiary",
    "C. A permanent beneficiary",
    "D. An irrevocable beneficiary"
  ],
  answer: "D. An irrevocable beneficiary"
},
{
  question: "A whole life policy is replaced with an annuity without incurring a tax penalty. This is referred to as",
  options: [
    "A. A Cross-Purchase Plan",
    "B. An Endowment Contract",
    "C. A Transfer of value",
    "D. A 1035 Exchange"
  ],
  answer: "D. A 1035 Exchange"
},
{
  question: "Which of the following is a methodology in which the premium for all of an insurer's covered insureds within a geographic region is the same?",
  options: [
    "A. Compound interest",
    "B. Community rating",
    "C. Experience rating",
    "D. Concurrent review"
  ],
  answer: "B. Community rating"
},
{
  question: "Penalties that may be levied by the Department of Insurance for committing insurance fraud do NOT include",
  options: [
    "A. Fines",
    "B. License revocation",
    "C. License suspension",
    "D. Probation"
  ],
  answer: "B. License revocation"
},
{
  question: "Which of the following is a whole life policy option that allows for a delinquent premium to be paid automatically by a new policy loan?",
  options: [
    "A. Term Rider",
    "B. Fixed-period Installments",
    "C. Automatic Premium Loan Option",
    "D. Spendthrift Clause"
  ],
  answer: "C. Automatic Premium Loan Option"
},
{
  question: "A Section 457 Deferred Compensation plan is provided specifically for employees of",
  options: [
    "A. Sole proprietorship",
    "B. Religious organizations",
    "C. Non-profit organizations",
    "D. States, counties, or municipalities"
  ],
  answer: "D. States, counties, or municipalities"
},


{
  question: "A 65-year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health coverage is primary?",
  options: [
    "A. Medicaid",
    "B. An individual plan",
    "C. Workers’ compensation",
    "D. His employer's group plan"
  ],
  answer: "C. Workers’ compensation"
},
{
  question: "The provision in a life insurance policy that allows the policyowner to cancel the policy within a limited period and receive a full refund is the:",
  options: [
    "A. Discovery period",
    "B. Probationary period",
    "C. Grace period",
    "D. Free-look period"
  ],
  answer: "D. Free-look period"
},
{
  question: "An insurer that is owned by its policyholders and can pay annual dividends to them is considered a",
  options: [
    "A. Mutual company",
    "B. Reciprocal exchange",
    "C. Fraternal society",
    "D. Stock company"
  ],
  answer: "A. Mutual company"
},
{
  question: "If a subscriber of a Preferred Provider Organization (PPO) obtains care from an out-of-network provider, which of the following will occur?",
  options: [
    "A. The care is covered",
    "B. The care is not covered",
    "C. The subscriber only has to pay their co-payment",
    "D. The subscriber must have a referral from their primary care physician in order to have coverage"
  ],
  answer: "A. The care is covered"
},
{
  question: "An employee of any age becomes immediately eligible for Medicare when",
  options: [
    "A. Diagnosed with permanent kidney failure",
    "B. Early retirement is taken past age 55",
    "C. As soon as Social Security begins",
    "D. They become disabled"
  ],
  answer: "A. Diagnosed with permanent kidney failure"
},
{
  question: "An insured has a 20 pay life policy with a paid-up dividend option. In this option, the insured may",
  options: [
    "A. Use policy dividends to reduce the premium after 20 years",
    "B. Pay up the policy early by using policy dividends",
    "C. Pay up the policy early by using accumulated cash values",
    "D. Waive premium payments until the policy has accumulated enough cash values to pay it up for 20 years"
  ],
  answer: "B. Pay up the policy early by using policy dividends"
},
{
  question: "Which type of insurance policy is characterized by premiums that are fully paid up within a stated period, after which no further premiums are REQUIRED?",
  options: [
    "A. Lump sum insurance",
    "B. Basic installment insurance",
    "C. Prepaid premium insurance",
    "D. Limited payment life insurance"
  ],
  answer: "D. Limited payment life insurance"
},
{
  question: "Medicaid provides which coverage that Medicare does NOT?",
  options: [
    "A. Custodial care",
    "B. Ambulance services",
    "C. Inpatient psychiatric care",
    "D. Inpatient hospital services"
  ],
  answer: "A. Custodial care"
},
{
  question: "The Health Insurance Portability and Accountability Act (HIPAA) ensures that qualified individuals who change jobs will have access to group health insurance with their new employer without",
  options: [
    "A. Having to satisfy a new preexisting condition period",
    "B. Having any increase in premium costs",
    "C. Having to meet a new deductible",
    "D. Any change in the level of benefits they receive"
  ],
  answer: "A. Having to satisfy a new preexisting condition period"
},
{
  question: "An annuity that guarantees a given number of income payments, whether or not the annuitant is alive to receive them, is referred to as",
  options: [
    "A. A life annuity certain",
    "B. An assured life annuity",
    "C. A guaranteed survivor annuity",
    "D. An irrevocable endowed annuity"
  ],
  answer: "A. A life annuity certain"
},
{
  question: "A life insurance policy's double indemnity provision would apply when the policyowner's death occurs due to",
  options: [
    "A. War",
    "B. Illness",
    "C. An accident",
    "D. Natural causes"
  ],
  answer: "C. An accident"
},
{
  question: "The commission paid for a Long-Term Care policy during all renewal years must be the same as provided:",
  options: [
    "A. For any policy renewal at the same time",
    "B. For any policy of the same type",
    "C. In the second year of service",
    "D. In the first year of service"
  ],
  answer: "C. In the second year of service"
},
{
  question: "A company may insure an employee with specialized skills under a key employee disability insurance policy. Which of the following statements is TRUE?",
  options: [
    "A. The business is the applicant",
    "B. The employee's spouse is the beneficiary",
    "C. The employee pays the premium",
    "D. The employee is the applicant"
  ],
  answer: "A. The business is the applicant"
},
{
  question: "A health insuring corporation (HIC) must offer emergency health services",
  options: [
    "A. In non-emergent situations",
    "B. Only when provided by in-network providers",
    "C. Outside and inside the insured’s service area",
    "D. At a minimum of twenty-four hours a day, six days per week"
  ],
  answer: "C. Outside and inside the insured’s service area"
},
{
  question: "The cost of a long-term care policy is based on all of the following EXCEPT",
  options: [
    "A. Age",
    "B. Health condition",
    "C. Level of benefits provided",
    "D. Personal income"
  ],
  answer: "D. Personal income"
},
{
  question: "In accidental injury insurance, the insurance policy, the endorsements, and any relevant papers attached to the policy make up the:",
  options: [
    "A. Completed application",
    "B. Entire contract",
    "C. Uniform mandatory policy provisions",
    "D. Notice of coverage"
  ],
  answer: "B. Entire contract"
},
{
  question: "Which of the following statements is TRUE about Medicaid?",
  options: [
    "A. It is health insurance for the elderly",
    "B. It is administered by the Federal government",
    "C. It is funded by federal, state, and local taxes",
    "D. Coverages include compulsory hospital and voluntary supplemental medical insurance"
  ],
  answer: "C. It is funded by federal, state, and local taxes"
},
{
  question: "An insured wants to purchase a policy with three key elements: Flexible premium, death benefit, and the choice of how the cash value will be invested. The insured should purchase",
  options: [
    "A. Adjustable life",
    "B. Universal term life",
    "C. Variable universal life",
    "D. Graded premium whole life"
  ],
  answer: "C. Variable universal life"
},
{
  question: "If an insurer determines the insured is totally disabled, the policyowner is relieved of paying the policy premiums as long as the disability continues. This statement describes the",
  options: [
    "A. Double indemnity rider",
    "B. Disability income rider",
    "C. Return of premium rider",
    "D. Waiver of premium rider"
  ],
  answer: "D. Waiver of premium rider"
},
{
  question: "When an accident and health policy requires payment of additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
  options: [
    "A. 60",
    "B. 31",
    "C. 14",
    "D. 10"
  ],
  answer: "B. 31"
},
{
  question: "Which of the following provides a death benefit if the spouse of the insured dies?",
  options: [
    "A. Accelerated death benefit rider",
    "B. Family Term insurance rider",
    "C. Guaranteed insurability rider",
    "D. Long-term care insurance rider"
  ],
  answer: "B. Family Term insurance rider"
},
{
  question: "What pays during the waiting period for government benefits when the insured's income is terminated by illness, sickness, or accident?",
  options: [
    "A. Immediate Payment Rider",
    "B. Social Insurance Supplement",
    "C. Supplemental Compensation Rider",
    "D. Deferred Compensation Insurance"
  ],
  answer: "C. Supplemental Compensation Rider"
},
{
  question: "When underwriting group life insurance, the underwriter",
  options: [
    "A. Typically evaluates the group as a whole",
    "B. Requires every group member to be covered",
    "C. Evaluates the groups on an individual basis",
    "D. Requires medical information from each individual"
  ],
  answer: "A. Typically evaluates the group as a whole"
},
{
  question: "Some health plans pay benefits on a \"usual, customary, and reasonable\" (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
  options: [
    "A. Loss menu",
    "B. Coverage chart",
    "C. Benefit-schedule",
    "D. Listing of benefit amounts"
  ],
  answer: "C. Benefit-schedule"
},
{
  question: "An insurance producer’s license is valid for no longer than",
  options: [
    "A. 12 months",
    "B. 18 months",
    "C. 24 months",
    "D. 36 months"
  ],
  answer: "C. 24 months"
},
{
  question: "An insurance contract is a contract of utmost good faith because the insurer relies on the truthfulness of the applicant and the insured relies on the insurer's promise to",
  options: [
    "A. Issue a policy",
    "B. File reports with the insurance department",
    "C. Pay the claims",
    "D. Charge a fair premium"
  ],
  answer: "C. Pay the claims"
},
{
  question: "The Healthy New York Program is designed to",
  options: [
    "A. Provide life insurance to large group employers",
    "B. Provide affordable health insurance coverage to small employers",
    "C. Generate revenues for New York State Government",
    "D. Promote good nutrition in New York State schools"
  ],
  answer: "B. Provide affordable health insurance coverage to small employers"
},
{
  question: "In health insurance policies, the reinstatement provision is",
  options: [
    "A. Mandatory",
    "B. Optional",
    "C. Elective",
    "D. Not required"
  ],
  answer: "A. Mandatory"
},
{
  question: "According to the Affordable Care Act, if a large employer does NOT provide health insurance and owes an employer mandate penalty, the annual penalty is calculated by multiplying $2,000 by",
  options: [
    "A. The number of full time employees",
    "B. The number of full time employees minus 30",
    "C. The number of subsidized full time employees minus 30",
    "D. The number of unsubsidized full time employees minus 30"
  ],
  answer: "B. The number of full time employees minus 30"
},
{
  question: "A fiduciary duty involves which of the following?",
  options: [
    "A. Proper handling of all client premium",
    "B. Underwriting all applications",
    "C. Approving or disapproving the policy",
    "D. Setting premium amounts"
  ],
  answer: "A. Proper handling of all client premium"
},
{
  question: "Multiple policies that are rated for different communities and have substantially similar benefits as determined by the superintendent will be required to:",
  options: [
    "A. Merge plans",
    "B. Pool experience",
    "C. Change benefits",
    "D. Refile rates"
  ],
  answer: "B. Pool experience"
},
{
  question: "Generally, what are the tax implications of life insurance proceeds to the beneficiary?",
  options: [
    "A. Taxed as earned income",
    "B. Taxed as unearned income",
    "C. Tax deferred to the estate of the insured",
    "D. Tax free at the time of the insured's death"
  ],
  answer: "D. Tax free at the time of the insured's death"
},

{
  question: "Which of the following services MUST be provided by a health benefit plan issued on or after January 1, 2014?",
  options: [
    "A. Adult eye care services",
    "B. Long-term care services",
    "C. Adult dental care services",
    "D. Preventive health services"
  ],
  answer: "D. Preventive health services"
},
{
  question: "How many days does a terminated employee have to convert his group life insurance policy to an individual policy?",
  options: [
    "A. 15",
    "B. 31",
    "C. 45",
    "D. 60"
  ],
  answer: "B. 31"
},
{
  question: "The applicant must face the possibility of losing something of value in the event of the insured's death. This principle is known as",
  options: [
    "A. Insurable interest",
    "B. Adverse selection",
    "C. Indemnification",
    "D. Viatical settlement"
  ],
  answer: "A. Insurable interest"
},
{
  question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
  options: [
    "A. The insured attempts to add more than 3 additional dependents",
    "B. The insured makes an intentional misrepresentation of a material fact",
    "C. An insurer adds benefits to a plan offered on another tier at a comparable price",
    "D. More than 30% of individuals covered under the plan qualify for additional tax credits"
  ],
  answer: "B. The insured makes an intentional misrepresentation of a material fact"
},
{
  question: "The levels of coverage defined in the Affordable Care Act are",
  options: [
    "A. HMO, EPO, POS, and PPO",
    "B. Bronze, Silver, Gold, and Platinum",
    "C. Individual, Parent-Child, Spousal, and Family",
    "D. Child Only, Limited Benefit Plan, Catastrophic, and Major Medical"
  ],
  answer: "B. Bronze, Silver, Gold, and Platinum"
},
{
  question: "When trying on wedding rings at a jewelry store, a woman left her engagement ring on the countertop only to return later and find it missing. The woman experienced a",
  options: [
    "A. Transfer of risk",
    "B. Hazard",
    "C. Peril",
    "D. Loss"
  ],
  answer: "B. Hazard"
},
{
  question: "When using the needs approach to determine the amount of life insurance needed, it is necessary to determine all of the following EXCEPT",
  options: [
    "A. Projected lifetime earnings in the stock market, including dividends and growth account",
    "B. Cumulative earning power of the income earner along with other sources of passive income",
    "C. Family's financial obligations in the event of the death or disability of the income earner",
    "D. Medical, educational, and financial requirements of the surviving family in the event of the death or disability of the income earner"
  ],
  answer: "A. Projected lifetime earnings in the stock market, including dividends and growth account"
},
{
  question: "The settlement option that pays the maximum death benefit proceeds until death of the beneficiary is known as",
  options: [
    "A. Life with period certain",
    "B. Installment refund",
    "C. Life income",
    "D. Lump sum"
  ],
  answer: "C. Life income"
},
{
  question: "Individuals who are eligible for Medicare on the first day of the month in which they turn age 65 are automatically enrolled in",
  options: [
    "A. Part A",
    "B. Part B",
    "C. Part C",
    "D. Part D"
  ],
  answer: "B. Part B"
},
{
  question: "Which type of life insurance policy is written under a single contract for both spouses in which it is payable upon the first death?",
  options: [
    "A. Survivorship",
    "B. Dual capacity",
    "C. Joint",
    "D. Spousal"
  ],
  answer: "C. Joint"
},
{
  question: "An agent's underwriting duties include which of the following?",
  options: [
    "A. Setting premium amounts",
    "B. Completing all applications and collecting initial premiums",
    "C. Declining or accepting an application",
    "D. Issuing the policy"
  ],
  answer: "B. Completing all applications and collecting initial premiums"
},
{
  question: "In broad terms, the types of support and services generally associated with Long-Term Care policies are provided at which three levels of care?",
  options: [
    "A. Professional, social, and economic care",
    "B. Home-based, assisted living, and medical care",
    "C. Functional, rehabilitation, and medical care",
    "D. Skilled nursing, intermediate, and custodial care"
  ],
  answer: "D. Skilled nursing, intermediate, and custodial care"
},
{
  question: "When a buyer is considering a long-term care policy, they are encouraged to review carefully all policy",
  options: [
    "A. Limitations",
    "B. Facilities",
    "C. Carriers",
    "D. Agents"
  ],
  answer: "A. Limitations"
},
{
  question: "Prescription drug coverage is usually considered which type of benefit under a group medical policy?",
  options: [
    "A. Mandatory",
    "B. Built in",
    "C. Optional",
    "D. Omitted"
  ],
  answer: "C. Optional"
},
{
  question: "Which is the name of the policy that combines a universal life policy with investment choices?",
  options: [
    "A. Interest-sensitive universal life policy",
    "B. Straight universal life policy",
    "C. Variable universal life policy",
    "D. Flexible universal life policy"
  ],
  answer: "C. Variable universal life policy"
},
{
  question: "Which of the following is NOT considered advertising?",
  options: [
    "A. A policy illustration.",
    "B. An AM Best company rating",
    "C. A direct mailing by an insurer",
    "D. An agent's oral sales presentation"
  ],
  answer: "B. An AM Best company rating"
},
{
  question: "A trust may NOT be used in connection with a new life insurance policy when the intent is to",
  options: [
    "A. Name the trust as the policy beneficiary and another party as the policyowner",
    "B. Conceal that a life settlement provider is financing the purchase of the policy.",
    "C. Prohibit a spouse from directing the policy death benefit to a stepchild.",
    "D. Minimize the estate taxes that will be paid to the government at the insured's death."
  ],
  answer: "B. Conceal that a life settlement provider is financing the purchase of the policy."
},
{
  question: "The purpose of Medicare Supplement Insurance is to address gaps in Medicare coverage, which can include",
  options: [
    "A. Medicare in-hospital deductible",
    "B. Replacing HMO coverage",
    "C. Covering chiropractic treatment",
    "D. Treatment provided in a government hospital"
  ],
  answer: "A. Medicare in-hospital deductible"
},
{
  question: "Which type of group has a constitution and bylaws, is organized and maintained in good faith for purposes other than obtaining insurance, and has insurance for the purpose of covering members and their employees?",
  options: [
    "A. Credit insurance group.",
    "B. Multiple employer groups.",
    "C. Association or labor group.",
    "D. Employee or individual employer group."
  ],
  answer: "C. Association or labor group."
},
{
  question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
  options: [
    "A. Emergency room coverages",
    "B. Coordination of benefits",
    "C. Self-inflicted injuries",
    "D. Chiropractic services"
  ],
  answer: "C. Self-inflicted injuries"
},
{
  question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary's cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers Compensation?",
  options: [
    "A. John",
    "B. Mary",
    "C. John and Mary",
    "D. Neither"
  ],
  answer: "A. John"
},
{
  question: "Long-term care policies MUST cover which of the following conditions?",
  options: [
    "A. Alcoholism or drug addiction",
    "B. Acts of war while serving in the military",
    "C. Self-inflicted injuries.",
    "D. Alzheimer’s disease."
  ],
  answer: "D. Alzheimer’s disease."
},
{
  question: "Non-statutory group short-term disability benefits are typically paid",
  options: [
    "A. Daily",
    "B. Weekly",
    "C. Bi-weekly",
    "D. Monthly"
  ],
  answer: "B. Weekly"
},
{
  question: "According to Health Insurance Portability and Accountability Act(HIPAA), when can a group health policy renewal be denied?",
  options: [
    "A. There have been too many claims in the previous year",
    "B. The size of the group has increased by more than 10%",
    "C. Participation or contribution rules have been violated",
    "D. Participation or contribution rules have been changed"
  ],
  answer: "C. Participation or contribution rules have been violated"
},
{
  question: "To receive proceeds from a death benefit, a minor",
  options: [
    "A. Must be related to the insured.",
    "B. Can only be named as a contingent beneficiary",
    "C. Must be at least 16 years old.",
    "D. Must have an appointed guardian."
  ],
  answer: "D. Must have an appointed guardian."
},


{
  question: "When would an attending physician's statement be appropriate for life insurance purposes?",
  options: [
    "A. As a matter of routine when the applicant signs the life insurance application",
    "B. At the request of the insurer without knowledge or approval of the applicant",
    "C. At the request of the insurance applicant to be submitted with the life insurance application.",
    "D. At the request of the insurer when it could affect the underwriting decision but with the consent of the applicant."
  ],
  answer: "D. At the request of the insurer when it could affect the underwriting decision but with the consent of the applicant."
},
{
  question: "An insurer monitors the care an insured is receiving in the hospital to be sure that everything is proceeding according to schedule. This BEST describes",
  options: [
    "A. Precertification authorization.",
    "B. Concurrent review",
    "C. Benefit checking",
    "D. Claims adjudication."
  ],
  answer: "B. Concurrent review"
},
{
  question: "Under the Affordable Care Act, insurer may refuse to accept an internal appeal on a denied claim if",
  options: [
    "A. The claim is under $500.",
    "B. The insured is unable to pay an appeal fee.",
    "C. The appeal is filed more than 180 days after the claim denial",
    "D. The insured has submitted three appeals within the calendar year."
  ],
  answer: "C. The appeal is filed more than 180 days after the claim denial"
},
{
  question: "All of the following are typical health insuring corporation (HIC) preventive care services provided by a primary care physician EXCEPT",
  options: [
    "A. Diagnostic imaging",
    "B. Well-baby checkups",
    "C. Physical examinations",
    "D. Immunizations for children"
  ],
  answer: "A. Diagnostic imaging"
},
{
  question: "Long-term care policies cover expenses for care when the insured CANNOT perform all of the following activities of daily living EXCEPT",
  options: [
    "A. Bathing",
    "B. Shopping",
    "C. Toileting",
    "D. Transferring"
  ],
  answer: "B. Shopping"
},
{
  question: "An insured individual purchases a disability policy with a waiver of premium rider on January 1. The individual is disabled on June 1. On July 1, he receives proof of permanent and total disability, and submits a claim. He begins receiving benefits on July 15. When are his premiums waived?",
  options: [
    "A. January 1",
    "B. June 1",
    "C. July 1",
    "D. July 15"
  ],
  answer: "B. June 1"
},
{
  question: "The general enrollment period for Medicare Part B ends on",
  options: [
    "A. March 31",
    "B. May 31",
    "C. June 30",
    "D. December 31"
  ],
  answer: "A. March 31"
},
{
  question: "Which of the following describes the cause of a loss?",
  options: [
    "A. Risk",
    "B. Hazard",
    "C. Peril",
    "D. Insurance"
  ],
  answer: "C. Peril"
},
{
  question: "Under a multiple protection policy, the policy that pays on the death of the last person is called",
  options: [
    "A. A universal life policy",
    "B. A survivorship life policy",
    "C. A joint life policy",
    "D. An annuity life policy"
  ],
  answer: "B. A survivorship life policy"
},
{
  question: "In New York, who has the right to the nonforfeiture values in an annuity?",
  options: [
    "A. Beneficiary",
    "B. Policyowner",
    "C. Insurer",
    "D. Employer"
  ],
  answer: "B. Policyowner"
},
{
  question: "Generally, in life insurance policies, premiums can be collected under all of the following modes EXCEPT",
  options: [
    "A. Annually",
    "B. Quarterly",
    "C. Semi-annually",
    "D. Bi-monthly"
  ],
  answer: "D. Bi-monthly"
},
{
  question: "Group Disability Income Insurance usually involves",
  options: [
    "A. Higher premiums than individual disability policies",
    "B. Providing benefits for nonoccupational illnesses and injuries",
    "C. A requirement that all employees participate",
    "D. Workers who are individually uninsurable because of their high-risk occupations"
  ],
  answer: "C. A requirement that all employees participate"
},
{
  question: "Shari receives monthly income from her life annuity. If Shari dies 36 months after the monthly annuity payments begin, the balance of the annuity fund is",
  options: [
    "A. Forfeited to the insurer",
    "B. Guaranteed to continue for 5 years to the annuity's beneficiaries",
    "C. Tax-free income to the annuity's beneficiaries",
    "D. Awarded as a lump sum to the estate of the policyowner"
  ],
  answer: "A. Forfeited to the insurer"
},
{
  question: "Which settlement option pays a benefit as long as one of the insureds is living?",
  options: [
    "A. Joint Life",
    "B. Joint and Survivor",
    "C. Family Term",
    "D. Life Income"
  ],
  answer: "D. Life Income"
},
{
  question: "The purpose of insurance is to",
  options: [
    "A. Avoid risk",
    "B. Reduce risk",
    "C. Transfer risk",
    "D. Increase risk"
  ],
  answer: "C. Transfer risk"
},
{
  question: "Policy proceeds can be obtained in a lump sum and invested to create",
  options: [
    "A. A Cleanup Fund",
    "B. A Readjustment Fund",
    "C. A Viatical Settlement",
    "D. An Estate"
  ],
  answer: "D. An Estate"
},
{
  question: "Which of the following actions is NOT considered the Business of Life Settlements?",
  options: [
    "A. Soliciting a life settlement contract from out of state",
    "B. Negotiating a life settlement contract through a life settlement broker",
    "C. Issuing a life settlement contract by mail",
    "D. Assigning a life settlement contract as a collateral loan"
  ],
  answer: "D. Assigning a life settlement contract as a collateral loan"
},
{
  question: "Which of the following is a basic benefit of Medicare Supplemental insurance?",
  options: [
    "A. First 3 pints of blood each year",
    "B. At-home recovery",
    "C. Basic drugs limit of $1,250",
    "D. Preventive care"
  ],
  answer: "A. First 3 pints of blood each year"
},
{
  question: "Which of the following is a common limitation in many major medical policies?",
  options: [
    "A. Skilled nursing",
    "B. Injuries received at work",
    "C. Preventive health services",
    "D. Injuries received while playing recreational sports"
  ],
  answer: "B. Injuries received at work"
},




{
  question: "Which of the following is NOT a requirement to become a resident producer in New York?",
  options: [
    "A. Live in New York for a period of 6 months or more",
    "B. Successfully passing a licensing examination",
    "C. Be at least 18 years of age",
    "D. Be competent and trustworthy"
  ],
  answer: "D. Be competent and trustworthy"
},
{
  question: "Medicare Supplement policy must NOT contain benefits which",
  options: [
    "A. Charge additional premiums",
    "B. Duplicate Medicare benefits",
    "C. Cover more than Medicare coverage",
    "D. Are covered by Workers Compensation"
  ],
  answer: "B. Duplicate Medicare benefits"
},
{
  question: "The policy provision describing the responsibilities of the master policyowner is in",
  options: [
    "A. Group health policies",
    "B. Certificate of coverage",
    "C. Individual health policies",
    "D. Individual medical policies"
  ],
  answer: "A. Group health policies"
},
{
  question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
  options: [
    "A. Accidental death benefit",
    "B. Accelerated death benefit",
    "C. Term rider",
    "D. Cost of living rider"
  ],
  answer: "A. Accidental death benefit"
},
{
  question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
  options: [
    "A. Emergency Services",
    "B. Laboratory Services",
    "C. Alternative Medicine",
    "D. Maternity and Newborn Care"
  ],
  answer: "C. Alternative Medicine"
},
{
  question: "Someone who sells, solicits, or negotiates insurance contracts for compensation is called",
  options: [
    "A. An independent insurance adjuster",
    "B. An insurance producer",
    "C. An insurance adviser",
    "D. A life insurer"
  ],
  answer: "B. An insurance producer"
},
{
  question: "In a hospital indemnity plan, an elimination period refers to the number of days",
  options: [
    "A. For which the insured can receive benefits for each hospital visit",
    "B. For which the insured can receive benefits for the term of the plan",
    "C. An insured must wait before becoming eligible to receive benefits for the term of the plan",
    "D. An insured must wait before becoming eligible to receive benefits for each hospital stay"
  ],
  answer: "C. An insured must wait before becoming eligible to receive benefits for the term of the plan"
},
{
  question: "Which of the following types of benefits are provided under MOST long-term care policies?",
  options: [
    "A. Fixed dollar amount for each day of care",
    "B. A specific benefit type based on the type of services rendered",
    "C. All physician-approved necessary medical expenses",
    "D. All fluctuating dollar amount based on duration and type of care provided"
  ],
  answer: "C. All physician-approved necessary medical expenses"
},
{
  question: "A policyowner suffers an injury that renders him incapable of performing one or more important job duties. Any decrease in income resulting from his injury would make him eligible for benefits under which provision?",
  options: [
    "A. Partial disability",
    "B. Nondisabling injury",
    "C. Presumptive disability",
    "D. Flat amount disability"
  ],
  answer: "A. Partial disability"
},
{
  question: "The type of life insurance generally used to cover key employee indemnification are",
  options: [
    "A. Universal, term, and whole life insurance",
    "B. Joint, permanent, and credit life insurance",
    "C. Limited-pay, adjustable, and group life insurance",
    "D. Decreasing term life insurance"
  ],
  answer: "A. Universal, term, and whole life insurance"
},
{
  question: "With respect to small group health benefit plans, a carrier may discontinue coverage or may refuse to renew such a plan if the employer",
  options: [
    "A. Employs fewer than 15 full-time employees",
    "B. Has filed for bankruptcy in the prior year",
    "C. Has a supplemental plan with a competing carrier",
    "D. Fails to pay the premium prior to the end of the grace period"
  ],
  answer: "D. Fails to pay the premium prior to the end of the grace period"
},
{
  question: "Sam gets a new job with a small employer and enrolls in a health benefit plan that includes dependent coverage. Sam's 6-year-old daughter has Type-1 Diabetes and is on an insulin pump. When will claims related to her pre-existing condition be covered?",
  options: [
    "A. Immediately",
    "B. After a waiting period of 90 days",
    "C. After a waiting period of 12 months",
    "D. After proving she has been complication free for 6 months"
  ],
  answer: "A. Immediately"
},
{
  question: "If the premium is not paid at the time of application, a Statement of Good Health MUST be signed by the policyowner at the time of",
  options: [
    "A. The medical examination",
    "B. Underwriter review",
    "C. Policy delivery",
    "D. Application"
  ],
  answer: "C. Policy delivery"
},
{
  question: "Social Security Total Disability is the inability to engage in any gainful activity due to physical or mental disability for AT LEAST how many months?",
  options: [
    "A. 3 months",
    "B. 6 months",
    "C. 12 months",
    "D. 18 months"
  ],
  answer: "C. 12 months"
},
{
  question: "With respect to small group health benefit plan, a carrier may discontinue coverage or may refuse to renew such a plan if the employer",
  options: [
    "A. employs fewer than 15 full-time employees.",
    "B. has filed for bankruptcy in the prior year.",
    "C. has a supplemental plan with a competing carrier.",
    "D. fails to pay the premium prior to the end of the grace period."
  ],
  answer: "D. fails to pay the premium prior to the end of the grace period."
},
{
  question: "The insured, who is 59 years of age, decides to replace a long-term care policy they had for five years with a new policy. Which of the following is true of the insurer?",
  options: [
    "A. The original insurer will reimburse benefit dollars not used under the original policy period",
    "B. The replacement insurer will impose new probationary period and pre-existing condition limitations",
    "C. The replacement insurer will not honor previous exclusions that had been satisfied under the original policy",
    "D. The replacement insurer will waive probationary period pertaining to pre-existing conditions satisfied under the original policy"
  ],
  answer: "C. The replacement insurer will not honor previous exclusions that had been satisfied under the original policy"
},
{
  question: "Each of the following are characteristics of a fixed annuity contract EXCEPT:",
  options: [
    "A. Funds are invested in a separate account",
    "B. The minimum interest rate is guaranteed in the contract",
    "C. Benefit payments remain level",
    "D. It may be sold as an immediate or deferred annuity"
  ],
  answer: "A. Funds are invested in a separate account"
},
{
  question: "A policyowner may choose to use his life insurance policy dividends to do all of the following EXCEPT:",
  options: [
    "A. Reduce the policy premium",
    "B. Accumulate without interest",
    "C. Be paid to the policyowner in cash",
    "D. Purchase additional insurance protection"
  ],
  answer: "B. Accumulate without interest"
},
{
  question: "In order to ensure that suitability is addressed in annuity transactions, New York requires:",
  options: [
    "A. All managers in an insurance company to have adequate training",
    "B. The consumer to research their own suitability with an insurer",
    "C. Anyone who is making a recommendation be adequately trained",
    "D. Consumers to shop around before purchasing an annuity"
  ],
  answer: "C. Anyone who is making a recommendation be adequately trained"
},
{
  question: "If Term Life insurance is renewable, the policyowner is purchasing the right to renew the policy:",
  options: [
    "A. With proof of insurability",
    "B. Without an increase in premiums at renewal",
    "C. For an unlimited number of times",
    "D. Without showing proof of insurability"
  ],
  answer: "D. Without showing proof of insurability"
},
{
  question: "The dividend option where the insurer issues the policyowner a check for the dividend amount is called:",
  options: [
    "A. Reduced premium dividend option",
    "B. Cash dividend option",
    "C. One-year dividend option",
    "D. Paid-up option"
  ],
  answer: "B. Cash dividend option"
},
{
  question: "Under the Affordable Care Act, an insurer may place dollar limits on coverage for:",
  options: [
    "A. Laboratory service",
    "B. Mental health services",
    "C. Maternity and newborn care",
    "D. Routine adult dental services"
  ],
  answer: "C. Maternity and newborn care"
},
{
  question: "For at least how many years must an insurance producer keep a copy of written compensation disclosure notice provided to a consumer?",
  options: [
    "A. 1 year",
    "B. 2 years",
    "C. 3 years",
    "D. 4 years"
  ],
  answer: "C. 3 years"
},
{
  question: "Under the Fair Credit Reporting Act, all of the following are considered to be negative information EXCEPT:",
  options: [
    "A. Late payments",
    "B. Delinquencies",
    "C. Credit reports",
    "D. Insolvency"
  ],
  answer: "C. Credit reports"
},
{
  question: "All of the following statements apply to the surrender of an annuity contract EXCEPT:",
  options: [
    "A. Surrender charges will reduce the contract payout amount",
    "B. The right to surrender is available on immediate annuities",
    "C. Owner has the right to surrender the contract during the accumulation period",
    "D. Surrender charges diminish over a statute of years and will eventually disappear"
  ],
  answer: "A. Surrender charges will reduce the contract payout amount"
},
{
  question: "Insurance that is designed to pay the balance of a loan if the insured dies before the loan has been repaid in full is:",
  options: [
    "A. Life settlement",
    "B. Whole life",
    "C. Universal life",
    "D. Credit life"
  ],
  answer: "D. Credit life"
},
{
  question: "An annuitant dies during the accumulation phase. His or her beneficiary will receive:",
  options: [
    "A. The greater of the accumulated cash value or the total premiums paid",
    "B. The lesser of the accumulated cash value or the total premiums paid",
    "C. No monetary funds",
    "D. Both the accumulated cash value and the total premiums paid"
  ],
  answer: "A. The greater of the accumulated cash value or the total premiums paid"
},
{
  question: "When managing a health insurance plan for a group, the insured's administrative cost per insured person:",
  options: [
    "A. Varies among all group members",
    "B. Equals the cost of insuring each member individually",
    "C. Is less than the cost if each member was individually insured",
    "D. Is more than the cost if each member was individually insured"
  ],
  answer: "C. Is less than the cost if each member was individually insured"
},
{
  question: "An annuity product linked to a market-related rate of return is called:",
  options: [
    "A. A fixed annuity",
    "B. An indexed annuity",
    "C. A deferred annuity",
    "D. A tax-sheltered annuity"
  ],
  answer: "B. An indexed annuity"
},
{
  question: "An insured individual who has been diagnosed with osteoporosis needs therapy in her home. Which type of long-term care benefit would be MOST appropriate for her?",
  options: [
    "A. Skilled nursing care",
    "B. Intermediate care",
    "C. Home health-care",
    "D. Adult day care"
  ],
  answer: "C. Home health-care"
},
{
  question: "Which of the following is true about applying for Medicare supplement policies outside open enrollment?",
  options: [
    "A. Coverage will be issued on a guaranteed issue basis",
    "B. It is not possible to get coverage after the initial enrollment period",
    "C. Coverage will be issued with longer periods and higher deductibles",
    "D. There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines"
  ],
  answer: "D. There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines"
},
{
  question: "To exchange a contract of insurance by any means for money or its equivalent, on behalf of a licensed insurer, is to:",
  options: [
    "A. Sell insurance",
    "B. Solicit insurance",
    "C. Negotiate insurance",
    "D. Market insurance"
  ],
  answer: "A. Sell insurance"
},
{
  question: "The following statement refers to which type of clause? “We have issued the policy in consideration of the representation in your application and payment of the first-term premium”",
  options: [
    "A. A contestability clause",
    "B. A consideration clause",
    "C. A concealment clause",
    "D. A whole contract clause"
  ],
  answer: "B. A consideration clause"
},
{
  question: "Which statement is NOT a characteristic of a Group Life Insurance Plan?",
  options: [
    "A. Master contract",
    "B. Probationary periods",
    "C. Individual underwriting",
    "D. Certificate of insurance"
  ],
  answer: "C. Individual underwriting"
},
{
  question: "What type of authority is given by an insurer to an agent but is not orally communicated?",
  options: [
    "A. Express",
    "B. Implied",
    "C. Written",
    "D. Apparent"
  ],
  answer: "B. Implied"
},
{
  question: "A life insurance rider which reimburses costs incurred in a convalescent home facility is:",
  options: [
    "A. Disability",
    "B. Long-Term Care",
    "C. Accidental Death",
    "D. Cost of Living"
  ],
  answer: "B. Long-Term Care"
},
{
  question: "Dependent children can be covered under an individual's group plan up to what age?",
  options: [
    "A. 18",
    "B. 19",
    "C. 25",
    "D. 26"
  ],
  answer: "D. 26"
},
{
  question: "Which type of annuity guarantees a level benefit payment?",
  options: [
    "A. Variable",
    "B. Universal",
    "C. Limited life",
    "D. Fixed"
  ],
  answer: "D. Fixed"
},
{
  question: "In a health insurance policy, an insured has an out-of-pocket limit of $10,000, a deductible of $500, and 80%/20% coinsurance. The insurer incurs $50,000 of covered losses in an accident. How much will the insurer have to pay?",
  options: [
    "A. $35,500",
    "B. $39,600",
    "C. $40,000",
    "D. $49,500"
  ],
  answer: "C. $40,000"
},
{
  question: "Which of the following circumstances may cause policy premiums to be higher than standard premiums?",
  options: [
    "A. Agent misquotes the price",
    "B. The insured appears unhealthy",
    "C. Insured does not meet certain health requirements",
    "D. Insured does not complete the application completely"
  ],
  answer: "C. Insured does not meet certain health requirements"
},
{
  question: "For a contract to be valid, it must be for a legal purpose and:",
  options: [
    "A. Involve consideration",
    "B. Be offered",
    "C. Involve warranties",
    "D. Be written"
  ],
  answer: "A. Involve consideration"
},
{
  question: "Which approach considers the insurer's future stream of income?",
  options: [
    "A. Human Life Value Approach",
    "B. Cost Comparison Approach",
    "C. Living Benefits Approach",
    "D. Needs Approach"
  ],
  answer: "A. Human Life Value Approach"
},
{
  question: "An insurer is required to charge the same community rate for all members exclusive of spouses and dependents, if the group contains:",
  options: [
    "A. 1 to 50 members",
    "B. 15 to 65 members",
    "C. 20 to 70 members",
    "D. 25 to 75 members"
  ],
  answer: "A. 1 to 50 members"
},
{
  question: "An individual buying disability insurance is concerned that the value of the benefits may decrease over time. Which provision would likely address this concern?",
  options: [
    "A. Cost of living benefit",
    "B. Policy inflation option",
    "C. Vocational disability benefit",
    "D. Additional monthly benefit"
  ],
  answer: "A. Cost of living benefit"
},
{
  question: "Which of the following CORRECTLY identifies the favorable income tax treatment afforded to annuities?",
  options: [
    "A. Annual earnings are partially income tax deductible",
    "B. Annual earnings are partially income tax exempt",
    "C. Gains are taxed only on distribution",
    "D. The entire distribution is taxed at the owner's rate of taxation"
  ],
  answer: "C. Gains are taxed only on distribution"
},
{
  question: "Which is an accurate description of the relationship between the premiums of a whole life policy and the premium payment period?",
  options: [
    "A. The payment period is not related to the annuity premium",
    "B. The shorter the payment period, the lower the annual premium",
    "C. The shorter the payment period, the higher the annual premium",
    "D. The longer the payment period, the higher the annual premium"
  ],
  answer: "C. The shorter the payment period, the higher the annual premium"
},
{
  question: "Which kind of retirement plan can a 500-employee for-profit corporation establish?",
  options: [
    "A. 401(k)",
    "B. 403(b)",
    "C. Keogh",
    "D. Simplified Employee Pension Plan"
  ],
  answer: "A. 401(k)"
},
{
  question: "The illegal occupation provision ensures that the insurer is liable for any losses incurred while the policy owner was:",
  options: [
    "A. Under the influence of prescription drugs",
    "B. Attempting to commit a felony",
    "C. Pursuing a criminal",
    "D. Not at work"
  ],
  answer: "D. Not at work"
},
{
  question: "Which of the following statements BEST describes a single premium cash value policy?",
  options: [
    "A. It requires only one payment to make the policy paid up",
    "B. It provides for only one premium to be paid without evidence of insurability",
    "C. It waives future premiums if the owner becomes disabled",
    "D. It requires the policyowner to pay one premium annually"
  ],
  answer: "A. It requires only one payment to make the policy paid up"
},

  // (Other questions remain unchanged...)
];

const quizData = originalQuizData.map(q => {
  return {
    question: q.question,
    options: q.options,
    correct: q.correct || q.answer // fallback if "correct" is missing
  };
}).sort(() => Math.random() - 0.5);

const optionLabels = ["A", "B", "C", "D"];

export default function QuizApp() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
  const [feedback, setFeedback] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const selectedAnswer = selectedAnswers[currentQuestion];

  const handleSelect = (option) => {
    if (selectedAnswer !== null) return; // prevent changing answer
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);

    if (option === quizData[currentQuestion].correct) {
      setFeedback("Correct!");
      setCorrectAnswer(null);
      setScore((prev) => prev + 1);
    } else {
      setFeedback("Incorrect.");
      setCorrectAnswer(quizData[currentQuestion].correct);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setFeedback(null);
      setCorrectAnswer(null);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setFeedback(null);
      setCorrectAnswer(null);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === "insur101") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!authenticated) {
    return (
      <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter Exam Password</h1>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handlePasswordSubmit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Start Exam
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-center">Insurance Exam Quiz</h1>
      <p className="text-center text-gray-600 mb-4">
        Question {currentQuestion + 1} of {quizData.length}
      </p>

      {showSummary ? (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Quiz Complete!</h2>
          <p className="mb-2">You got {score} out of {quizData.length} correct.</p>
          <p className="text-lg font-bold">Score: {Math.round((score / quizData.length) * 100)}%</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md mb-4">
          <p className="font-semibold mb-4">{quizData[currentQuestion].question}</p>
          <div className="space-y-2">
            {quizData[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left px-4 py-2 rounded border ${
                  selectedAnswer === option
                    ? option === quizData[currentQuestion].correct
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {selectedAnswer !== null && quizData[currentQuestion].correct === option && (
                  <span className="text-green-500 mr-2">✅</span>
                )}
                {selectedAnswer !== null && selectedAnswer === option && selectedAnswer !== quizData[currentQuestion].correct && (
                  <span className="text-red-500 mr-2">❌</span>
                )}
                <span className="font-semibold mr-2">{optionLabels[i]}.</span> {option}
              </button>
            ))}
          </div>

          {feedback && (
            <p className={`mt-4 font-medium ${feedback === "Correct!" ? "text-green-600" : "text-red-600"}`}>
              {feedback}
            </p>
          )}
          {correctAnswer && (
            <p className="mt-2 text-green-600 font-medium">
              Correct answer: {correctAnswer}
            </p>
          )}
        </div>
      )}

      {!showSummary && (
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {selectedAnswer && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleNext}
            >
              {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
