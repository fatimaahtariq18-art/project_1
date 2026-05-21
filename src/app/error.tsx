"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="mt-2 text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
