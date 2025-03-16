
import { TableHead, TableRow } from '@/components/ui/table'
import React from 'react'
import AllCheckBox from './AllCheckBox'
import AllDelete from './AllDelete'

interface HeadWrapperType {
  children: React.ReactNode
}
const HeadWrapper: React.FC<HeadWrapperType> = ({children}) => {
  return (
    <TableRow >
        <TableHead className="w-[100px]"><AllCheckBox /></TableHead>
        {children}
        <TableHead>Edit</TableHead>
        <TableHead className="text-right"><AllDelete /></TableHead>
      </TableRow>
  )
}

export default HeadWrapper