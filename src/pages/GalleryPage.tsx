import {useEffect, useRef, useState} from 'react';
import {SectionHeading} from '../components/SectionHeading';

const photographs = [
  {id: 'desert', image: '/images/garden.png', title: 'Where the giants grow', category: 'The garden', caption: 'A winding path through our sunniest corner. Take your time — the best views are often behind you.'},
  {id: 'flower', image: '/images/bloom.png', title: 'A softer side to the story', category: 'In bloom', caption: 'A fleeting burst of coral among the spines. Every season has its own small surprises.'},
  {id: 'glass', image: '/images/glasshouse.png', title: 'A world under glass', category: 'The glasshouse', caption: 'Terracotta, warm light and wonderfully unexpected shapes in the old glasshouse.'},
];
type Photograph = typeof photographs[number];

function GalleryPhoto({photo, onOpen}: {photo: Photograph; onOpen: (photo: Photograph) => void}) {
  return <article className="group">
    <button type="button" onClick={() => onOpen(photo)} aria-label={'Enlarge ' + photo.title} className="relative block w-full overflow-hidden rounded-sm bg-sand text-left">
      <img src={photo.image} alt={photo.title} width="1536" height="1024" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-xl" aria-hidden="true">↗</span>
    </button>
    <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-clay">{photo.category}</p>
    <h2 className="mt-2 font-display text-3xl">{photo.title}</h2>
    <p className="mt-3 text-sm leading-6 text-moss">{photo.caption}</p>
  </article>;
}

function PhotoDialog({photo, onClose}: {photo: Photograph; onClose: () => void}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} onClose={onClose} aria-labelledby="photo-title" className="fixed inset-0 m-auto w-[min(90vw,1000px)] max-w-none overflow-hidden rounded-sm border-0 bg-cream p-0 text-pine shadow-xl">
    <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photograph" className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-cream text-2xl">×</button>
    <img src={photo.image} alt={photo.title} className="max-h-[65vh] w-full object-contain" />
    <div className="p-6"><h2 id="photo-title" className="font-display text-2xl">{photo.title}</h2><p className="mt-2 text-sm text-moss">{photo.caption}</p></div>
  </dialog>;
}

export function GalleryPage() {
  const [filter, setFilter] = useState('All moments');
  const [selected, setSelected] = useState<Photograph | null>(null);
  const visible = photographs.filter(photo => filter === 'All moments' || photo.category === filter);
  return <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
    <SectionHeading eyebrow="The Casa Espina field notes" title="Good things grow slowly." description="A few glimpses of life in the garden. Explore a corner, follow a colour, or open a photograph to take a closer look." />
    <div aria-label="Filter photographs" className="my-10 flex flex-wrap gap-3">{['All moments', 'The garden', 'In bloom', 'The glasshouse'].map(category => <button type="button" key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className="rounded-full border border-pine/20 px-5 py-2.5 text-xs transition-colors hover:bg-sand aria-pressed:bg-pine aria-pressed:text-cream">{category}</button>)}</div>
    <p aria-live="polite" className="mb-5 text-xs text-moss">{visible.length} {visible.length === 1 ? 'moment' : 'moments'} from the garden</p>
    <div className="grid gap-9 md:grid-cols-3">{visible.map(photo => <GalleryPhoto key={photo.id} photo={photo} onOpen={setSelected} />)}</div>
    {selected && <PhotoDialog photo={selected} onClose={() => setSelected(null)} />}
    <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-pine/20 pt-8"><p className="font-display text-2xl italic">Even better when you’re here.</p><a href="/tickets" className="rounded-full bg-pine px-7 py-3 text-xs text-cream hover:bg-clay">Make a day of it ↗</a></div>
  </section>;
}
