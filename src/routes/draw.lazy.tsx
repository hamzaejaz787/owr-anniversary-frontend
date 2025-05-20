import Draw from "@/pages/Draw";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/draw")({
  component: Draw,
});
