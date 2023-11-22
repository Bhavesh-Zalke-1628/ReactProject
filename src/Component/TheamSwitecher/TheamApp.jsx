import React, { useEffect, useState } from 'react'
import { TheamProvider } from './Context/Theam'
import ThemeButton from './Component/TheamButton'
import Card from './Component/Card'


function TheamApp() {
    const [theamMode, setTheamMode] = useState("light")

    const lightTheam = () => {
        setTheamMode('light')
    }

    const darkTheam = () => {
        setTheamMode('dark')
    }

    // actual change in the theam 
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(theamMode)
    }, [theamMode]);
    return (
        <TheamProvider value={{ theamMode, darkTheam, lightTheam }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theam button */}
                        <ThemeButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/* card */}
                        <Card />
                    </div>
                </div>

            </div>
        </TheamProvider>
    )
}

export default TheamApp
