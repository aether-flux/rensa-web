export const GradButton = ({ className, children }) => {
  return (
    <button className={`grad-btn rounded-sm cursor-pointer ${className}`}>
      {children}
    </button>
  )
}
