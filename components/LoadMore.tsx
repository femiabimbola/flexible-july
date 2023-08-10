"use client"

import { useRouter } from "next/navigation"

import Button from "./Button"

type Props = {
	startCursor: string
	endCursor: string
	hasPreviousPage: boolean
	hasNextPage?: boolean;
}

const handleNavigation = (direction: string) => {

}

const LoadMore = ({ startCursor, endCursor, hasPreviousPage, hasNextPage }: Props) => {

	const router = useRouter()

	return (
		<div className="w-full flexCenter gap-5 mt-10">
			{hasPreviousPage && (
				<Button title='First Page' handleClick={() => handleNavigation('first')} />
			)}
			{hasNextPage && (
				<Button title='Next' handleClick={() => handleNavigation('Next')} />
			)}
		</div>
	)
}

export default LoadMore;
