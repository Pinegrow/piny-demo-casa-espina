export function TicketQuantity({label, detail, price, value, minimum, onChange}: {label: string; detail: string; price: number; value: number; minimum: number; onChange: (value: number) => void}) {
  return <div className="flex items-center justify-between gap-4 border-b border-pine/15 py-5">
    <div><h3 className="text-sm font-semibold">{label} <span className="ml-2 font-normal text-clay">€{price}</span></h3><p className="mt-1 text-xs text-moss">{detail}</p></div>
    <div className="flex items-center gap-4"><button type="button" onClick={() => onChange(value - 1)} disabled={value <= minimum} aria-label={'Remove ' + label.toLowerCase()} className="h-9 w-9 rounded-full border border-pine/25 hover:bg-sand disabled:opacity-25">−</button><output aria-label={label + ' quantity'} className="w-5 text-center text-sm tabular-nums">{value}</output><button type="button" onClick={() => onChange(value + 1)} disabled={value >= 8} aria-label={'Add ' + label.toLowerCase()} className="h-9 w-9 rounded-full border border-pine/25 hover:bg-sand disabled:opacity-25">+</button></div>
  </div>;
}
