import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CollectionsPage from "./pages/CollectionsPage.jsx";
import ExpansionsPage from "./pages/ExpansionsPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/expansions" element={<ExpansionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
