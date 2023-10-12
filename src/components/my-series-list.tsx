"use client";

import { SeriesInfo } from "@/shared/interfaces/series-info";
import LinkButton from "./link-button";
import { seriesList } from "@/shared/data/data";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function MySeriesList() {
  return (
    <div className="w-full px-1.5 flex flex-col space-y-10">
      <SeriesListTitle />
      <div className="w-full flex flex-col space-y-8">
        {seriesList.map((series) => (
          <MySeries key={series.id} {...series} />
        ))}
      </div>
    </div>
  );
}

function MySeries(series: SeriesInfo) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full flex flex-row justify-between items-center rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-zinc-300 focus-visible:ring-opacity-75">
            <div className="px-2 text-zinc-800 text-base font-bold">
              {series.name}
            </div>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-4 w-4 text-zinc-800`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="">
            <div className="w-full grid grid-cols-2 gap-2 px-2">
              {series.projects.map((project) => (
                <LinkButton
                  key={project.id}
                  title={project.name}
                  href={project.href}
                  color={project.color}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function SeriesListTitle() {
  return (
    <div className="px-2 space-y-2.5">
      <div className="text-zinc-800  text-xl font-extrabold">프로젝트 목록</div>
      <div className="px-1">
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-[0.6rem] h-[0.6rem] bg-zinc-800" />
          <div className="text-[0.45rem] font-extralight">이용 가능</div>
        </div>
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-[0.6rem] h-[0.6rem] bg-yellow-500" />
          <div className="text-[0.45rem] font-extralight">
            리뉴얼 중 (하지만 이용 가능)
          </div>
        </div>
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-[0.6rem] h-[0.6rem] bg-orange-500" />
          <div className="text-[0.45rem] font-extralight">
            리뉴얼 중 (이용 불가)
          </div>
        </div>
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-[0.6rem] h-[0.6rem] bg-gray-300" />
          <div className="text-[0.45rem] font-extralight">
            서비스 종료 (이용 불가)
          </div>
        </div>
        <div className="flex flex-row items-center space-x-1.5">
          <div className="w-[0.6rem] h-[0.6rem] bg-white border border-zinc-800" />
          <div className="text-[0.45rem] font-extralight">
            제작 중 (Coming Soon)
          </div>
        </div>
      </div>
    </div>
  );
}
