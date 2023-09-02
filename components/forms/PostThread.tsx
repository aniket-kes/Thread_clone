"use client"

import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation"; 

import { ThreadValidation } from "@/lib/validation/thread";
// import { updateUser } from "@/lib/actions/user.actions";


interface props{
    user: {
        id:string;
        objectId:string;
        username:string;
        name:string;
        bio:string;
        image:string;
    },
    btnTitle:string;
}

function PostThread({userId} : {userId: string}) {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues:{
            thread: '',
            accountId: userId
        }
    })

    const onSubmit = async () => {
        // await createThread()
    }

    return (
        <Form {...form}>
            <form
                className='flex flex-col justify-start gap-10'
                onSubmit={form.handleSubmit(onSubmit)}
            >
            
                <FormField
                control={form.control}
                name='thread'
                render={({ field }) => (
                    <FormItem className='flex w-full flex-col gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                        Content
                    </FormLabel>
                    <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                        <Textarea
                            rows={15}
                            className='account-form_input no-focus'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" className="bg-primary-500" >Post Thread</Button>
            </form>
        </Form>
    )
}

export default PostThread;