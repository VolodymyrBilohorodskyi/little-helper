import { getBoards } from '@/services/boards'
import { AddBoard } from './add-board'
import { BoardCard } from './board-card'

export async function BoardList() {
  const boards = await getBoards()
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="mt-14">
          <div className="mb-4 grid grid-cols-4 gap-4">
            <AddBoard />
            {boards.map(board => (
              <BoardCard key={board.id} title={board.title} id={board.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
