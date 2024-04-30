'use client'

import { createBoard } from '@/app/actions'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

export const NewBoardForm = ({
  AddBoard,
}: {
  AddBoard(value: boolean): void
}) => {
  const [boardState, boardAction] = useFormState(createBoard, null)
  if (boardState?.success) {
    AddBoard(false)
    toast.success('Board created successfully')
  }
  return (
    <form className="w-full p-4 md:p-6" action={boardAction}>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <input
            type="text"
            name="title"
            id="name"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="Type board name"
            required
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="-ms-1 me-1 h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Add new board
        </button>
        <button
          type="reset"
          onClick={() => AddBoard(false)}
          className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <svg
            className="-ms-1 me-1 h-6 w-6 rotate-45"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Close Form
        </button>
      </div>
    </form>
  )
}
