export function GardenCard({image, title, description, number}: {image: string; title: string; description: string; number: string}) {
  return <article className="group border-b border-pine/20 pb-6">
    <a href="/gallery" className="block overflow-hidden rounded-b-sm rounded-t-[3rem]" aria-label={'Explore ' + title}><img src={image} alt={title} loading="lazy" width="1536" height="1024" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></a>
    <div className="mt-5 flex items-center justify-between"><h3 className="font-display text-2xl">{title}</h3><span className="text-[10px] text-moss">{number} /</span></div>
    <p className="mt-3 text-sm leading-6 text-moss">{description}</p>
  </article>;
}
