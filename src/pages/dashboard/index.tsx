import React from "react";
import withLayout from "@/components/Auth/WithLayout";
import Dashboard from "@/components/Dashboard";

const Main = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};
export default withLayout(Main);
