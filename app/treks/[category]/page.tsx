"use client";
import { useSearchParams } from "next/navigation";

export default function Treks({ params }: { params: { category: string } }) {
  const heading: { [key: string]: string } = {
    all: "All Treks",
    difficulty: "Treks by Difficulty",
    seasons: "Treks by season",
    months: 'Trek by month'
  };
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center justify-center w-full p-4 text-2xl font-semibold md:justify-start">{heading[params.category]}</div>
    </div>
  );
}
