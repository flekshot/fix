import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SearchModal } from "./components/SearchModal";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackgroundEffect } from "./components/BackgroundEffect";
import { LandingPage } from "./pages/LandingPage";
import { CharterPage } from "./pages/CharterPage";
import { HighCommandPage } from "./pages/HighCommandPage";
import { PilotingPage } from "./pages/PilotingPage";
import { EngineeringPage } from "./pages/EngineeringPage";
import { MedicalPage } from "./pages/MedicalPage";
import { GuardPage } from "./pages/GuardPage";
import { GhostPage } from "./pages/GhostPage";
import { ShockTroopersPage } from "./pages/ShockTroopersPage";
import { MercenariesPage } from "./pages/MercenariesPage";
import { SOBPage } from "./pages/SOBPage";
import { JediCodePage } from "./pages/JediCodePage";
import { JediGuardianPage } from "./pages/JediGuardianPage";
import { JediConsularPage } from "./pages/JediConsularPage";
import { JediSentinelPage } from "./pages/JediSentinelPage";
import { useActiveSection } from "./hooks/useActiveSection";

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarVisible, setDesktopSidebarVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleMenuToggle = () => {
    setSidebarOpen((v) => !v);
    setDesktopSidebarVisible((v) => !v);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-space-dark">
      <BackgroundEffect />
      <ScrollToTop />
      <Header
        onMenuToggle={handleMenuToggle}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <div className="flex pt-14 relative z-10">
        <Sidebar
          activeSection={activeSection}
          open={sidebarOpen}
          desktopVisible={desktopSidebarVisible}
          onClose={() => setSidebarOpen(false)}
        />

        <main className={`flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 transition-all duration-300 ${desktopSidebarVisible ? "max-w-4xl" : "max-w-7xl lg:mx-auto"}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/charter" element={<CharterPage />} />
            <Route path="/high-command" element={<HighCommandPage />} />
            <Route path="/piloting" element={<PilotingPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/medical" element={<MedicalPage />} />
            <Route path="/guard" element={<GuardPage />} />
            <Route path="/ghost" element={<GhostPage />} />
            <Route path="/shock-troopers" element={<ShockTroopersPage />} />
            <Route path="/mercenaries" element={<MercenariesPage />} />
            <Route path="/sob" element={<SOBPage />} />
            <Route path="/jedi-code" element={<JediCodePage />} />
            <Route path="/jedi-guardian" element={<JediGuardianPage />} />
            <Route path="/jedi-consular" element={<JediConsularPage />} />
            <Route path="/jedi-sentinel" element={<JediSentinelPage />} />
          </Routes>
        </main>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
