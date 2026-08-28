export function SiteNotice() {
  return (
    <aside aria-label="Site notice" className="bg-navy text-navy-foreground">
      <div className="container-page flex flex-col items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-xs sm:flex-row">
        <p className="font-medium">Licensed clinicians review your case. Pharmacies fill only if prescribed.</p>
        <span aria-hidden="true" className="hidden opacity-40 sm:inline">
          |
        </span>
        <p className="opacity-80">No insurance required. Completing intake does not guarantee a prescription.</p>
      </div>
    </aside>
  );
}
