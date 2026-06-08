import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/** Shared page chrome — navbar + footer wrap every route's content. */
export function Layout() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
