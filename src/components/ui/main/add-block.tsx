'use client'

export function AddBlock() {
  const openModal = () => {
    document.getElementById('crud-modal')!.classList.remove('hidden')
    document.getElementById('crud-modal')!.classList.add('flex')
  }
  return (
    <button
      type="button"
      onClick={() => openModal()}
      className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-4 transition-colors hover:bg-gray-700 dark:border-gray-500"
    >
      <p className="text-2xl text-gray-400 dark:text-gray-400">
        <svg
          className="h-3.5 w-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </button>
  )
}
