'use client'

import { SessionInterface } from "@/common.types"
import { ChangeEvent, useState } from "react"
import Image from "next/image"
import FormField from "./FormField"
import CustomMenu from "./CustomMenu"
import { categoryFilters } from "@/constant"
import Button from "./Button"

type Props = {
  type: string,
  session: SessionInterface
}


// const image = null
const ProjectForm = ({ type, session }: Props) => {

  const handleFormSubmit = (e: React.FormEvent) => { }

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    // This prevent the reloading of the page
    e.preventDefault()
    const file = e.target.files?.[0]
    if (!file) return;
    if (!file.type.includes('image')) return alert('Upload a valid image file')
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange('image', result)
    }
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setform((prevState) => ({ ...prevState, [fieldName]: value }))
  };

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [form, setform] = useState({
    title: '',
    image: '',
    category: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: ''
  })

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
        setState={(value) => handleStateChange('title', value)}
      />
      <FormField title='Description' placeholder='discover developer projects'
        state={form.description} setState={(value) => handleStateChange('description', value)}
      />
      <FormField type='url' title='Website Url' placeholder='https://rockfortdigital.com'
        state={form.liveSiteUrl} setState={(value) => handleStateChange('liveSiteUrl', value)}
      />
      <FormField type='url' title='Github URL' placeholder='https://github.com/femiabimbola '
        state={form.githubUrl} setState={(value) => handleStateChange('githubUrl', value)}
      />
      <CustomMenu title='Category' state={form.category} filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <Button title="create" type="submit"
          leftIcon={isSubmitting ? '' : '/plus.svg'}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  )
}
export default ProjectForm