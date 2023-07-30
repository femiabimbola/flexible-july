'use client'

import { SessionInterface } from "@/common.types"
import { ChangeEvent } from "react"
import Image from "next/image"
import FormField from "./FormField"

type Props = {
  type: string,
  session: SessionInterface
}

const handleFormSubmit = (e: React.FormEvent) => { }

const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => { };

const handleStateChange = (fieldName: string, value: string) => { };

const form = {
  title: '',
  image: ''
}
// const image = null
const ProjectForm = ({ type, session }: Props) => {
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label className="flexCenter form_image-label" htmlFor='poster'>
          {!form.image && 'choose a thumbnail for your project'}
        </label>
        <input id='image' type='file' accept="image/*"
          required={type === 'create'} className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image src={form?.image} fill alt="Project poster" className="sm:p-10 object-contain z-20" />
        )}
      </div>
      <FormField title='Title' placeholder='flexibble' state={form.title}
        setState={(value:) => handleStateChange('title', value)}
      />
    </form>
  )
}
export default ProjectForm