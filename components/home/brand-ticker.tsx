import styles from "./home-page.module.css";

const messages = [
  "Handgefertigt in Bayern",
  "Echte Autoteile",
  "Jedes Stück ein Unikat",
  "Design mit Geschichte",
];

export function BrandTicker() {
  return (
    <div className={styles.ticker} aria-label={messages.join(", ")}>
      <div className={styles.tickerTrack} aria-hidden="true">
        {[...messages, ...messages].map((message, index) => (
          <span key={`${message}-${index}`}>
            {message} <span className={styles.tickerDot}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
