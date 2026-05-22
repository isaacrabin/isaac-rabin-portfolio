export default function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent2/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />

        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
      </div>

      <div
        className="fixed inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270_0_60_60%27%3E%3Cpath fill=%27none%27 stroke=%27rgba(59,130,246,0.03)%27 stroke-width=%271%27 d=%27M0_0h60v60H0z%27/%3E%3C/svg%3E')]"
      />
    </>
  );
}