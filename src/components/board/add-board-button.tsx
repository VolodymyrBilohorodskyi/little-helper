export const AddBoardButton = ({
  AddBoard,
}: {
  AddBoard(value: boolean): void
}) => {
  const handleSetAddBoard = () => {
    AddBoard(true)
  }
  return (
    <button
      type="button"
      title="Add Board"
      className="flex h-full w-full items-center justify-center"
      onClick={() => handleSetAddBoard()}
    >
      <div className="flex items-center gap-2 text-xl text-gray-400 dark:text-gray-400">
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <p>Create new board</p>
      </div>
    </button>
  )
}
