import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
          <ToastContainer/>
        </div>
      </AuthProvider>
    </QueryClientProvider>
    
  </StrictMode>
)
