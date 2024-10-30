'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loginSchema } from 'src/form-schemas/login-shema';
import { Card } from '@/components/shadcn-ui/card';

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
import { Button } from '@/components/shadcn-ui/button';

import SamahanLogo from '/public/images/about-page/Blue SMHN Logo Normal.png';
import Image from 'next/image';
import { useLoginUser } from '@/lib/mutations/loginMutations';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const LoginPage = () => {
  const router = useRouter();

  const { mutate: loginUser } = useLoginUser({
    onSuccess: (data) => {
      toast.success('Login successful');
      router.push('/admin/');
    },
    onError: (error) => {
      toast.error('Invalid Credentials');
    },
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    loginUser({ loginData: data });
  };

  return (
    <Card className="w-96 rounded-lg p-6">
      <div className="w-full flex justify-center mb-10">
        <Image src={SamahanLogo} alt="Samahan Logo" width={200} height={200} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
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
    </Card>
  );
};

export default LoginPage;
