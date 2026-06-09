import type { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { GoogleAds } from "@/pages/GoogleAds";
import { Website } from "@/pages/Website";
import { CredisoCare } from "@/pages/CredisoCare";
import { SocialMedia } from "@/pages/SocialMedia";
import { Placeholder } from "@/pages/Placeholder";
import { flattenRoutes } from "@/lib/site";

/** Routes that already have a real, designed page. Everything else in the IA
 *  falls back to a blank <Placeholder> until its sections are built. */
const BUILT_PAGES: Record<string, ReactElement> = {
  "/website": <Website />,
  "/google-ads": <GoogleAds />,
  "/crediso-care": <CredisoCare />,
  "/social-media": <SocialMedia />,
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {flattenRoutes().map(({ path, label }) => (
            <Route
              key={path}
              path={path}
              element={BUILT_PAGES[path] ?? <Placeholder title={label} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
