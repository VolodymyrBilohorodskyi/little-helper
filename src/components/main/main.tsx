import { getBoards } from '@/services/boards'
import { AddBlock } from './add-block'

export async function Main() {
  const boards = await getBoards()
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="mt-14">
          <div className="mb-4 grid grid-cols-4 gap-4">
            <AddBlock />
            {boards.map(board => (
              <div
                key={board.id}
                className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-4 transition-colors hover:bg-gray-700 dark:border-gray-500"
              >
                {board.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
