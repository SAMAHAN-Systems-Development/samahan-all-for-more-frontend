import { z } from 'zod';

const isStartTimeBeforeEndTime = (start_time: string, end_time: string) => {
  return new Date(start_time) < new Date(end_time);
};

export const createEventSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    registration_link: z
      .string({ required_error: 'Registration link is required' })
      .url('Invalid URL'),
    start_time: z.string({ required_error: 'Start time is required' }),
    end_time: z.string({ required_error: 'End time is required' }),
    location_id: z.number({ required_error: 'Location is required' }),
    file: z
      .union([z.instanceof(File), z.null()])
      .refine((file) => file !== null, {
        message: 'File is required',
      }),
  })
  .superRefine((data, ctx) => {
    if (!isStartTimeBeforeEndTime(data.start_time, data.end_time)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Start time must be before end time',
        path: ['start_time'],
      });
    }
  });
