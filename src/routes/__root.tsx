import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
