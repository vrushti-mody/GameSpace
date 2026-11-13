type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>;
}

export function ArrowDown({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16m-7-7 7 7 7-7"/></svg>;
}

export function ArrowLeft({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12H4m7-7-7 7 7 7"/></svg>;
}

export function MapPin({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}

export function InstagramIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}

export function WhatsAppIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2a9.92 9.92 0 0 0-8.48 15.08L2.2 22l5.06-1.33A10 10 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3 .79.8-2.92-.2-.31a8.2 8.2 0 1 1 6.88 3.76Zm4.5-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.96-.14.17-.29.19-.54.07-.25-.13-1.05-.39-2-.1-.73-.71-1.22-1.59-1.36-1.85-.14-.25-.02-.39.11-.52.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.09-.17.05-.32-.02-.44-.06-.13-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.09s.9 2.42 1.02 2.58c.12.17 1.77 2.71 4.29 3.8.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29Z"/></svg>;
}
