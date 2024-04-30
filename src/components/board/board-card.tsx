import Link from 'next/link'
import { DeleteBoard } from './delete-board'
import { EditBoard } from './edit-board'

export const BoardCard = ({ title, id }: { title: string; id: string }) => {
  return (
    <div className=" group relative flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 align-middle shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link href={`/board/${id}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <div className="flex gap-3 align-middle">
        <EditBoard boardId={id} />
        <DeleteBoard boardId={id} />
      </div>
    </div>
  )
}
