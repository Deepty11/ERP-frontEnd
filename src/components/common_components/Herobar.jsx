import React, { useEffect } from 'react'
import '../../css/herobar.css'
import { useHerobar } from '../HerobarProvider'

const Herobar = () => {
    const { title, buttonTitle, buttonAction } = useHerobar()
    
    return title && <section className="is-hero-bar">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <h1 className="title">{title}</h1>
                {buttonTitle &&
                    <button
                        className="button light"
                        onClick={buttonAction}>
                        {buttonTitle}
                    </button>}
            </div>
        </section >

}

export default Herobar