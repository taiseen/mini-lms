"use client";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import routes from "@/constants/routes";
import Link from "next/link";
import * as z from "zod";
import {
  FormDescription,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  Form,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  // resolver aspect... which schema to use!?
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const isDisabled = isSubmitting || !isValid;

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    className="rounded placeholder:text-slate-500"
                    placeholder="e.g web design"
                  />
                </FormControl>

                <FormDescription>
                  What will be teach in this course?
                </FormDescription>
              </FormItem>
            )}
          />

          <div className="flex items-center gap-3">
            <Link href={routes.teacherCoursesPage} className="bg-red-400 btn">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={isDisabled}
              className={`${
                isDisabled ? "bg-green-400/50 text-black/50" : "bg-green-400"
              } btn`}
            >
              Continue
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreatePage;
