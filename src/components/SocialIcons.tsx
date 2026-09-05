type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 8.5h2V5.2h-2.4c-2.3 0-3.6 1.4-3.6 3.7v2.1H9v3.3h2v7.7h3.4v-7.7h2.4l.4-3.3h-2.8V9c0-.6.2-.5.6-.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TwitterIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m4 4 7.2 9.4L4.4 20H6l6.1-5.8L17 20h4l-7.5-9.8L20 4h-1.6l-5.6 5.3L8 4H4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsappIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L4 20.5l4.5-.8A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.8 8.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4l.6 1.5c.1.2 0 .4-.1.5l-.5.5c-.1.1-.1.3 0 .5.3.6 1.4 1.9 2.6 2.4.2.1.3.1.4 0l.6-.6c.1-.1.3-.2.5-.1l1.5.7c.2.1.3.2.3.4v.6c0 .3-.3.9-.9 1.1-1.6.5-3.7-.4-5.4-2.1-1.7-1.7-2.6-3.6-2.2-5.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
