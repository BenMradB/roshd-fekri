"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";

interface Props {
  action: "sign-in" | "sign-up";
}

const CustomAuthForm = ({ action }: Props) => (
  <div className="w-[70%] mx-auto">
    <SignIn.Root>
      <SignIn.Step name="start" className="w-full grid space-y-6">
        <div className="text-center sm:text-right">
          <Image
            src={"/icons/logo.svg"}
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto sm:m-0 h-26 w-26 rounded-full object-cover"
          />
          <p className="text-4xl font-extrabold text-gradient">
            {/* action === 'sign-in' ? 'Login to your account' : 'Create an account and join our community' */}
            {action === "sign-in"
              ? "تسجيل الدخول إلى حسابك"
              : "إنشء حساب وإنضم إلى مجتمعنا"}
          </p>
        </div>
        <Clerk.GlobalError className="block text-sm text-red-400" />

        <div className="space-y-4">
          <Clerk.Field name="identifier" className="grid space-y-4">
            <Clerk.Label className="text-xl font-normal primary-text">
              {/* Email */}
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
              {/* Password */}
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
        {action === "sign-in" ? (
          <SignIn.Action
            submit
            className="w-full opacity-90 hover:opacity-100 primary-bg text-white cursor-pointer px-3.5 py-4 text-center text-xl font-extrabold  shadow outline-none ring-1 ring-inset ring-zinc-950  focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            {/* Sign in */}
            تسجيل الدخول
          </SignIn.Action>
        ) : (
          <SignUp.Action
            submit
            className="w-full opacity-90 hover:opacity-100 primary-bg text-white cursor-pointer px-3.5 py-4 text-center text-xl font-extrabold  shadow outline-none ring-1 ring-inset ring-zinc-950  focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            {/* Sign up */}
            إنشاء حساب
          </SignUp.Action>
        )}

        {/* <Separator className="bg-gradient " />

        <div className="space-y-2">
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 16"
              className="w-4"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
              />
            </svg>
            Login with Google
          </Clerk.Connection>
          <Clerk.Connection
            name="facebook"
            className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 16"
              className="w-4"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
              />
            </svg>
            Login with Facebook
          </Clerk.Connection>
        </div> */}

        <p className=" text-sm text-zinc-500">
          {/* No account?{" "} */}
          {action === "sign-in" ? "لا تملك حساب؟" : "هل لديك حساب؟"}
          <Clerk.Link
            navigate={action === "sign-in" ? "sign-up" : "sign-in"}
            className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
          >
            {/* Create an account */}
            {action === "sign-in" ? "إنشء حساب" : "تسجيل الدخول"}
          </Clerk.Link>
        </p>
      </SignIn.Step>
    </SignIn.Root>
  </div>
);

export default CustomAuthForm;
