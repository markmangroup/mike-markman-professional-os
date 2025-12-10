# IQVIA Enterprise Data & Analytics: MedSci Opportunity Tracker & USCAN Operational Excellence Projects
## Comprehensive Analysis Based on Presentation Documentation (Feb 2023 - Nov 2023)

---

## Executive Summary

This document provides a detailed analysis of two major analytics and reporting initiatives delivered by the IQVIA Enterprise Data & Analytics (ED&A) team for the MedSci (Medical Scientific) sales organization and the USCAN (US/Canada) Operational Excellence team. The analysis is based on four presentation documents spanning February 2023 through November 2023, tracking project evolution, deliverables, and outcomes.

---

## PART 1: MEDSCI OPPORTUNITY TRACKER

### Project Overview

**Project Name:** MedSci Opportunity Tracker  
**Business Unit:** US RWES – Medical Scientific  
**Key Sponsor:** Jennifer Christian, VP & GM, MedSci, RW, US  
**Project Status:** 
- Feb 2023: In Development – Target Feb 2023
- Nov 2023: **Completed**

### Business Context & Problem Statement

**Initial State (Pre-ED&A):**
- MedSci team lacked real-time automated metrics
- Leadership had low visibility on area performance
- PICs (Principal Investigators/Client Managers) were only receiving ad-hoc reporting **2X per year**
- No systematic tracking of opportunity pipeline, win rates, or revenue performance
- Manual, fragmented reporting processes

**Business Case:**
The project was designed to:
- Improve Go To Market Strategy – increase sales win rate & identify new revenue streamlines
- Provide visibility on MedSci area performance
- Enable data-driven decision making for leadership and individual PICs
- Support sales incentive calculations and distribution (implicitly through accurate opportunity tracking)

### Key Metrics & Scale

**Business Scale:**
- **$36M Revenue** (Year 2022)
- **672 Opportunities** (Year 2022)
- **$93M Total Contract Value (TCV)** (Year 2022)
- **56% Win Rate** (Year 2022)
- **~20 unique PICs** receiving individualized reporting
- **Period Covered:** 2021, 2022 & 2023

### Solution Architecture

**Data Sources:**
1. **PSA (Professional Services Automation)** / **CRM** – via API connection
2. **MRA (Management Reporting & Analytics)** – manual data refresh
3. Data processing pipeline transforming raw opportunity data into structured analytics

**Technical Implementation:**
- **Dashboard Platform:** Power BI
- **Refresh Frequency:** Weekly basis
- **Distribution Method:** 
  - General dashboard available to leadership
  - Individualized dashboards sent via email every 2 weeks to ~20 PICs
  - **40+ individual dashboards sent every month**

### Dashboard Capabilities & KPIs

**General Overview Dashboard (Leadership View):**
- **Volume of Opportunities:**
  - Opportunities by Status
  - Opportunities by COE (Center of Excellence)
  - TCV Value by PIC – Won/Lost/Awarded/Pipeline
- **Lost Opportunities Analysis:**
  - Top 15 Clients by Value of Lost Opportunities
  - Volume of Opportunities Lost
  - Lost after Stage 4 (where proposal already made)
  - By Primary Loss Reason
- **Parent Overview:**
  - Opportunities and TCV Value by Parent
  - Revenue by Year, Main Delivery Country, Parent Name and Client Name
  - Parent with highest and lowest TCV Revenue
  - Revenue by PIC, Parent Name, Period (Year, Quarter & Month)

**PIC Overview Dashboard (Individual Performance):**
- Volume of Won Opportunities and TCV per PIC
- Win Rates per PIC
- Individual opportunity tracking and performance metrics

**Advanced Analytics Features:**
- Dashboard enables filtering by:
  - Date
  - PIC (Principal Investigator/Client Manager)
  - Client
  - Delivery Country
  - COE (Center of Excellence)
- **Focus on Opportunities Lost After Stage 4:** Special emphasis on opportunities where proposal has already been made to client, enabling analysis of late-stage losses

### Process Mining & Advanced Analytics (Feb-Mar 2023 Presentations)

The ED&A team conducted sophisticated process mining analysis on MedSci opportunity data, revealing critical insights:

**Sales Process Analysis:**
- **Process Flow Patterns:**
  - Many opportunities skip the "2. Qualifying" stage, moving directly to "3. Proposal dev." (245 opportunities)
  - 79 opportunities moved directly to "4. Proposal delivery" without proper qualification
  - 92 opportunities were lost just before or after the qualifying stage, prior to developing/delivering proposal
  - About a third of opportunities (59) that reach "3. Proposal dev." skip the "4. Proposal delivery" stage
  - Most opportunities (264) in "5. Finalizing" directly skipped into "7a. Won" (264), with employees not using stage 6

