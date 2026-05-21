export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold">Technaz Admin</span>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
