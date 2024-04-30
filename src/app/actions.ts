'use server'
import { prisma } from '@/lib/prisma'
import { Boards } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const createBoardDto = z.object({
  title: z.string().min(3).max(30),
})

export async function createBoard(prevState: any, formData: FormData) {
  try {
    const { title } = Object.fromEntries(formData) as Omit<
      Boards,
      'id' | 'createdAt' | 'updatedAt'
    >
    const validateFormData = createBoardDto.safeParse({ title })
    if (!validateFormData.success) {
      return {
        success: false,
        message: validateFormData.error.flatten().fieldErrors.title,
      }
    }

    const board = await prisma.boards.create({
      data: {
        title,
      },
    })

    revalidatePath('/')
    return {
      board,
      success: true,
    }
  } catch (error) {
    return {
      error,
      success: false,
    }
  }
}

export async function deleteBoard(boardId: string) {
  try {
    const board = await prisma.boards.delete({
      where: {
        id: boardId,
      },
    })
    revalidatePath('/')
    return {
      board,
      success: true,
    }
  } catch (error) {
    return {
      error,
      success: false,
    }
  }
}

export async function editBoard(prevState: any, formData: FormData) {
  try {
    const { title, boardId } = Object.fromEntries(formData) as {
      title: string
      boardId: string
    }
    const board = await prisma.boards.update({
      where: {
        id: boardId,
      },
      data: {
        title,
      },
    })
    revalidatePath('/')
    return {
      board,
      success: true,
    }
  } catch (error) {
    return {
      error,
      success: false,
    }
  }
}
