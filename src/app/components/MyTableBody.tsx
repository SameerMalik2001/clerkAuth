"use client"

import { TableBody, TableCell } from "@/components/ui/table";
import { getTodos, Todo } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import BodyWrapper from "./BodyWrapper";

const MyTableBody = ({ cui }: { cui: string }) => {
  const [data, setData] = useState<Todo[]>([]);
  const { tableRefresh, updateTableRefresh, checkedAllTodo, updateCheckedAllTodoIds, updateTodoLength } = useStore();

  const getData = async () => {
    try {
      const res: Todo[] = await getTodos(cui);
      debugger;
      console.log("after graph ql API res.todos: ", res);
      console.log("todo length ", res.length, "conditon:",  res.length > 0);
      if (res.length > 0) {
        console.log("Before setting data: ", data, res);
        setData((prev: Todo[]) => {
          const temp: Todo[] = [...res]
          console.log("old",prev);
          console.log("new",temp);
          return temp;
        });
        console.log("After setting data: ", data, res);
        updateTableRefresh(false);
        updateTodoLength(res?.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    console.log(data);
  }, [data])

  useEffect(() => {
    if (tableRefresh) {
      getData();
    }
  }, [tableRefresh]);

  useEffect(() => {
    if (checkedAllTodo && data) {
      updateCheckedAllTodoIds(data?.map(todo => todo.id));
    }
  }, [checkedAllTodo])

  return (
    <TableBody>
      {data.length > 0 ? (
        data.map((row: Todo) => (
          <BodyWrapper row={row} key={row.id}>
            <TableCell className="capitalize">{row.title}</TableCell>
            <TableCell className={row.completed === 'Completed' ? 'text-green-600' : row.completed === 'In Progress' ? 'text-orange-600' : 'text-blue-600'}>
              {row.completed}
            </TableCell>
            <TableCell>{formatDate(row.createdAt)}</TableCell>
            <TableCell>{formatDate(row.updatedAt)}</TableCell>
          </BodyWrapper>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center text-gray-500 p-4">
            No records found
          </td>
        </tr>
      )}
    </TableBody>
  );
};

export default MyTableBody;
