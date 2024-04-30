import Image from 'next/image'

export const EditBoardButton = ({
  EditBoard,
}: {
  EditBoard: (value: boolean) => void
}) => {
  return (
    <button
      type="button"
      className="hidden transition-transform hover:scale-150 group-hover:block"
      onClick={() => EditBoard(true)}
    >
      <Image
        src="assets/icons/edit.svg"
        width={24}
        height={24}
        alt="edit board"
      />
    </button>
  )
}
