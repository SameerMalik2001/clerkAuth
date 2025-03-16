
import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react';
import Delete from '../Icons/Delete';
import CheckboxClient from './CheckboxClient';
import DeleteButtonDialog from './DeleteButtonDialog';
import EditDrawer from './EditDrawer';

interface BodyWrapperType {
  children: React.ReactNode;
  row: any;
}
const BodyWrapper: React.FC<BodyWrapperType> = ({ children, row }) => {
  return (
    <TableRow key={row.id}>
      <TableCell className="font-medium">
        <CheckboxClient key={row.id} id={row.id}/>
      </TableCell>
      {children}
      <TableCell >
        <EditDrawer todo={row}/>
      </TableCell>
      <TableCell className="text-right">
        <DeleteButtonDialog id={row.id} all={false}>
          <Delete color='red' size={20}/>
        </DeleteButtonDialog>
      </TableCell>
    </TableRow>
  )
}

export default BodyWrapper