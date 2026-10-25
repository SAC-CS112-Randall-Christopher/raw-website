export type InfoCard = { title: string; text: string; label?: string; details?: string[]; href?: string; linkLabel?: string };
export type ContentSection = { heading: string; intro?: string; bullets?: string[]; cards?: InfoCard[]; callout?: { title: string; text: string } };
export type PageContent = { slug: string; navLabel: string; metaTitle: string; eyebrow: string; title: string; lead: string; metaDescription: string; aside: string; sections: ContentSection[]; indexable?: boolean };

export const pages: PageContent[] = [
  {
    "slug": "services",
    "navLabel": "Solutions",
    "metaTitle": "Business Software & Automation Solutions | Randall Automation Works",
    "eyebrow": "Solutions",
    "title": "Connect what you have. Build what’s missing.",
    "lead": "A connected workspace, a recurring report or a better field handoff. Start with one useful change.",
    "metaDescription": "RAW Business Workspace, custom business automation and GIS integration for Western Colorado. Practical solutions around the software you already use.",
    "aside": "Start with RAW Workspace when it fits. Scope a focused integration when your work needs something different.",
    "sections": [
      {
        "heading": "Three ways to move work forward",
        "cards": [
          {
            "label": "01 / Connected office",
            "title": "RAW Business Workspace",
            "text": "Bring supported business information, customer context, correspondence and follow-up together. See the actual product before discussing your configuration.",
            "href": "/raw-workspace",
            "linkLabel": "Explore the workspace"
          },
          {
            "label": "02 / Reporting & automation",
            "title": "Make repeat work repeatable.",
            "text": "Connect approved records, prepare recurring reports and handle predictable steps with clear business rules. Add AI where questions and documents make it useful.",
            "href": "/workflow-automation-examples",
            "linkLabel": "See focused examples"
          },
          {
            "label": "03 / GIS & field operations",
            "title": "Close the field-to-office gap.",
            "text": "Connect inspections, asset records and office reporting. Make incomplete records and the next person responsible easy to identify.",
            "href": "/gis-and-field-operations",
            "linkLabel": "Explore GIS workflows"
          }
        ]
      },
      {
        "heading": "A clear scope. A working handoff.",
        "intro": "We agree on the workflow, deliverables, price and ongoing costs before implementation. Test with representative work, then document and train the people using it. Optional support keeps maintenance and responsibilities clear.",
        "cards": [
          {
            "title": "AI setup & information access",
            "text": "Choose local or hosted AI, approved sources and the review steps appropriate to your business.",
            "href": "/responsible-ai-and-security",
            "linkLabel": "AI setup options"
          },
          {
            "title": "Utilities & special districts",
            "text": "Reporting, GIS and administrative workflows with qualified people in charge. No autonomous infrastructure control.",
            "href": "/utilities-and-special-districts",
            "linkLabel": "Utility services"
          }
        ]
      },
      {
        "heading": "Code-first automation and systems integration",
        "intro": "Python automation, SQL reporting, C# integrations, JSON and APIs, or Visual Basic and VBA: use the tool that fits the work. AI helps with language and documents where it adds value.",
        "cards": [
          {
            "title": "Before connecting business systems",
            "text": "Confirm access, record ownership, freshness and failure handling.",
            "href": "/insights/ai-integration-readiness-checklist",
            "linkLabel": "Read the readiness checklist"
          }
        ]
      }
    ]
  },
  {
    slug: "utilities-and-special-districts", navLabel: "Utilities", metaTitle: "Utility & Special District Automation | Randall Automation Works", eyebrow: "Utilities & special districts",
    title: "Operationally grounded automation for organizations that cannot afford careless technology.",
    lead: "Support reporting, administration, GIS, maintenance information and institutional knowledge while qualified people retain operational authority.",
    metaDescription: "Responsible AI consulting and workflow automation for Colorado utilities, special districts and municipal departments.",
    aside: "Utility work begins with clear system boundaries, approved information sources and defined human responsibility.",
    sections: [
      { heading: "Built for the realities of a small utility", intro: "Small districts often balance aging systems, limited internal IT capacity, regulatory workload and significant knowledge carried by a few experienced employees.", bullets: ["Recurring management and board reporting", "Customer-service and billing workflows", "SOP and institutional-knowledge organization", "Maintenance and work-order information", "GIS and asset reporting", "Employee onboarding and documentation", "Approved operational-log summaries", "Security and access practices"] },
      { heading: "Read-only operational intelligence", intro: "Approved exports can support useful analysis without giving AI authority over utility operations.", cards: [{ title: "Alarm and communication trends", text: "Summarize recurring alarms, communication failures and historical patterns from approved records." }, { title: "Runtime and cycling review", text: "Prepare pump-runtime or cycling summaries for operator and maintenance review." }, { title: "Operator summaries", text: "Draft daily or weekly operational narratives with links back to source information." }, { title: "Maintenance context", text: "Connect approved logs with GIS, work-order or maintenance information in a separate reporting environment." }], callout: { title: "Your operators stay in charge", text: "AI interpretations remain advisory drafts. Qualified operators and licensed professionals retain review, judgment and decision authority." } },
      { heading: "A firm initial boundary around OT", intro: "The consultancy does not initially perform or enable autonomous infrastructure control.", bullets: ["No direct pump or valve commands", "No chemical-feed, pressure or treatment-process control", "No PLC programming or operational configuration changes", "No write-enabled AI access to OT systems", "No public AI services installed directly in a control environment", "No replacement of licensed engineering or qualified operator judgment"] },
      { heading: "A controlled information pathway", intro: "When operational information is in scope, approved data should move through an intentional and documented path.", bullets: ["Identify the approved source and responsible owner", "Export only the necessary information", "Move information into a separate reporting environment", "Apply least-privilege and read-only access", "Flag AI-generated content as a draft", "Require qualified human review before use"] },
      { heading: "Administrative and organizational resilience", intro: "Administrative workflows often provide the safest, fastest place to begin.", bullets: ["Recurring report preparation", "Meeting notes and action tracking", "Form and document intake", "Customer communication drafts", "Policy and SOP search", "Training and employee knowledge support"] },
    ],
  },
  {
    slug: "small-businesses", navLabel: "Small Businesses", metaTitle: "Small-Business AI Automation | Randall Automation Works", eyebrow: "Small-business automation",
    title: "Fewer dropped handoffs. Less repetitive administration. Better-supported employees.",
    lead: "Practical improvements for Western Colorado businesses that have outgrown informal processes but do not need an enterprise transformation project.",
    metaDescription: "Practical Python, SQL, systems integration and AI workflow automation for Western Colorado small businesses and local organizations.",
    aside: "The best first project is usually visible, repetitive and easy for employees to evaluate.",
    sections: [
      { heading: "Where small teams feel the strain", intro: "When every employee wears several hats, scattered information and manual follow-up create more risk than they appear to.", bullets: ["Customer information arrives through several channels", "The same details are entered more than once", "Follow-ups depend on individual memory", "Reports require manual spreadsheet assembly", "Policies and answers are difficult to locate", "Experienced employees become workflow bottlenecks"] },
      { heading: "Customer intake and follow-up", intro: "Create a clearer path from a new inquiry to the next responsible person.", cards: [{ title: "Intake", text: "Standardize information from forms, email or calls without complicating the customer experience." }, { title: "Routing", text: "Send the right details to the right person and surface missing information before work stalls." }, { title: "Follow-up", text: "Prepare reminders, status updates and draft communications for employee review." }, { title: "Visibility", text: "Give managers a clearer view of open requests, aging items and recurring exceptions." }] },
      { heading: "Administrative operations", intro: "Connect familiar tools instead of replacing them unnecessarily.", bullets: ["Document routing and file naming", "Recurring internal reports", "Scheduling and task follow-up", "Email and communication workflows", "Spreadsheet and database connections", "Small Python, SQL or Visual Basic tools for rule-based work", "JSON and API connections between approved applications", "Shared-drive and knowledge organization"] },
      { heading: "Keep the solution proportional", intro: "A small organization should not inherit enterprise-level cost and complexity for a workflow that can be solved clearly with focused code.", callout: { title: "Automation first. AI where useful.", text: "If a dependable Python script, SQL report, JSON connection or Visual Basic tool solves the problem, that may be the right answer. AI is reserved for work where language, unstructured information or flexible interpretation adds meaningful value." } },
      { heading: "Organizations this can fit", intro: "The approach is designed for local organizations with practical work and limited capacity for drawn-out consulting projects.", bullets: ["Contractors and skilled trades", "Engineering, surveying and GIS firms", "Property-management businesses", "Agricultural businesses", "Professional and administrative offices", "Nonprofits and membership organizations"] },
      { heading: "Employee-supportive implementation", intro: "The people doing the work should help shape the workflow and evaluate whether it actually helps.", callout: { title: "Automate avoidable workload—not accountability", text: "The aim is to remove repetitive steps, make handoffs clearer and give employees better information while preserving human judgment and customer relationships." } },
    ],
  },
  {
    slug: "gis-and-field-operations", navLabel: "GIS & Field Operations", metaTitle: "GIS & Field Operations Automation | Randall Automation Works", eyebrow: "GIS & field operations",
    title: "Connect what happens in the field with what the office needs to know.",
    lead: "Improve field-form processing, inspection workflows, asset reporting and data-quality review without separating GIS from the people who use it.",
    metaDescription: "GIS workflow automation, field data processing, inspections, work-order support and asset information integration in Western Colorado.",
    aside: "GIS is most valuable when asset information, field observations and business workflows reinforce one another.",
    sections: [
      { heading: "Field-to-office workflows", intro: "Reduce the delay and rework between collecting information and using it.", bullets: ["Process approved mobile forms and attachments", "Route incomplete or unusual records for review", "Prepare field-activity summaries", "Connect inspection results with responsible staff", "Standardize recurring notifications", "Document each handoff and exception path"] },
      { heading: "Asset-information workflows", intro: "Bring spatial and business information together carefully, with ownership and source systems clearly defined.", cards: [{ title: "GIS reporting", text: "Turn asset and location information into recurring, audience-appropriate summaries." }, { title: "Data quality", text: "Identify missing attributes, suspicious values, duplicates and records that need human review." }, { title: "Work-order support", text: "Connect approved asset identifiers and field context with maintenance or service workflows." }, { title: "Document connections", text: "Improve the path between GIS features and relevant photos, forms, as-builts or technical records." }] },
      { heading: "Practical integration", intro: "GIS does not need to become the system of record for every detail. Good integration respects where information belongs.", bullets: ["Define authoritative systems and record ownership", "Use stable identifiers where possible", "Limit write access and automate conservatively", "Log changes and exceptions", "Preserve a human correction path", "Document dependencies and recovery steps"] },
      { heading: "Human-reviewed outputs", intro: "Automated checks and summaries are most useful when employees can understand what happened and correct it.", callout: { title: "Exceptions should become easier to see—not easier to hide", text: "The workflow should show source records, reasons for flags and the person responsible for review." } },
    ],
  },
  {
    "slug": "responsible-ai-and-security",
    "navLabel": "AI Setup",
    "metaTitle": "AI Assistant & LLM Setup | Randall Automation Works",
    "eyebrow": "AI assistants & LLM setup",
    "title": "An AI assistant set up for your business.",
    "lead": "Turn a useful idea into a working assistant. I help choose the model, connect approved information and tools, test the workflow and show your team how to use it.",
    "metaDescription": "Custom AI assistant and LLM setup in Western Colorado. Model selection, document search, software integrations, local or hosted deployment, testing and training.",
    "aside": "You do not need to choose a model or hosting platform before we talk. Start with the work you want help with.",
    "sections": [
      {
        "heading": "What would you like help with?",
        "cards": [
          {
            "title": "Front-office work",
            "text": "Assist with routine administration, information lookup and drafts that staff can review."
          },
          {
            "title": "Finding internal answers",
            "text": "Help employees search approved procedures, policies and documentation, with links back to the source."
          },
          {
            "title": "Working inside your software",
            "text": "Connect AI to existing applications, with rule-based code handling validation and repeatable steps."
          }
        ]
      },
      {
        "heading": "What the setup includes",
        "bullets": [
          "One defined workflow, its users and a clear way to judge the result",
          "Model selection based on the task, response quality and running costs",
          "Approved document sources, tool connections and access permissions",
          "Testing with typical work, difficult cases and clear failure handling",
          "Human review before consequential actions or decisions",
          "Operating instructions, employee training and an agreed support plan"
        ]
      },
      {
        "heading": "Choose where it runs",
        "cards": [
          {
            "title": "Local AI",
            "text": "Run selected models on your own workstation or server. Worth considering for local data, on-site systems or limited connectivity.",
            "href": "/local-ai-deployments",
            "linkLabel": "Compare local setup"
          },
          {
            "title": "Hosted & managed AI",
            "text": "Use cloud models and a shared application without maintaining a local model server. Optional support keeps responsibilities clear.",
            "href": "/hosted-ai-deployments",
            "linkLabel": "Compare hosted setup"
          }
        ]
      },
      {
        "heading": "Clear boundaries from the start",
        "intro": "AI can be wrong. We agree on approved data, permissions, review points, vendor terms and ongoing costs before implementation. Consequential outputs need human review.",
        "callout": {
          "title": "Utility operations stay separate",
          "text": "AI services do not receive write-enabled access to SCADA, PLCs or operational controls. Qualified people retain responsibility for safety-critical decisions."
        }
      },
      {
        "heading": "For technical teams",
        "intro": "Integration can use APIs, SDKs or Model Context Protocol (MCP). Document search can use retrieval-augmented generation (RAG). Where useful, deterministic C# or other rule-based code validates outputs and routes tasks between language models. Model choice, logging and evaluation are scoped to the actual workflow."
      }
    ]
  },
  {
    "slug": "local-ai-deployments",
    "navLabel": "Local AI Setup",
    "metaTitle": "Local AI & LLM Setup | Randall Automation Works",
    "eyebrow": "AI setup · local",
    "title": "Run AI on your own hardware.",
    "lead": "Set up a local language model and the workflow around it on a workstation or server your organization controls.",
    "metaDescription": "Local AI and LLM setup for Western Colorado organizations. Hardware planning, document access, integrations, testing, training and optional support.",
    "aside": "Local does not automatically mean secure, private or inexpensive. Connected tools may still send data elsewhere; the full design needs review.",
    "sections": [
      {
        "heading": "When local is worth considering",
        "cards": [
          {
            "title": "Information kept on-site",
            "text": "Your workflow needs approved documents or processing to stay within a defined local environment."
          },
          {
            "title": "Limited connectivity",
            "text": "Your team needs selected tasks to work without dependable Internet access. External integrations may still require a connection."
          },
          {
            "title": "Existing local systems",
            "text": "The assistant needs to work with files, databases or applications already on your network."
          }
        ]
      },
      {
        "heading": "What I help set up",
        "bullets": [
          "Hardware and model selection based on your actual tasks and number of users",
          "Approved document search and connections to existing tools",
          "User access, review steps and clearly defined data boundaries",
          "Tests for answer quality, response time and failure handling",
          "Backup, update and recovery procedures",
          "Team training and documentation for day-to-day use"
        ]
      },
      {
        "heading": "Test the fit before buying hardware",
        "intro": "Local models vary in capability and hardware needs. Compare the quality, speed and full cost of a representative workflow before committing to a machine. Include model licensing, electricity, maintenance and replacement costs.",
        "callout": {
          "title": "A practical comparison",
          "text": "A hosted or hybrid setup may be a better fit when model capability, remote access or simpler maintenance matters more. We can compare these options together."
        }
      },
      {
        "heading": "Know who maintains it",
        "intro": "Agree on who owns the machine and accounts, installs updates, handles backups and provides support. Optional managed support has defined access, hours and responsibilities. Local AI remains separate from safety-critical operational control."
      },
      {
        "heading": "Compare the whole office workflow",
        "intro": "The model location is one part of the decision. Compare document access, unavailable services, ownership and support for the same employee task.",
        "cards": [
          {
            "title": "Local vs hosted AI assistants",
            "text": "Use a synthetic office example and six acceptance checks before choosing where the assistant runs.",
            "href": "/insights/local-vs-hosted-ai-assistants",
            "linkLabel": "Use the deployment checklist"
          }
        ]
      }
    ]
  },
  {
    "slug": "hosted-ai-deployments",
    "navLabel": "Hosted & Managed AI",
    "metaTitle": "Hosted & Managed AI Setup | Randall Automation Works",
    "eyebrow": "AI setup · hosted & managed",
    "title": "AI your team can use, with a clear support plan.",
    "lead": "A hosted assistant can connect your team to cloud models and business tools without maintaining a local model server.",
    "metaDescription": "Hosted and managed AI assistant setup for Western Colorado businesses. Cloud model integration, access controls, testing, employee training and defined support.",
    "aside": "Hosting, model usage and support are separate costs to understand before you commit. The setup and service agreement define what is included.",
    "sections": [
      {
        "heading": "Choose the right arrangement",
        "cards": [
          {
            "title": "Hosted application",
            "text": "Employees use an application connected to approved cloud services. Account ownership, access and provider choices are agreed before setup."
          },
          {
            "title": "Client-owned cloud",
            "text": "Use your own cloud or model accounts where practical, with configuration and support provided through approved access."
          },
          {
            "title": "Hybrid setup",
            "text": "Combine local processing with hosted access where the workflow needs both. Document exactly what information moves between them."
          }
        ]
      },
      {
        "heading": "What the setup includes",
        "bullets": [
          "An assistant configured for one agreed workflow",
          "Approved knowledge sources and software integrations",
          "Individual access and permissions suited to each role",
          "Human review points, test cases and operating instructions",
          "Usage limits and visibility into model and service costs",
          "Employee training and a clear handoff"
        ]
      },
      {
        "heading": "Optional ongoing support",
        "intro": "A support plan can include service checks, troubleshooting, source updates and tested improvements. Agree on support hours, response expectations, change approval and an exit process.",
        "cards": [
          {
            "title": "Keep it working",
            "text": "Review errors, integrations and usage within the support plan. Update prompts, models and connections through agreed testing."
          },
          {
            "title": "Keep ownership clear",
            "text": "Record who manages users, documents, billing, backups and provider accounts. Make access revocable and document the handoff."
          }
        ]
      },
      {
        "heading": "Review data handling before launch",
        "intro": "Confirm which providers receive information, where it is stored, how long it is retained and whether their terms fit the work. Local and hosted systems both need deliberate access and security decisions.",
        "bullets": [
          "Keep each client’s knowledge and credentials separate",
          "Use only approved information and provider accounts",
          "Require human review for consequential actions",
          "Keep AI separate from safety-critical operational control"
        ]
      }
    ]
  },
  {
    "slug": "workflow-automation-examples",
    "navLabel": "Examples",
    "metaTitle": "Connected Work Examples | Randall Automation Works",
    "eyebrow": "Examples & opportunities",
    "title": "See it working. See where it could fit.",
    "lead": "One real product demonstration. Three focused opportunities for the work around it.",
    "metaDescription": "Watch RAW Business Workspace in action and explore reporting, customer follow-up and GIS opportunities for your business.",
    "aside": "See RAW in a product demonstration. The opportunities below are generalized workflow patterns, not published client case studies.",
    "sections": [
      {
        "heading": "In the product: from question to next step",
        "intro": "Watch RAW use connected business information to prepare an answer, a customer reply and reviewed follow-up. Follow Pine Ridge Rental & Service through the actual RAW desktop interface.",
        "cards": [
          {
            "title": "RAW Business Workspace",
            "text": "Inspect the report, check the supporting information and review the draft and next step before saving. Processing waits are condensed.",
            "href": "/raw-workspace#see-it-in-action",
            "linkLabel": "Watch the full demonstration"
          }
        ]
      },
      {
        "heading": "Three opportunities to discuss",
        "cards": [
          {
            "label": "Reporting",
            "title": "A report you don’t rebuild every week.",
            "text": "Bring approved database records and spreadsheet exports into a repeatable report. Flag missing inputs and keep the source of each figure visible.",
            "details": [
              "Start with: one recurring report and its source files",
              "Useful result: a consistent report with exceptions to review"
            ]
          },
          {
            "label": "Customer follow-up",
            "title": "Recurring customer-notification lists",
            "text": "Prepare a reviewable customer list from approved business rules. Keep missing information visible and require employee approval before sending notices.",
            "details": [
              "Start with: the selection rules and permitted customer records",
              "Useful result: a checked list ready for your communication tool"
            ]
          },
          {
            "label": "GIS & field information",
            "title": "Asset and business-data reconciliation",
            "text": "Match field observations and business records to mapped assets. Show missing identifiers, duplicates and records that need correction.",
            "details": [
              "Start with: one asset group and its related records",
              "Useful result: a clear exception list for the right person"
            ],
            "href": "/gis-and-field-operations",
            "linkLabel": "Explore field workflows"
          }
        ]
      },
      {
        "heading": "Make it specific to your business.",
        "intro": "Bring the task and the tools you use today. We’ll check the information, permissions and fit, then agree on a small, testable first improvement.",
        "cards": [
          {
            "title": "Explore the solution options",
            "text": "Workspace configuration, focused automation and field-to-office integration.",
            "href": "/services",
            "linkLabel": "Find a starting point"
          }
        ]
      }
    ]
  },
  {
    slug: "expertise", navLabel: "Expertise", metaTitle: "AI, Automation, GIS & Systems Expertise | Chris Randall", eyebrow: "Technical and operational expertise",
    title: "Technical depth shaped by the way organizations actually operate.",
    lead: "Chris Randall brings together software, data, GIS, infrastructure, security, administration and field experience to design automation that employees can understand and maintain.",
    metaDescription: "Chris Randall's expertise in agentic AI workflows, RAG, MCP and SDK integrations, Python, SQL, JSON APIs, GIS, IT infrastructure and responsible automation.",
    aside: "Expertise is described from hands-on experience without identifying an employer, publishing internal systems or claiming certifications, partnerships or client results that have not been established.",
    sections: [
      { heading: "Software, data and integration", intro: "The technology is selected after the workflow is understood.", cards: [
        { label: "Deterministic automation", title: "Python", text: "File processing, validation, scheduled tasks, data transformation, reporting and focused utilities with predictable outcomes and practical ongoing cost." },
        { label: "Operational information", title: "SQL", text: "Queries, views, reconciliation, exports and management reporting that make existing database information more useful without replacing the source system." },
        { label: "Structured connections", title: "JSON, APIs and SDKs", text: "Move approved information among web services, business applications and automation tools using documented, replaceable interfaces." },
        { label: "Established office workflows", title: "Visual Basic and VBA", text: "Improve Windows, Excel and Office processes when a familiar tool offers the clearest maintainable solution." },
      ] },
      { heading: "GIS, assets and field operations", intro: "Spatial data is treated as part of the operational workflow—not an isolated map.", bullets: ["GIS data design, maintenance and reporting", "Field forms, mobile collection and inspection workflows", "Coordinate transformation and GPS-data processing", "Asset identifiers and business-system connections", "Data-quality checks and reconciliation", "Work-order, document and photo connections", "Field-to-office exception handling", "Employee training and practical adoption"] },
      { heading: "AI systems and agentic workflow engineering", intro: "Modern AI capability comes from configuring the complete system around the model—not simply writing a prompt.", cards: [
        { label: "Models + structured outputs", title: "Model and prompt configuration", text: "Select models for the task, define system behavior, build reusable prompt templates and require schemas that ordinary software can validate and use." },
        { label: "Agents + tools + approvals", title: "Agentic workflow orchestration", text: "Design bounded agents that retrieve information, call approved tools, maintain task state, handle exceptions and pause for human approval at defined points." },
        { label: "RAG + embeddings + metadata", title: "Knowledge and retrieval systems", text: "Build permission-aware internal search and question-answering workflows grounded in approved SOPs, policies, technical records and organizational documentation." },
        { label: "MCP + APIs + SDKs", title: "Tool and application integration", text: "Connect AI workflows with approved databases, business applications, document systems and specialized tools through Model Context Protocol (MCP), APIs and software development kits with scoped, documented permissions." },
        { label: "Schemas + validators + guardrails", title: "Reliable outputs and exception handling", text: "Constrain outputs, verify required fields and business rules, surface uncertainty and route incomplete or unusual results to the appropriate employee." },
        { label: "Test sets + traces + usage", title: "Evaluation, monitoring and cost control", text: "Use representative test cases, versioned configurations and workflow traces to monitor quality, failures, latency and ongoing model or service cost." },
      ] },
      { heading: "Web maps and spatial application integration", intro: "Mapping expertise includes the applications, services and data connections around the map—not only the visible layers.", bullets: ["Interactive web maps and role-appropriate map views", "Spatial APIs and GIS SDK integration", "Feature services, layers, attributes and attachments", "Coordinate systems, transformation and GPS processing", "Field forms, mobile collection and offline handoffs", "Spatial queries, validation and exception reporting", "Connections among assets, work orders, documents and business records", "Permission-aware publishing and data ownership"] },
      { heading: "IT infrastructure and organizational resilience", intro: "Automation depends on reliable identity, access, storage, recovery and documentation.", cards: [
        { label: "Core systems", title: "Servers, identity and access", text: "Windows infrastructure, role-based access, shared information, device workflows and least-privilege practices for small organizations." },
        { label: "Continuity", title: "Backup, recovery and documentation", text: "System inventories, restoration runbooks, migration planning and verification that make critical knowledge less dependent on one person." },
        { label: "Connections", title: "Networks and business systems", text: "Practical troubleshooting and integration across office, field and administrative technology with attention to ownership and dependencies." },
        { label: "Adoption", title: "Training and employee support", text: "Translate technical changes into role-specific procedures, clear expectations and workflows employees can correct when exceptions occur." },
      ] },
      { heading: "Operations and administration", intro: "Hands-on experience with the work around the technology helps prevent technically elegant solutions that fail in practice.", bullets: ["Utility and field operations", "Customer service and billing processes", "Administrative reporting and document handling", "Work-order completion and follow-through", "Payroll and accounts-payable process support", "Employee onboarding and SOP development", "Management and board information preparation", "Institutional-knowledge preservation"] },
      { heading: "Responsible AI and automation architecture", intro: "AI is one component in a broader automation toolkit, and advanced capability is paired with explicit operational boundaries.", cards: [
        { label: "Appropriate-tool selection", title: "Code first when the rules are clear", text: "A small Python program, SQL report or API connection may offer greater consistency and lower ongoing cost than an AI-dependent workflow." },
        { label: "AI where interpretation helps", title: "Documents, language and knowledge", text: "AI can support summaries, classification, retrieval, draft communications and multi-step knowledge work when sources, configuration and human review remain visible." },
        { label: "Secure integration", title: "Permissions and information boundaries", text: "Use client-owned accounts, least privilege, read-only access where practical and clear controls around retention and third-party services." },
        { label: "Operational responsibility", title: "Human review and OT separation", text: "Consequential outputs remain reviewable, and operational reporting stays deliberately separated from infrastructure control." },
      ], callout: { title: "Broad capability, clearly bounded", text: "Randall Automation Works does not replace licensed engineering, legal, accounting, regulatory, cybersecurity or qualified operator judgment. Specialized work is scoped honestly and referred when it falls outside established capability." } },
      { heading: "How this expertise serves Western Colorado", intro: "Small organizations often need someone who can move comfortably between an employee’s daily process, a database, a GIS layer, a server and a management report. That cross-functional perspective helps find the smallest dependable improvement instead of defaulting to a large replacement project." },
    ],
  },
  {
    slug: "how-engagements-work", navLabel: "How Engagements Work", metaTitle: "How Engagements Work | Randall Automation Works", eyebrow: "How engagements work",
    title: "A measured path from operational problem to useful system.",
    lead: "Begin with a clear question, test the idea in a controlled scope and expand only after employees and results support it.",
    metaDescription: "How AI consulting engagements work: introductory conversation, paid assessment, roadmap, controlled pilot, measured review and managed support.",
    aside: "Most work is packaged around defined deliverables and milestones so scope and cost are understood before implementation.",
    sections: [
      { heading: "1. Short introductory conversation", intro: "Discuss the organization, the frustrating workflow and the people affected. This is a fit check—not a full technical assessment.", bullets: ["Clarify the operational problem", "Identify likely stakeholders", "Discuss timing and broad constraints", "Determine whether a paid assessment is appropriate"] },
      { heading: "2. Paid workflow or AI-readiness assessment", intro: "Observe the actual work, information and systems involved before proposing a solution.", bullets: ["Employee and manager interviews", "Current-state workflow map", "Information and system inventory", "Risk and data-readiness review", "Opportunity ranking"] },
      { heading: "3. Prioritized roadmap", intro: "Receive a practical set of options organized by expected value, complexity, risk and dependency.", callout: { title: "An assessment does not obligate a build", text: "The roadmap belongs to the client and can support an informed decision about whether, when and how to proceed." } },
      { heading: "4. Controlled pilot", intro: "Implement one defined workflow with agreed success measures, access boundaries and human review.", bullets: ["Written scope and deliverables", "Client responsibilities and dependencies", "Testing plan", "Documentation and training", "Fallback and correction process"] },
      { heading: "5. Review measured results", intro: "Compare the pilot with the original process using time, accuracy, usability, information quality, operational impact and ongoing cost." },
      { heading: "6. Expand only if justified", intro: "If the pilot proves useful, broaden it carefully or apply the pattern to another workflow." },
      { heading: "7. Optional managed support", intro: "Choose a defined support plan for monitoring, controlled improvements, employee assistance, documentation and access reviews." },
    ],
  },
  {
    "slug": "about",
    "navLabel": "About",
    "metaTitle": "About Chris Randall | Randall Automation Works",
    "eyebrow": "The person behind RAW",
    "title": "Technology makes sense when you understand the work.",
    "lead": "I’m Chris Randall, founder of Randall Automation Works in Montrose, Colorado. I connect software, information and the people who rely on them.",
    "metaDescription": "Meet Chris Randall, founder of Randall Automation Works. Practical experience across utility operations, IT, GIS and business automation in Western Colorado.",
    "aside": "Based in Montrose. Serving businesses, utilities and field teams across Western Colorado.",
    "sections": [
      {
        "heading": "Built on operational experience.",
        "intro": "My background spans utility operations, office administration, IT and GIS. That means understanding both the systems behind a report and the person who needs to act on it.",
        "bullets": [
          "Utility operations and administrative workflows",
          "GIS, assets and field-to-office information",
          "Python scripting and workflow automation",
          "SQL reporting and business-system integration",
          "JSON, API and structured-data connections",
          "Employee training and practical documentation"
        ]
      },
      {
        "heading": "The approach, made tangible.",
        "intro": "RAW Business Workspace brings that thinking into a product: connected information, useful context and reviewed next steps in one place.",
        "cards": [
          {
            "title": "See what I’m building",
            "text": "Explore the actual workspace and watch a complete product demonstration.",
            "href": "/raw-workspace",
            "linkLabel": "Meet RAW Workspace"
          }
        ]
      },
      {
        "heading": "A direct working relationship.",
        "intro": "You work with me from the first conversation through the handoff. We define what success looks like, choose a tool that fits, and test it with the people doing the work.",
        "cards": [
          {
            "title": "Technical background",
            "text": "More detail on software, GIS, AI systems, infrastructure and operational experience.",
            "href": "/expertise",
            "linkLabel": "Explore the experience"
          },
          {
            "title": "How a project works",
            "text": "Clear scope, agreed costs, testing, documentation and optional support.",
            "href": "/how-engagements-work",
            "linkLabel": "The working process"
          }
        ]
      }
    ]
  },
  {
    slug: "frequently-asked-questions", navLabel: "Frequently Asked Questions", metaTitle: "AI Automation FAQ | Randall Automation Works", eyebrow: "Frequently asked questions",
    title: "Straight answers about scope, security, cost and what AI can actually do.",
    lead: "A useful engagement starts with realistic expectations and clearly understood responsibility.",
    metaDescription: "Frequently asked questions about AI consulting, workflow assessments, security, pricing, utility boundaries and managed support.",
    aside: "Have a question that is not covered here? Ask it directly during an initial conversation.",
    sections: [
      { heading: "Do we need to know what should be automated?", intro: "No. A workflow assessment is designed to identify and rank opportunities with employees and managers." },
      { heading: "Do we need to replace our current software?", intro: "Usually not. The first question is whether existing spreadsheets, databases, shared drives and applications can be connected or used more consistently." },
      { heading: "Does every automation project use AI?", intro: "No. Many reliable improvements come from a focused Python program, SQL query, JSON or API connection, Visual Basic tool or a clearer process. AI is recommended only when it adds value that simpler rule-based automation cannot provide as well." },
      { heading: "Is our organization too small?", intro: "Organizations with roughly 2–100 employees often benefit because repetitive work and knowledge bottlenecks affect a larger share of the team." },
      { heading: "How is work priced?", intro: "Most assessments and implementations are scoped as defined fixed-price or milestone-based packages. Hourly rates can apply to advisory work and out-of-scope support. Ongoing services may use a monthly support package. Third-party software and AI usage are separate and disclosed." },
      { heading: "Will AI output always be correct?", intro: "No. AI can misunderstand information or generate incorrect content. Workflows use source links, review steps, limits and qualified human judgment appropriate to the risk." },
      { heading: "Does AI train on our data?", intro: "Client information is not used to train public models without authorization. Specific retention and training terms depend on the selected service and account configuration and are reviewed before use." },
      { heading: "Can this connect to SCADA?", intro: "Only approved read-only exports or separated reporting pathways may be considered initially. The consultancy does not perform autonomous control, write-enabled AI access, PLC programming or safety-critical operational decisions." },
      { heading: "What happens after a pilot?", intro: "The client reviews measured results and decides whether to stop, adjust, expand or place the workflow under a defined managed-support plan." },
      { heading: "Who owns the resulting work?", intro: "Client ownership, licenses, reusable components and third-party services are identified in the written agreement. Client data remains client-owned." },
    ],
  },
  {
    slug: "contact", navLabel: "Contact", metaTitle: "Contact | Randall Automation Works", eyebrow: "Contact",
    title: "What should work better together?",
    lead: "Tell me about one task, the tools you use and what you would like to improve. We can start with a free 30-minute conversation.",
    metaDescription: "Contact Randall Automation Works to discuss a workflow assessment, automation pilot, GIS integration or responsible AI project.",
    aside: "Please do not send passwords, protected records, confidential customer data or sensitive operational information through the contact form.", sections: [],
  },
  {
    slug: "privacy", navLabel: "Privacy Policy", metaTitle: "Privacy Policy | Randall Automation Works", eyebrow: "Privacy policy",
    title: "Privacy practices should be understandable.",
    lead: "This page describes the information requested by the Randall Automation Works LLC website and the services it currently uses. Contact Chris Randall with questions about an inquiry or personal information.",
    metaDescription: "Website privacy policy for Randall Automation Works.",
    aside: "Website service information reviewed September 30, 2026. Contact: chris@randallautomationworks.com or (970) 787-2161.",
    sections: [
      { heading: "Information you provide", intro: "The contact form asks for your name, email and message. Organization, phone and service interest are optional; you can also select a location. The form asks for permission to use the information to respond to your inquiry." },
      { heading: "Contact and scheduling services", intro: "When you send the contact form, the submission is sent to Formspree. The booking links open Google Calendar, where you can choose a consultation time. You can also contact Chris directly by email or phone." },
      { heading: "Sensitive information", intro: "Do not submit passwords, authentication codes, protected health information, payment-card information, confidential customer records or sensitive operational and infrastructure data." },
      { heading: "Current service providers", intro: "This website uses Cloudflare for hosting and Web Analytics, Formspree for contact-form delivery, and Google Calendar for consultation booking. These services have their own privacy policies.", cards: [
        { title: "Cloudflare", text: "Website hosting and Web Analytics.", href: "https://www.cloudflare.com/privacypolicy/", linkLabel: "Cloudflare privacy policy" },
        { title: "Formspree", text: "Contact-form submissions.", href: "https://formspree.io/legal/privacy-policy/", linkLabel: "Formspree privacy policy" },
        { title: "Google", text: "Calendar consultation bookings.", href: "https://policies.google.com/privacy", linkLabel: "Google privacy policy" },
      ] },
      { heading: "Website analytics", intro: "A Cloudflare Web Analytics beacon is active on this site. It measures website traffic and page performance. Cloudflare describes its data collection in the documentation linked below.", cards: [
        { title: "Cloudflare Web Analytics data collection", text: "Details from the analytics provider about the information its beacon collects.", href: "https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/", linkLabel: "Read the data-collection documentation" },
      ] },
      { heading: "Questions about information handling", intro: "Contact chris@randallautomationworks.com or (970) 787-2161 to ask about information you have submitted, its handling or retention, or a correction or deletion request. Do not include sensitive records in the request." },
    ],
  },
  {
    slug: "terms", navLabel: "Terms & Disclaimer", metaTitle: "Terms & Disclaimer | Randall Automation Works", eyebrow: "Terms & professional disclaimer",
    title: "Clear boundaries support better professional work.",
    lead: "These website terms describe general informational use of the Randall Automation Works LLC website and do not replace the written agreement for a consulting engagement.",
    metaDescription: "Website terms and professional disclaimer for Randall Automation Works.",
    aside: "Website information reviewed September 30, 2026. Questions: chris@randallautomationworks.com or (970) 787-2161.",
    sections: [
      { heading: "General information", intro: "Website content is provided for general informational purposes and may change. It is not a substitute for advice based on a complete review of a specific situation." },
      { heading: "No professional substitution", intro: "The consultancy does not replace licensed engineering, legal, accounting, cybersecurity, regulatory or qualified operator judgment." },
      { heading: "AI limitations", intro: "AI-generated content can be incomplete, biased or incorrect. Consequential outputs require appropriate human review." },
      { heading: "Operational systems", intro: "Website content does not authorize autonomous control, write-enabled access to operational technology, safety-critical decisions, PLC changes or substitution for qualified infrastructure personnel." },
      { heading: "No engagement through website use", intro: "Viewing the site or sending an inquiry does not create a client relationship. An engagement begins only through a mutually executed written agreement." },
      { heading: "Third-party services", intro: "References to third-party tools do not constitute a warranty or endorsement. Availability, features, pricing and terms are controlled by their providers." },
      { heading: "Intellectual property", intro: "Website text, design and original materials are protected by applicable law. Client deliverable ownership is governed by the written consulting agreement." },
      { heading: "Contact", intro: "For questions about this website or a proposed engagement, contact Chris Randall at chris@randallautomationworks.com or (970) 787-2161. Engagement-specific terms belong in the written consulting agreement." },
    ],
  },
  {
    slug: "insights", navLabel: "Insights", metaTitle: "Insights | Randall Automation Works", eyebrow: "Insights & resources", indexable: false,
    title: "Practical guidance for organizations considering AI and automation.",
    lead: "This section will publish only useful, experience-grounded material—not filler written to manufacture search traffic.",
    metaDescription: "Practical AI automation, utility technology, GIS workflow and responsible adoption resources for Western Colorado organizations.",
    aside: "Initial resources will be developed from recurring client questions and real operational decision points.",
    sections: [
      { heading: "Planned resource themes", intro: "The first resources will help managers make sound early decisions before choosing a tool or vendor.", cards: [{ title: "Workflow assessment guide", text: "How to identify a useful first automation project and avoid starting with the wrong problem." }, { title: "Responsible AI checklist", text: "Questions small organizations should answer about data, access, review and ownership." }, { title: "Read-only utility intelligence", text: "A plain-language guide to separating operational reporting from OT control." }, { title: "GIS field-to-office handoffs", text: "Common points where field data loses value—and practical ways to improve them." }] },
      { heading: "No thin city pages", intro: "Regional search visibility will be built through useful topic coverage and accurate service-area language rather than duplicated location pages or claims of offices that do not exist." },
    ],
  },
];

export const pageBySlug = Object.fromEntries(pages.map((page) => [page.slug, page])) as Record<string, PageContent>;
