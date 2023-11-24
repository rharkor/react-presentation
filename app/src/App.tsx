import { ThemeSwitcher } from "./components/ThemeSwitcher";

import { RemoteProvider } from "./contexts/remote/RemoteProvider";
import Footer from "./components/Footer";
import Slides from "./components/Slides";

function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <RemoteProvider conditionalContent={<Slides />}>
        <Footer />
      </RemoteProvider>
      <ThemeSwitcher />
    </main>
  );
}

export default App;
