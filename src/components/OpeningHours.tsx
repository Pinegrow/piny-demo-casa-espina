export function OpeningHours() {
  return <div className="rounded-sm bg-sand p-7 md:p-9">
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">A little planning, a lovely day</p>
    <h2 className="font-display text-3xl">Opening times</h2>
    <dl className="mt-6 space-y-4 text-sm">
      <div className="flex justify-between gap-4 border-b border-pine/15 pb-4"><dt>Tuesday–Friday</dt><dd>09:00–18:00</dd></div>
      <div className="flex justify-between gap-4 border-b border-pine/15 pb-4"><dt>Saturday & Sunday</dt><dd>09:00–18:00</dd></div>
      <div className="flex justify-between gap-4"><dt>Monday</dt><dd className="text-clay">Closed for garden care</dd></div>
    </dl>
    <p className="mt-6 text-xs leading-6 text-moss">Last entry at 16:30. Allow 90 minutes to wander. The glasshouse closes 15 minutes before the garden.</p>
    <a href="/tickets" className="mt-7 flex justify-between border-t border-pine/20 pt-5 text-sm font-medium">Find your sunny moment <span aria-hidden="true">↗</span></a>
  </div>;
}
