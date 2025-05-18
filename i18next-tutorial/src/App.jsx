import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
    </div>
  );
}

export default App;
