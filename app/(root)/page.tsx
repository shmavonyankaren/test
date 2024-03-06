import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </main>
  );
}
