"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import * as SignUp from "@clerk/elements/sign-up";
import { Separator } from "@radix-ui/react-separator";

interface Props {
  action: "sign-in" | "sign-up";
}

const CustomAuthForm = ({ action }: Props) => (
  <div className="w-[70%] mx-auto">
    {action === "sign-up" ? (
      <SignUp.Root>
        <SignUp.Step name="start" className="w-full grid space-y-6">
          <div className="text-center sm:text-right">
            {/* <Image
              src={"/icons/logo.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto sm:m-0 h-26 w-26 rounded-full object-cover"
            /> */}
            <p className="text-4xl font-extrabold text-gradient">
              إنشء حساب وإنضم إلى مجتمعنا
            </p>
          </div>
          <Clerk.GlobalError className="block text-sm text-red-400" />

          <div className="space-y-4">
            <Clerk.Field name="identifier" className="grid space-y-4">
              <Clerk.Label className="text-xl font-normal primary-text">
                البريد الإلكتروني
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full bg-white px-3.5 py-4 text-sm outline-none ring-1 ring-inset ring-[#092e24] hover:ring-[#092e24] focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-500"
              />
              <Clerk.FieldError className="block text-sm text-red-600" />
            </Clerk.Field>
            <Clerk.Field name="password" className="grid space-y-4">
              <Clerk.Label className="text-xl font-normal primary-text">
                {" "}
                كلمة المرور
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full bg-white px-3.5 py-4 text-sm outline-none ring-1 ring-inset ring-[#092e24] hover:ring-[#092e24] focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-500"
              />
              <Clerk.FieldError className="block text-sm text-red-600" />
            </Clerk.Field>
          </div>

          <div id="clerk-captcha"></div>

          <SignUp.Action
            submit
            className="w-full opacity-90 hover:opacity-100 primary-bg text-white cursor-pointer px-3.5 py-4 text-center text-xl font-extrabold  shadow outline-none ring-1 ring-inset ring-zinc-950  focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            إنشاء حساب
          </SignUp.Action>

          <Separator decorative className="w-full h-[1px] bg-zinc-200" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <Clerk.Connection
              name="google"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
            <Clerk.Connection
              name="github"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
          </div>

          <p className="text-center sm:text-right text-sm text-zinc-500">
            هل لديك حساب؟
            <Clerk.Link
              navigate="sign-in"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
            >
              تسجيل الدخول
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    ) : (
      <SignIn.Root>
        <SignIn.Step name="start" className="w-full grid space-y-6">
          <div className="text-center sm:text-right">
            {/* <Image
              src={"/icons/logo.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto sm:m-0 h-26 w-26 rounded-full object-cover"
            /> */}
            <p className="text-4xl font-extrabold text-gradient">
              تسجيل الدخول إلى حسابك
            </p>
          </div>
          <Clerk.GlobalError className="block text-sm text-red-400" />

          <div className="space-y-4">
            <Clerk.Field name="identifier" className="grid space-y-4">
              <Clerk.Label className="text-xl font-normal primary-text">
                البريد الإلكتروني
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full bg-white px-3.5 py-4 text-sm outline-none ring-1 ring-inset ring-[#092e24] hover:ring-[#092e24] focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-500"
              />
              <Clerk.FieldError className="block text-sm text-red-600" />
            </Clerk.Field>
            <Clerk.Field name="password" className="grid space-y-4">
              <Clerk.Label className="text-xl font-normal primary-text">
                كلمة المرور
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full bg-white px-3.5 py-4 text-sm outline-none ring-1 ring-inset ring-[#092e24] hover:ring-[#092e24] focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-500"
              />
              <Clerk.FieldError className="block text-sm text-red-600" />
            </Clerk.Field>
          </div>

          <div id="clerk-captcha"></div>

          <SignIn.Action
            submit
            className="w-full opacity-90 hover:opacity-100 primary-bg text-white cursor-pointer px-3.5 py-4 text-center text-xl font-extrabold  shadow outline-none ring-1 ring-inset ring-zinc-950  focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            تسجيل الدخول
          </SignIn.Action>

          <Separator decorative className="w-full h-[1px] bg-zinc-200" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <Clerk.Connection
              name="google"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
            <Clerk.Connection
              name="github"
              className="w-full flex items-center justify-center border-zinc-200 border gap-x-2 px-2 py-4 rounded-sm hover:bg-zinc-100 cursor-pointer transition-all duration-300 ease-out"
            >
              <Clerk.Icon />
            </Clerk.Connection>
          </div>

          <p className="text-center sm:text-right text-sm text-zinc-500">
            لا تملك حساب؟
            <Clerk.Link
              navigate="sign-up"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
            >
              إنشء حساب
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    )}
  </div>
);

export default CustomAuthForm;
