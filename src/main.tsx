import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </QueryClientProvider>
  </StrictMode>,
)
