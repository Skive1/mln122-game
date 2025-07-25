import { useRef } from 'react'

interface PreGameProps {
  onStartGame: () => void;
}

function PreGame({ onStartGame }: PreGameProps) {
  const whistleAudioRef = useRef<HTMLAudioElement>(null)

  // Xóa useEffect cũ và thay bằng function mới
  const handleStartGame = () => {
    // Phát âm thanh whistle khi bấm Start
    if (whistleAudioRef.current) {
      whistleAudioRef.current.volume = 0.8
      
      // Phát âm thanh
      whistleAudioRef.current.play().catch(error => {
        console.log('Could not play whistle audio:', error)
      })
    }

    // Delay ngắn rồi chuyển trang
    setTimeout(() => {
      onStartGame()
    }, 800) // Delay 0.8s thôi
  }

  return (
    <div className="min-h-screen w-full relative" style={{ backgroundColor: 'rgb(129, 207, 255)' }}>
      {/* Hidden audio element cho whistle sound */}
      <audio ref={whistleAudioRef} preload="auto">
        <source src="/pre-game/whistle.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Main Pool Container */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Pool Background */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src="/pre-game/pre_pool.png"
            alt="Swimming Pool"
            className="w-full h-full object-contain"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
            onLoad={() => console.log('Pool loaded successfully')}
            onError={(e) => console.error('Failed to load pool:', e)}
          />

          {/* Pool Lines - positioned with fixed increased spacing */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="/pre-game/pre_pool_line.png"
                alt={`Pool Lane ${index + 1}`}
                className="absolute object-contain opacity-90"
                style={{
                  top: `${20 + (index * 20)}%`,
                  left: `${46 - (index * 7)}%`,
                  marginBottom: '100px',
                  zIndex: 15
                }}
                onError={(e) => console.error(`Failed to load pool line ${index + 1}:`, e)}
                onLoad={() => console.log(`Pool line ${index + 1} loaded successfully`)}
              />
            ))}
          </div>

          {/* Swimmers positioned in horizontal lanes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Swimmer 1 - Lane 2 */}
            <img
              src="/pre-game/pre_swimmer_1.gif"
              alt="Swimmer 1"
              className="absolute object-contain"
              style={{
                width: '25%', // Tăng từ 12% lên 18%
                height: 'auto',
                left: '20%', // Vị trí bắt đầu lane
                top: '10%', // Lane 2
                zIndex: 25
              }}
              onError={(e) => console.error('Failed to load swimmer 1:', e)}
            />

            {/* Swimmer 2 - Lane 4 */}
            <img
              src="/pre-game/pre_swimmer_2.gif"
              alt="Swimmer 2"
              className="absolute object-contain"
              style={{
                width: '25%', // Tăng từ 12% lên 18%
                height: 'auto',
                left: '12%', // Cùng vị trí bắt đầu
                top: '30%', // Lane 4 - điều chỉnh lại vị trí
                zIndex: 25
              }}
              onError={(e) => console.error('Failed to load swimmer 2:', e)}
            />
          </div>
        </div>

        {/* Title and Button Section - Positioned on the right */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-right z-30">
          <h1 className="mb-4" style={{
            color: '#2d3748',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '2px',
            fontFamily: 'Sora, sans-serif',
            fontSize: '64px',
            fontWeight: '600'
          }}>Quiz</h1>
          
          <h2 className="mb-8" style={{
            background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #1a202c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            letterSpacing: '3px',
            fontFamily: 'Sora, sans-serif',
            fontSize: '96px',
            fontWeight: '800'
          }}>Swimming</h2>

          {/* Start Game Button - Updated to use new handler */}
          <button
            onClick={handleStartGame}
            className="transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              padding: '16px 48px',
              borderRadius: '12px',
              border: '3px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Sora, sans-serif',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #2d3748 100%)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)';
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 1
            }}>Start</span>
          </button>
        </div>

        {/* Pool edge shadows for depth */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black opacity-10"></div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black opacity-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black opacity-10"></div>
        </div>
      </div>
    </div>
  )
}

export default PreGame
