import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    //load data...
    // router.push(`/clients/${router.query.id}/projecta`); //to navigate to a different page
    //also router.replace can be used. but you can't navigate back then
    //also below format can be used for push
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: `${router.query.id}`, clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
