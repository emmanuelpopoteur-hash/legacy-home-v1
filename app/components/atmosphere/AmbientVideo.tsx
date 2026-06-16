// app/components/atmosphere/AmbientVideo.tsx

export function AmbientVideo() {
  return (
    <div className="ambientVideo">

      <video
        className="ambientVideoMedia"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/water.mp4"
          type="video/mp4"
        />
      </video>

      <div className="ambientVideoOverlay" />

    </div>
  )
}