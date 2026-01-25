export default function Pane({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl bg-black/65 border border-white/5",
        "backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_20px_rgba(100,200,255,0.05),0_0_40px_rgba(255,100,100,0.03)]",
        "p-6",
        "relative",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}