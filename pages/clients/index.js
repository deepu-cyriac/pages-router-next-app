import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "deepu-cyriac", name: "Deepu Cyriac" },
    { id: "arthur-morgan", name: "Arthur Morgan" },
    { id: "ellie", name: "Ellie" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id, //can be used for multiple nested queries. or just dynamic string can be used also
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
