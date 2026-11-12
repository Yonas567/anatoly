import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import {
  BoltIcon,
  CallIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
} from "@/icons";

const services = [
  {
    title: "Static guarding",
    description:
      "Professional posts for offices, warehouses, and residential compounds.",
  },
  {
    title: "Event security",
    description:
      "Crowd control and access management for conferences, concerts, and VIP events.",
  },
  {
    title: "Patrol & response",
    description: "Mobile patrol units and rapid incident response when needed.",
  },
  {
    title: "CCTV monitoring",
    description:
      "Remote monitoring with trained operators and escalation to field teams.",
  },
];

const steps = [
  "Submit your request online — no account required",
  "Operations reviews your site and sends a quotation",
  "Contract goes live with verified guard attendance at your site",
];

export default function LandingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_end,theme(colors.brand.600/30),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <p className="text-theme-sm font-medium text-brand-300">
              Ethiopia · English (Amharic coming soon)
            </p>
            <h1 className="mt-4 text-heading-one font-semibold tracking-tight">
              Security you can request, track, and trust
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              ShieldGuard connects your sites with vetted guards, supervisor
              oversight, and transparent attendance — from first enquiry to
              active coverage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/request-service"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Request a Service
              </Link>
              <Link
                href="/feedback"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/30 bg-white/10 text-white hover:bg-white/20",
                )}
              >
                Feedback &amp; Complaints
              </Link>
            </div>
            <ul className="mt-10 space-y-3 text-sm text-gray-300">
              {steps.map((step) => (
                <li key={step} className="flex gap-2">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-brand-400" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BoltIcon, label: "24/7 operations desk" },
              { icon: GlobeIcon, label: "GPS-verified check-in" },
              { icon: ClockIcon, label: "Case deadlines & escalations" },
              { icon: CallIcon, label: "SMS & email updates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <Icon className="size-8 text-brand-400" />
                <p className="mt-3 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-heading-three font-semibold text-gray-900 dark:text-white">
            Services for every risk profile
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Armed or unarmed teams, day or night shifts, single events or
            long-term contracts.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-heading-four font-semibold text-gray-900 dark:text-white">
              Already submitted a request?
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Track by reference number and phone, or sign in to your client
              portal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/track"
              className={buttonVariants({ variant: "outline" })}
            >
              Track status
            </Link>
            <Link href="/signin" className={buttonVariants()}>
              Client &amp; staff sign in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
