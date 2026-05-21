import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Admin",
  path: ROUTES.admin,
});

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4 text-muted">
        Admin area placeholder. Connect your CMS or dashboard here.
      </p>
    </div>
  );
}
