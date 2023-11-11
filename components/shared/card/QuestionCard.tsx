import Link from "next/link";
import RenderTag from "../RenderTag";
import Metric from "../Metric";
import { getTimeStamp } from "@/lib/utils";

interface Props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    pic: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3
              className="sm:h3-semibold base-semibold 
            text-dark200_light900 line-clamp-1 flex-1"
            >
              {title}
            </h3>
          </Link>
        </div>
        {/* If signed in add edit delete action */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} name={tag.name} _id={tag._id} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          value={author.name}
          alt="Upvotes"
          href={`/profile/${author._id}`}
          title={`asked ${getTimeStamp(createdAt)}`}
          isAuthor
          textStyles="body-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          value={upvotes}
          alt="Upvotes"
          title={` ${upvotes <= 1 ? "Vote" : "Votes"}`}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          value={answers.length}
          alt="answers"
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          value={views}
          alt="Views"
          title={`${views <= 1 ? "View" : "views"}`}
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
