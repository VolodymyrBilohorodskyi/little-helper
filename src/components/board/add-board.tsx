'use client'

import { useState } from 'react'
import { NewBoardForm } from './new-board-form'
import { AddBoardButton } from './add-board-button'

export function AddBoard() {
  const [addBoard, setAddBoard] = useState(false)
  return (
    <div
      className={`relative flex min-h-[82px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition-colors dark:border-gray-500 ${addBoard ? '' : 'hover:bg-gray-700'}`}
    >
      {addBoard ? (
        <>
          <NewBoardForm AddBoard={setAddBoard} />
        </>
      ) : (
        <AddBoardButton AddBoard={setAddBoard} />
      )}
    </div>
  )
}
