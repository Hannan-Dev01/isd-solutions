import type { ProjectDetail } from "../types";

export const projectCategories = [
  { id: "all", label: "All Solutions" },
  { id: "odoo", label: "Odoo Solutions" },
  { id: "erp", label: "ERP Systems" },
  { id: "fbr", label: "FBR Solutions" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "reporting", label: "Reporting & Dashboards" },
  { id: "ai", label: "AI & Automation" },
];

const projectImages = {
  erp: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  fbr: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  hr: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  erpnext: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  oracle: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
  mobile: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=700&q=80",
} as const;

export const projects: ProjectDetail[] = [
  {
    id: "1",
    slug: "erp-implementation-customization",
    title: "ERP Implementation & Customization",
    industry: "Manufacturing & Textile",
    tagline: "Connected ERP operations with improved reporting visibility across departments.",
    description:
      "Odoo ERP implementation with customization for finance, inventory, HR, sales, and operational reporting.",
    category: "odoo",
    categoryLabel: "ERP Implementation",
    image: projectImages.erp,
    technologies: ["Odoo", "PostgreSQL", "Python", "JavaScript"],
    summary:
      "ERP rollout to unify disconnected processes and give management better visibility into operations.",
    overview:
      "A growing manufacturing organization needed one system for finance, inventory, HR, and sales instead of spreadsheets and manual follow-ups. ISD Solutions delivered ERP implementation with workflow customization, integration support, and reporting automation.",
    challenges: [
      "Disconnected business processes across departments",
      "Limited reporting visibility for management",
      "Duplicate data entry between teams",
      "Manual coordination for inventory and sales",
      "Difficulty scaling operations without a central system",
    ],
    solution:
      "ERP implementation with module configuration, custom workflows, role-based access, and management reporting. Processes were mapped to ERP modules for finance, stock, HR, and sales with integration-ready structure.",
    features: [
      { title: "Finance & Accounting", description: "Invoicing, payments, and ledger connected to operations." },
      { title: "Inventory & Procurement", description: "Stock control, warehouses, and purchase workflows." },
      { title: "HR & Payroll", description: "Employee records, attendance, and payroll alignment." },
      { title: "Sales & CRM", description: "Quotations, orders, and customer history in one module." },
      { title: "Custom Reporting", description: "Operational and management reports for daily decisions." },
    ],
    businessImpact: [
      "Improved operational visibility",
      "Better process control across departments",
      "Reduced manual coordination",
      "Centralized business data",
      "Stronger foundation for integrations",
    ],
    relatedServices: [
      { label: "Odoo ERP Implementation", href: "/services" },
      { label: "ERP Solutions", href: "/#erp-solutions" },
      { label: "Reporting Dashboards", href: "/services" },
    ],
    seoTitle: "ERP Implementation & Customization | ISD Solutions Project Experience",
    seoDescription:
      "Anonymous ERP implementation project: Odoo customization, workflow automation, and reporting for manufacturing and textile operations.",
    seoKeywords: "ERP implementation, Odoo customization, manufacturing ERP, textile ERP Pakistan",
  },
  {
    id: "2",
    slug: "digital-invoicing-platform",
    title: "Digital Invoicing Platform",
    industry: "Large Enterprise",
    tagline: "FBR-integrated invoicing with validation, tracking, and compliance reporting.",
    description:
      "Digital invoicing integration with invoice validation, compliance tracking, and finance reporting.",
    category: "fbr",
    categoryLabel: "Digital Invoicing",
    image: projectImages.fbr,
    technologies: ["FBR API", "Laravel", "PHP", "MySQL"],
    summary:
      "Digital invoicing platform for compliant tax invoicing, bulk processing, and finance visibility.",
    overview:
      "A large enterprise needed to move away from manual tax invoice preparation and improve compliance tracking. ISD Solutions built a digital invoicing platform integrated with FBR requirements.",
    challenges: [
      "Manual invoicing and compliance tracking",
      "High risk of submission errors",
      "Limited visibility into invoice status",
      "Bulk invoicing effort during peak periods",
      "Finance team needed audit-ready records",
    ],
    solution:
      "Digital invoicing integration with validation rules, submission handling, error logging, and reporting dashboards. Bulk processing and compliance tracking were built for finance operations.",
    features: [
      { title: "FBR Integration", description: "Secure digital invoice submission and status sync." },
      { title: "Invoice Validation", description: "Pre-submission checks to reduce rejections." },
      { title: "Compliance Tracking", description: "Audit trail for submitted and failed invoices." },
      { title: "Bulk Processing", description: "Support for high-volume billing periods." },
      { title: "Finance Reporting", description: "Dashboards for invoice status and exceptions." },
    ],
    businessImpact: [
      "Improved compliance workflow",
      "Reduced manual invoicing effort",
      "Better invoice tracking visibility",
      "Centralized compliance records",
      "Faster bulk invoice handling",
    ],
    relatedServices: [
      { label: "FBR Digital Invoicing", href: "/services" },
      { label: "Digital Compliance", href: "/services" },
      { label: "Custom Development", href: "/#custom-development" },
    ],
    seoTitle: "Digital Invoicing Platform | ISD Solutions Project Experience",
    seoDescription:
      "FBR digital invoicing platform with validation, tracking, and reporting — anonymous enterprise implementation by ISD Solutions.",
    seoKeywords: "FBR digital invoicing, e-invoicing platform, tax compliance automation Pakistan",
  },
  {
    id: "3",
    slug: "executive-kpi-dashboard",
    title: "Executive KPI Dashboard",
    industry: "Manufacturing",
    tagline: "Management dashboards with KPI monitoring and automated reporting.",
    description:
      "Enterprise dashboard with KPI views, Oracle reports, and automated operational reporting.",
    category: "reporting",
    categoryLabel: "Reporting & Dashboards",
    image: projectImages.dashboard,
    technologies: ["Oracle Reports", "Oracle Database", "PHP", "MySQL", "REST APIs"],
    summary:
      "Executive reporting solution to centralize KPIs and improve management visibility.",
    overview:
      "Manufacturing leadership lacked centralized reporting across finance and operations. ISD Solutions delivered KPI dashboards, Oracle report integration, and scheduled reporting for management teams.",
    challenges: [
      "Management lacked centralized reporting",
      "Reports spread across spreadsheets and systems",
      "Slow preparation of monthly KPI packs",
      "Limited real-time operational visibility",
      "Difficulty comparing performance across units",
    ],
    solution:
      "Executive dashboard with KPI definitions, data integration from ERP sources, Oracle report views, and automated report distribution. Dashboards were designed for management review cycles.",
    features: [
      { title: "KPI Dashboards", description: "Visual monitoring of key operational and financial metrics." },
      { title: "Oracle Reports", description: "Integration with existing Oracle reporting assets." },
      { title: "Automated Reporting", description: "Scheduled report generation and distribution." },
      { title: "Drill-Down Views", description: "Detail views for finance and operations teams." },
      { title: "Role-Based Access", description: "Controlled access for management and analysts." },
    ],
    businessImpact: [
      "Faster decision-making",
      "Better management visibility",
      "Reduced manual report preparation",
      "Improved KPI tracking consistency",
      "Centralized reporting for leadership",
    ],
    relatedServices: [
      { label: "Reporting Dashboards", href: "/services" },
      { label: "Oracle EBS Support", href: "/services" },
      { label: "Business Intelligence", href: "/services" },
    ],
    seoTitle: "Executive KPI Dashboard | ISD Solutions Project Experience",
    seoDescription:
      "KPI dashboards and Oracle reporting for manufacturing management — anonymous reporting project by ISD Solutions.",
    seoKeywords: "KPI dashboard, executive reporting, Oracle reports, business intelligence Pakistan",
  },
  {
    id: "4",
    slug: "enterprise-hr-portal",
    title: "Enterprise HR Portal",
    industry: "Corporate",
    tagline: "Custom HR portal with workflows, approvals, attendance, and reporting.",
    description:
      "Business HR portal for employee requests, document handling, approvals, and HR reporting.",
    category: "web",
    categoryLabel: "Custom Development",
    image: projectImages.hr,
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
    summary:
      "Custom HR portal to digitize employee processes and improve internal service delivery.",
    overview:
      "A corporate organization managed HR tasks through email and manual forms. ISD Solutions built a custom HR portal with approval workflows, attendance integration, and management reporting.",
    challenges: [
      "Manual HR processes and document handling",
      "Slow approval cycles for leave and requests",
      "No single place for HR policies and forms",
      "Limited visibility for HR and management",
      "Difficulty tracking request status",
    ],
    solution:
      "Custom HR web portal with role-based access, request workflows, document uploads, approval chains, and HR analytics. The system was integrated with existing attendance processes where required.",
    features: [
      { title: "Employee Self-Service", description: "Requests, forms, and policy access for staff." },
      { title: "Approval Workflows", description: "Multi-step approvals for HR and line managers." },
      { title: "Attendance Integration", description: "Connection with attendance data for HR review." },
      { title: "Document Management", description: "Structured storage for HR documents and forms." },
      { title: "HR Reporting", description: "Summary views for HR operations and management." },
    ],
    businessImpact: [
      "Improved employee experience",
      "Faster approval cycles",
      "Reduced manual HR handling",
      "Better process accountability",
      "Centralized HR operational data",
    ],
    relatedServices: [
      { label: "Custom Development", href: "/#custom-development" },
      { label: "Business Portals", href: "/services" },
      { label: "Workflow Systems", href: "/services" },
    ],
    seoTitle: "Enterprise HR Portal | ISD Solutions Project Experience",
    seoDescription:
      "Custom HR portal with workflows, approvals, and reporting — anonymous corporate implementation by ISD Solutions.",
    seoKeywords: "HR portal development, employee self-service, workflow automation, Laravel HR system",
  },
  {
    id: "5",
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    industry: "Enterprise",
    tagline: "Private enterprise search across policies, SOPs, and internal documentation.",
    description:
      "Private AI assistant with RAG, document intelligence, and controlled enterprise search.",
    category: "ai",
    categoryLabel: "AI & Automation",
    image: projectImages.ai,
    technologies: ["Python", "FastAPI", "RAG", "Vector Database", "PostgreSQL"],
    summary:
      "Enterprise knowledge assistant to help teams find policies, procedures, and internal documents faster.",
    overview:
      "Employees struggled to locate policies, SOPs, and internal documentation across shared drives and email. ISD Solutions implemented a private AI assistant with retrieval-augmented search and access controls.",
    challenges: [
      "Difficulty finding policies and SOPs quickly",
      "Knowledge scattered across folders and teams",
      "Repeated questions to HR and operations staff",
      "Need for controlled access to sensitive documents",
      "Manual document search wasted operational time",
    ],
    solution:
      "Private AI knowledge platform with document ingestion, vector search, RAG responses, and role-based access. The assistant supports policy lookup, document summarization, and guided answers from approved content.",
    features: [
      { title: "Enterprise Search", description: "Search across policies, manuals, and internal docs." },
      { title: "RAG Responses", description: "Answers grounded in approved organizational content." },
      { title: "Document Intelligence", description: "Summarization and extraction from uploaded files." },
      { title: "Access Control", description: "Permissions aligned with document sensitivity." },
      { title: "Private Deployment", description: "Hosted within controlled infrastructure." },
    ],
    businessImpact: [
      "Faster access to organizational knowledge",
      "Reduced repetitive internal inquiries",
      "Improved document discoverability",
      "Controlled AI use within approved content",
      "Better support for HR and operations teams",
    ],
    relatedServices: [
      { label: "AI & Automation", href: "/#ai-automation" },
      { label: "Custom Development", href: "/#custom-development" },
      { label: "Python Applications", href: "/services" },
    ],
    seoTitle: "AI Knowledge Assistant | ISD Solutions Project Experience",
    seoDescription:
      "Private AI assistant with RAG and enterprise search — anonymous knowledge management project by ISD Solutions.",
    seoKeywords: "enterprise AI search, RAG solution, document intelligence, private AI assistant",
  },
  {
    id: "6",
    slug: "erpnext-business-automation",
    title: "ERPNext Business Automation",
    industry: "Distribution & Services",
    tagline: "ERPNext implementation with process automation and operational reporting.",
    description:
      "ERPNext rollout for finance, inventory, sales, and customized operational workflows.",
    category: "erp",
    categoryLabel: "ERPNext",
    image: projectImages.erpnext,
    technologies: ["ERPNext", "MariaDB", "Python", "Frappe"],
    summary:
      "ERPNext implementation to automate core processes and improve cross-department visibility.",
    overview:
      "A distribution and services business needed structured ERP workflows instead of manual tracking. ISD Solutions implemented ERPNext with module setup, customization, and reporting.",
    challenges: [
      "Manual tracking of sales and inventory",
      "Limited procurement and stock visibility",
      "Approval flows handled outside a central system",
      "Reporting built manually each month",
      "Need for customizable open-source ERP",
    ],
    solution:
      "End-to-end ERPNext implementation including finance, stock, sales, and HR modules with custom forms, workflows, and management reports.",
    features: [
      { title: "Module Configuration", description: "Finance, inventory, and sales aligned to operations." },
      { title: "Workflow Automation", description: "Approvals and document flows inside ERP." },
      { title: "Custom Forms & Fields", description: "Fields and views tailored to business needs." },
      { title: "Operational Reports", description: "Daily and monthly reports for teams." },
      { title: "Implementation Support", description: "Training and post-go-live assistance." },
    ],
    businessImpact: [
      "Improved process control",
      "Better inventory and sales visibility",
      "Reduced manual reporting effort",
      "Centralized operational data",
      "Scalable ERP foundation",
    ],
    relatedServices: [
      { label: "ERPNext Implementation", href: "/services" },
      { label: "ERP Solutions", href: "/#erp-solutions" },
      { label: "Business Automation", href: "/services" },
    ],
    seoTitle: "ERPNext Business Automation | ISD Solutions Project Experience",
    seoDescription:
      "ERPNext implementation with customization and reporting — anonymous distribution sector project by ISD Solutions.",
    seoKeywords: "ERPNext implementation, business automation, distribution ERP Pakistan",
  },
  {
    id: "7",
    slug: "oracle-ebs-upgrade-support",
    title: "Oracle EBS Upgrade & Support",
    industry: "Enterprise",
    tagline: "Oracle E-Business Suite upgrade with reporting continuity and integration review.",
    description:
      "Oracle EBS upgrade support including migration planning, custom reports, and user readiness.",
    category: "erp",
    categoryLabel: "Oracle EBS",
    image: projectImages.oracle,
    technologies: ["Oracle EBS", "PL/SQL", "Oracle Reports", "Oracle Database"],
    summary:
      "Oracle EBS upgrade engagement focused on stable migration and continued finance and operations reporting.",
    overview:
      "An enterprise running Oracle EBS required a controlled upgrade path without disrupting finance, HR, and supply chain operations. ISD Solutions supported migration, testing, and report updates.",
    challenges: [
      "Legacy EBS version nearing support limits",
      "Risk to finance and operational continuity",
      "Custom reports tied to older data structures",
      "Complex data migration across modules",
      "Users required training on updated screens",
    ],
    solution:
      "Phased Oracle EBS upgrade support with migration validation, custom report adjustments, integration review, and user training for critical modules.",
    features: [
      { title: "Upgrade Assessment", description: "Planning to minimize operational disruption." },
      { title: "Migration Validation", description: "Data checks across finance and operations." },
      { title: "Report Updates", description: "Oracle Reports aligned to new EBS structure." },
      { title: "Integration Review", description: "Assessment of connected systems and APIs." },
      { title: "Post Go-Live Support", description: "Issue resolution after upgrade completion." },
    ],
    businessImpact: [
      "Stable upgrade transition",
      "Continued finance and operations reporting",
      "Reduced disruption to daily processes",
      "Updated management report visibility",
      "Improved long-term ERP maintainability",
    ],
    relatedServices: [
      { label: "Oracle EBS Support", href: "/services" },
      { label: "ERP Integration", href: "/#erp-solutions" },
      { label: "Oracle Reporting", href: "/services" },
    ],
    seoTitle: "Oracle EBS Upgrade & Support | ISD Solutions Project Experience",
    seoDescription:
      "Oracle E-Business Suite upgrade and reporting support — anonymous enterprise ERP project by ISD Solutions.",
    seoKeywords: "Oracle EBS upgrade, Oracle E-Business Suite support, ERP migration Pakistan",
  },
  {
    id: "8",
    slug: "field-operations-mobile-app",
    title: "Field Operations Mobile App",
    industry: "Operations & Distribution",
    tagline: "Mobile app for field teams with sync, offline access, and role-based control.",
    description:
      "Cross-platform mobile application with API integration, offline support, and operational dashboards.",
    category: "mobile",
    categoryLabel: "Mobile Application",
    image: projectImages.mobile,
    technologies: ["React Native", "Laravel", "REST APIs", "PostgreSQL"],
    summary:
      "Mobile solution for field and operational teams with secure access and backend integration.",
    overview:
      "Field teams needed mobile access to operational data where connectivity was inconsistent. ISD Solutions delivered a cross-platform app with API integration, offline-friendly workflows, and role-based permissions.",
    challenges: [
      "Field staff without reliable mobile access to data",
      "Manual updates between field and office systems",
      "Limited offline capability for remote sites",
      "No standardized mobile permissions model",
      "Operational delays from delayed data entry",
    ],
    solution:
      "React Native mobile app with Laravel APIs, offline data handling, role-based screens, and operational dashboards for supervisors.",
    features: [
      { title: "Cross-Platform App", description: "Consistent experience on major mobile devices." },
      { title: "API Integration", description: "Live sync with central business systems." },
      { title: "Offline Workflows", description: "Core tasks available with limited connectivity." },
      { title: "Role-Based Access", description: "Screens and actions based on user role." },
      { title: "Supervisor Dashboards", description: "Summary views for team oversight." },
    ],
    businessImpact: [
      "Improved field team productivity",
      "Reduced manual data transfer",
      "Better operational data timeliness",
      "Improved user control through roles",
      "Scalable mobile platform for new features",
    ],
    relatedServices: [
      { label: "Mobile Application Development", href: "/services" },
      { label: "Custom Development", href: "/#custom-development" },
      { label: "REST API Development", href: "/services" },
    ],
    seoTitle: "Field Operations Mobile App | ISD Solutions Project Experience",
    seoDescription:
      "Field operations mobile app with offline support and API integration — anonymous custom development project.",
    seoKeywords: "business mobile app, field operations app, React Native development Pakistan",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
