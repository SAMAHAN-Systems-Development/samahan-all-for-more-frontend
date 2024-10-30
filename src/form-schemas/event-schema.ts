import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  registration_link: z.string({
    required_error: 'Registration link is required',
  }),
  start_time: z.date({ required_error: 'Start time is required' }),
  end_time: z.date({ required_error: 'End time is required' }),
  location_id: z.number({ required_error: 'Location is required' }),
  thumbnail: z
    .instanceof(File)
    .nullable()
    .optional()
    .refine(
      (file) => (file ? file.size <= 50000000 : true),
      'Max file size is 50MB'
    )
    .refine(
      (file) =>
        file
          ? ['image/jpeg', 'image/png', 'image/gif'].includes(file.type)
          : true,
      'Only JPEG, PNG, and GIF formats are supported'
    ),
  // file: z
  //   .union([z.instanceof(File), z.null()])
  //   .refine((file) => file !== null, {
  //     message: 'File is required',
  //   }),
});
