const messages = [
  "Handgefertigt in Bayern",
  "Echte Autoteile",
  "Jedes Stück ein Unikat",
  "Design mit Geschichte",
];

export function BrandTicker() {
  return (
    <div className="overflow-hidden bg-ink py-4 text-paper whitespace-nowrap" aria-label={messages.join(", ")}>
      <div
        className="flex w-max gap-9 px-6 text-xs font-bold tracking-[0.1em] uppercase"
        aria-hidden="true"
      >
        {[...messages, ...messages].map((message, index) => (
          <span key={`${message}-${index}`}>
            {message} <span className="text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
