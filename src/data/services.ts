export interface Service {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  points: string[];
  fullText: string[];
  category: string;
}

export const servicesData: Service[] = [
  // Category: ESG Strategy & Reporting
  {
    id: 'esg-strategy-roadmap',
    title: 'ESG Strategy & Roadmap',
    subtitle: 'End-to-end sustainability strategy aligned to business goals and India\'s regulatory landscape',
    desc: 'We develop comprehensive ESG strategies that align with your core business objectives, ensuring compliance with local and international regulations while driving long-term value creation.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Current state assessment and gap analysis',
      'Stakeholder engagement and materiality assessment',
      'Goal setting and KPI development',
      'Implementation roadmap and action planning'
    ],
    fullText: [
      'Our ESG Strategy & Roadmap service provides a structured approach to integrating sustainability into your business operations. We begin by understanding your unique context, industry challenges, and stakeholder expectations.',
      'We then work collaboratively to define a clear vision, set measurable targets, and develop a pragmatic roadmap for implementation, ensuring that your ESG initiatives drive tangible business value and resilience.'
    ],
    category: 'ESG Strategy & Reporting'
  },
  {
    id: 'brsr-compliance-reporting',
    title: 'BRSR Compliance & Reporting',
    subtitle: 'SEBI-mandated BRSR preparation, gap analysis, and disclosure for listed companies',
    desc: 'Navigate the complexities of the Business Responsibility and Sustainability Report (BRSR) with our expert guidance, ensuring accurate, transparent, and compliant disclosures.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    points: [
      'BRSR Core and Comprehensive reporting',
      'Data collection and validation frameworks',
      'Gap analysis against SEBI requirements',
      'Assurance readiness and support'
    ],
    fullText: [
      'With SEBI\'s mandate for BRSR reporting, listed companies face new challenges in data collection and disclosure. Our team provides end-to-end support, from initial gap analysis to final report preparation.',
      'We help you establish robust data management systems, ensuring that your BRSR disclosures are not only compliant but also accurately reflect your sustainability performance and commitment to responsible business practices.'
    ],
    category: 'ESG Strategy & Reporting'
  },
  {
    id: 'gri-tcfd-sasb-reporting',
    title: 'GRI / TCFD / SASB Reporting',
    subtitle: 'International sustainability reporting framework alignment and report preparation',
    desc: 'Align your sustainability disclosures with globally recognized frameworks like GRI, TCFD, and SASB to meet the expectations of international investors and stakeholders.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Framework selection and alignment',
      'Data mapping and gap analysis',
      'Report drafting and design',
      'Stakeholder communication strategy'
    ],
    fullText: [
      'Navigating the alphabet soup of sustainability reporting frameworks can be daunting. We help you select the most relevant frameworks for your industry and stakeholder base, ensuring your disclosures are meaningful and comparable.',
      'Whether you are reporting to the Global Reporting Initiative (GRI), aligning with the Task Force on Climate-related Financial Disclosures (TCFD), or utilizing Sustainability Accounting Standards Board (SASB) standards, we provide the expertise to streamline the process and enhance the credibility of your reports.'
    ],
    category: 'ESG Strategy & Reporting'
  },
  {
    id: 'esg-materiality-assessment',
    title: 'ESG Materiality Assessment',
    subtitle: 'Double materiality analysis with structured stakeholder engagement and prioritization',
    desc: 'Identify and prioritize the ESG issues that matter most to your business and stakeholders through rigorous double materiality assessments.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Financial and impact materiality (Double Materiality)',
      'Stakeholder mapping and engagement',
      'Issue identification and prioritization',
      'Materiality matrix development'
    ],
    fullText: [
      'A robust materiality assessment is the foundation of any effective ESG strategy. We employ a double materiality approach, evaluating both the impact of your business on the environment and society, and the impact of ESG issues on your financial performance.',
      'Through structured stakeholder engagement and rigorous analysis, we help you identify the critical issues that require management attention, resource allocation, and transparent disclosure.'
    ],
    category: 'ESG Strategy & Reporting'
  },
  {
    id: 'cbam-eu-green-deal-compliance',
    title: 'CBAM & EU Green Deal Compliance',
    subtitle: 'Navigate the Carbon Border Adjustment Mechanism and EU Green Deal requirements',
    desc: 'Ensure your exports to the EU remain competitive and compliant with the latest CBAM regulations and broader EU Green Deal directives.',
    img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    points: [
      'CBAM impact assessment and readiness',
      'Embedded emissions calculation',
      'Reporting and documentation support',
      'Supply chain decarbonization strategies'
    ],
    fullText: [
      'The EU\'s Carbon Border Adjustment Mechanism (CBAM) introduces new complexities for exporters. We help you understand the implications of CBAM on your business, calculate embedded emissions, and prepare the necessary documentation for compliance.',
      'Beyond compliance, we assist you in developing strategies to reduce the carbon intensity of your products, ensuring long-term competitiveness in the European market and alignment with the broader objectives of the EU Green Deal.'
    ],
    category: 'ESG Strategy & Reporting'
  },

  // Category: Climate & Environment
  {
    id: 'carbon-footprint-net-zero',
    title: 'Carbon Footprint & Net Zero Roadmap',
    subtitle: 'Scope 1, 2, and 3 GHG emissions measurement and science-based decarbonization plan',
    desc: 'Measure your greenhouse gas emissions across all scopes and develop a credible, science-based roadmap to achieve Net Zero.',
    img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    points: [
      'GHG inventory development (Scope 1, 2, & 3)',
      'Science-Based Targets (SBTi) setting',
      'Decarbonization strategy and abatement curves',
      'Carbon offset and removal strategies'
    ],
    fullText: [
      'Understanding your carbon footprint is the first step towards climate action. We provide rigorous GHG accounting services, covering Scope 1, 2, and the complex Scope 3 emissions, ensuring alignment with the GHG Protocol.',
      'Building on this baseline, we help you set ambitious, science-based targets and develop a comprehensive Net Zero roadmap, identifying the most cost-effective and impactful decarbonization levers across your operations and value chain.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'climate-risk-analysis-tcfd',
    title: 'Climate Risk Analysis (TCFD)',
    subtitle: 'Physical and transition climate risk and opportunity assessment for investors and regulators',
    desc: 'Assess and manage the financial impacts of climate change on your business, aligning with the TCFD recommendations.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Scenario analysis and stress testing',
      'Physical risk assessment (acute and chronic)',
      'Transition risk assessment (policy, technology, market)',
      'Integration into enterprise risk management'
    ],
    fullText: [
      'Climate change presents both significant risks and emerging opportunities. Our Climate Risk Analysis service helps you identify, quantify, and manage these impacts in alignment with the Task Force on Climate-related Financial Disclosures (TCFD).',
      'Through advanced scenario analysis, we evaluate how physical risks (like extreme weather) and transition risks (like carbon pricing) could affect your assets, operations, and financial performance, enabling informed strategic planning and resilient capital allocation.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'renewable-energy-transition',
    title: 'Renewable Energy Transition Advisory',
    subtitle: 'Strategic guidance and implementation support for shifting to renewable energy sources',
    desc: 'Accelerate your transition to clean energy with expert advisory on procurement, on-site generation, and energy efficiency.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Renewable energy feasibility studies',
      'Power Purchase Agreement (PPA) advisory',
      'On-site solar and wind project management',
      'Energy efficiency audits and optimization'
    ],
    fullText: [
      'Transitioning to renewable energy is a critical component of any decarbonization strategy. We provide comprehensive advisory services to help you navigate the complex energy landscape, from evaluating on-site generation potential to structuring off-site Power Purchase Agreements (PPAs).',
      'Our team also conducts rigorous energy efficiency audits, identifying opportunities to reduce consumption and optimize operations, ensuring a holistic approach to energy management and cost reduction.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'water-stewardship-management',
    title: 'Water Stewardship & Management',
    subtitle: 'Comprehensive water risk assessment, efficiency optimization, and stewardship strategies',
    desc: 'Mitigate water-related risks and enhance operational resilience through advanced water stewardship and management practices.',
    img: 'https://images.unsplash.com/photo-1541888087405-131109f022ce?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Water footprinting and risk assessment',
      'Water efficiency and recycling optimization',
      'WASH (Water, Sanitation, and Hygiene) compliance',
      'Catchment area stewardship programs'
    ],
    fullText: [
      'Water scarcity and quality are growing concerns for businesses globally. Our Water Stewardship services help you understand your water footprint, assess risks across your operations and supply chain, and implement strategies to improve water efficiency.',
      'We go beyond compliance, helping you develop holistic stewardship programs that address catchment-level challenges, engage local communities, and ensure sustainable water management practices that protect this critical resource.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'waste-circular-economy',
    title: 'Waste & Circular Economy Consulting',
    subtitle: 'Strategies for waste reduction, recycling optimization, and circular business models',
    desc: 'Transition from a linear "take-make-dispose" model to a circular economy, minimizing waste and maximizing resource efficiency.',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Zero waste to landfill strategies',
      'Extended Producer Responsibility (EPR) compliance',
      'Circular product design and lifecycle analysis',
      'Waste valorization and recycling optimization'
    ],
    fullText: [
      'Embracing the circular economy is essential for sustainable growth. We help you rethink your approach to resource management, developing strategies to minimize waste generation, optimize recycling, and design products for longevity and circularity.',
      'From navigating Extended Producer Responsibility (EPR) regulations to identifying opportunities for waste valorization, our consulting services empower you to turn waste into a resource, reducing environmental impact and creating new economic value.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'environmental-compliance-advisory',
    title: 'Environmental Compliance Advisory',
    subtitle: 'Ensure adherence to local and international environmental regulations and standards',
    desc: 'Navigate the complex landscape of environmental regulations with our expert advisory, minimizing legal risks and ensuring operational compliance.',
    img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Regulatory mapping and gap analysis',
      'Permitting and licensing support',
      'Environmental management systems (ISO 14001)',
      'Compliance audits and risk mitigation'
    ],
    fullText: [
      'Staying compliant with ever-evolving environmental regulations is a continuous challenge. Our advisory services provide you with the expertise to navigate this complex landscape, ensuring that your operations meet all local, national, and international requirements.',
      'We conduct thorough compliance audits, assist with permitting and licensing, and help you implement robust Environmental Management Systems (EMS) like ISO 14001, minimizing legal risks and fostering a culture of environmental responsibility.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'biodiversity-tnfd-assessment',
    title: 'Biodiversity & TNFD Assessment',
    subtitle: 'Evaluate and manage nature-related risks and opportunities aligned with TNFD',
    desc: 'Understand your impact on biodiversity and integrate nature-related risks into your corporate strategy using the TNFD framework.',
    img: 'https://images.unsplash.com/photo-1500829243541-74b676fecc20?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Nature-related risk and opportunity assessment',
      'TNFD framework alignment and reporting',
      'Biodiversity footprinting and impact measurement',
      'Conservation and restoration strategies'
    ],
    fullText: [
      'Nature loss poses significant risks to businesses and the global economy. Our Biodiversity & TNFD Assessment services help you understand your dependencies and impacts on nature, aligning with the Taskforce on Nature-related Financial Disclosures (TNFD) recommendations.',
      'We guide you through the LEAP (Locate, Evaluate, Assess, Prepare) approach, enabling you to integrate nature-related considerations into your risk management processes, strategic planning, and corporate disclosures.'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'life-cycle-assessment-lca',
    title: 'Life Cycle Assessment (LCA)',
    subtitle: 'Cradle-to-grave environmental impact analysis of products and services',
    desc: 'Quantify the environmental impacts of your products throughout their entire life cycle, from raw material extraction to end-of-life disposal.',
    img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Cradle-to-gate and cradle-to-grave assessments',
      'Environmental Product Declarations (EPD)',
      'Hotspot analysis and eco-design strategies',
      'ISO 14040/14044 compliant methodologies'
    ],
    fullText: [
      'To truly understand the environmental footprint of your products, you need to look beyond your own operations. Our Life Cycle Assessment (LCA) services provide a comprehensive analysis of environmental impacts across the entire value chain.',
      'By identifying "hotspots" of environmental impact, we help you make informed decisions about material selection, manufacturing processes, and product design, enabling you to develop more sustainable products and communicate their benefits through Environmental Product Declarations (EPDs).'
    ],
    category: 'Climate & Environment'
  },
  {
    id: 'green-building-advisory',
    title: 'Green Building & LEED/GRIHA/IGBC Advisory',
    subtitle: 'Sustainable design, construction, and certification support for real estate',
    desc: 'Optimize the environmental performance of your buildings and achieve recognized green building certifications.',
    img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop',
    points: [
      'LEED, GRIHA, and IGBC certification support',
      'Energy modeling and daylight analysis',
      'Sustainable materials selection',
      'Indoor environmental quality optimization'
    ],
    fullText: [
      'The built environment is a major contributor to global emissions. Our Green Building Advisory services help you design, construct, and operate buildings that are energy-efficient, environmentally responsible, and healthy for occupants.',
      'We provide end-to-end support for achieving certifications like LEED, GRIHA, and IGBC, guiding you through the complex requirements and ensuring that your real estate portfolio aligns with your broader sustainability goals.'
    ],
    category: 'Climate & Environment'
  },

  // Category: Social & Supply Chain
  {
    id: 'supply-chain-sustainability-audit',
    title: 'Supply Chain Sustainability Audit',
    subtitle: 'Supplier ESG scoring, on-site audits, and capacity building programs',
    desc: 'Ensure your supply chain aligns with your ESG standards through rigorous audits, risk assessments, and supplier engagement programs.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a74?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Supplier code of conduct development',
      'ESG risk mapping and supplier scoring',
      'On-site social and environmental audits',
      'Supplier capacity building and remediation'
    ],
    fullText: [
      'Your sustainability commitments extend beyond your own operations to your entire supply chain. We help you identify and mitigate ESG risks within your supplier network through comprehensive audits and assessments.',
      'Our approach goes beyond compliance; we work collaboratively with your suppliers to build their capacity, implement best practices, and drive continuous improvement, ensuring a resilient and responsible supply chain.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'social-impact-assessment-sia',
    title: 'Social Impact Assessment (SIA)',
    subtitle: 'Evaluate and manage the social consequences of projects and policies',
    desc: 'Understand and mitigate the social impacts of your operations and projects on local communities and stakeholders.',
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Baseline socio-economic studies',
      'Community engagement and consultation',
      'Impact mitigation and management plans',
      'Resettlement and rehabilitation planning'
    ],
    fullText: [
      'Major projects and operational changes can have profound effects on local communities. Our Social Impact Assessment (SIA) services help you proactively identify, evaluate, and manage these social consequences.',
      'Through meaningful community engagement and rigorous analysis, we develop strategies to mitigate negative impacts and enhance positive outcomes, ensuring that your projects secure a social license to operate and contribute to sustainable development.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'csr-strategy-implementation',
    title: 'CSR Strategy & Implementation',
    subtitle: 'Strategic alignment, program design, and impact measurement for CSR initiatives',
    desc: 'Maximize the impact of your Corporate Social Responsibility (CSR) investments through strategic planning and rigorous impact measurement.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    points: [
      'CSR policy and strategy development',
      'Needs assessment and program design',
      'NGO partner selection and due diligence',
      'Social Return on Investment (SROI) analysis'
    ],
    fullText: [
      'Effective CSR goes beyond philanthropy; it requires strategic alignment with your business objectives and a focus on measurable impact. We help you design and implement CSR programs that create shared value for your business and society.',
      'From identifying the right NGO partners to conducting Social Return on Investment (SROI) analysis, we ensure that your CSR initiatives are impactful, sustainable, and aligned with regulatory requirements.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'dei-advisory-gender-inclusion',
    title: 'DEI Advisory & Gender Inclusion',
    subtitle: 'Strategies to foster diversity, equity, and inclusion within the workplace',
    desc: 'Build a more inclusive and equitable workplace with our expert Diversity, Equity, and Inclusion (DEI) advisory services.',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    points: [
      'DEI maturity assessments and benchmarking',
      'Inclusive policy development and review',
      'Unconscious bias and inclusive leadership training',
      'Gender pay gap analysis and remediation'
    ],
    fullText: [
      'A diverse and inclusive workforce is a key driver of innovation and business performance. Our DEI advisory services help you assess your current maturity, identify barriers to inclusion, and develop strategies to foster a more equitable workplace.',
      'We provide actionable recommendations on policy development, recruitment practices, and leadership training, helping you build a culture where all employees feel valued, respected, and empowered to succeed.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'human-rights-due-diligence',
    title: 'Human Rights Due Diligence',
    subtitle: 'Identify, prevent, and mitigate human rights risks across operations and supply chains',
    desc: 'Ensure your business respects human rights in alignment with the UN Guiding Principles on Business and Human Rights (UNGPs).',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Human rights risk and impact assessments',
      'Policy development and integration',
      'Grievance mechanism design and implementation',
      'Supply chain modern slavery audits'
    ],
    fullText: [
      'Respecting human rights is a fundamental corporate responsibility. We help you implement robust Human Rights Due Diligence (HRDD) processes to identify, prevent, and mitigate human rights risks across your operations and supply chain.',
      'Aligned with the UN Guiding Principles, our services include risk assessments, policy development, and the design of effective grievance mechanisms, ensuring that your business operates ethically and responsibly.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'labour-standards-welfare-audits',
    title: 'Labour Standards & Welfare Audits',
    subtitle: 'Ensure compliance with labour laws and promote fair working conditions',
    desc: 'Assess and improve working conditions, ensuring compliance with international labour standards and local regulations.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Occupational Health and Safety (OHS) audits',
      'Fair wage and working hours assessments',
      'Freedom of association and collective bargaining review',
      'Migrant worker welfare assessments'
    ],
    fullText: [
      'Maintaining high labour standards is essential for employee well-being and operational resilience. We conduct comprehensive audits to assess working conditions, health and safety practices, and compliance with labour laws.',
      'Our audits help you identify areas for improvement, mitigate risks of labour rights violations, and ensure that your workforce is treated fairly, safely, and with respect.'
    ],
    category: 'Social & Supply Chain'
  },
  {
    id: 'stakeholder-engagement-programs',
    title: 'Stakeholder Engagement Programs',
    subtitle: 'Structured dialogue and engagement strategies to build trust and alignment',
    desc: 'Develop and implement effective stakeholder engagement strategies to build trust, manage expectations, and inform decision-making.',
    img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Stakeholder mapping and prioritization',
      'Engagement strategy and communication planning',
      'Facilitation of dialogues and consultations',
      'Feedback integration and reporting'
    ],
    fullText: [
      'Effective stakeholder engagement is critical for navigating complex ESG issues and building long-term value. We help you identify your key stakeholders, understand their concerns, and develop structured engagement programs.',
      'Through transparent communication and meaningful dialogue, we enable you to build trust, manage risks, and ensure that your sustainability strategy is informed by the perspectives of those who matter most to your business.'
    ],
    category: 'Social & Supply Chain'
  },

  // Category: Governance & Sustainable Finance
  {
    id: 'esg-governance-board-advisory',
    title: 'ESG Governance & Board Advisory',
    subtitle: 'Board-level ESG integration, committee structuring, and oversight mechanisms',
    desc: 'Strengthen your corporate governance by integrating ESG considerations into board oversight and strategic decision-making.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Board ESG training and capacity building',
      'ESG committee charter development',
      'Executive compensation and ESG linkage',
      'Ethics, compliance, and anti-corruption frameworks'
    ],
    fullText: [
      'Strong governance is the bedrock of effective ESG management. We advise boards and executive teams on how to integrate sustainability into corporate governance structures, ensuring proper oversight and accountability.',
      'From establishing dedicated ESG committees to linking executive compensation to sustainability performance, we help you build the governance frameworks necessary to drive long-term value and manage emerging risks.'
    ],
    category: 'Governance & Sustainable Finance'
  },
  {
    id: 'esg-ratings-improvement-program',
    title: 'ESG Ratings Improvement Program',
    subtitle: 'Strategic interventions to enhance scores across major ESG rating agencies',
    desc: 'Improve your performance and scores across key ESG rating agencies (e.g., MSCI, Sustainalytics, CDP) to attract responsible investment.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Rating agency methodology analysis',
      'Gap assessment and peer benchmarking',
      'Data disclosure optimization',
      'Targeted improvement action plans'
    ],
    fullText: [
      'ESG ratings are increasingly used by investors to assess corporate sustainability performance. We help you navigate the complex landscape of rating agencies, understanding their methodologies and identifying areas for improvement.',
      'Through targeted gap assessments and data disclosure optimization, we develop actionable strategies to enhance your ESG scores, improving your profile among responsible investors and reducing your cost of capital.'
    ],
    category: 'Governance & Sustainable Finance'
  },
  {
    id: 'investor-esg-due-diligence',
    title: 'Investor ESG Due Diligence',
    subtitle: 'Pre-investment ESG risk and opportunity assessments for private equity and M&A',
    desc: 'Integrate ESG considerations into your investment process with rigorous pre-deal due diligence and risk assessments.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Pre-deal ESG risk and red flag identification',
      'Value creation opportunity assessment',
      'Post-merger integration planning (100-day plans)',
      'Alignment with LP expectations and frameworks'
    ],
    fullText: [
      'For investors, understanding ESG risks and opportunities is critical for informed decision-making and value creation. We conduct comprehensive ESG due diligence for private equity firms, asset managers, and corporate M&A teams.',
      'Our assessments identify potential liabilities, evaluate management practices, and uncover opportunities for operational improvements, ensuring that ESG factors are fully integrated into your investment thesis and post-deal value creation plans.'
    ],
    category: 'Governance & Sustainable Finance'
  },
  {
    id: 'portfolio-esg-monitoring',
    title: 'Portfolio ESG Monitoring',
    subtitle: 'Ongoing ESG performance tracking and reporting for investment portfolios',
    desc: 'Track, manage, and report on the ESG performance of your portfolio companies to meet LP requirements and drive value.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Portfolio-wide ESG data collection and aggregation',
      'KPI tracking and performance benchmarking',
      'LP reporting and SFDR compliance support',
      'Active ownership and engagement strategies'
    ],
    fullText: [
      'Managing ESG performance across a diverse portfolio requires robust data collection and monitoring systems. We help investors track key ESG metrics, benchmark performance, and report to stakeholders with confidence.',
      'Our services support active ownership, enabling you to engage with portfolio companies, drive continuous improvement, and ensure alignment with your fund\'s sustainability objectives and regulatory requirements like the SFDR.'
    ],
    category: 'Governance & Sustainable Finance'
  },
  {
    id: 'green-finance-sustainable-bonds',
    title: 'Green Finance & Sustainable Bonds',
    subtitle: 'Framework development and second-party opinions for sustainable debt issuance',
    desc: 'Access sustainable finance markets by developing robust frameworks for Green, Social, and Sustainability-Linked Bonds.',
    img: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Sustainable finance framework development',
      'Project selection and evaluation criteria',
      'Second-Party Opinion (SPO) facilitation',
      'Post-issuance impact reporting'
    ],
    fullText: [
      'The market for sustainable finance is growing rapidly, offering new avenues for capital raising. We assist issuers in developing credible frameworks for Green, Social, and Sustainability-Linked Bonds and Loans, aligned with ICMA and LMA principles.',
      'From defining eligible projects to facilitating Second-Party Opinions (SPOs) and establishing post-issuance reporting processes, we provide the expertise needed to successfully navigate the sustainable debt markets.'
    ],
    category: 'Governance & Sustainable Finance'
  },

  // Category: Technology & Capacity Building
  {
    id: 'esg-training-capacity-building',
    title: 'ESG Training & Capacity Building',
    subtitle: 'Customized corporate training programs to embed sustainability across the organization',
    desc: 'Empower your workforce with the knowledge and skills needed to drive your sustainability strategy forward.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Executive and board-level ESG briefings',
      'Function-specific sustainability training (e.g., procurement, finance)',
      'Employee awareness and engagement campaigns',
      'Train-the-trainer programs'
    ],
    fullText: [
      'Successful ESG integration requires a cultural shift and widespread capacity building. We design and deliver customized training programs tailored to different levels and functions within your organization.',
      'From executive briefings on emerging regulations to practical workshops for procurement teams on sustainable sourcing, our training empowers your employees to become active participants in your sustainability journey.'
    ],
    category: 'Technology & Capacity Building'
  },
  {
    id: 'online-esg-certification-courses',
    title: 'Online ESG Certification Courses',
    subtitle: 'Self-paced, certified learning modules for professionals and students',
    desc: 'Advance your career or upskill your team with our comprehensive, industry-recognized online ESG certification courses.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Foundations of ESG and Sustainability',
      'GHG Accounting and Carbon Management',
      'BRSR and Sustainability Reporting',
      'Sustainable Finance and ESG Investing'
    ],
    fullText: [
      'To meet the growing demand for ESG expertise, we offer a range of online certification courses designed for professionals seeking to deepen their knowledge. Our self-paced modules cover critical topics from GHG accounting to sustainable finance.',
      'Developed by industry experts, these courses provide practical, actionable insights and culminate in a recognized certification, demonstrating your commitment to professional development in the sustainability field.'
    ],
    category: 'Technology & Capacity Building'
  },
  {
    id: 'esg-data-management-platform',
    title: 'ESG Data Management Platform',
    subtitle: 'Implementation of software solutions for automated ESG data collection and reporting',
    desc: 'Streamline your ESG reporting process by implementing robust data management software solutions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    points: [
      'ESG software vendor selection and evaluation',
      'System architecture and integration planning',
      'Data migration and onboarding',
      'Custom dashboard development'
    ],
    fullText: [
      'Managing ESG data using spreadsheets is increasingly untenable. We help you transition to robust ESG data management platforms, automating data collection, improving accuracy, and streamlining the reporting process.',
      'Our team assists with vendor selection, system implementation, and integration with existing enterprise systems (ERP, HRIS), ensuring that you have a single source of truth for your sustainability performance data.'
    ],
    category: 'Technology & Capacity Building'
  },
  {
    id: 'carbon-emission-calculator-saas',
    title: 'Carbon Emission Calculator (SaaS)',
    subtitle: 'Proprietary software tools for accurate and efficient GHG footprinting',
    desc: 'Leverage our proprietary SaaS tools to accurately calculate, track, and manage your organization\'s carbon footprint.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    points: [
      'Automated Scope 1, 2, and 3 calculations',
      'Extensive, up-to-date emission factor databases',
      'Scenario modeling and reduction tracking',
      'Audit-ready data exports and reporting'
    ],
    fullText: [
      'Accurate carbon accounting requires specialized tools. We offer proprietary Carbon Emission Calculator SaaS solutions designed to simplify the complex process of GHG footprinting across all three scopes.',
      'With built-in emission factor databases, automated calculation engines, and intuitive dashboards, our tools empower you to track your emissions in real-time, model reduction scenarios, and generate audit-ready reports with ease.'
    ],
    category: 'Technology & Capacity Building'
  },
  {
    id: 'end-to-end-implementation',
    title: 'End-to-End ESG Implementation',
    subtitle: 'From strategy design to turnkey execution, specifically tailored for the manufacturing sector.',
    desc: 'We go beyond consulting. With our network of 500+ specialized service providers, we orchestrate the entire implementation process—from renewable energy retrofits to supply chain optimization.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    points: [
      '100% Turnkey execution of ESG strategies',
      'Network of 500+ specialized implementation partners',
      'Deep expertise in manufacturing and heavy industries',
      'On-ground deployment of renewable energy and waste systems'
    ],
    fullText: [
      'esgAAstra is not just an advisory firm; we are your implementation partner. We understand that the real challenge in ESG lies in execution, particularly in complex sectors like manufacturing.',
      'Our unique model leverages a vast network of vetted service providers—engineers, installers, auditors, and technologists. We project manage the entire transition, ensuring that the high-level strategies we design are translated into tangible, on-the-ground realities that meet global standards.'
    ],
    category: 'ESG Strategy & Reporting'
  }
];
