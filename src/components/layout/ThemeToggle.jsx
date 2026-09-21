import Icon from '../ui/Icon'

export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className={`relative h-8 sm:h-9 w-[4rem] sm:w-[4.25rem] shrink-0 overflow-hidden rounded-full border border-line bg-surface/70 transition-colors duration-500 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: dark ? 1 : 0,
          background: 'linear-gradient(100deg, rgb(var(--c-brand)/0.28), rgb(var(--c-violet)/0.32))',
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: dark ? 0 : 1, background: 'linear-gradient(100deg, rgb(var(--c-brand)/0.14), transparent)' }}
      />
      <span
        aria-hidden="true"
        className="absolute top-1 grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-surface shadow-soft transition-transform duration-500"
        style={{
  transform: dark ? 'translateX(2.1rem)' : 'translateX(0.25rem)'
}}
      >
        <Icon
          name={dark ? 'moon' : 'sun'}
          className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand transition-transform duration-500"
          strokeWidth={2}
          style={{ transform: dark ? 'rotate(0deg)' : 'rotate(90deg)' }}
        />
      </span>
    </button>
  )
}
