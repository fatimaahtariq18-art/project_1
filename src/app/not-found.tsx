import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-24">
      <Container size="narrow" className="text-center">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.home}>Back to Home</Button>
        </div>
      </Container>
    </div>
  );
}
