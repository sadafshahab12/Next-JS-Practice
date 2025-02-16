import React from "react";
import UserAnalytics from "../components/UserAnalytics";
import Revenue from "../components/Revenue";
import Notifications from "../components/Notifications";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children} </div> {/*content coming from page.tsx*/}
      <UserAnalytics />
      <Revenue />
      <Notifications />
    </>
  );
};

export default DashboardLayout;
