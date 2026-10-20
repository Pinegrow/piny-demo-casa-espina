import {GardenCard} from '../components/GardenCard';
import {SectionHeading} from '../components/SectionHeading';
import {OpeningHours} from '../components/OpeningHours';

export function HomePage() {
  return <>
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-10 pt-5 md:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12 lg:pb-14">
      <div className="py-6 md:py-12">
        <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"><span className="h-px w-8 bg-clay" />Not your usual zoo</p>
        <h1 className="leading-[0.98] tracking-[-0.04em] font-display text-6xl lg:text-8xl">Meet the<br />wonderfully<br /><em className="font-normal text-moss">prickly.</em></h1>
        <p className="mt-7 max-w-sm text-sm leading-7 text-moss">Big personalities. Very small water bills. Step into a sun-filled world of curious cacti, desert giants and the occasional unexpected bloom.</p>
        <img src="/images/bloom.png" alt="" className="mt-8" />
        <div className="mt-8 flex flex-wrap items-center gap-6"><a href="/tickets" className="inline-flex items-center gap-8 rounded-full bg-pine px-7 py-4 text-xs font-medium text-cream hover:bg-clay">Come explore <span aria-hidden="true">↗</span></a><a href="/visit" className="border-b border-pine/30 py-2 text-xs">Plan a slower kind of day</a></div>
        <p className="mt-9 text-[10px] uppercase tracking-[0.12em] text-moss">Family friendly <span className="px-3">·</span> Quietly extraordinary</p>
      </div>
      <figure className="relative">
        <img src="/images/garden.png" alt="A winding path between tall cacti and golden barrels in the sunlit garden" width="1536" height="1024" fetchPriority="high" className="aspect-[5/6] w-full rounded-t-[12rem] rounded-b-sm object-cover" />
        <figcaption className="absolute bottom-7 left-6 max-w-[190px] rounded-sm bg-cream/95 px-5 py-4 text-pine shadow-sm"><span className="block font-display text-3xl italic">Take the long way.</span><span className="mt-2 block text-[9px] uppercase tracking-[0.17em]">There’s more to discover.</span></figcaption>
        <span className="absolute -right-3 top-8 flex rotate-12 items-center justify-center rounded-full border border-pine bg-lime text-center text-[10px] font-semibold uppercase leading-4 tracking-wider w-24 h-24">Stay curious<br />Since 1986</span>
      </figure>
    </section>
    <div className="border-y border-pine/15"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-6 py-7 text-center md:grid-cols-4 lg:px-12"><div><strong className="block font-display text-3xl">1,200+</strong><span className="text-[10px] uppercase tracking-wider text-moss">Prickly residents</span></div><div><strong className="block font-display text-3xl">6</strong><span className="text-[10px] uppercase tracking-wider text-moss">Little worlds to wander</span></div><div><strong className="block font-display text-3xl">90 min</strong><span className="text-[10px] uppercase tracking-wider text-moss">A perfectly slow stroll</span></div><div><strong className="block font-display text-3xl">All ages</strong><span className="text-[10px] uppercase tracking-wider text-moss">Wonder has no age limit</span></div></div></div>
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="A world with a little more character" title="Some of our favourite residents." description="No feeding times. No roaring. Just a remarkable collection of plants that do things their own way." /><a href="/gallery" className="border-b border-pine/30 pb-2 text-xs">See the whole picture ↗</a></div>
      <div className="grid gap-8 md:grid-cols-3">
        <GardenCard image="/images/garden.png" title="The desert giants" description="Walk among towering columns and golden barrels in our oldest open-air garden." number="01" />
        <GardenCard image="/images/bloom.png" title="Small, but spectacular" description="Look a little closer. Our flowering collection saves its brightest surprises for patient visitors." number="02" />
        <GardenCard image="/images/glasshouse.png" title="Under the glass" description="A warm, light-filled home for rare shapes, soft shadows and curious little discoveries." number="03" />
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12">
      <div className="flex flex-col justify-center"><SectionHeading eyebrow="Your day, at your pace" title="A small escape. A lasting impression." description="Follow the gravel paths, pause in the shade and discover the stories behind the spines. Bring your favourite people. Leave a little room for cake at the garden café." /><div className="mt-7 flex gap-5 text-xs"><span>◎ Step-free main path</span><span>☀ Shaded rest stops</span></div></div>
      <OpeningHours />
    </section>
  </>;
}