**Predictive Analytics - Sales Likelihood Model:**

The ED&A team developed a sophisticated **sales likelihood prediction model** to identify which opportunities are most likely to be won:

**Key Variables Impacting Win Probability:**
1. **Number of days elapsed since creation** – Critical factor: In the first 30 days, the probability drops approximately **1% every 2 days**
2. **Total number of products** in the opportunity
3. **Opportunity Amount (TCV)**
4. **Opportunities Won before for account** (historical success rate)
5. **Main Country**
6. **Total MC (Main Country) products**
7. **Total number of zero value products**

**High-Probability Win Segments Identified:**
- **Segment 1:** Opportunities <=30 days old, TCV in range [1,500 - 70,150], with 3-84 products, and previous wins for account
  - **517 opportunities**
  - **91.49% Win Rate**
  - **8.51% Loss Rate**

- **Segment 2:** Opportunities 83-343 days old, TCV >=51,000, >=2 products, >=1 previous win
  - **116 opportunities**
  - **88.79% Win Rate**
  - **11.21% Loss Rate**

- **Segment 3:** Opportunities 9-30 days old, TCV >=91,000, >=2 products
  - **72 opportunities**
  - **88.89% Win Rate**
  - **11.11% Loss Rate**

**Example High-Value, High-Probability Opportunities:**
- **Amgen - Amgevita Early Look Study** (Opp #2913998)
  - 189 days old
  - $425,170 TCV
  - US-based
  - 5 MC products, 5 total products
  - 164 previous wins for account
  - 0 zero-value products
  - **Highly likely to be won**

- **bioMerieux - Preferred Medical Affairs** (Opp #2873318)
  - 960 days old
  - $1 TCV (low value)
  - US-based
  - 1 MC product, 1 total product
  - 2 previous wins
  - 0 zero-value products
  - **Lower probability due to age and value**

**AI/ML Potential Applications Identified:**
- **Real-time Opportunity Risk Assessment:** Assess condition of open opportunities with data-infused risk framework
- **Automated Action Plans:** Identify and build "automated optimal action plan" after each stage
- **Dynamic Updates:** Update opportunity condition based on new data as soon as available in Salesforce
- **Pattern Recognition:** Use advanced statistical models to identify high-value and highly likely to be won opportunities based on historical sales patterns

### Data Quality Enhancements

**Data Quality Issues Identified:**
- **Possible Duplicates:** Opportunity IDs with fully duplicated data or duplicated with deviations
- **Date Inconsistencies:** 
  - Deadline < Start date
  - Missing deadlines
  - Example: Opp XX0679 had start_date 2022-07-09 but deadline 2022-12-19
- **Outliers:** Extreme TCV values (e.g., Opp 2876300 with TCV of $72.7M vs average $360K, upper limit $4.6M)
- **Not Populated Fields:** Missing COE, Primary Loss Reason, and other critical fields

**Data Quality Impact:**
- These inconsistencies could lead to inaccurate conclusions and faulty decision-making if not addressed
- ED&A team implemented data cleaning and preprocessing techniques to address these issues

### Benefits & Outcomes

**Operational Benefits:**
- **Weekly real-time reporting** for Leadership (vs. previous 2X per year ad-hoc)
- **Clear KPIs and metrics** enabling data-driven decisions
- **Individualized reporting** for ~20 unique PICs distributed every 2 weeks via email
- **40+ individual dashboards sent every month**
- **Proactive Opportunity Management:** Emails highlight opportunities not updated in more than 3 months, prompting PIC action

**Strategic Benefits:**
- **Improved Go To Market Strategy** – ability to increase sales win rate & identify new revenue streamlines
- **Visibility on team performance** at both leadership and individual PIC levels
- **Data-driven sales process optimization** through process mining insights
- **Predictive capability** to identify high-probability wins and focus sales efforts

**Business Impact:**
- Enabled leadership to track performance in real-time
- Supported sales incentive calculations through accurate opportunity and revenue tracking
- Identified process bottlenecks and optimization opportunities
- Provided foundation for advanced analytics and AI/ML applications

### Project Timeline & Status Evolution

**February 2023:**
- Project Status: In Development – Target Feb 2023
- Initial dashboard development
- Process mining analysis initiated

**March 2023:**
- Project Status: In Development
- Process mining insights shared
- Predictive analytics model developed
- Data quality analysis completed

**November 2023:**
- **Project Status: COMPLETED**
- Dashboard fully operational
- Individualized reporting process established
- Advanced analytics capabilities deployed

---

## PART 2: USCAN OPERATIONAL EXCELLENCE DASHBOARD

### Project Overview

**Project Name:** USCAN Operational Excellence Dashboard / USCAN Business Metrics  
**Business Unit:** Finance USCAN / US/CAN Operational Excellence  
**Key Sponsor:** Jody Fisher, VP, Operational Effectiveness  
**Project Status:**
- Feb 2023: In Development
- Nov 2023: **Completed**

### Business Context & Problem Statement

**Initial State (Pre-ED&A):**
- US/CAN Op Ex team was **manually extracting data** to do analysis and drive efficiencies
- No consistent RBU (Regional Business Unit) reporting framework
- Lack of standardized KPIs to support performance tracking
- Manual preparation and analysis processes consuming significant time
- No automated reporting infrastructure

**Business Case:**
- Support and identify opportunities as part of **Project Boost** – cost reduction target of **$57M in 2023**
- Drive consistent RBU reporting
- Include newly defined KPIs to support performance tracking
- Eliminate manual efforts to create presentations and reports
- Optimize operating expenses through data-driven insights

### Key Metrics & Scale

**Business Scale:**
- **2 Countries** (US & Canada)
- **$57M Target cost reduction** (2023)
- **+$655M Gross Margin** (Year 2023)
- **+$673M Fee EBITDA** (Year 2022)
- **Report & slides shared monthly**

### Solution Architecture

**Data Sources:**
- **MRA (Management Reporting & Analytics)** – primary financial data source
- Data processing pipeline transforming raw financial data into structured operational metrics

**Technical Implementation:**
- **Dashboard Platform:** Power BI
- **Refresh Frequency:** Monthly
- **Delivery Method:** Dashboard delivered monthly + supporting slides

### Dashboard Capabilities & KPIs

**Comprehensive Financial & Operational Metrics:**

**1. Fee Revenue:**
- Fee Revenue Mix & Growth % by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**2. EBITDA:**
- EBITDA Mix & Growth % by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**3. Compensation:**
- Total Labor Costs
- Total Compensation excluding Temp Labor
- Fee revenue per FTE by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**4. Marketing Spend:**
- Marketing spend by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**5. Gross Margin:**
- Gross Margin & Gross Margin vs Revenue by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**6. 3rd Party Expense:**
- 3rd Party Expense & 3rd Party Expense spend to OPEX % by:
  - Business line
  - Year, Quarter & Month
  - Controllable & Non-Controllable

**Key Analytical Dimensions:**
- All metrics segmented by **Controllable vs Non-Controllable** expenses
- Time-based analysis: Year, Quarter, Month
- Business line granularity
- Comparative analysis capabilities

### Process Mining Application (Feb-Mar 2023)

While the USCAN project focused primarily on financial reporting automation, the ED&A team's process mining capabilities were highlighted as applicable to operational processes:

**Process Mining Value Proposition:**
- **Deeper Process Understanding:** When systems have many data timestamps, process mining enables deeper understanding of processes, identifying bottlenecks and inefficiencies
- **Customer Journey Optimization:** Gain actionable insights into customer journey, optimizing experience and reducing time to delivery
- **Pattern Analysis:** Analyze patterns in data processes to identify deviations from normal patterns

**Application to USCAN:**
- Process mining could be applied to operational workflows within USCAN
- Identify inefficiencies in expense management, compensation processes, and operational workflows
- Support the $57M cost reduction target through process optimization insights

### Benefits & Outcomes

**Operational Benefits:**
- **Manual work reduction** – eliminated manual data extraction and analysis
- **Accurate Reporting** – consistent, reliable financial metrics
- **Time reduction** for OE team preparation and analysis process
- **Consistent RBU reporting** framework established
- **Automated monthly delivery** of dashboard and slides

**Strategic Benefits:**
- **Support Project Boost** – identify opportunities to achieve $57M cost reduction target
- **Drive business decisions** through accurate, timely operational data
- **Optimize operating expenses** through visibility into controllable vs non-controllable costs
- **Performance tracking** through standardized KPIs

**Business Impact:**
- Enabled data-driven operational decision making
- Supported cost reduction initiatives
- Provided foundation for ongoing operational excellence tracking
- Eliminated manual reporting overhead

### Project Timeline & Status Evolution

**February 2023:**
- Project Status: In Development
- Initial requirements gathering
- Dashboard design phase

**March 2023:**
- Project Status: In Development
- Dashboard development ongoing
- KPI definitions finalized

**November 2023:**
- **Project Status: COMPLETED**
- Dashboard operational
- Monthly reporting process established

---

## PART 3: CROSS-PROJECT INSIGHTS & ED&A CAPABILITIES

### ED&A Team Composition & Skills

**Team Structure (as of Nov 2023):**
- **Data Team (3 people):** Computer and Telecommunications Engineers
  - Skills: SQL, GIT, Snowflake, Databricks
  - Responsibilities: Gathering and extracting data, cleansing and modeling

- **Analytics Team (2 people):** Business Computing and Economics professionals
  - Skills: Alteryx, SQL, Power BI
  - Responsibilities: Business analysis, data transformation & reconciliation

- **Reporting Team (2 people):** Business Intelligence and Big data professionals
  - Skills: Power BI, SQL, Celonis
  - Responsibilities: Data visualizations, data quality & advanced analysis, GenAI internal initiative

- **Data Science Team (3 people):** Data Scientists and Machine Learning professionals
  - Skills: Python, SQL, GIT, GenAI
  - Responsibilities: Advanced analytics, predictive modeling, AI/ML applications

**Team Experience:** All composed of senior professionals with **+8 years of experience**

### Technology Stack

**Data Platform:**
- **Enterprise Cloud Data Platform (ECDP)** – Snowflake-based
- **Azure Private Link** for secure data access
- **Data Lake** architecture (Raw Data → Curated Data → Data Marts)
- **SnowPark Stored Procedures** for data transformation
- **Materialized Views** for performance optimization

**Data Sources Integrated:**
- **CRM (Salesforce)**
- **PSA (Professional Services Automation)**
- **MRA (Management Reporting & Analytics)** / Hyperion Cubes
- **PBF (Planning & Budgeting Framework)**
- **Workday** (HR data)
- **SAP** (Financial systems)
- **PeopleSoft** (Legacy systems)

**Analytics & Visualization:**
- **Power BI** – primary dashboard platform
- **Alteryx** – data transformation and workflow automation
- **Celonis** – process mining
- **Python** – advanced analytics and ML
- **SQL** – data querying and transformation

### Common Patterns Across Projects

**1. Data Quality Focus:**
- Both projects included comprehensive data quality checks
- Identification and correction of duplicates, inconsistencies, and anomalies
- Automated data cleaning processes

**2. Process Mining Application:**
- Process mining used to understand sales and operational workflows
- Identification of bottlenecks and inefficiencies
- Pattern recognition for optimization opportunities

**3. Predictive Analytics:**
- Sales likelihood models (MedSci)
- Opportunity scoring and prioritization
- Risk assessment frameworks

**4. Individualized Reporting:**
- Both projects included personalized dashboards/reports
- MedSci: Individual PIC dashboards
- USCAN: Business line and time-period segmentation

**5. Automation Focus:**
- Elimination of manual processes
- Automated data refresh and distribution
- Reduced manual effort and increased accuracy

### Business Impact Summary

**MedSci Opportunity Tracker:**
- Transformed from 2X/year ad-hoc reporting to weekly real-time dashboards
- Enabled data-driven sales strategy optimization
- Supported sales incentive calculations through accurate opportunity tracking
- Identified high-probability wins through predictive analytics
- Process mining revealed optimization opportunities in sales workflow

**USCAN Operational Excellence:**
- Automated manual data extraction and analysis processes
- Enabled $57M cost reduction target tracking
- Provided consistent RBU reporting framework
- Supported operational decision-making through accurate financial metrics
- Eliminated manual reporting overhead

---

## PART 4: EVOLUTION & UPDATES ACROSS PRESENTATIONS

### February 2023 Presentation (Business Operations LT Meeting)

**MedSci:**
- Project in development, targeting Feb 2023 completion
- Initial dashboard capabilities defined
- Process mining analysis initiated
- Predictive analytics model under development

**USCAN:**
- Project in development
- Initial requirements gathering
- Dashboard design phase

### March 2023 Presentation (Business Operations OnSite Meeting)

**MedSci:**
- Process mining insights shared
- Predictive analytics model completed with detailed segmentation
- Data quality analysis completed
- Advanced analytics capabilities demonstrated

**USCAN:**
- Dashboard development ongoing
- KPI definitions finalized
- Monthly reporting structure established

### July 2023 Presentation (EDA Overview)

**MedSci:**
- Project status updated (likely near completion)
- Individualized reporting process refined
- Email distribution process established

**USCAN:**
- Project status updated (likely near completion)
- Dashboard capabilities expanded

### November 2023 Presentation (EDA Overview)

**MedSci:**
- **Project Status: COMPLETED**
- All capabilities operational
- Individualized reporting fully deployed
- Advanced analytics in production use

**USCAN:**
- **Project Status: COMPLETED**
- Dashboard operational
- Monthly reporting process established
- All KPIs and metrics deployed

---

## PART 5: KEY TECHNICAL ACHIEVEMENTS

### Sales Likelihood Prediction Model (MedSci)

**Model Development:**
- Analyzed historical opportunity data to identify patterns
- Identified 7 key variables impacting win probability
- Developed segmentation model with 3 high-probability segments
- Achieved 88-91% win rate prediction accuracy for top segments

**Key Insight:**
- **Time decay factor:** Probability drops 1% every 2 days in first 30 days
- This insight enables proactive opportunity management

**Application:**
- Real-time opportunity scoring
- Prioritization of sales efforts
- Risk assessment for pipeline management
- Foundation for AI/ML automation

### Process Mining Analysis (MedSci)

**Findings:**
- Identified significant process deviations:
  - 245 opportunities skipping qualification stage
  - 92 opportunities lost before proposal development
  - 59 opportunities skipping proposal delivery stage
  - 264 opportunities skipping final negotiation stage

**Impact:**
- Revealed opportunities for process standardization
- Identified training needs
- Enabled process optimization recommendations
- Supported sales methodology improvements

### Data Quality Framework

**Issues Identified:**
- Duplicate records
- Date inconsistencies
- Missing critical fields
- Outlier values requiring investigation

**Solutions Implemented:**
- Automated duplicate detection and resolution
- Data validation rules
- Outlier identification and flagging
- Missing data alerts

---

## PART 6: BUSINESS VALUE & ROI

### MedSci Opportunity Tracker

**Quantitative Benefits:**
- **Reporting Frequency:** Increased from 2X/year to weekly (26X improvement)
- **Individualized Reporting:** 40+ dashboards/month vs. previous ad-hoc approach
- **Data Coverage:** 2021-2023 historical data + real-time updates
- **User Base:** ~20 PICs + leadership team

**Qualitative Benefits:**
- Improved sales win rate through data-driven insights
- Enhanced visibility for leadership
- Better sales process understanding
- Foundation for advanced analytics and AI/ML

**Strategic Value:**
- Supported sales incentive calculations
- Enabled go-to-market strategy optimization
- Identified new revenue streamlines
- Process optimization opportunities

### USCAN Operational Excellence

**Quantitative Benefits:**
- **Automation:** Eliminated manual data extraction and analysis
- **Reporting Consistency:** Standardized RBU reporting framework
- **Cost Reduction Support:** Enabled tracking toward $57M target
- **Time Savings:** Reduced preparation and analysis time

**Qualitative Benefits:**
- Accurate, reliable operational metrics
- Data-driven decision making
- Performance tracking capabilities
- Operational visibility

**Strategic Value:**
- Supported Project Boost cost reduction initiative
- Enabled operational expense optimization
- Provided foundation for ongoing operational excellence
- Enhanced financial visibility and control

---

## CONCLUSION

Both the MedSci Opportunity Tracker and USCAN Operational Excellence Dashboard represent significant achievements in enterprise analytics and reporting modernization at IQVIA. These projects demonstrate:

1. **Transformation from Manual to Automated:** Both projects eliminated manual processes and introduced automated, real-time reporting capabilities

2. **Advanced Analytics Integration:** The MedSci project particularly showcased sophisticated predictive analytics and process mining capabilities

3. **Business Impact:** Both projects directly supported critical business objectives – sales optimization for MedSci and cost reduction for USCAN

4. **Scalability:** The solutions established frameworks that can be extended and replicated across other business units

5. **Foundation for AI/ML:** The data infrastructure and analytics capabilities established provide foundation for future AI/ML applications

The evolution of these projects from initial development (Feb 2023) through completion (Nov 2023) demonstrates the ED&A team's ability to deliver complex analytics solutions that drive real business value.

---

**Document Prepared:** Based on analysis of IQVIA ED&A presentation materials from February 2023 through November 2023  
**Analysis Date:** January 2025  
**Sources:**
- Business Operations LT Meeting - EDA. 02.22.2023.pptx
- Business Operations OnSite Meeting - 09.03.2023.pptx
- EDA Overview 07.11.2023.pptx
- LAUNCH Kick Off.pptx
- Bus.Ops Meeting. Enterprise Data & Analytics - May 2023.pdf


