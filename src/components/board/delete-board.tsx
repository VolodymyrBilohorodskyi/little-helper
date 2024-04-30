'use client'

import { deleteBoard } from '@/app/actions'
import Image from 'next/image'
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
      type="button"
      className="hidden transition-transform hover:scale-150 group-hover:block"
      onClick={removeBoard}
      title="Delete Board"
    >
      <Image
        src="/assets/icons/delete.svg"
        alt="Delete Board"
        width={24}
        height={24}
      />
    </button>
  )
}
