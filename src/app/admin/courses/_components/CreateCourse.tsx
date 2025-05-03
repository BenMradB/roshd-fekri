"use client";
import * as React from "react";
import { CalendarIcon, LoaderPinwheel, XIcon } from "lucide-react";
import { toast } from "sonner";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TCreateCourseParams } from "@/types/action.params";
import { TCourse, TUser } from "@/types/types";
import { IResponse } from "@/server/utils/action.response";
import { createCourse } from "@/server/actions/course/course.create";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  startDate: z.date(),
  endDate: z.date(),
});

type Props = {
  user: TUser;
  isCreatingCourse: boolean;
  toggleState: () => void;
  btnClassName?: string;
};

const CreateCourse = ({
  user,
  isCreatingCourse,
  toggleState,
  btnClassName,
}: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: new Date(),
      // default endDate to 3 days from now
      endDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    },
  });
  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const params: TCreateCourseParams = {
      name: values.name,
      description: values.description,
      owner: user._id,
      startDate: values.startDate,
      endDate: values.endDate,
    };

    // The startData should be atleast 3 days before the endDate
    const startDate = new Date(values.startDate);
    const endDate = new Date(values.endDate);
    const threeDaysLater = new Date(startDate);

    threeDaysLater.setDate(startDate.getDate() + 3);

    if (threeDaysLater > endDate) {
      toast.error(
        "يجب أن يكون تاريخ البداية 3 أيام على الأقل قبل تاريخ النهاية"
      );
      return;
    }

    const response: IResponse<TCourse | null> = await createCourse(params);

    if (response.status === "success") {
      console.log("Course created successfully:", response.data);
      toast.success("تم انشاء الدورة بنجاح");
      form.reset();
      toggleState();
      router.refresh();
    } else {
      console.error("Error creating course:", response.message);
    }
  }

  return (
    <>
      <Button
        onClick={() => toggleState()}
        className={cn(
          "w-[70%] mx-auto rounded-none outline-none border  bg-transparent font-extrabold text-xl h-[50px] text-[#092e24] cursor-pointer hover:bg-[#092e24] hover:text-white border-[#092e24]",
          isCreatingCourse && "blur-md pointer-events-none",
          btnClassName
        )}
      >
        إنشاء دورة جديدة
      </Button>
      <div
        className={cn(
          "hidden w-full min-h-[80%] p-10  border-2 border-[#092e24] absolute top-1/2 left-1/2 -translate-1/2 bg-accent/70  !z-50",
          isCreatingCourse && "animate-fadeIn block"
        )}
      >
        <div className="w-full h-full flex flex-col gap-8 ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-extrabold uppercase">
              انشاء دورة جديدة
            </h2>
            <XIcon
              size={25}
              className="hover:text-[#092e24]/70 cursor-pointer"
              onClick={() => toggleState()}
            />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="w-full flex flex-col gap-4">
                      <FormLabel className="text-[#092e24] font-extrabold text-xl">
                        {" "}
                        اسم الدورة <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="اسم الدورة"
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
                        وصف الدورة <span className="text-red-600">*</span>
                      </FormLabel>
                      <Textarea
                        {...field}
                        placeholder="وصف الدورة"
                        className="resize-none w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col gap-4">
                      <FormLabel className="text-[#092e24] font-extrabold text-xl">
                        {/* Start date */}
                        تاريخ البداية <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              className={cn(
                                "w-full h-[30px] border-2 bg-transparent hover:bg-transparent cursor-pointer border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2",
                                !form.getValues("startDate") &&
                                  "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-[#092e24]" />
                              {form.getValues("startDate") ? (
                                <p className="text-[#092e24] text-sm font-extrabold">
                                  {formatDate(
                                    new Date(form.getValues("startDate"))
                                  )}
                                </p>
                              ) : (
                                <span>
                                  {/* pick a date (arabic) */}
                                  اختر تاريخا
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="!w-full  border-2 cursor-pointer border-[#092e24] !rounded-none outline-none "
                            side="bottom"
                          >
                            <Calendar
                              className="bg-transparent cursor-pointer"
                              mode="single"
                              selected={form.getValues("startDate")}
                              onSelect={(e) => {
                                console.log("e", e);
                                field.onChange(e);
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col gap-4">
                      <FormLabel className="text-[#092e24] font-extrabold text-xl">
                        {/* Start date */}
                        تاريخ النهاية <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              className={cn(
                                "w-full h-[30px] border-2 bg-transparent hover:bg-transparent cursor-pointer border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2",
                                !form.getValues("endDate") &&
                                  "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-[#092e24]" />
                              {form.getValues("endDate") ? (
                                <p className="text-[#092e24] text-sm font-extrabold">
                                  {formatDate(
                                    new Date(form.getValues("endDate"))
                                  )}
                                </p>
                              ) : (
                                <span>
                                  {/* pick a endDate (arabic) */}
                                  اختر تاريخا
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="!w-full  border-2 cursor-pointer border-[#092e24] !rounded-none outline-none "
                            side="bottom"
                          >
                            <Calendar
                              lang="arabic"
                              className="bg-transparent cursor-pointer"
                              mode="single"
                              selected={form.getValues("endDate")}
                              onSelect={(e) => {
                                console.log("e", e);
                                field.onChange(e);
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                disabled={isSubmitting || !isValid}
                className="w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
              >
                {/* Create course */}
                {isSubmitting ? (
                  <div className="animate-pulse flex items-center justify-center gap-x-2 ">
                    <span className="">جاري انشاء الدورة</span>
                    <LoaderPinwheel className="animate-spin" size={15} />
                  </div>
                ) : (
                  "انشاء الدورة"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
