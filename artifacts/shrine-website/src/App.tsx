import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Gallery } from "@/pages/Gallery";
import { useLanguage } from "@/hooks/useLanguage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AppContent() {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={() => <Home lang={lang} />} />
          <Route path="/about" component={() => <About lang={lang} />} />
          <Route path="/gallery" component={() => <Gallery lang={lang} />} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppContent />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
