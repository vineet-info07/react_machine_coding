// /hooks/useFormState.js
import { useReducer, useContext, createContext } from "react";

// Initial state for form and stepper
const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    password: "",
  },
};

// Action types
const SET_FORM_DATA = "SET_FORM_DATA";
const NEXT_STEP = "NEXT_STEP";
const PREVIOUS_STEP = "PREVIOUS_STEP";

// Reducer function to update the form state
const formReducer = (state, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case NEXT_STEP:
      return { ...state, currentStep: Math.min(state.currentStep + 1, 4) };
    case PREVIOUS_STEP:
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };
    default:
      return state;
  }
};

// Context creation
const FormStateContext = createContext();
const DispatchFormStateContext = createContext();

// Custom hook to access form state and dispatch actions
export const useFormState = () => {
  return [useContext(FormStateContext), useContext(DispatchFormStateContext)];
};

// Provider component to wrap around app
export const FormStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nextStep = () => dispatch({ type: NEXT_STEP });
  const previousStep = () => dispatch({ type: PREVIOUS_STEP });
  const updateFormData = (data) =>
    dispatch({ type: SET_FORM_DATA, payload: data });

  return (
    <FormStateContext.Provider value={state}>
      <DispatchFormStateContext.Provider
        value={{ nextStep, previousStep, updateFormData }}
      >
        {children}
      </DispatchFormStateContext.Provider>
    </FormStateContext.Provider>
  );
};
