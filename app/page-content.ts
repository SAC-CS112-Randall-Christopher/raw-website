export type InfoCard = { title: string; text: string; label?: string; details?: string[]; href?: string; linkLabel?: string };
export type ContentSection = { heading: string; intro?: string; bullets?: string[]; cards?: InfoCard[]; callout?: { title: string; text: string } };
export type PageContent = { slug: string; navLabel: string; metaTitle: string; eyebrow: string; title: string; lead: string; metaDescription: string; aside: string; sections: ContentSection[]; indexable?: boolean };

export const pages: PageContent[] = [
  {
    "slug": "services",
    "navLabel": "Services",
    "metaTitle": "AI Setup & Automation Services | Randall Automation Works",
    "eyebrow": "Services",
    "title": "Practical help for the work that slows you down.",
    "lead": "AI assistants, connected software and field-to-office workflows. Start with one useful improvement and build from there.",
    "metaDescription": "AI assistant and LLM setup, workflow automation, systems integration and GIS services for Western Colorado businesses and utilities.",
    "aside": "Bring the process that takes too much time, needs repeated data entry or leaves people searching for answers.",
    "sections": [
      {
        "heading": "Three ways to make work easier",
        "cards": [
          {
            "title": "AI assistants & LLM setup",
            "text": "Configure an assistant around your tasks, approved information and existing tools. Compare local and hosted options, test the results and train your team.",
            "href": "/responsible-ai-and-security",
            "linkLabel": "Explore AI setup"
          },
          {
            "title": "Workflow automation & integrations",
            "text": "Connect applications, prepare recurring reports, route documents and reduce manual data entry. Use clear business rules for work that should behave predictably.",
            "href": "/workflow-automation-examples",
            "linkLabel": "See workflow examples"
          },
          {
            "title": "GIS & field operations",
            "text": "Connect field forms, inspections, asset records and office reporting. Improve how location-based information gets collected and used.",
            "href": "/gis-and-field-operations",
            "linkLabel": "Explore GIS services"
          }
        ]
      },
      {
        "heading": "Start with a clear scope",
        "intro": "A free 30-minute consultation helps identify the problem and a useful next step. If more discovery is needed, a paid assessment maps the workflow and recommends an approach.",
        "bullets": [
          "A defined workflow and the people who use it",
          "Agreed deliverables, price and ongoing costs before implementation",
          "A focused pilot tested against representative work",
          "Documentation, employee training and a review of the result"
        ]
      },
      {
        "heading": "Code-first automation and systems integration",
        "intro": "The task determines the tools: Python automation, SQL reporting, C# integrations, JSON and APIs, or Visual Basic and VBA for established Office workflows. AI handles language and documents where it adds value."
      },
      {
        "heading": "Support after handoff",
        "intro": "Optional support can cover maintenance, approved updates, access reviews and employee help. Support hours, responsibilities and third-party costs are agreed as part of the plan."
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
    slug: "workflow-automation-examples", navLabel: "Examples", metaTitle: "Workflow Automation Examples | Randall Automation Works", eyebrow: "Workflow solution examples",
    title: "See what practical automation can look like in real work.",
    lead: "Generalized solution patterns show how focused code, systems integration, GIS and responsible AI can remove repetitive steps without forcing an unnecessary platform replacement.",
    metaDescription: "Practical workflow automation examples using Python, SQL, APIs, GIS, reporting and responsible AI for Western Colorado organizations.",
    aside: "These examples reflect hands-on founder experience in operational, administrative, GIS and IT environments. They are generalized—not published client case studies—and omit employers, proprietary systems, data and exact configurations.",
    sections: [
      { heading: "Two implementations from my own work", intro: "These two examples describe implemented AI work at a general level. They do not claim measured savings or outcomes for another organization.", cards: [
        { label: "Implemented AI assistant", title: "Front-office AI helper", text: "An implemented AI assistant for front-office and administrative work. The scope is office assistance, with people retaining responsibility for the work and for reviewing AI outputs.", details: ["Context: front-office and administrative work", "Approach: an AI assistant", "Specific tasks and proprietary configuration are not published here"] },
        { label: "SDK + deterministic C# + multiple models", title: "AI connected to business software", text: "An SDK integration connects AI with business software. Deterministic C# handles rule-based parts of the workflow, while multiple language models are available for AI tasks. Work is routed according to the task and workload.", details: ["Software connection through an SDK", "Deterministic C# for predictable processing", "Multiple language models rather than one model for every task", "Routing based on task and workload"] },
      ], callout: { title: "Match the tool to the work", text: "An office assistant and a software integration need different designs. These implementations illustrate that choice; a new engagement still needs its own scope, review steps and evaluation." } },
      { heading: "Reporting and administrative workflows", intro: "Routine office work is often the safest place to create immediate, measurable value.", cards: [
        { label: "SQL + Python + scheduled export", title: "Recurring customer-notification lists", text: "Replace manual account review and spreadsheet formatting with a documented workflow that applies approved business rules, validates required fields and prepares a communication-platform export for employee review.", details: ["Preserve the source records", "Log record counts and exceptions", "Require approval before notices are sent"] },
        { label: "SQL + spreadsheets + reporting", title: "Repeatable management reporting", text: "Bring approved figures from databases, spreadsheets or exports into a consistent report instead of rebuilding the same workbook every week or month.", details: ["Flag missing or stale inputs", "Keep source references visible", "Compare preparation time and corrections"] },
        { label: "Forms + validation + routing", title: "Structured intake and follow-up", text: "Check incoming forms for required information, route complete submissions to the responsible employee and surface missing or unusual items before the handoff stalls.", details: ["Reduce avoidable re-entry", "Make exceptions visible", "Keep customer decisions with employees"] },
        { label: "Python or VBA + existing Office tools", title: "Focused desktop automation", text: "Use a small program to clean files, rename documents, validate records or prepare recurring outputs when a predictable rule-based tool is more economical than an AI subscription.", details: ["Work with familiar tools", "Produce consistent outcomes", "Document support and recovery steps"] },
      ] },
      { heading: "GIS and field-to-office workflows", intro: "Spatial information becomes more useful when field collection, business records and office review share a dependable handoff.", cards: [
        { label: "GIS + SQL + stable identifiers", title: "Asset and business-data reconciliation", text: "Connect approved business-system information with mapped assets through a controlled matching process, then report missing identifiers, duplicates and records that require correction.", details: ["Respect the authoritative system", "Limit automated writes", "Produce a human-review exception list"] },
        { label: "Python + coordinate and attribute validation", title: "Field-data import and quality review", text: "Transform approved GPS or mobile records into the organization’s required structure, check coordinates and attributes, and separate questionable records for review before they enter production GIS.", details: ["Standardize repeatable imports", "Retain the original field record", "Log transformations and rejected items"] },
        { label: "Scheduled processing + reconciliation", title: "Current field and office information", text: "Refresh approved operational or customer attributes on a defined schedule, mirror the information employees need and produce a reconciliation report when source and destination records do not agree.", details: ["Reduce stale copies", "Make failed matches visible", "Preserve a rollback path"] },
        { label: "Mobile forms + GIS + notifications", title: "Inspection and work follow-through", text: "Connect a field submission with its mapped asset, responsible employee and office summary so missing information or required follow-up does not disappear between systems.", details: ["Use the asset as context", "Route incomplete records", "Keep correction responsibility clear"] },
      ] },
      { heading: "Knowledge, systems and operational reporting", intro: "Good automation also protects access, recovery knowledge and the experience employees carry.", cards: [
        { label: "Documentation + permissions + search", title: "Internal knowledge and runbook system", text: "Organize approved SOPs, restoration instructions, policies and system inventories so employees can find useful answers while access remains appropriate to their role.", details: ["Link answers to source material", "Assign content owners", "Support onboarding and recovery"] },
        { label: "Approved exports + separate reporting environment", title: "Read-only operational summaries", text: "Use approved exported logs to prepare alarm, communication, runtime or maintenance summaries for qualified human review without creating a control path back into operational technology.", details: ["Reporting remains separate from control", "Interpretations stay advisory", "No autonomous infrastructure decisions"] },
      ], callout: { title: "A pattern is a starting point—not a packaged promise", text: "Every organization has different systems, responsibilities, information quality and risk. An assessment confirms whether a pattern fits before implementation, and no result or savings is assumed in advance." } },
      { heading: "How a solution is chosen", intro: "The same problem can have several technically valid answers. The useful choice is the one that fits the workflow and remains supportable.", bullets: ["Map the current process and its owners", "Identify the authoritative information sources", "Measure the existing workload and failure points", "Compare a process change, focused code, direct integration and AI", "Set access, review and recovery boundaries", "Pilot one contained workflow", "Document the result and expand only when justified"] },
    ],
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
    slug: "about", navLabel: "About", metaTitle: "About Chris Randall | Randall Automation Works", eyebrow: "About",
    title: "A regional technology partner for the work between people, systems and operations.",
    lead: "The consultancy combines hands-on utility operations, IT, GIS, software, data, business-system and administrative experience with a practical approach to responsible automation.",
    metaDescription: "About Chris Randall's hands-on experience with Python, SQL, JSON integrations, Visual Basic, utility technology, GIS and practical automation.",
    aside: "Specific employers, internal systems, client information and proprietary work are not displayed without written permission.",
    sections: [
      { heading: "Experience grounded in real operations", intro: "Founder Chris Randall's background combines utility operations and administration with the technology and business systems small organizations rely on every day. His work has included modernizing infrastructure, organizing data, improving reporting, strengthening access and recovery practices, documenting critical processes and training employees across technical and administrative workflows.", bullets: ["Utility operations, billing and administrative workflows", "IT, network, server and identity infrastructure", "Cybersecurity, access control, backup and recovery documentation", "GIS, asset information and field-to-office workflows", "Python scripting and workflow automation", "SQL databases, reporting and business-system integration", "JSON, API and structured-data connections", "Visual Basic and Excel VBA process tools", "Agentic workflows, knowledge systems and responsible AI configuration", "Work orders, customer service, payroll and accounts-payable process support", "SOPs, restoration runbooks, system inventories and knowledge preservation", "Employee training, technical support and responsible AI implementation"] },
      { heading: "Why that background matters", intro: "Good automation depends on more than software. It requires understanding the employee who receives the exception, the manager who relies on the report and the consequences when a handoff fails.", callout: { title: "The whole workflow matters", text: "Chris's experience spans technical infrastructure, office administration, staff training and field-support information—useful perspective when a process crosses departments and systems." } },
      { heading: "A practical consulting philosophy", intro: "The company is built around long-term usefulness rather than novelty.", bullets: ["Begin with a real operational problem", "Use deterministic code when clear rules can solve the work", "Add AI only where it provides meaningful operational value", "Respect employees and institutional knowledge", "Connect existing systems before replacing them", "Consider subscriptions, usage charges and maintenance from the start", "Use security boundaries appropriate to the work", "Measure results before expanding", "Document the system so the client can understand it"] },
      { heading: "Western Colorado focus", intro: "The primary service area includes Montrose, Grand Junction, Delta, Ouray, Ridgway, Gunnison, Crested Butte, Telluride, Glenwood Springs, Carbondale, Rifle, Durango, Cortez and surrounding rural communities." },
    ],
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
    title: "Bring one frustrating process. Let’s find out whether it is worth improving.",
    lead: "An initial conversation is a practical fit check—no oversized transformation pitch and no need to have the solution figured out first.",
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
