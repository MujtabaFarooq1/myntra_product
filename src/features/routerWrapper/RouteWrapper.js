import React from "react";
import { Outlet } from "react-router-dom";

function RouteWrapper() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default RouteWrapper;
