import { create } from "zustand";

interface AppState {
  tableRefresh: boolean;
  updateTableRefresh: (value: boolean) => void;
  checkedAllTodo: boolean;
  updateCheckedAllTodo: (value: boolean) => void;
  checkAllTodoIds: string[];
  updateCheckedAllTodoIds: (value: string[]) => void;
  todoLength: number;
  updateTodoLength: (value: number) => void;
}

export const useStore = create<AppState>((set) => ({
  tableRefresh: true,
  updateTableRefresh: (value: boolean) => {
    set((state) => ({ ...state, tableRefresh: value }));
  },
  checkedAllTodo: false,
  updateCheckedAllTodo: (value: boolean) => {
    set((state) => ({ ...state, checkedAllTodo: value }));
  },
  checkAllTodoIds: [],
  updateCheckedAllTodoIds: (value: string[]) => {
    set((state) => ({ ...state, checkAllTodoIds: value }));
  },
  todoLength: 0,
  updateTodoLength: (value: number) => {
    set((state) => ({ ...state, todoLength: value }));
  },
}));
