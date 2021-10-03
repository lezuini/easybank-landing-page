import "./App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </main>
  );
}

export default App;
