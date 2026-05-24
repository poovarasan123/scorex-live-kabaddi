import badge from "../assets/google-play-badge.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kb.scorex";

export default function PlayStoreBadge({ href = PLAY_STORE_URL, className = "", height = 64 }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get ScoreX on Google Play"
      className={`inline-block transition-transform hover:scale-[1.04] active:scale-95 ${className}`}
    >
      <img
        src={badge}
        alt="Get it on Google Play"
        style={{ height }}
        className="w-auto block drop-shadow-[0_10px_30px_rgba(255,107,0,0.25)]"
        width={1536}
        height={1024}
      />
    </a>
  );
}
