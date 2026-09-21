const paths = {
  live: <><circle cx="12" cy="12" r="3" /><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" /></>,
  stack: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" /><path d="m4 12 8 4.5 8-4.5" /><path d="m4 16.5 8 4.5 8-4.5" /></>,
  ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="3.2" /></>,
  project: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5" /></>,
  git: <><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="17" cy="9" r="2.5" /><path d="M6 8.5v7M17 11.5c0 3-4 2.5-6.5 4" /></>,
  api: <><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" /><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" /></>,
  deploy: <><path d="M12 3c3.5 2.5 5 6 5 9l-5 3-5-3c0-3 1.5-6.5 5-9Z" /><circle cx="12" cy="10" r="1.6" /><path d="M9 17.5 7 21l5-1.8L17 21l-2-3.5" /></>,
  task: <><rect x="4" y="3.5" width="16" height="17" rx="2" /><path d="m8.5 11 2.2 2.2L15.5 8.5M8.5 16.5h5" /></>,
  review: <><path d="M4 5h16v11H8l-4 3.5V5Z" /><path d="M9 10.5h6M9 13h3.5" /></>,
  portfolio: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 17v-5M12.5 17V8M17 17v-7" /></>,
  certificate: <><circle cx="12" cy="9.5" r="5" /><path d="m8.6 13.6-1.1 6.4 4.5-2.3 4.5 2.3-1.1-6.4" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.9c2 .7 3.3 2.4 3.3 4.6" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  spark: <><path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.2l-1.8-5.6L4.5 10.8 10.2 9 12 3.5Z" /><path d="M18.5 3.2v3M20 4.7h-3" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" /></>,
  moon: <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  send: <path d="M4.5 12 20 4.5 15 20l-3.4-5.8L4.5 12Z" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1-.8 2-2 2A16.5 16.5 0 0 1 4.5 5.5c0-1.2 1-2 2-2Z" />,
  whatsapp: <><path d="M3.8 20.2 5 16.4a8 8 0 1 1 3 3l-4.2.8Z" /><path d="M9 9.5c.4 2.2 2.3 4.1 4.5 4.5l1-1.3 1.8.8-.3 1.5c-2.9.5-6.7-3-7.2-6.2L10.3 8l.8 1.8-2.1.7Z" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></>,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" /></>,
  shield: <><path d="M12 3.2 5 6v5.5c0 4 3 7.4 7 9.3 4-1.9 7-5.3 7-9.3V6l-7-2.8Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  bolt: <path d="M13.5 3 6 13.5h5L10.5 21 18 10.5h-5L13.5 3Z" />,
  code: <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>,
  rupee: <path d="M7.5 4.5h9M7.5 8.5h9M14.5 4.5c0 3.2-2.2 4-5 4h-2l7.5 7.5" />,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.6, ...rest }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"
      className={className} {...rest}>
      {d}
    </svg>
  )
}
