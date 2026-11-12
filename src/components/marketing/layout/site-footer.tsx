import { Link } from "@/i18n/navigation";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="text-title-sm font-semibold text-gray-900 dark:text-white">
            ShieldGuard Security
          </p>
          <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
            Trusted guarding, patrol, and event security across Ethiopia. Request
            coverage online and track your service from first contact to active
            contract.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Static &amp; mobile guarding</li>
            <li>Event &amp; VIP protection</li>
            <li>CCTV monitoring</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/request-service"
                className="text-gray-600 hover:text-brand-500 dark:text-gray-400"
              >
                Request a service
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                className="text-gray-600 hover:text-brand-500 dark:text-gray-400"
              >
                Feedback &amp; complaints
              </Link>
            </li>
            <li>
              <Link
                href="/track"
                className="text-gray-600 hover:text-brand-500 dark:text-gray-400"
              >
                Track request or case
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="text-gray-600 hover:text-brand-500 dark:text-gray-400"
              >
                Staff &amp; client sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-4 text-center text-theme-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
        © {new Date().getFullYear()} ShieldGuard. All times shown in East Africa
        Time (UTC+3).
      </div>
    </footer>
  );
}
