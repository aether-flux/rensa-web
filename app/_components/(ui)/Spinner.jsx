import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Spinner = ({ className = "" }) => {
  return (
    <FontAwesomeIcon icon={faSpinner} className={`w-4 h-4 animate-spin ${className}`} />
  )
}
