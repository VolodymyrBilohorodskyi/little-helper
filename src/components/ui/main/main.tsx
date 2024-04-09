import { AddBlock } from './add-block'
import { Modal } from './modal'

export function Main() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="mt-14">
          <div className="mb-4 grid grid-cols-4 gap-4">
            <AddBlock />
          </div>
        </div>
      </div>
      <Modal label="board" />
    </>
  )
}
