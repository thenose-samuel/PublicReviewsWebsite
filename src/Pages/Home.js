import { Navbar } from "./Components/Navbar";
import { HomeTopSection } from "./Components/HomeTopSection";
import { ReviewSuggestion } from "./Components/ReviewSuggestion";
import { Footer } from "./Components/Footer";
import { SearchBar } from "./Components/SearchBar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <HomeTopSection />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Home;
