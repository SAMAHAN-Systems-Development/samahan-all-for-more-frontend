import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/components/shadcn-ui/responsive-modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui/select';
import { Button } from '@/components/shadcn-ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/form';
import { Input } from '@/components/shadcn-ui/input';
import { createEventSchema } from '@/form-schemas/event-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Create } from 'sharp';
import { z } from 'zod';
import { Textarea } from '@/components/shadcn-ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn-ui/popover';
import { CalendarIcon, CheckIcon, FileIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/shadcn-ui/calendar';
import { TimePicker } from '@/components/shadcn-ui/time-picker';
import Dropzone from './Dropzone';
import { CaretSortIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Event } from '@/lib/types/entities/event.type';
import { CreateEventData } from '@/lib/types/dto/createEventData.type';
import { createBulletinSchema } from '@/form-schemas/bulletin-schema';
import { useState } from 'react';
import { useGetCategories } from '@/lib/queries/categoryQueries';

type BulletinDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  bulletin?: Bulletin | null;
  addBulletin?: (data: CreateBulletinData) => void;
  updateBulletin?: (data: Partial<CreateBulletinData>) => void;
};

const BulletinDialog = ({
  isOpen,
  setIsOpen,
  bulletin,
  addBulletin,
  updateBulletin,
}: BulletinDialogProps) => {
  const [deletedAttachments, setDeletedAttachments] = useState<number[]>([]);

  const { data: categories } = useGetCategories();
  console.log(categories);

  const form = useForm<z.infer<typeof createBulletinSchema>>({
    resolver: zodResolver(createBulletinSchema),
    defaultValues: {
      title: bulletin?.title || '',
      content: bulletin?.content || '',
      category_id: bulletin?.category_id || undefined,
      published_at: bulletin?.published_at || new Date(),
      file: undefined,
    },
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
  });

  const handleOnDrop = (acceptedFiles: FileList | null) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const allowedTypes = [
        { name: 'jpeg', types: ['image/jpeg'] },
        { name: 'png', types: ['image/png'] },
        { name: 'pdf', types: ['application/pdf'] },
      ];
      const fileType = allowedTypes.find((allowedType) =>
        allowedType.types.find((type) => type === acceptedFiles[0].type)
      );
      if (!fileType) {
        form.setError('file', {
          message: 'File type is not valid',
          type: 'typeError',
        });
      } else {
        form.setValue('file', acceptedFiles[0]);
        form.clearErrors('file');
      }
    } else {
      form.setError('file', {
        message: 'File is required',
        type: 'typeError',
      });
    }
  };

  const onSubmit = (data: CreateBulletinData) => {
    if (bulletin) {
      updateBulletin?.(data);
    } else {
      addBulletin?.(data);
    }
  };

  const dialogTitle = bulletin ? `${bulletin.title}` : 'Add New Bulletin';

  const renderCategoryOptions = categories?.map((category) => (
    <SelectItem key={category.id} value={category.id.toString()}>
      {category.name}
    </SelectItem>
  ));

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>{dialogTitle}</ResponsiveModalTitle>
        </ResponsiveModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bulletin Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>{renderCategoryOptions}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bulletin Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="published_at"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Publish Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Bulletin Attachments</FormLabel>
                  <FormControl>
                    <Dropzone
                      {...field}
                      dropMessage="Drop files or click here"
                      handleOnDrop={handleOnDrop}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {bulletin && bulletin.pdfAttachments.length > 0 && (
              <div>{/* TODO - display current attachments */}</div>
            )}
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default BulletinDialog;
