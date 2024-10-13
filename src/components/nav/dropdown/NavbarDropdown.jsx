import React, { useState } from "react"
import NavbarDropdownBtn from "./NavbarDropdownBtn"
import DropdownMenu from "./DropdownMenu"
import { motion } from "framer-motion"

const NavbarDropdown = (
  {
    items,
    btnName,
    hasLastDivider,
    hasUserAvatar,
    isUserName }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <NavbarDropdownBtn
        btnName={btnName}
        onClickFunction={() => setOpen(open => !open)}
        hasUserAvatar={hasUserAvatar}
        isUserName={isUserName} />

      {open && <DropdownMenu
        isOpen={open}
        menuItems={items}
        hasLastDivider={hasLastDivider} />}
    </>
  )
}

export default NavbarDropdown