'use client'

import { SessionInterface } from "@/common.types"
import { ChangeEvent } from "react"

type Props = {
	type: string,
	session: SessionInterface
}

const handleFormSubmit = (e: React.FormEvent) => { }

const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => { };

const image = null
const ProjectForm = ({ type, session }: Props) => {
	return (
		<form onSubmit={handleFormSubmit} className="flexStart form">
			<div className="flexStart form_image-container">
				<label className="flexCenter form_image-label" htmlFor='poster'>
					{!image && 'choose a thumbnail for your project'}
				</label>
				<input id='image' type='file' accept="image/*"
					required={type === 'create'} className="form_image-input"
					onChange={handleChangeImage}
				/>

			</div>
		</form>
	)
}
export default ProjectForm