"use client";

import { AlertDialogAction, AlertDialogCancel, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { deleteTodo } from "@/lib/api";
import { toast } from "sonner";
import { useStore } from "../store/useStore";

interface Props {
  id: string;
  all?: boolean;
}

const DeleteButtonClient = ({ id, all }: Props) => {
  const { updateTableRefresh, checkAllTodoIds, updateCheckedAllTodoIds } = useStore();

  const deleteTodoFN = async (id: string) => {
    try {
      const data = await deleteTodo(id);
      if (data) {
        updateTableRefresh(true);
        toast.success("KAAM deleted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllTodos = async () => {
    try {
      await Promise.all(checkAllTodoIds.map((todoId: string) => deleteTodoFN(todoId)));
      updateTableRefresh(true);
      updateCheckedAllTodoIds([])
      toast.success("All KAAM deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialogFooter className="font-custom">
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={() => {all === true ? deleteAllTodos() : deleteTodoFN(id)}}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  );
};

export default DeleteButtonClient;
