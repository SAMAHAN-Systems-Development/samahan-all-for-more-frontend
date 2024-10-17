'use client';

import { useEffect, useMemo, useState } from 'react';
import { BulletinDialogEnum } from '../../_constants/dialogs';
import { useRouter } from 'next/navigation';
import { useGetBulletins } from '@/lib/queries/bulletinQueries';
import {
  useCreateBulletin,
  useDeleteBulletin,
  useUpdateBulletin,
} from '@/lib/mutations/bulletinMutations';
import { toast } from 'sonner';
import { ColumnDef } from '@tanstack/react-table';
import { bulletinColumns } from './columns';
import BulletinDialog from '../../_components/BulletinDialog';
import DeleteDialog from '../../_components/DeleteDialog';
import { Button } from '@/components/shadcn-ui/button';
import DataTable from '../../_components/DataTable';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn-ui/card';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/shadcn-ui/input';
import { debounce } from 'lodash';
import { GetBulletinDto } from '@/lib/types/dto/getBulletinData.type';

const BulletinsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<BulletinDialogEnum | null>();
  const [bulletin, setBulletin] = useState<Bulletin | null>(null);
  const [filters, setFilters] = useState<GetBulletinDto>({} as GetBulletinDto);
  const defaultDebounceDelay = 300;

  useEffect(() => {
    if (!isOpen) {
      setActiveModal(null);
    }
  }, [isOpen]);

  const {
    data: bulletins,
    isLoading,
    refetch: refetchBulletin,
  } = useGetBulletins(filters);

  console.log(bulletins);

  const { mutate: createEvent } = useCreateBulletin({
    onSuccess: () => {
      toast.success('Bulletin created successfully');
      setIsOpen(false);
      refetchBulletin();
    },
    onError: () => {
      toast.error('Failed to create bulletin');
      setIsOpen(false);
    },
  });

  const { mutate: updateBulletin } = useUpdateBulletin({
    onSuccess: () => {
      toast.success('Bulletin updated successfully');
      setIsOpen(false);
      refetchBulletin();
    },
    onError: () => {
      toast.error('Failed to update bulletin');

      setIsOpen(false);
    },
  });

  const { mutate: deleteEvent } = useDeleteBulletin({
    onSuccess: () => {
      toast.success('Bulletin deleted successfully');
      refetchBulletin();
      setIsOpen(false);
    },
    onError: () => {
      toast.error('Failed to delete bulletin');
      setIsOpen(false);
    },
  });

  const onUpdate = (bulletin: Bulletin) => {
    setBulletin(bulletin);
    setActiveModal(BulletinDialogEnum.EDIT_BULLETIN_DIALOG);
    setIsOpen(true);
  };

  const onDelete = (bulletin: Bulletin) => {
    setBulletin(bulletin);
    setActiveModal(BulletinDialogEnum.DELETE_MODAL);
    setIsOpen(true);
  };

  const onCreate = () => {
    setActiveModal(BulletinDialogEnum.ADD_BULLETIN_DIALOG);
    setIsOpen(true);
  };

  const handleAddBulletin = (data: CreateBulletinData) => {
    createEvent({ bulletinData: data });
  };

  const handleUpdateBulletin = (data: Partial<CreateBulletinData>) => {
    if (bulletin) {
      updateBulletin({ bulletinData: data, bulletinId: bulletin.id });
    }
  };

  const handleDeleteBulletin = () => {
    if (bulletin) {
      deleteEvent({ bulletinId: bulletin.id });
    }
  };

  const handleSearch = debounce((value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  }, defaultDebounceDelay);

  const handleCategoryFilter = (value: string) => {
    setFilters((prev) => ({ ...prev, type: value }));
  };

  const columns: ColumnDef<Bulletin>[] = useMemo(
    () => bulletinColumns({ onDelete, onUpdate }),
    []
  );

  const tabOptions = ['All', 'Games', 'Toys', 'Industrial', 'Garden'];

  const modals = {
    [BulletinDialogEnum.ADD_BULLETIN_DIALOG]: (
      <BulletinDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addBulletin={handleAddBulletin}
      />
    ),
    [BulletinDialogEnum.EDIT_BULLETIN_DIALOG]: (
      <BulletinDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateBulletin={handleUpdateBulletin}
      />
    ),
    [BulletinDialogEnum.DELETE_MODAL]: (
      <DeleteDialog
        entity={bulletin}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDeleteBulletin}
      />
    ),
  };

  return (
    <div className="mx-auto space-y-6">
      <Card className="p-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">
            Bulletins Dashboard
          </CardTitle>
          <Button onClick={onCreate}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Bulletin
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={bulletins || []}
            isDataLoading={isLoading}
            rowId="id"
            searchFilter={handleSearch}
            enableCategoryFilter
            categoryFilter={handleCategoryFilter}
            categoryOptions={tabOptions}
          />
        </CardContent>
      </Card>
      {activeModal && modals[activeModal]}
    </div>
  );
};

export default BulletinsPage;
