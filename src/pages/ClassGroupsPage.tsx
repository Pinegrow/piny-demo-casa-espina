import {useState, type HTMLAttributes} from 'react';
import {clsx} from 'clsx';
import {clsx as lite} from 'clsx/lite';
import {cn as packageCn} from 'cn';
import {cn} from '../lib/classes';

function SeasonCard({featured, compact, title, className, ...rest}: HTMLAttributes<HTMLElement> & {
  featured: boolean; compact: boolean; title: string;
}) {
  return <article data-testid="season-card" className={cn(
    'rounded-xl border border-pine/20 text-pine transition-colors bg-orange-100',
    'p-4', // A separate base group, intentionally overridden by the last argument.
    featured && 'ring-clay ring-4',
    compact ? 'space-y-2' : 'space-y-6',
    ['shadow-sm', { 'text-clay': featured }],
    className,
    'p-8',
  )} {...rest}>
    <p className="text-xs uppercase tracking-widest">{featured ? 'In season' : 'Growing quietly'}</p>
    <h2 className="font-display text-3xl">{title}</h2>
    <p className="text-sm leading-relaxed">{compact ? 'A short stop with a remarkable plant.' : 'Take a slower path through our collection. Every season brings another reason to look closer.'}</p>
  </article>;
}

export function ClassGroupsPage() {
  const [featured, setFeatured] = useState(true);
  return <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
    <p className="text-xs uppercase tracking-widest text-clay">The changing garden</p>
    <h1 className="mt-4 font-display text-5xl">Every cactus has its season.</h1>
    <p className="mt-5 max-w-2xl leading-relaxed text-moss">A class-group test walk: these two cards share one source template with different conditions. Changing the editing group leaves the garden in its actual state.</p>
    <button type="button" onClick={() => setFeatured(value => !value)} className="my-8 rounded-full bg-pine px-6 py-3 text-sm text-cream">Toggle flowering season</button>
    <div className="grid gap-8 md:grid-cols-2">
      <SeasonCard featured={featured} compact={true} title="The spring bloom is nice" data-place="spring" />
      <SeasonCard featured={!featured} compact={false} title="The patient giant" data-place="giant" />
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <p data-testid="full-clsx" className={clsx('rounded-xl p-6', [featured && 'bg-clay/10', 'text-pine'], {'font-semibold': featured})}>Full clsx: nested leaves and a conditional object key.</p>
      <p data-testid="lite-clsx" className={lite('rounded-xl p-6', featured ? 'bg-pine/10' : 'bg-clay/10')}>clsx/lite: string-output groups.</p>
      <p data-testid="package-cn" className={packageCn('rounded-xl bg-pine/10 p-4', 'p-6')}>Named cn: the final padding wins.</p>
    </div>
  </section>;
}
