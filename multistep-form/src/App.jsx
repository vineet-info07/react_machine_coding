import { FormStateProvider } from "./components/hooks/useFormState";
import InputComponent from "./components/pages/InputComponent";

function App() {
  return (
    <>
      <FormStateProvider>
        <InputComponent />
      </FormStateProvider>
    </>
  );
}

export default App;
