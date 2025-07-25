import { useState, useEffect, useRef } from 'react'
import { question } from '../data/questions'

interface InGameProps {
    onGameEnd: (winner: number | null) => void
}

function InGame({ onGameEnd }: InGameProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [answeredQuestions, setAnsweredQuestions] = useState(0)
    const [showFeedback, setShowFeedback] = useState(false)
    // Thêm state để track vị trí swimmer
    const [swimmer1Position, setSwimmer1Position] = useState(0) // % from left
    const [swimmer2Position, setSwimmer2Position] = useState(0) // % from left
    const [canMoveSwimmer, setCanMoveSwimmer] = useState(false) // Cho phép di chuyển swimmer
    const [winner, setWinner] = useState<number | null>(null) // Track người chiến thắng

    // Animation states
    const [showPage, setShowPage] = useState(false)
    const [showSwimmers, setShowSwimmers] = useState(false)
    const [showPoolLines, setShowPoolLines] = useState(false)
    
    const diveAudioRef = useRef<HTMLAudioElement>(null)

    const currentQuestion = question[currentQuestionIndex]
    const FINISH_LINE = 70 // Điều chỉnh để chạm vào vạch đích
    const MOVE_DISTANCE = 10 // Mỗi lần di chuyển 10%

    // Phát âm thanh dive và trigger animations khi trang bắt đầu
    useEffect(() => {
        // Animation sequence
        // 1. Fade in page immediately
        setShowPage(true)
        
        // 2. Phát dive sound sau 0.2s delay
        setTimeout(() => {
            if (diveAudioRef.current) {
                diveAudioRef.current.volume = 0.8
                diveAudioRef.current.play().catch(error => {
                    console.log('Could not play dive audio:', error)
                })

                // Dừng âm thanh sau 2 giây (tính từ khi bắt đầu phát)
                setTimeout(() => {
                    if (diveAudioRef.current) {
                        diveAudioRef.current.pause()
                        diveAudioRef.current.currentTime = 0
                    }
                }, 2000)
            }
        }, 200) // Delay 0.2s trước khi phát âm thanh
        
        // 3. Show pool lines after 200ms
        setTimeout(() => {
            setShowPoolLines(true)
        }, 200)

        // 4. Swimmers dive in after 500ms
        setTimeout(() => {
            setShowSwimmers(true)
        }, 500)

    }, [])

    const handleAnswerSelect = (answerIndex: number) => {
        if (selectedAnswer !== null) return // Ngăn chọn nhiều đáp án

        setSelectedAnswer(answerIndex)
        setShowFeedback(true)

        // Kiểm tra đáp án và cập nhật điểm
        const isCorrectAnswer = answerIndex === currentQuestion.correctAnswer
        if (isCorrectAnswer) {
            setScore(score + 1)
            setCanMoveSwimmer(true) // Chỉ cho phép di chuyển swimmer khi đáp án đúng
        } else {
            // Đáp án sai - tự động chuyển câu sau 2 giây
            setTimeout(() => {
                nextQuestion()
            }, 2000)
        }
        setAnsweredQuestions(answeredQuestions + 1)
    }

    const handleSwimmerClick = (swimmerNumber: number) => {
        if (!canMoveSwimmer || winner) return // Không cho di chuyển nếu đã có người thắng

        // Phát âm thanh swimming khi swimmer di chuyển
        const playSwimmingSound = () => {
            try {
                const audio = new Audio('/in-game/swimming.mp3')
                audio.volume = 0.7 // Điều chỉnh âm lượng
                audio.play().catch(error => {
                    console.log('Could not play swimming audio:', error)
                })

                // Dừng âm thanh sau 2 giây
                setTimeout(() => {
                    audio.pause()
                    audio.currentTime = 0
                }, 2000)
            } catch (error) {
                console.log('Swimming audio not supported:', error)
            }
        }

        // Phát sound khi bắt đầu di chuyển
        playSwimmingSound()

        let newPosition = 0
        if (swimmerNumber === 1) {
            newPosition = Math.min(swimmer1Position + MOVE_DISTANCE, FINISH_LINE)
            setSwimmer1Position(newPosition)
        } else {
            newPosition = Math.min(swimmer2Position + MOVE_DISTANCE, FINISH_LINE)
            setSwimmer2Position(newPosition)
        }

        // Kiểm tra chiến thắng
        if (newPosition >= FINISH_LINE) {
            setWinner(swimmerNumber)
            setCanMoveSwimmer(false)
            
            // Hiển thị celebration và chuyển sang PostGame sau 3 giây
            setTimeout(() => {
                onGameEnd(swimmerNumber)
            }, 3000)
            return
        }

        // Vô hiệu hóa di chuyển ngay sau khi click
        setCanMoveSwimmer(false)

        // Tự động chuyển câu tiếp theo sau 1 giây
        setTimeout(() => {
            nextQuestion()
        }, 1000)
    }

    const nextQuestion = () => {
        if (currentQuestionIndex < question.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer(null)
            setShowFeedback(false)
            setCanMoveSwimmer(false)
        } else {
            // Nếu hết câu hỏi mà chưa có winner
            setTimeout(() => {
                onGameEnd(null)
            }, 2000)
        }
    }

    // Helper function để xác định style của button
    const getButtonStyle = (optionIndex: number) => {
        if (!showFeedback || selectedAnswer === null) {
            return {
                isSelected: false,
                isCorrect: false,
                isWrong: false,
                isCorrectAnswer: false
            }
        }

        const isSelected = selectedAnswer === optionIndex
        const isCorrectAnswer = optionIndex === currentQuestion.correctAnswer
        const isWrongSelection = isSelected && !isCorrectAnswer

        return {
            isSelected,
            isCorrect: isSelected && isCorrectAnswer,
            isWrong: isWrongSelection,
            isCorrectAnswer: isCorrectAnswer && !isSelected
        }
    }

    // Function để lấy style CSS cho button dựa trên trạng thái
    const getButtonCSS = (optionIndex: number) => {
        const style = getButtonStyle(optionIndex)
        
        if (style.isCorrect) {
            return {
                backgroundColor: '#10b981', // Green
                borderColor: '#059669',
                color: 'white',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
            }
        }
        
        if (style.isWrong) {
            return {
                backgroundColor: '#ef4444', // Red
                borderColor: '#dc2626',
                color: 'white',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
            }
        }
        
        if (style.isCorrectAnswer) {
            return {
                backgroundColor: '#10b981', // Green for correct answer
                borderColor: '#059669',
                color: 'white',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
            }
        }
        
        return {
            backgroundColor: '#ffffff',
            borderColor: '#e5e7eb',
            color: '#374151',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        }
    }

    return (
        <div className={`min-h-screen w-full relative transition-all duration-1000 ${
            showPage ? 'opacity-100' : 'opacity-0'
        }`} style={{ backgroundColor: 'rgb(129, 207, 255)', height: '100vh', overflow: 'hidden' }}>
            
            {/* Hidden audio element cho dive sound */}
            <audio ref={diveAudioRef} preload="auto">
                <source src="/in-game/dive.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Swimming Pool Section - Full Screen */}
            <div className="absolute inset-0 w-full h-full">
                {/* Pool Background - Full Screen Cover */}
                <img
                    src="/in-game/pool.png"
                    alt="Swimming Pool"
                    className="w-full h-full object-contain z-0"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />

                {/* Pool Lines - Fade in animation */}
                <div className="absolute inset-0 flex items-center">
                    <img
                        src="/in-game/pool_line.png"
                        className={`w-full h-4 object-cover transition-all duration-800 ${
                            showPoolLines ? 'opacity-80' : 'opacity-0'
                        }`}
                        style={{
                            position: 'absolute',
                            top: '51%',
                            left: '8%',
                            width: '83%',
                            transitionDelay: '0ms',
                        }}
                    />
                    <img
                        src="/in-game/pool_line.png"
                        className={`w-full h-4 object-cover transition-all duration-800 ${
                            showPoolLines ? 'opacity-80' : 'opacity-0'
                        }`}
                        style={{
                            position: 'absolute',
                            top: '33%',
                            left: '8%',
                            width: '83%',
                            transitionDelay: '200ms',
                        }}
                    />
                    <img
                        src="/in-game/pool_line.png"
                        className={`w-full h-4 object-cover transition-all duration-800 ${
                            showPoolLines ? 'opacity-80' : 'opacity-0'
                        }`}
                        style={{
                            position: 'absolute',
                            top: '15%',
                            left: '8%',
                            width: '83%',
                            transitionDelay: '400ms',
                        }}
                    />
                </div>

                {/* Swimmers - Animated dive entry */}
                <div className="absolute inset-0">
                    {/* Swimmer 1 - Lane 1 */}
                    <img
                        src="/in-game/swimmer_1.gif"
                        alt="Swimmer 1"
                        className={`absolute object-contain cursor-pointer hover:scale-110 transition-all duration-1000 ${
                            winner === 1 ? 'animate-bounce' : ''
                        } ${
                            showSwimmers 
                                ? 'opacity-100 transform translate-x-0 translate-y-0' 
                                : 'opacity-0 transform -translate-x-full -translate-y-20'
                        }`}
                        style={{
                            position: 'absolute',
                            width: '15%',
                            height: 'auto',
                            top: '17%',
                            left: `${5 + swimmer1Position}%`,
                            transitionDelay: '0ms',
                            filter: canMoveSwimmer ? 'brightness(1.2)' : winner === 1 ? 'brightness(1.5) saturate(1.5)' : 'brightness(1)',
                            boxShadow: canMoveSwimmer ? '0 0 15px rgba(59, 130, 246, 0.5)' : winner === 1 ? '0 0 25px rgba(255, 215, 0, 0.8)' : 'none',
                            zIndex: winner === 1 ? 30 : 10,
                        }}
                        onClick={() => handleSwimmerClick(1)}
                        title={winner ? "Cuộc đua đã kết thúc!" : canMoveSwimmer ? "Click để di chuyển!" : "Chọn đáp án trước khi di chuyển"}
                    />

                    {/* Swimmer 2 - Lane 2 */}
                    <img
                        src="/in-game/swimmer_2.gif"
                        alt="Swimmer 2"
                        className={`absolute object-contain cursor-pointer hover:scale-110 transition-all duration-1000 ${
                            winner === 2 ? 'animate-bounce' : ''
                        } ${
                            showSwimmers 
                                ? 'opacity-100 transform translate-x-0 translate-y-0' 
                                : 'opacity-0 transform -translate-x-full -translate-y-20'
                        }`}
                        style={{
                            position: 'absolute',
                            width: '15%',
                            height: 'auto',
                            top: '35%',
                            left: `${5 + swimmer2Position}%`,
                            transitionDelay: '300ms',
                            filter: canMoveSwimmer ? 'brightness(1.2)' : winner === 2 ? 'brightness(1.5) saturate(1.5)' : 'brightness(1)',
                            boxShadow: canMoveSwimmer ? '0 0 15px rgba(59, 130, 246, 0.5)' : winner === 2 ? '0 0 25px rgba(255, 215, 0, 0.8)' : 'none',
                            zIndex: winner === 2 ? 30 : 10,
                        }}
                        onClick={() => handleSwimmerClick(2)}
                        title={winner ? "Cuộc đua đã kết thúc!" : canMoveSwimmer ? "Click để di chuyển!" : "Chọn đáp án trước khi di chuyển"}
                    />
                </div>

                {/* Winner Celebration Effect */}
                {winner && (
                    <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                        <div 
                            className="text-6xl font-bold animate-bounce"
                            style={{
                                color: winner === 1 ? '#3b82f6' : '#ef4444',
                                fontFamily: 'Sora, sans-serif',
                                textShadow: '4px 4px 8px rgba(255,255,255,0.8)',
                                animation: 'bounce 1s infinite',
                            }}
                        >
                            🏆 SWIMMER {winner} WINS! 🏆
                        </div>
                    </div>
                )}
            </div>

            {/* Simplified Quiz Section - No animation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-40" style={{top: '70%'}}>
                {/* Question text - Simple centered with text wrapping */}
                <div className="text-center mb-0 px-8" style={{ maxWidth: '80%', width: '100%' }}>
                    <h2 
                        className="text-3xl font-bold mb-8"
                        style={{
                            color: 'rgb(46,82,96)',
                            fontFamily: 'Sora, sans-serif',
                            textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                            fontSize: '24px',
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            lineHeight: '1.3',
                            textAlign: 'center',
                            margin: '0 auto',
                            display: 'block',
                        }}
                    >
                        {currentQuestion.question}
                    </h2>
                </div>

                {/* Answer Options - No animation */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 px-8" style={{paddingLeft: '15px'}}>
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showFeedback}
                            className="bg-white text-gray-600 px-6 py-4 rounded-lg border-2 border-gray-200 transition-all duration-200"
                            style={{
                                fontFamily: 'Sora, sans-serif',
                                fontSize: '16px',
                                cursor: showFeedback ? 'not-allowed' : 'pointer',
                                opacity: showFeedback ? 0.7 : 1,
                                minWidth: '200px',
                                maxWidth: '300px',
                                minHeight: '60px',
                                whiteSpace: 'normal',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                textAlign: 'left',
                                lineHeight: '1.4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                ...getButtonCSS(index),
                            }}
                            onMouseEnter={(e) => {
                                if (!showFeedback) {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.backgroundColor = '#f0f9ff';
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.2)';
                                    e.currentTarget.style.color = '#1e40af';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!showFeedback) {
                                    const defaultStyle = getButtonCSS(index);
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.backgroundColor = defaultStyle.backgroundColor;
                                    e.currentTarget.style.borderColor = defaultStyle.borderColor;
                                    e.currentTarget.style.boxShadow = defaultStyle.boxShadow;
                                    e.currentTarget.style.color = defaultStyle.color;
                                }
                            }}
                        >
                            <span style={{ 
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                            }}>
                                {String.fromCharCode(65 + index)}. {option.substring(3)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InGame
