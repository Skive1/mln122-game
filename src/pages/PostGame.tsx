import { useState, useEffect } from 'react'

interface PostGameProps {
    winner: number | null
    onPlayAgain: () => void
}

function PostGame({ winner }: PostGameProps) {
    const [animateDecorations, setAnimateDecorations] = useState(false)

    useEffect(() => {
        // Phát winning sound khi trang xuất hiện
        const playWinningSound = () => {
            try {
                const audio = new Audio('/post-game/winning.mp3')
                audio.volume = 0.7 // Điều chỉnh âm lượng (0-1)
                audio.play().catch(error => {
                    console.log('Could not play audio:', error)
                })
            } catch (error) {
                console.log('Audio not supported:', error)
            }
        }

        // Phát sound ngay khi component mount
        playWinningSound()

        // Delay animation decorations
        setTimeout(() => {
            setAnimateDecorations(true)
        }, 1000)
    }, [])

    const getWinnerText = () => {
        if (winner === 1) return "Swimmer 1"
        if (winner === 2) return "Swimmer 2"
        return "Game Over!"
    }

    const getWinnerColor = () => {
        if (winner === 1) return "#3b82f6" // Blue
        if (winner === 2) return "#ef4444" // Red
        return "#6b7280" // Gray
    }

    return (
        <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: 'rgb(129, 207, 255)' }}>
            {/* Pool Background */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/post-game/post_pool.gif"
                    alt="Victory Pool"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Decorations - Left side falling */}
            <div className="absolute left-0 top-0 z-20">
                {Array.from({ length: 1 }).map((_, index) => (
                    <img
                        key={`left-${index}`}
                        src="/post-game/decorattion.gif"
                        alt="Decoration"
                        className={`w-100 h-100 transition-all duration-1000 ${
                            animateDecorations 
                                ? 'opacity-100 transform translate-y-0 rotate-12' 
                                : 'opacity-0 transform -translate-y-full'
                        }`}
                        style={{
                            transitionDelay: `200ms`,
                            filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))',
                        }}
                    />
                ))}
            </div>

            {/* Decorations - Right side falling */}
            <div className="absolute right-0 top-0 z-20">
                {Array.from({ length: 1 }).map((_, index) => (
                    <img
                        key={`right-${index}`}
                        src="/post-game/decorattion.gif"
                        alt="Decoration"
                        className={`w-100 h-100 transition-all duration-1000 ${
                            animateDecorations 
                                ? 'opacity-100 transform translate-y-0 -rotate-12' 
                                : 'opacity-0 transform -translate-y-full'
                        }`}
                        style={{
                            transitionDelay: `200ms`,
                            filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))',
                        }}
                    />
                ))}
            </div>

            {/* Main Victory Content */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center z-30 transition-all duration-1000`}>
                {/* Medal with winner info */}
                <div className="relative mb-8">
                    {/* Medal Ribbons/Straps */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10" style={{ top: '-400px' }}>
                        {/* Left Ribbon */}
                        <div 
                            className="absolute"
                            style={{
                                width: '80px',
                                height: '500px',
                                background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #dc2626 100%)',
                                left: '120px',
                                top: '0',
                                transform: 'rotate(30deg)',
                                borderRadius: '3px',
                                boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                            }}
                        >
                            {/* White stripe on left ribbon */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    width: '10px',
                                    height: '100%',
                                    background: 'white',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    opacity: 0.9
                                }}
                            />
                        </div>
                        
                        {/* Right Ribbon */}
                        <div 
                            className="absolute"
                            style={{
                                width: '80px',
                                height: '500px',
                                background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #dc2626 100%)',
                                right: '120px',
                                top: '0',
                                transform: 'rotate(-30deg)',
                                borderRadius: '3px',
                                boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                            }}
                        >
                            {/* White stripe on right ribbon */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    width: '10px',
                                    height: '100%',
                                    background: 'white',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    opacity: 0.9
                                }}
                            />
                        </div>
                    </div>

                    <img
                        src="/post-game/medal.png"
                        alt="Victory Medal"
                        className="w-64 h-64 object-contain relative z-20"
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))',
                        }}
                    />
                    
                    {/* Winner text overlay on medal */}
                    <div className="absolute inset-0 flex flex-col items-center z-30" style={{ paddingTop: '120px' }}>
                        <h1 
                            className="text-2xl font-bold mb-2 text-center"
                            style={{
                                color: getWinnerColor(),
                                fontFamily: 'Sora, sans-serif',
                                textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                            }}
                        >
                            {getWinnerText()}
                        </h1>
                        
                        <div 
                            className="text-2xl font-bold mb-2 text-center"
                            style={{
                                color: getWinnerColor(),
                                fontFamily: 'Sora, sans-serif',
                                textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                            }}
                        >
                            WIN
                        </div>
                    </div>
                </div>

                {/* Victory Message */}
                <div className="text-center mb-8 px-8">
                    <h2 
                        className="text-4xl font-bold mb-4"
                        style={{
                            color: 'rgb(46,82,96)',
                            fontFamily: 'Sora, sans-serif',
                            textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                        }}
                    >
                        🎉 Congratulations! 🎉
                    </h2>
                    
                    <p 
                        className="text-xl"
                        style={{
                            color: 'rgb(46,82,96)',
                            fontFamily: 'Sora, sans-serif',
                            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                        }}
                    >
                        {winner ? `Swimmer ${winner} has won the race!` : 'Thanks for playing!'}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6">
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            boxShadow: '0 8px 25px rgba(107, 114, 128, 0.3)',
                        }}
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostGame
