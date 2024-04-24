'use client'

import { Toaster } from 'sonner'

// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer } from 'react-toastify'

export const NotificationComponent = () => {
  // return <ToastContainer position="bottom-right" theme="dark" />
  return <Toaster position="top-center" richColors visibleToasts={3} expand />
}
