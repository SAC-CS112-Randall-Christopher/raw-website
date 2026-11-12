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
    "metaDescription": "Connected Frontiers, custom business automation and GIS integration for Western Colorado. Practical solutions around the software you already use.",
    "aside": "Start with Connected Frontiers when it fits. Scope a focused integration when your work needs something different.",
    "sections": [
      {
        "heading": "Three ways to move work forward",
        "cards": [
          {
            "label": "01 / Connected office",
            "title": "Connected Frontiers",
            "text": "Bring tasks, documents, dashboards and follow-up together. Explore industry workflows and discuss a setup shaped around your team.",
            "href": "https://connectedfrontiers.com/platform/",
            "linkLabel": "Explore Connected Frontiers"
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
            "title": "Before the assistant acts",
            "text": "Set approval boundaries and test changed proposals, duplicate attempts and uncertain outcomes.",
            "href": "/insights/ai-assistant-action-approval",
            "linkLabel": "Review action approvals"
          },
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
    "slug": "small-businesses",
    "navLabel": "Small Businesses",
    "metaTitle": "Small-Business Workflow Automation in Montrose, CO | RAW",
    "eyebrow": "Small-business workflow automation",
    "title": "Less re-entering. Better follow-up. Reports you can use.",
    "lead": "Connect the forms, inboxes, spreadsheets and business software your team already uses. Randall Automation Works helps small businesses in Montrose, Grand Junction and Western Colorado start with one recurring problem and a clear way to measure improvement.",
    "metaDescription": "Small-business workflow automation in Montrose and Western Colorado: customer follow-up, recurring reports, spreadsheet integration and Connected Frontiers setup.",
    "aside": "Bring one real example of the work: the starting information, the tools involved and what a useful result should look like.",
    "sections": [
      {
        "heading": "Three practical places to start",
        "intro": "These are examples of work we can scope together, rather than published client results or promises of a particular saving.",
        "cards": [
          {
            "title": "Stop entering the same details twice",
            "text": "An inquiry arrives in a form or inbox, then someone copies it into a spreadsheet and creates a task. A focused integration can check required details, prepare the record and assign the next step. Staff review missing information and duplicates."
          },
          {
            "title": "Make customer follow-up visible",
            "text": "Track who owns each request, what is waiting and when to follow up. Prepare reminders and communication drafts while your team stays responsible for customer commitments."
          },
          {
            "title": "Build the recurring report once",
            "text": "Combine approved spreadsheet or database exports into a repeatable report. Check totals and exceptions against the source, then give the responsible employee a reviewable summary."
          }
        ]
      },
      {
        "heading": "Choose a workspace or a focused connection",
        "intro": "You can start with a shared workspace, move one workflow into it or connect existing tools. The right choice depends on where the information lives and who needs to act.",
        "cards": [
          {
            "title": "A shared place for the work",
            "text": "Explore Connected Frontiers when tasks, documents, reporting and handoffs need a common home. Review the proposed setup and available connections before deciding what to move.",
            "href": "https://connectedfrontiers.com/industries/professional-services/",
            "linkLabel": "Explore client delivery and approvals"
          },
          {
            "title": "Field visits and follow-up",
            "text": "For service teams, connect visit preparation, missing information and office follow-through. GPS collection and GIS integration can be scoped separately when locations or mapped assets matter.",
            "href": "https://connectedfrontiers.com/industries/field-service/",
            "linkLabel": "Explore field-service workflows"
          },
          {
            "title": "Keep a useful system in place",
            "text": "A Python script, SQL report, spreadsheet improvement or API connection may solve the problem without replacing core software. We review exports, permissions and vendor access first.",
            "href": "/workflow-automation-examples",
            "linkLabel": "See focused automation examples"
          }
        ]
      },
      {
        "heading": "What a first project includes",
        "bullets": [
          "One agreed workflow, the people involved and its current starting point",
          "A review of existing software, exports, permissions and required connections",
          "A written scope covering deliverables, price, ongoing costs and responsibilities",
          "Testing with representative records, missing information and failure cases",
          "Employee review, operating instructions, training and a clear recovery path"
        ],
        "callout": {
          "title": "Measure the work before and after",
          "text": "Compare time per task, turnaround, corrections, overdue follow-ups and total running cost. Establish the baseline with your team; no percentage saving is assumed."
        }
      },
      {
        "heading": "Does this need AI?",
        "intro": "Often it does not. Use ordinary automation for clear rules and predictable records. AI can help with variable documents, internal search and draft summaries when it adds value and people can review the result.",
        "cards": [
          {
            "title": "Seven workflows to evaluate",
            "text": "Use the practical guide to choose work worth automating and understand what should stay human.",
            "href": "/insights/ai-automation-for-small-business",
            "linkLabel": "Read the small-business automation guide"
          },
          {
            "title": "Discuss one recurring problem",
            "text": "Tell Chris what happens today, which tools you use and where work gets delayed. Start with a free 30-minute conversation.",
            "href": "/contact?service=automation&from=small-business",
            "linkLabel": "Discuss your workflow"
          }
        ]
      }
    ]
  },
  {
    "slug": "gis-and-field-operations",
    "navLabel": "GIS & Field Operations",
    "metaTitle": "ArcGIS, Survey123, QGIS & GPS Field Work | Montrose, CO",
    "eyebrow": "GIS, GPS & field operations",
    "title": "Bring field records, mapped assets and office work together.",
    "lead": "Practical GIS services for utilities, special districts and field teams in Montrose and Western Colorado. Configure ArcGIS Field Maps and Survey123, work with QGIS, and connect Trimble GPS/GNSS collection to useful asset records, inspections and reports.",
    "metaDescription": "ArcGIS Field Maps, Survey123, QGIS and Trimble GPS/GNSS field work in Montrose and Western Colorado. Asset mapping, inspections, data cleanup and GIS integration.",
    "aside": "Start with the map, field form, GPS equipment or recurring report you use today. We’ll identify the missing connection and agree on a practical scope.",
    "sections": [
      {
        "heading": "GIS tools shaped around the work",
        "cards": [
          {
            "title": "ArcGIS Field Maps",
            "text": "Configure web maps, asset layers, field forms and editing permissions for mobile data collection. Review offline map areas, sync behavior and GPS/GNSS location settings against the team’s equipment and workflow."
          },
          {
            "title": "ArcGIS Survey123",
            "text": "Build inspection and maintenance forms with required fields, conditional questions, photos and asset references. Survey123 Connect and XLSForm can support more specific form requirements and related-record workflows."
          },
          {
            "title": "ArcGIS Pro, ArcGIS Online and dashboards",
            "text": "Prepare spatial data, publish appropriate layers, organize web maps and create reporting views. Review ArcGIS Enterprise connections against the existing environment, access and licensing."
          },
          {
            "title": "QGIS and spatial data cleanup",
            "text": "Work with QGIS projects, GeoPackage, shapefiles, GeoJSON and approved spatial databases such as PostGIS. Review coordinate reference systems, attributes, geometry and exports so records can be reused reliably."
          },
          {
            "title": "Trimble GPS/GNSS field work",
            "text": "Collect and update GIS asset locations with Trimble equipment, then review coordinates, attributes and available accuracy metadata before bringing records into ArcGIS or QGIS. Scope receiver, correction-service and software requirements around the accuracy the work needs."
          },
          {
            "title": "GIS data integration and automation",
            "text": "Connect stable asset IDs, inspection records, work orders, photos and approved business-system exports. Use repeatable Python, SQL and API workflows for validation, reporting and exception review."
          }
        ]
      },
      {
        "heading": "What the field-to-office workflow can look like",
        "intro": "These examples describe workflows we can design and test together. Your existing systems, permissions and data quality determine the final scope.",
        "cards": [
          {
            "title": "An inspection that reaches the right person",
            "text": "A technician completes a Survey123 inspection tied to a mapped asset. Required information is checked, exceptions are routed for review and staff can see the next responsible person instead of searching separate inboxes."
          },
          {
            "title": "An asset location with usable context",
            "text": "GPS/GNSS collection captures the asset and its attributes. The office reviews location quality, coordinate systems and missing details before the information is added to an asset inventory or maintenance map."
          },
          {
            "title": "Maintenance history that supports planning",
            "text": "Link approved inspection and repair records to asset IDs, then prepare recurring condition and activity summaries. Managers can trace priorities back to records when reviewing maintenance and capital improvement plans."
          }
        ]
      },
      {
        "heading": "Useful for field teams across Western Colorado",
        "intro": "Projects can support water and wastewater utilities, special districts, public works, contractors, property-maintenance teams and organizations managing mapped assets. Common starting points include asset inventory, condition assessments, valve and hydrant inspections, maintenance records, mobile forms and field-to-office reporting.",
        "cards": [
          {
            "title": "Modernize the GIS foundation",
            "text": "Review legacy maps, spreadsheets, maintenance history and ArcGIS setup before connecting additional workflows.",
            "href": "/gis-modernization",
            "linkLabel": "Explore GIS modernization"
          },
          {
            "title": "Coordinate the work around a visit",
            "text": "Connected Frontiers focuses on visit readiness and follow-up. Discuss a scoped GIS connection when maps and field records need to support that broader workflow.",
            "href": "https://connectedfrontiers.com/industries/field-service/",
            "linkLabel": "Explore Connected Frontiers for field service"
          }
        ]
      },
      {
        "heading": "Start with one field workflow",
        "bullets": [
          "Review a representative form, layer, asset record or report with your team",
          "Agree on required attributes, location accuracy, permissions and the source system",
          "Configure and test the workflow with real equipment and representative records",
          "Check missing data, offline/sync behavior where relevant and exception handling",
          "Document the process, train staff and define support and recovery responsibilities"
        ],
        "callout": {
          "title": "Match location accuracy to the job",
          "text": "GPS/GNSS accuracy depends on equipment, corrections, conditions and configuration. GIS asset mapping is scoped separately from licensed boundary surveying or engineering work."
        },
        "cards": [
          {
            "title": "Talk through your GIS or GPS project",
            "text": "Bring the tools you use today and the result your crew or office needs. Start with a free 30-minute conversation with Chris.",
            "href": "/contact?service=gis&from=gis-field",
            "linkLabel": "Discuss your field workflow"
          }
        ]
      }
    ]
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
    "lead": "A connected business workspace and three focused opportunities to make everyday work easier.",
    "metaDescription": "Explore Connected Frontiers and practical reporting, customer follow-up and GIS opportunities for your business.",
    "aside": "Explore the workspace on connectedfrontiers.com. The opportunities below are generalized workflow patterns, not published client case studies.",
    "sections": [
      {
        "heading": "A workspace shaped around your business",
        "intro": "Connected Frontiers brings people, business information and daily work together. Start with your team’s workflow and agree the capabilities, software connections and setup that fit.",
        "cards": [
          {
            "title": "Connected Frontiers",
            "text": "Explore tasks, documents, dashboards and reporting, with industry-focused starting points and hands-on setup support.",
            "href": "https://connectedfrontiers.com/platform/",
            "linkLabel": "Explore the platform"
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
    "metaTitle": "About Chris Randall | Automation & GIS in Montrose, CO",
    "eyebrow": "The person behind RAW",
    "title": "A practical background. A personal commitment.",
    "lead": "I’m Chris Randall, founder of Randall Automation Works. My growing family and I are putting down roots in Montrose, Colorado, and I’m building a business around helping people make their everyday work run better.",
    "metaDescription": "Meet Chris Randall in Montrose, Colorado. A background in plumbing, customer service, business operations, IT and GIS shapes his practical approach to automation.",
    "aside": "Based in Montrose. Building lasting relationships with businesses, utilities and field teams across Western Colorado.",
    "sections": [
      {
        "heading": "Putting down roots in Montrose.",
        "intro": "My family is a big part of why I’m building Randall Automation Works. As our family grows and we establish our roots here, I want to build something lasting: a business that supports our life in Montrose and does useful work for the people and organizations around us."
      },
      {
        "heading": "Experience on both sides of the counter.",
        "intro": "My path into technology has included plumbing, office administration, accounts payable and receivable, project management, and customer service—including bartending and serving. I’ve worked in the field, behind a desk and face to face with customers. That range has taught me to listen, adapt and understand what people need to get through a busy day.",
        "cards": [
          {
            "title": "Field work and follow-through",
            "text": "Plumbing and utility operations have shaped my appreciation for practical solutions, clear information and the handoff between the people in the field and the people in the office."
          },
          {
            "title": "The business behind the work",
            "text": "Administration, AP/AR and project management have given me a close view of the records, details, deadlines and coordination that keep an organization moving."
          },
          {
            "title": "People come first",
            "text": "Bartending, serving and customer service taught me to stay attentive under pressure, communicate clearly and work with people from all walks of life."
          }
        ]
      },
      {
        "heading": "Technical depth with everyday context.",
        "intro": "Along the way, I’ve developed specialized experience in IT, GIS, software and automation. I enjoy figuring out how systems work and connecting them in ways that make sense to the people using them.",
        "cards": [
          {
            "title": "Software, data and automation",
            "text": "Python scripting, C# integrations, SQL reporting, JSON, APIs and SDKs, plus Visual Basic and VBA for established office workflows. The goal is useful connections and less repetitive work."
          },
          {
            "title": "GIS, assets and field operations",
            "text": "Web maps, spatial data, field forms and asset records that connect field observations with office reporting, planning and follow-up."
          },
          {
            "title": "Practical AI systems",
            "text": "Assistants that search approved information, help with documents and support defined workflows, with appropriate permissions and human review. I use AI where it helps and straightforward code where the rules are clear."
          },
          {
            "title": "Reliable systems and handoffs",
            "text": "IT infrastructure, access controls, backup and recovery, employee training and practical documentation. A useful improvement should keep working after the initial setup."
          }
        ]
      },
      {
        "heading": "A direct working relationship.",
        "intro": "When you work with RAW, you work with me—from the first conversation through testing and handoff. You don’t need a technical vocabulary or a polished project brief. Tell me what takes too long, what keeps getting missed or what you wish worked better. We’ll talk it through, agree on a realistic scope and build from there."
      },
      {
        "heading": "What I’m building.",
        "intro": "Connected Frontiers brings that same perspective into a business workspace: helping people, information and everyday work fit together. Custom automation, reporting and GIS projects start with the same question—what would make the work easier for your team?",
        "cards": [
          {
            "title": "Connected Frontiers",
            "text": "Explore the workspace and industry workflows, with hands-on setup and integration help from RAW.",
            "href": "https://connectedfrontiers.com/platform/",
            "linkLabel": "Explore Connected Frontiers"
          },
          {
            "title": "How a project works",
            "text": "A clear scope, agreed costs, testing with your team, documentation and optional ongoing support.",
            "href": "/how-engagements-work",
            "linkLabel": "See the working process"
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
      { heading: "Contact and scheduling services", intro: "When you send the contact form, the submission is sent to Formspree. The booking links open Google Calendar, where you can choose a consultation time. An inquiry may include its public landing page, broad traffic source and the service link used so Chris can understand the context of your request. You can also contact Chris directly by email or phone." },
      { heading: "Sensitive information", intro: "Do not submit passwords, authentication codes, protected health information, payment-card information, confidential customer records or sensitive operational and infrastructure data." },
      { heading: "Current service providers", intro: "This website uses Cloudflare for hosting, Web Analytics and aggregate website event counts, Formspree for contact-form delivery, and Google Calendar for consultation booking. These services have their own privacy policies.", cards: [
        { title: "Cloudflare", text: "Website hosting and Web Analytics.", href: "https://www.cloudflare.com/privacypolicy/", linkLabel: "Cloudflare privacy policy" },
        { title: "Formspree", text: "Contact-form submissions.", href: "https://formspree.io/legal/privacy-policy/", linkLabel: "Formspree privacy policy" },
        { title: "Google", text: "Calendar consultation bookings.", href: "https://policies.google.com/privacy", linkLabel: "Google privacy policy" },
      ] },
      { heading: "Website analytics", intro: "Cloudflare Web Analytics measures website traffic and page performance. Separate aggregate counts record page views, successful form acknowledgments, booking-link clicks and Connected Frontiers link clicks, grouped by public page and a broad source category. These event counts do not include form contents, names, email addresses, IP addresses, full referral URLs, search queries or visitor identifiers. A browser-session entry remembers only the public landing page and broad source category; it ends with the session. Global Privacy Control and Do Not Track preferences disable these separate event counts. Booking-link clicks do not confirm an appointment. Test events are kept separate from ordinary traffic.", cards: [
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
