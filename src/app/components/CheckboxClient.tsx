'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { useStore } from '../store/useStore'

const CheckboxClient = ({ id }: { id: string }) => {
  const { updateCheckedAllTodo, updateCheckedAllTodoIds, checkAllTodoIds } = useStore()

  const handleCheckboxChange = (event: boolean) => {
    if (event === false) {
      updateCheckedAllTodo(false)
      updateCheckedAllTodoIds(checkAllTodoIds?.filter((idd: string) => id !== idd))
    } else {
      updateCheckedAllTodoIds([...checkAllTodoIds, id])
    }
  }

  return (
    <Checkbox checked={checkAllTodoIds?.includes(id)} onCheckedChange={(e: boolean) => handleCheckboxChange(e)} key={id} />
  )
}

export default CheckboxClient