import {useState} from 'react';
import {SectionHeading} from '../components/SectionHeading';
import {TicketQuantity} from '../components/TicketQuantity';
import {arrivalTimes, bookingError, firstVisitDate, localDate, ticketPrices, ticketTotal} from '../booking';

export function TicketsPage() {
  const [date, setDate] = useState(firstVisitDate);
  const [time, setTime] = useState('10:00');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [step, setStep] = useState<'choose' | 'review' | 'confirmed'>('choose');
  const [error, setError] = useState('');
  const total = ticketTotal(adults, children);
  const displayDate = new Date(date + 'T12:00:00').toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
  function review() { const message = bookingError(date, time, adults, children); setError(message); if (!message) setStep('review'); }
  return <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
    <SectionHeading eyebrow="A date with the desert" title="Your next good day starts here." description="Choose a day, gather your favourite people and leave the hurry at the gate. Garden and glasshouse admission are included." />
    <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div className="rounded-sm border border-pine/20 p-6 md:p-8">
        <p className="mb-7 text-[10px] uppercase tracking-[0.15em] text-clay">{step === 'choose' ? '01 / Plan your visit' : step === 'review' ? '02 / One last look' : '03 / All set, in this demo'}</p>
        {step === 'choose' && <form onSubmit={event => { event.preventDefault(); review(); }}>
          <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Visit date<input type="date" required min={localDate()} value={date} onChange={event => {setDate(event.target.value);setError('');}} className="mt-3 block w-full rounded-sm border border-pine/25 bg-cream p-3 text-sm" /></label><label className="text-sm font-medium">Arrival time<select value={time} onChange={event => setTime(event.target.value)} className="mt-3 block w-full rounded-sm border border-pine/25 bg-cream p-3 text-sm">{arrivalTimes.map(slot => <option key={slot} value={slot}>{slot}</option>)}</select></label></div>
          <p className="mt-3 text-xs text-moss">Tuesday–Sunday. Stay until 18:00, whatever your arrival time.</p>
          <div className="mt-7"><TicketQuantity label="Adults" detail="Ages 16 and over" price={ticketPrices.adult} value={adults} minimum={1} onChange={setAdults} /><TicketQuantity label="Children" detail="Ages 5–15 · under 5s are free" price={ticketPrices.child} value={children} minimum={0} onChange={setChildren} /></div>
          <p className="mt-5 text-xs leading-6 text-moss">At least one adult is required. Up to 8 of each ticket type. Free under-5s do not need a ticket.</p>
          {error && <p role="alert" className="mt-5 border-l-2 border-clay bg-sand p-4 text-sm text-clay">{error}</p>}
          <button type="submit" className="mt-7 flex w-full items-center justify-between rounded-full bg-pine px-7 py-4 text-sm text-cream hover:bg-clay">Review your visit <span aria-hidden="true">→</span></button>
        </form>}
        {step === 'review' && <div><h2 className="font-display text-3xl">A little time well spent.</h2><p className="mt-5 text-sm leading-7">{displayDate}<br />Arrival at {time}<br />{adults} {adults === 1 ? 'adult' : 'adults'} · {children} {children === 1 ? 'child' : 'children'}</p><p className="my-6 border-y border-pine/15 py-5 text-sm leading-7 text-moss">This is a local demo reservation. No payment, email or personal details are collected. Confirming does not issue a real ticket.</p><button type="button" onClick={() => {const message = bookingError(date, time, adults, children);if (message) {setError(message);setStep('choose');} else setStep('confirmed');}} className="w-full rounded-full bg-pine px-6 py-4 text-sm text-cream hover:bg-clay">Confirm demo reservation</button><button type="button" onClick={() => setStep('choose')} className="mt-4 w-full py-2 text-xs underline underline-offset-4">Edit your visit</button></div>}
        {step === 'confirmed' && <div role="status"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-2xl" aria-hidden="true">✓</span><h2 className="font-display text-4xl">See you among the spines.</h2><p className="mt-5 text-sm leading-7">Demo reservation complete.<br />{displayDate} at {time}<br />{adults} {adults === 1 ? 'adult' : 'adults'} · {children} {children === 1 ? 'child' : 'children'} · €{total}</p><p className="mt-5 text-xs leading-6 text-moss">Nothing was charged or sent. This confirmation lives only in this page and disappears when you leave.</p><button type="button" onClick={() => setStep('choose')} className="mt-6 rounded-full border border-pine/30 px-6 py-3 text-xs -translate-x-1">Plan another visit</button></div>}
      </div>
      <aside className="overflow-hidden rounded-sm bg-sand"><img src="/images/garden.png" alt="Cacti beside a sunlit path at Casa Espina" className="aspect-[16/9] w-full object-cover" width="1536" height="1024" /><div className="p-7"><h2 className="font-display text-3xl">Your garden day</h2><p className="mt-3 text-xs leading-6 text-moss">Open-air gardens · The glasshouse<br />Explorer trail · Garden introductions</p><dl className="mt-6 space-y-3 text-sm"><div className="flex justify-between"><dt>Adults × {adults}</dt><dd>€{adults * ticketPrices.adult}</dd></div><div className="flex justify-between"><dt>Children × {children}</dt><dd>€{children * ticketPrices.child}</dd></div><div className="flex justify-between border-t border-pine/20 pt-4 text-xl"><dt className="font-display">Total</dt><dd aria-live="polite" aria-label="Ticket total" className="font-semibold">€{total}</dd></div></dl><p className="mt-5 text-[10px] leading-5 text-moss">Demo prices in EUR. All taxes included. No booking fees. No real payment.</p></div></aside>
    </div>
  </section>;
}
