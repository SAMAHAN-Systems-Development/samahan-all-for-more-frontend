'use client';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '@/components/shadcn-ui/responsive-modal';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/shadcn-ui/command';
import { Button } from '@/components/shadcn-ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/form';
import { Input } from '@/components/shadcn-ui/input';
import { createEventSchema } from '@/form-schemas/event-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { CaretSortIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Event } from '@/lib/types/entities/event.type';
import { CreateEventData } from '@/lib/types/dto/createEventData.type';
import { useGetLocations } from '@/lib/queries/locationQueries';
import FileUpload from './FileUpload';

type EventDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  event?: Event | null;
  addEvent?: (data: CreateEventData) => void;
  updateEvent?: (data: Partial<CreateEventData>) => void;
};

const EventDialog = ({
  isOpen,
  setIsOpen,
  event,
  addEvent,
  updateEvent,
}: EventDialogProps) => {
  const { data: locations } = useGetLocations();
  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: event?.name ?? '',
      description: event?.description ?? '',
      start_time: event?.start_time ? new Date(event.start_time) : undefined,
      end_time: event?.end_time ? new Date(event.end_time) : undefined,
      location_id: event?.location.id ?? 0,
      registration_link: event?.registration_link ?? '',
      thumbnail: null,
      // file: undefined,
    },
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
  });

  // const handleOnDrop = (acceptedFiles: FileList | null) => {
  //   if (acceptedFiles && acceptedFiles.length > 0) {
  //     const allowedTypes = [
  //       { name: 'jpeg', types: ['image/jpeg'] },
  //       { name: 'png', types: ['image/png'] },
  //       { name: 'gif', types: ['image/gif'] },
  //     ];
  //     const fileType = allowedTypes.find((allowedType) =>
  //       allowedType.types.find((type) => type === acceptedFiles[0].type)
  //     );
  //     if (!fileType) {
  //       form.setError('file', {
  //         message: 'File type is not valid',
  //         type: 'typeError',
  //       });
  //     } else {
  //       form.setValue('file', acceptedFiles[0]);
  //       form.clearErrors('file');
  //     }
  //   } else {
  //     form.setError('file', {
  //       message: 'File is required',
  //       type: 'typeError',
  //     });
  //   }
  // };

  const onSubmit = (data: CreateEventData) => {
    console.log('Submitted data:', JSON.stringify(data, null, 2));
    if (event) {
      updateEvent?.(data);
    } else {
      addEvent?.(data);
    }
  };

  const dialogTitle = event ? `${event.name}` : 'Add New Event';
  const locationOptions = locations?.map((location) => ({
    label: location.name,
    value: location.id,
  }));

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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registration_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Registration Link</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-left">Start Time</FormLabel>
                  <Popover>
                    <FormControl>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-[280px] justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, 'PPP HH:mm:ss')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                    </FormControl>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={field.onChange}
                        initialFocus
                      />
                      <div className="p-3 border-t border-border">
                        <TimePicker
                          setDate={field.onChange}
                          date={new Date(field.value)}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-left">End Time</FormLabel>
                  <Popover>
                    <FormControl>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-[280px] justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, 'PPP HH:mm:ss')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                    </FormControl>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={field.onChange}
                        initialFocus
                      />
                      <div className="p-3 border-t border-border">
                        <TimePicker
                          setDate={field.onChange}
                          date={new Date(field.value)}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location_id"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Event Location</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-[200px] justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? locationOptions?.find(
                                (location) =>
                                  location.value.toString() ===
                                  field.value.toString()
                              )?.label
                            : 'Select location'}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search framework..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>
                            <p>No location found.</p>
                            <Link href="/admin/locations" className="underline">
                              Click to add
                            </Link>
                          </CommandEmpty>
                          <CommandGroup>
                            {locationOptions?.map((location) => (
                              <CommandItem
                                value={location.label}
                                key={location.value}
                                onSelect={() => {
                                  form.setValue(
                                    'location_id',
                                    Number(location.value)
                                  );
                                }}
                              >
                                {location.label}
                                <CheckIcon
                                  className={cn(
                                    'ml-auto h-4 w-4',
                                    location.value.toString() ===
                                      field.value.toString()
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Event Images</FormLabel>
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
            /> */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Thumbnail</FormLabel>
                  <FormControl>
                    <FileUpload
                      value={field.value}
                      onChange={field.onChange}
                      multiple={false}
                      onError={(error) => {
                        form.setError('thumbnail', { message: error });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default EventDialog;
