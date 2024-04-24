import { prisma } from '@/lib/prisma'

export async function getBoards() {
  const boards = await prisma.boards.findMany()
  return boards
}
