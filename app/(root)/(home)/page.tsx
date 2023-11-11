import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "../../../components/shared/search/LocalSearchbar";
import Filter from "../../../components/shared/Filter";
import { HomePageFilters } from "@/constants/Filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/card/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript with React?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "React" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      pic: "john-doe-pic.jpg",
    },
    upvotes: 10,
    views: 1,
    answers: [],
    createdAt: new Date("2021-01-15"),
  },
  {
    _id: "2",
    title: "Best practices for handling asynchronous code in TypeScript?",
    tags: [
      { _id: "tag3", name: "TypeScript" },
      { _id: "tag4", name: "Async" },
    ],
    author: {
      _id: "author2",
      name: "Jane Smith",
      pic: "jane-smith-pic.jpg",
    },
    upvotes: 7,
    views: 80,
    answers: [],
    createdAt: new Date("2023-02-20"),
  },
  {
    _id: "3",
    title: "How to deploy a Node.js app on AWS Lambda?",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "AWS" },
    ],
    author: {
      _id: "author3",
      name: "Mike Johnson",
      pic: "mike-johnson-pic.jpg",
    },
    upvotes: 5,
    views: 60,
    answers: [],
    createdAt: new Date("2023-03-10"),
  },
];

export default function Home() {
  return (
    <>
      <div
        className="flex w-full flex-col-reverse justify-between gap-4 
      sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] "
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              _id={item._id}
              key={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
