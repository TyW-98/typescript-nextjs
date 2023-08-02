import React from "react";
import Link from "next/link";
import CardText from "./CardText";

type Props = {
  result: Result;
};

export default function ResultCard({ result }: Props) {
  return (
    <>
      {result?.thumbnail?.source ? (
        // Card With Thumbnail
        <article className="m-4 max-w-lg">
          <div className="flex flex-row gap-4">
            <img
              src={result.thumbnail.source}
              width={result.thumbnail.width}
              height={result.thumbnail.height}
              alt={result.title}
              loading="lazy"
            />
          </div>
          <CardText result={result} />
        </article>
      ) : (
        // Card Without Thumbnail
        <article className="m-4 max-w-lg">
          <CardText result={result} />
        </article>
      )}
    </>
  );
}
