import React from 'react'
import { useState } from 'react'
function BgApp() {
    const [color, setColor] = useState('')
    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div
                    className='flex flex-wrap justify-center gap-2 shadow-xl bg-white
                 rounded-lg px-3 py-2'>
                    <button
                    onClick={() =>{
                        setColor('red')
                    }}
                    className='outline-none shadow-lg px-4 py-2 text-xl text-white rounded-xl' style={{ backgroundColor: "red" }}>Red</button>
                    <button 
                    onClick={() =>{
                        setColor('yellow')
                    }}  className='outline-none shadow-lg px-4 py-2 text-xl text-white rounded-xl' style={{ backgroundColor: "yellow" }}>yellow</button>
                    <button 
                    onClick={() =>{
                        setColor('pink')
                    }} className='outline-none shadow-lg px-4 py-2 text-xl text-white rounded-xl' style={{ backgroundColor: "pink" }}>pink</button>
                    <button 
                    onClick={() =>{
                        setColor('green')
                    }} className='outline-none shadow-lg px-4 py-2 text-xl text-white rounded-xl' style={{ backgroundColor: "green" }}>green</button>
                </div>
            </div>
        </div>
    )
}

export default BgApp
