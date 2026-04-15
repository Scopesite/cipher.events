type Props = {
  className?: string;
};

/**
 * Decorative patchwork pixel cluster — the signature Cipher Events motif.
 * Renders a 4x4 grid of pink squares with a scattered corner pattern.
 */
export function Patchwork({ className = '' }: Props) {
  return (
    <div className={`patchwork-corner ${className}`} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
