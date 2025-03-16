'use client'

import { Checkbox } from '@/components/ui/checkbox';
import { useStore } from '../store/useStore';

const AllCheckBox = () => {
  const { updateCheckedAllTodo, updateCheckedAllTodoIds, checkAllTodoIds, todoLength } = useStore();

  const checkHandle = (e: boolean) => {
    updateCheckedAllTodo(e)
    if (!e) {
      updateCheckedAllTodoIds([])
    }
  }

  return (
    <Checkbox checked={checkAllTodoIds.length === todoLength && todoLength !== 0} onCheckedChange={(e: boolean) => checkHandle(e)} />
  )
}

export default AllCheckBox