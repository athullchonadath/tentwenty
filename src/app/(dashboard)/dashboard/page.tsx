import DashboardView from "@/src/module/dashboard/view/dashboard-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentwenty | Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <DashboardView />
    </div>
  );
}
