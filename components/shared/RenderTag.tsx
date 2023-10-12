import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface RenderTagProps {
  _id: number;
  showCount?: boolean;
  key: number;
  name: string;
  total?: number;
}

const RenderTag = ({ key, _id, showCount, name, total }: RenderTagProps) => {
  return (
    <Link
      key={key}
      href={`/tags/${_id}`}
      className="flex items-center justify-between gap-2"
    >
      <Badge
        className="subtle-medium background-light800_dark300 text-light400_light500
        rounded-md border-none px-4 py-2 uppercase"
      >
        {name}
      </Badge>
      {showCount && <p className="small-medium text-dark500_light700">{total}</p>}
    </Link>
  );
};

export default RenderTag;
