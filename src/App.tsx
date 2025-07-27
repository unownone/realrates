import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorPage } from "./pages/CalculatorPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
