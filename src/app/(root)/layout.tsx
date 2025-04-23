import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero
        title="الله خير الرازقين"
        subTitle='
                  عندما تشتد عليك الحياة وتصبح الأمور صعبة إلى درجة لا تستطيع
                  معها الاحتمال، توقف للحظة وتفكر في نعم الله عليك. تذكر أن
                  البلاء سنة من سنن الحياة، وأن الشكر يجلب المزيد، كما قال
                  تعالى: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ". فبدلًا
                  من التركيز على ما يؤلمك، تأمل في ما أعطاك الله من نعم لا تُعد
                  ولا تُحصى، وستشعر بالسكينة تملأ قلبك، والرضا يطمئن روحك.
      '
        actionText="اكتشف الدورات"
      />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
