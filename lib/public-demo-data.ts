export type DemoPortal = {
  slug: string; initials: string; name: string; sector: string; eyebrow: string; headline: string;
  summary: string; status: string; statusDetail: string; prompt: string; answer: string; sources: string;
  metrics: { label: string; value: string; detail: string }[];
  activity: { agent: string; task: string; status: string; boundary: string }[];
  capabilities: { title: string; description: string }[];
};

const commonCapabilities = [
  { title: "Knowledge assistant", description: "Search approved policies, SOPs, manuals, and internal documentation with source-aware answers." },
  { title: "Operations reporting", description: "Summarize recurring reports, highlight exceptions, and prepare management-ready updates." },
  { title: "Read-only integrations", description: "Retrieve approved information from business systems without changing production records." },
  { title: "Draft workspace", description: "Create reports and notices in a review area without overwriting official files." },
  { title: "Human approvals", description: "Require an authorized person to review consequential next steps." },
  { title: "Usage visibility", description: "Show example activity, source, allowance, and cost-allocation concepts by client." },
];

export const demos: DemoPortal[] = [
  {
    slug: "small-business", initials: "NP", name: "Northstar Property Services", sector: "Small business",
    eyebrow: "Monday operations view", headline: "Property operations, reports, and approved knowledge in one controlled workspace.",
    summary: "A fictional small-business portal for coordinating maintenance, vendors, policies, and management reporting.", status: "Healthy", statusDetail: "4 configured agents · read-only integrations",
    prompt: "Summarize open maintenance issues and prepare a review list for Wednesday.",
    answer: "I found 7 open issues across the approved weekly reports. Two are overdue, three need vendor follow-up, and two are scheduled. A draft review list was prepared; no records were changed.",
    sources: "weekly operations report, vendor register, scheduling export",
    metrics: [
      { label: "Approved sources", value: "46", detail: "Fictional policies, SOPs, and reports" },
      { label: "Runs this month", value: "184", detail: "Example activity across 8 users" },
      { label: "Drafts awaiting review", value: "3", detail: "No automatic publishing" },
      { label: "Usage allowance", value: "38%", detail: "Illustrative monthly limit" },
    ],
    activity: [
      { agent: "Operations Agent", task: "Weekly service summary", status: "Complete", boundary: "12 approved sources" },
      { agent: "Knowledge Agent", task: "Vehicle-use policy question", status: "Complete", boundary: "3 approved sources" },
      { agent: "Reporting Agent", task: "July performance draft", status: "Awaiting review", boundary: "Draft only" },
      { agent: "Integration Monitor", task: "Approved data-source check", status: "Healthy", boundary: "Read-only" },
    ], capabilities: commonCapabilities,
  },
  {
    slug: "utility", initials: "MW", name: "Mesa Valley Water District", sector: "Public utility",
    eyebrow: "Daily utility operations view", headline: "Field activity, billing exceptions, GIS, and operational reporting in one review-first workspace.",
    summary: "A fictional water-utility portal showing how approved reports and read-only system data could support operations without controlling SCADA or production records.", status: "Normal", statusDetail: "5 specialist agents · no control-system writes",
    prompt: "Summarize yesterday's service interruptions, high-use accounts, and unresolved field work.",
    answer: "The example reports show 2 short service interruptions, 14 high-use accounts requiring review, and 6 open field tasks. A management summary and follow-up list were drafted; no billing, GIS, work-order, or SCADA records were changed.",
    sources: "daily operations log, billing exception export, GIS work-order report",
    metrics: [
      { label: "Approved sources", value: "73", detail: "Fictional SOPs, maps, logs, and reports" },
      { label: "Exceptions reviewed", value: "31", detail: "Example billing and operations flags" },
      { label: "Field drafts", value: "6", detail: "Awaiting authorized review" },
      { label: "Usage allowance", value: "44%", detail: "Illustrative monthly limit" },
    ],
    activity: [
      { agent: "Utility Operations Agent", task: "Daily interruption summary", status: "Complete", boundary: "Read-only logs" },
      { agent: "Billing Review Agent", task: "High-use account exceptions", status: "Complete", boundary: "No account changes" },
      { agent: "GIS Agent", task: "Open field-work map summary", status: "Awaiting review", boundary: "No feature edits" },
      { agent: "SCADA Log Assistant", task: "Alarm-log narrative", status: "Complete", boundary: "Logs only · no controls" },
    ], capabilities: commonCapabilities,
  },
  {
    slug: "organization", initials: "WC", name: "Western Colorado Community Alliance", sector: "Community organization",
    eyebrow: "Program and board view", headline: "Programs, grants, policies, and board reporting organized in a source-aware workspace.",
    summary: "A fictional nonprofit-style portal for coordinating program information, grant obligations, volunteer activity, and board-ready drafts.", status: "On track", statusDetail: "4 configured agents · draft-only outputs",
    prompt: "Prepare a board briefing on program progress, grant deadlines, and volunteer needs.",
    answer: "The example workspace found 5 active programs, 2 grant deadlines within 45 days, and 3 volunteer coverage gaps. It prepared a cited briefing draft for staff review; nothing was submitted or published.",
    sources: "program tracker, grant calendar, volunteer roster, board template",
    metrics: [
      { label: "Approved sources", value: "58", detail: "Fictional policies, grants, and program files" },
      { label: "Active programs", value: "5", detail: "Example organization portfolio" },
      { label: "Drafts for review", value: "4", detail: "Board and funder materials" },
      { label: "Usage allowance", value: "29%", detail: "Illustrative monthly limit" },
    ],
    activity: [
      { agent: "Program Agent", task: "Monthly outcomes summary", status: "Complete", boundary: "Approved reports only" },
      { agent: "Grant Agent", task: "Upcoming deadline review", status: "Complete", boundary: "No submissions" },
      { agent: "Board Reporting Agent", task: "Quarterly briefing draft", status: "Awaiting review", boundary: "Draft only" },
      { agent: "Volunteer Coordinator", task: "Coverage-gap summary", status: "Complete", boundary: "No outreach sent" },
    ], capabilities: commonCapabilities,
  },
];

export const demoBySlug = (slug: string) => demos.find((demo) => demo.slug === slug)!;
