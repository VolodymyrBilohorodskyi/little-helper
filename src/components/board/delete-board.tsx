'use client'

import { deleteBoard } from '@/app/actions'
import { toast } from 'sonner'

export const DeleteBoard = ({ boardId }: { boardId: string }) => {
  const removeBoard = async () => {
    const board = await deleteBoard(boardId)
    if (board.success) {
      toast.success(`${board.board?.title} deleted successfully`)
    }
  }
  return (
    <button
      className="hidden transition-transform hover:scale-150 group-hover:block"
      onClick={removeBoard}
      title="Delete Board"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <path
          fill="#F44336"
          d="M21.5 4.5H26.501V43.5H21.5z"
          transform="rotate(45.001 24 24)"
        ></path>
        <path
          fill="#F44336"
          d="M21.5 4.5H26.5V43.501H21.5z"
          transform="rotate(135.008 24 24)"
        ></path>
      </svg>
    </button>
  )
}
