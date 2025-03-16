import {
  Table,
  TableCaption
} from "@/components/ui/table";
import MyTableBody from "./MyTableBody";
import MyTableHead from './MyTableHead';

const TodoTable = ({cui}:{cui: string}) => {
  return (
    <Table className="relative">
      <TableCaption>IS YOUR KAAM PURA.</TableCaption>
      <MyTableHead />
      <MyTableBody cui={cui}/>
    </Table>
  )
}

export default TodoTable