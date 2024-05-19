import { notFound, usePathname } from "next/navigation";
import Details from "@/components/Details/details";

export default async function PokemonDetailPage() {
  const params = usePathname(); // Get the dynamic parameter from the URL
  const name = params?.split("/").pop();

  if (typeof name !== "string") {
    return notFound();
  }

  return <Details name={name} />;
}
