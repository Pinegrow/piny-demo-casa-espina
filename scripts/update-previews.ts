/** Authoring helper only: emits committed static HTML. Piny never runs this file. */
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {GardenCard} from '../src/components/GardenCard';
import {SectionHeading} from '../src/components/SectionHeading';
import {OpeningHours} from '../src/components/OpeningHours';
import {Brand} from '../src/components/SiteLayout';
import {TicketQuantity} from '../src/components/TicketQuantity';
import {ticketPrices} from '../src/booking';

const root=fileURLToPath(new URL('../',import.meta.url));
const {components}=JSON.parse(await readFile(path.join(root,'.piny/library.json'),'utf8'));
async function emit(file:string,element:Parameters<typeof renderToStaticMarkup>[0]) {
  // Static samples have no event handlers, hydration or client entry point.
  const output=path.join(root,'.piny/previews',file+'.html');
  const html=renderToStaticMarkup(element)+'\n';
  const current=await readFile(output,'utf8').catch(error=>{if(error.code==='ENOENT')return null;throw error;});
  if(current!==html)await writeFile(output,html);
}
for(const [id,Component,prefix] of [
  ['garden-card',GardenCard,'garden-card'],
  ['section-heading',SectionHeading,'section-heading'],
] as const) {
  const metadata=components[id];
  await emit(prefix+'-default',createElement(Component as any,metadata.insert.props));
  for(const [name,preset] of Object.entries(metadata.presets) as [string,{props:Record<string,unknown>}][])
    await emit(prefix+'-'+name,createElement(Component as any,{...metadata.insert.props,...preset.props}));
}
await emit('opening-hours',createElement(OpeningHours));
await emit('brand',createElement(Brand));
// Display-only samples. These values and the no-op callback never become insertion defaults.
await emit('ticket-adults',createElement(TicketQuantity,{label:'Adults',detail:'Ages 16 and over',price:ticketPrices.adult,value:2,minimum:1,onChange:()=>{}}));
await emit('ticket-children',createElement(TicketQuantity,{label:'Children',detail:'Ages 5–15 · under 5s are free',price:ticketPrices.child,value:0,minimum:0,onChange:()=>{}}));
console.log('Wrote 9 static HTML examples. Inspect them before recording an exact preview review.');
