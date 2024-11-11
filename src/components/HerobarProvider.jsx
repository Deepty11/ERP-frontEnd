import React, { Children, createContext, useContext, useState } from 'react'

const HerobarContext = createContext()
export const useHerobar = () => useContext(HerobarContext)

const HerobarProvider = ({children}) => {
    const [title, setTitle] = useState('')
    const [buttonTitle, setButtonTitle] = useState('')
    const [buttonAction, setButtonAction] = useState(null)

    const updateHerobar = (title, buttonTitle, buttonAction) => {
        setTitle(title)
        setButtonTitle(buttonTitle)
        setButtonAction(() => buttonAction)
    }

    return (
        <HerobarContext.Provider value={{ title, buttonTitle, buttonAction, updateHerobar }}>
            {children}
        </HerobarContext.Provider>
    )
}

export default HerobarProvider