import React, { useState } from 'react'
function BgApp() {
    const [color, setColor] = useState('')
    return (
        <div className=' w-screen h-screen relative  px-72 text-white' style={{ backgroundColor: color ? color : 'red' }}>
            <div className=' absolute bottom-5 bg-yellow-100 rounded-lg self-center w-fit px-5 h-14 py-2'>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'red' }}
                    onClick={() => setColor('red')}
                >
                    red
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'yellow' }}
                    onClick={() => setColor('yellow')}
                >
                    yellow
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'green' }}
                    onClick={() => setColor('green')}
                >
                    green
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'pink' }}
                    onClick={() => setColor('pink')}
                >
                    pink
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'purple' }}
                    onClick={() => setColor('purple')}
                >
                    purple
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'cyan' }}
                    onClick={() => setColor('cyan')}
                >
                    cyan
                </button>
                <button
                    className=' px-5 py-2 self-center uppercase mr-3 font-semibold text-lg rounded-xl' style={{ backgroundColor: 'blue' }}
                    onClick={() => setColor('blue')}
                >
                    blue
                </button>
            </div>
        </div>
    )
}

export default BgApp
