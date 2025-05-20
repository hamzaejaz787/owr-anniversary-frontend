import Prizes from "@/pages/Prizes";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/prizes")({
  component: Prizes,
});
