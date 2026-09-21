export default function QuickPrompts({ prompts, onPick, disabled }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {prompts.map((p) => (
        <button
          key={p}
          type="button"
          disabled={disabled}
          onClick={() => onPick(p)}
          className="rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[0.76rem] font-medium text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand disabled:opacity-50"
        >
          {p}
        </button>
      ))}
    </div>
  )
}
