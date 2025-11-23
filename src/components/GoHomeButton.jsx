import { useNavigate } from 'react-router-dom'

export default function GoHomeButton({ className }) {
    const navigate = useNavigate()
    return (
        <div className={className || 'go-home-wrap'}>
            <button
                className="go-home"
                onClick={() => navigate('/')}
                aria-label="Go to home page"
            >
                Go home
            </button>
        </div>
    )
}
