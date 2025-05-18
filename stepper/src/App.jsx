import Stepper from "./components/Stepper";

const CHECKOUT_STEPS = [
  {
    name: " Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: " Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: " Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: " Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
];

function App() {
  return (
    <div>
      <h2>Checkout Stepper</h2>
      <Stepper />
    </div>
  );
}

export default App;
