import { Book, Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <Book
          className="mx-auto h-12 w-12 text-blue-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-2xl font-bold text-blue-800 mb-2">
          Academic Resources
        </h1>
        <p className="text-primary mb-4">Loading resources...</p>
        <div className="flex justify-center items-center mb-4">
          <Loader2
            className="h-8 w-8 text-blue-600 animate-spin"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-blue-500 italic max-w-md mx-auto">
          "The capacity to learn is a gift; the ability to learn is a skill; the
          willingness to learn is a choice." - Brian Herbert
        </p>
      </div>
      <div className="sr-only" aria-live="polite">
        Loading academic resources. Please wait.
      </div>
    </div>
  );
}
