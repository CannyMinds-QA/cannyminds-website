import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Construction,
  CheckCircle,
  Speed,
  Assignment,
  People,
  Assessment,
  TrendingUp,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Project & Task Management Automation | BPM Solutions | CannyMinds",
  description: "Automate project workflows, task assignments, and resource allocation. Deliver projects on time and within budget with CannyMinds.",
  openGraph: {
    title: "Project & Task Management Automation | BPM Solutions | CannyMinds",
    description: "Automate project workflows, task assignments, and resource allocation. Deliver projects on time and within budget with CannyMinds.",
    images: [{ url: "/images/project-management-og.jpg", width: 1200, height: 630, alt: "Project Management Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Project Management",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Enterprise project workflow and task automation software.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function ProjectManagementPage() {
  return (
    <ServicePageLayout
      title="Project & Task Management Automation"
      subtitle="Automate project workflows, task assignments, and resource allocation. Deliver projects on time and within budget."
      serviceCategory="BPM"
      heroImageAlt="Project Dashboard showing Gantt charts and task progress"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Complex projects often suffer from miscommunication, unclear responsibilities, and missed deadlines. Spreadsheets and email threads are not enough to manage dynamic project lifecycles.
          </p>
          <p>
            <strong>CannyMinds Project Management Automation</strong> brings structure and visibility to your initiatives. Automatically assign tasks based on workflow rules, track progress in real-time, and ensure resources are allocated efficiently.
          </p>
          <p>
            From simple task lists to complex portfolio management, our solution scales to meet your delivery needs.
          </p>
        </>
      }

      features={[
        {
          title: "Automated Task Assignment",
          description: "Automatically create and assign tasks to team members based on project phase, triggers, or dependencies.",
          icon: Assignment,
        },
        {
          title: "Workflow Automation",
          description: "Standardize project execution with templates. Automate status updates, notifications, and handovers between teams.",
          icon: Construction,
        },
        {
          title: "Resource Management",
          description: "Visualize team availability and workload. Allocate resources effectively to prevent burnout and bottlenecks.",
          icon: People,
        },
        {
          title: "Timeline Tracking",
          description: "Interactive Gantt charts and Kanban boards to track milestones, dependencies, and critical paths.",
          icon: Speed,
        },
        {
          title: "Collaboration Tools",
          description: "Centralized comments, file sharing, and @mentions keep everyone aligned within the context of the task.",
          icon: TrendingUp,
        },
        {
          title: "Real-Time Reporting",
          description: "Custom dashboards for project health, budget vs. actuals, and team performance metrics.",
          icon: Assessment,
        },
      ]}

      benefits={[
        {
          title: "On-Time Delivery",
          description: "Improve project delivery rates by identifying risks early and automating routine coordination.",
          icon: CheckCircle,
        },
        {
          title: "Resource Optimization",
          description: "Maximize team productivity by ensuring the right people are working on the right tasks.",
          icon: CheckCircle,
        },
        {
          title: "Better Collaboration",
          description: "Break down silos and keep stakeholders informed with automated updates and transparent logs.",
          icon: CheckCircle,
        },
        {
          title: "Visibility",
          description: "Executive view across the entire project portfolio to make informed strategic decisions.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Initiate",
          description: "Create project from template. System auto-generates tasks and timeline."
        },
        {
          stepNumber: "2",
          title: "Plan",
          description: "Assign resources and set dependencies. System alerts on conflicts."
        },
        {
          stepNumber: "3",
          title: "Execute",
          description: "Team updates tasks. Workflow automates notifications and next steps."
        },
        {
          stepNumber: "4",
          title: "Monitor",
          description: "Track progress via dashboards. Auto-generate weekly status reports."
        }
      ]}
    />
  );
}
