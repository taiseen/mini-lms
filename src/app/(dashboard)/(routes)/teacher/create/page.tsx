"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import routes from "@/constants/routes";
import toast from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
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
  const router = useRouter();

  // resolver aspect... which schema to use!?
  const reactHookForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = reactHookForm.formState;
  const isDisabled = isSubmitting || !isValid;

  const onSubmit = async (userInput: z.infer<typeof formSchema>) => {
    console.log(userInput);

    try {
      const response = await axios.post("api/course", userInput);

      // go to this dynamic route
      router.push(`${routes.teacherCoursesPage}/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong...", { position: "top-right" });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Name of your course</h1>
      <p className="text-sm text-slate-600">Give a title of your course</p>

      <Form {...reactHookForm}>
        <form
          onSubmit={reactHookForm.handleSubmit(onSubmit)}
          className="mt-4 space-y-4"
        >
          <FormField
            name="title"
            control={reactHookForm.control}
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
