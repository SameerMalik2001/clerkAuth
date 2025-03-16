'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Todo, updateTodo } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Edit2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { useStore } from '../store/useStore'
import DeleteButtonDialog from './DeleteButtonDialog'

export const defaultBtnCss = "border border-input h-9 px-4 py-2 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
const EditDrawer = ({ todo }: { todo: Todo }) => {
  const [title, setTitle] = useState<string>(todo.title)
  const [status, setStatus] = useState<"Completed" | "In Progress" | "Pending" | undefined>(undefined)
  const { updateTableRefresh } = useStore();
  const closeDrawer = useRef<HTMLButtonElement | null>(null);

  const handleUpdate = async () => {
    if (!title) {
      toast.error('Please enter a todo item');
      return;
    }

    // Add the todo item to the server
    const data = await updateTodo(todo?.id, title, status)
    if (data) {
      toast.success('KAAM updated successfully');
      updateTableRefresh(true)
      if(closeDrawer.current instanceof HTMLButtonElement) {
        closeDrawer.current?.click()
      }
    }
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <Edit2 className='cursor-pointer' />
      </DrawerTrigger>
      <DrawerContent className='flex flex-col gap-3'>
        <DrawerHeader className='font-custom'>
          <DrawerTitle className='text-2xl'>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription className='text-red-600'>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className='flex font-custom h-[60px] px-4 flex-col'>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUpdate();
              }
            }}
            value={title}
            type="text"
            className="h-full md:!text-2xl placeholder:text-[#737373] text-foreground bg-background"
            placeholder="Enter Your KAAM here..."
          />
        </div>
        <div className='flex gap-5 font-custom items-center px-4'>
          <h1 className='text-xl'>Status </h1>
          <Select defaultValue={todo?.completed} onValueChange={(e)=> setStatus(e as "Completed" | "In Progress" | "Pending" | undefined)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="KAAM STATUS" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DrawerFooter className='font-custom'>
          <div className='w-full flex gap-4'>
            <DeleteButtonDialog MainBtnCss={"flex-grow"} id={todo.id} all={false}>
              <span className={cn(defaultBtnCss, 'py-2 w-full rounded-lg bg-red-600 text-white hover:text-white hover:bg-red-500')}>Delete</span>
            </DeleteButtonDialog>
            <Button onClick={()=>handleUpdate()} className='flex-grow'>Save</Button>
          </div>
          <DrawerClose ref={closeDrawer} className={defaultBtnCss}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default EditDrawer