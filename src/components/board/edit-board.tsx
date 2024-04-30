'use client'

import { useState } from 'react'
import { EditBoardButton } from './edit-board-button'
import { EditBoardForm } from './edit-board-form'

export const EditBoard = ({ boardId }: { boardId: string }) => {
  const [editBoard, setEditBoard] = useState(false)
  return (
    <>
      {editBoard ? (
        <EditBoardForm EditBoard={setEditBoard} boardId={boardId} />
      ) : (
        <EditBoardButton EditBoard={setEditBoard} />
      )}
    </>
  )
}
