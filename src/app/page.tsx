import { NewBoardForm } from '@/components/board/new-board-form'
import { BoardList } from '@/components/board'
import { Modal } from '@/components/modal/modal'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <BoardList />
      <Modal>
        <NewBoardForm />
      </Modal>
    </>
  )
}
