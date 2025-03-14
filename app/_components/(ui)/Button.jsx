export const GradButton = ({ className, onClick = () => {}, children }) => {
  return (
    <button className={`grad-btn rounded-sm cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
