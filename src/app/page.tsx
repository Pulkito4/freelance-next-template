import { DummyHeader } from "@/components/shared/Header";
import { APP_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans">
      <DummyHeader />
      
      <main className="flex flex-col items-center justify-center p-8 text-center min-h-[80vh]">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-neutral-900 dark:text-neutral-100">
            {APP_CONFIG.name}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {APP_CONFIG.description}
          </p>
          
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Setup Instructions</h3>
            <ul className="text-left text-neutral-600 dark:text-neutral-400 space-y-2 max-w-md mx-auto list-disc">
              <li>Review the directory architecture inside <code>src/</code></li>
              <li>Add Shadcn UI components using <code>npx shadcn@latest add [component]</code></li>
              <li>Leverage `src/actions` for backend logic (using Server Actions)</li>
              <li>Keep global types mapped out under <code>src/types/</code></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
