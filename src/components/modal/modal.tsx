import { CloseModal } from './close-modal'

interface ModalProps {
  label?: string
  children?: React.ReactNode
}

export function Modal({ label, children }: ModalProps) {
  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create new {label}
            </h3>
            <CloseModal />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
