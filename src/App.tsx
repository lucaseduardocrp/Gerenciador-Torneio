import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/AppRoutes";
import LoginContextProvider from "./context/LoginContext";

export default function App() {
  return (
    <>
      <LoginContextProvider>
        <AppRoutes />
      </LoginContextProvider>

      <GlobalStyles />
    </>
  )
}

