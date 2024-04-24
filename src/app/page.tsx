import { NewBoardForm } from '@/components/board/new-board-form'
import { Main } from '@/components/main'
import { Modal } from '@/components/modal/modal'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Main />
      <Modal>
        <NewBoardForm />
      </Modal>
    </>
  )
}
