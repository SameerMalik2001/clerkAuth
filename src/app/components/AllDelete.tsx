'use client'

import React from 'react'
import Delete from '../Icons/Delete'
import DeleteButtonDialog from './DeleteButtonDialog'
import { useStore } from '../store/useStore'

const AllDelete = () => {
  const { checkAllTodoIds } = useStore()
  return (
    <div>
      {
        checkAllTodoIds?.length > 0 && (
          <DeleteButtonDialog id={"null"} all={true}>
            <Delete color='red' size={20} />
          </DeleteButtonDialog>
        )
      }
      {
        checkAllTodoIds?.length === 0 && "Delete"
      }
    </div>
  )
}

export default AllDelete