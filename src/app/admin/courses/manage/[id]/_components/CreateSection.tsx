"use client";
import { cn } from "@/lib/utils";
import { LoaderPinwheel, PlusCircle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { TCourse, TSection } from "@/types/types";
import { IResponse } from "@/server/utils/action.response";
import { createSection } from "@/server/actions/section/section.create";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(5, "Name must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
});

type Props = {
  course: TCourse;
  className?: string;
};

const CreateSection = ({ course, className }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (!isValid) {
      return;
    }

    const response: IResponse<TSection> = await createSection({
      ...values,
      course: course._id,
    });

    if (response.status === "error") {
      console.error(response.message);
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
    form.reset();
    router.refresh();
  }
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger
          asChild
          className="hover:bg-[#092e24]/10  p-2 rounded-full"
        >
          <PlusCircle className="cursor-pointer resize-none  h-11 w-11" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] border-2 border-[#092e24] rounded-none">
          <DialogHeader className="hidden">
            <DialogTitle>
              {/* Create Section: In arabic */}
              انشاء قسم
            </DialogTitle>
            <DialogDescription>
              {/* Create Section Description: In arabic */}
              انشاء قسم جديد للدورة
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="w-full flex flex-col gap-4">
                      <FormLabel className="text-[#092e24] font-extrabold text-2xl uppercase">
                        {" "}
                        عنوان القسم
                        <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="عنوان القسم"
                          className="w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <div className="w-full flex flex-col gap-4">
                      <FormLabel className="text-[#092e24] font-extrabold text-xl">
                        وصف القسم
                        <span className="text-red-600">*</span>
                      </FormLabel>
                      <Textarea
                        {...field}
                        placeholder="وصف القسم"
                        className="resize-none w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  className="w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
                >
                  {isSubmitting ? (
                    <div className="animate-pulse flex items-center justify-center gap-x-2 ">
                      <span className="">جاري انشاء القسم</span>
                      <LoaderPinwheel className="animate-spin" size={15} />
                    </div>
                  ) : (
                    "انشاء قسم"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateSection;
