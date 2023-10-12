import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  { _id: 2, title: "Can I get the course for free?" },
  { _id: 3, title: "Redux Toolkit Not Updating State as Expected" },
  { _id: 4, title: "Async/Await Function Not Handling Errors Properly" },
  { _id: 5, title: "How do I use express as a custom server in NextJS?" },
];

const popularTags = [
  { _id: 1, name: "NEXT JS", totalQuestions: 9 },
  { _id: 2, name: "MONGO DB", totalQuestions: 4 },
  { _id: 3, name: "REACT", totalQuestions: 4 },
  { _id: 4, name: "CSS", totalQuestions: 4 },
  { _id: 5, name: "JAVASCRIPT", totalQuestions: 3 },
];

const RightSidebar = () => {
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar 
      sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l 
       p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]"
    >
      <div className="flex flex-col gap-4">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag 
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            total={tag.totalQuestions}
            showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
