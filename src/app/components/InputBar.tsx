'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createTodo } from '@/lib/api';
import { useParams, useSearchParams } from 'next/navigation';
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { useStore } from '../store/useStore';

interface InputBarType {
  placeholder: string;
  cui: string;
}

const InputBar: FC<InputBarType> = ({ placeholder, cui }) => {
  const [todo, setTodo] = useState<string>("")
  const { updateTableRefresh } = useStore();

  const handleSubmit = async() => {
    if (!todo) {
      toast.error('Please enter a KAAM item');
      return;
    }

    // Add the todo item to the server
    const data = await createTodo(todo, "Pending", cui)
    if(data) {
      toast.success('KAAM added successfully');
      updateTableRefresh(true)
      setTodo("");
    }
  }

  return (
    <>
      <Input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
        type="text"
        value={todo}
        className="h-full md:!text-2xl placeholder:text-[#737373] text-foreground bg-background"
        placeholder={placeholder}
      />
      <Button onClick={() => handleSubmit()} className="h-full bg-foreground text-background px-12">ADD.</Button>
    </>
  )
}

export default InputBar