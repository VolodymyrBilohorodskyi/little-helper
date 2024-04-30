import { editBoard } from '@/app/actions'
import Image from 'next/image'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

export const EditBoardForm = ({
  EditBoard,
  boardId,
}: {
  EditBoard: (value: boolean) => void
  boardId: string
}) => {
  const [editBoardState, editBoardAction] = useFormState(editBoard, null)
  if (editBoardState?.success) {
    EditBoard(false)
    toast.success('Board updated successfully')
  }
  return (
    <div className="absolute left-0 top-0 h-full w-full rounded-lg border border-gray-200 bg-gray-700 ">
      <form
        action={editBoardAction}
        className="flex h-full w-full items-center gap-3 p-4"
      >
        <input
          type="text"
          name="title"
          id="name"
          className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="Type board name"
          required
        />
        <input name="boardId" value={boardId} hidden readOnly />
        <button
          type="submit"
          title="Apply board"
          className="transition-transform hover:scale-150"
        >
          <Image
            src="/assets/icons/apply.svg"
            width={24}
            height={24}
            alt="Apply board"
          />
        </button>
        <button
          type="reset"
          title="Cancel"
          className="transition-transform hover:scale-150"
          onClick={() => EditBoard(false)}
        >
          <Image
            src="/assets/icons/delete.svg"
            width={24}
            height={24}
            alt="Cancel board"
          />
        </button>
      </form>
    </div>
  )
}
