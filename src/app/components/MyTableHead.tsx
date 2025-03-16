import { TableHead, TableHeader } from '@/components/ui/table'
import HeadWrapper from './HeadWrapper'

const MyTableHead = () => {
  return (
    <TableHeader className='sticky top-0 left-0'>
      <HeadWrapper>
        <TableHead>Title</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Created At</TableHead>
        <TableHead>Updated At</TableHead>
      </HeadWrapper>
    </TableHeader>
  )
}

export default MyTableHead