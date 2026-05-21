import { TopBar } from "@/components/layout/top-bar";
import { Header, Footer } from "@/components/layout";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
