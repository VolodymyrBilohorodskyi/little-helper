'use client'

import { Toaster } from 'sonner'

// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer } from 'react-toastify'

export const NotificationComponent = () => {
  // return <ToastContainer position="bottom-right" theme="dark" />
  return (
    <Toaster
      position="bottom-right"
      richColors
      visibleToasts={3}
      expand
      toastOptions={{
        style: { fontSize: '18px' },
      }}
    />
  )
}
