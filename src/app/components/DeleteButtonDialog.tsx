import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import DeleteButtonClient from './DeleteBtnClient';

interface AlertDialogType {
  children?: React.ReactNode;
  MainBtnCss?: string;
  id: string;
  all?: boolean;
}

const DeleteButtonDialog = ({ children, MainBtnCss = "", id, all }: AlertDialogType) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={MainBtnCss}>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="font-custom">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your <span className="text-red-600">KAAM PURA.</span> and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <DeleteButtonClient id={id} all={all}/>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButtonDialog;
