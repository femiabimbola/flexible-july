import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>,
  setState: (value: string) => void;
}

const CustomMenu = ({ title, state, filters }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      CustomMenu
    </div>
  )
}

export default CustomMenu