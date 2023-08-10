"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { categoryFilters } from "@/constant"

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const SearchParams = useSearchParams();

  // This is the  currently selected
  const category = SearchParams.get('category')

  const handleTags = (filter: string) => {
    router.push(`${pathName}?category=${filter}`)
  }

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">

        {categoryFilters.map((filter) => (
          <button key={filter} type='button'
            onClick={() => handleTags(filter)}
            className={`${category === filter ? 'font-medium bg-light-white-300' : 'font-normal'} px-4 py-3 rounded-lg
            capitalize whitespace-nowrap`}
          >
            {filter}
          </button >
        ))}

      </ul>
    </div>
  )
}

export default Categories