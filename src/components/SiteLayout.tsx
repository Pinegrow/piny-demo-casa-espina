import type {ReactNode} from 'react';

export function Brand() {
  return <a href="/" className="flex items-center gap-3 text-pine no-underline" aria-label="Casa Espina home">
    <svg width="34" height="42" viewBox="0 0 34 42" fill="none" aria-hidden="true"><path d="M17 38V8a5 5 0 0 1 10 0v12M17 27H9a5 5 0 0 1-5-5v-9M22 30h5a4 4 0 0 0 4-4v-9M10 39h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
    <span className="font-display text-2xl font-bold leading-none tracking-tight">casa espina<span className="mt-1.5 block font-sans text-[9px] font-medium uppercase tracking-[0.28em]">Cactus zoo & botanical garden</span></span>
  </a>;
}

export function SiteLayout({children, path}: {children: ReactNode; path: string}) {
  return <div className="min-h-screen bg-cream text-pine">
    <div className="bg-pine px-5 py-2 text-center text-[11px] tracking-wide text-cream">A little wild. A little wonderful. <span className="mx-2 opacity-40">·</span> Open Tuesday–Sunday, 9:00–18:00</div>
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6 lg:px-12">
      <Brand />
      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 text-xs font-medium sm:gap-8">
        <a href="/" aria-current={path === '/' ? 'page' : undefined} className="py-2 hover:text-clay aria-[current=page]:border-b aria-[current=page]:border-clay">The garden</a>
        <a href="/gallery" aria-current={path === '/gallery' ? 'page' : undefined} className="py-2 hover:text-clay aria-[current=page]:border-b aria-[current=page]:border-clay">Field notes & gallery</a>
        <a href="/visit" aria-current={path === '/visit' ? 'page' : undefined} className="py-2 hover:text-clay aria-[current=page]:border-b aria-[current=page]:border-clay">Plan your visit</a>
        <a href="/tickets" className="rounded-full bg-pine px-6 py-3 text-cream transition-colors hover:bg-clay">Book tickets <span className="ml-3" aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main id="main-content">{children}</main>
    <footer className="mt-16 border-t border-pine/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 lg:px-12">
        <div><Brand /><p className="mt-5 max-w-xs text-sm leading-relaxed text-moss">Slow down. Look closer. There’s a whole world growing here.</p></div>
        <div className="text-sm"><h2 className="mb-4 font-semibold">Make a day of it</h2><div className="flex flex-col items-start gap-3"><a href="/gallery" className="hover:text-clay">Explore the collection ↗</a><a href="/visit" className="hover:text-clay">Opening times & visitor guide ↗</a><a href="/tickets" className="hover:text-clay">Choose your tickets ↗</a></div></div>
        <div className="text-sm"><h2 className="mb-4 font-semibold">A fictional place, a working little app.</h2><p className="leading-relaxed text-moss">Casa Espina is a Piny demo project. Photography is AI-generated. Reservations are a local demo; no payment is taken and no ticket is issued.</p></div>
      </div>
      <div className="border-t border-pine/10 px-6 py-5 text-center text-[10px] uppercase tracking-[0.2em] text-moss">Casa Espina · Grow at your own pace · Demo garden</div>
    </footer>
  </div>;
}
