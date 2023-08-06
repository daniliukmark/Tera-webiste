import { useParams } from "react-router-dom";

export function RungtyniuDetalesPage() {
  const params = useParams();
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
}
