/** Brand mark: a "V" drawn as two converging paths — learning narrowing to one opportunity. */
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <span className={`relative  grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-violet ${className}`}>
     <img
  src="/logo.png"
  alt="Vedarth Academy"
  className="h-8 w-8 object-contain"
/>
    </span>
  )
}
