import { auth } from "@/services/auth";

export default async function Home() {
  const session = await auth();

  return <h1>Ignix</h1>;
}
