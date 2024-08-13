import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The projects of a given client</h1>
    </div>
  );
}
