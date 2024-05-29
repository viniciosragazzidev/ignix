"use client";
import { useActionState } from "react";

async function increment(previousState: any, formData: any) {
  return previousState + 1;
}

export default function Home() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
