import {useEffect, useState, type MouseEvent} from 'react';
import {SiteLayout} from './components/SiteLayout';
import {HomePage} from './pages/HomePage';
import {GalleryPage} from './pages/GalleryPage';
import {VisitPage} from './pages/VisitPage';
import {TicketsPage} from './pages/TicketsPage';
import {ClassGroupsPage} from './pages/ClassGroupsPage';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Casa Espina · ' + ({'/': 'The garden', '/gallery': 'Field notes & gallery', '/visit': 'Plan your visit', '/tickets': 'Book tickets', '/class-groups': 'The changing garden'}[path] || 'Page not found'); }, [path]);
  function navigate(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest('a');
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
    const url = new URL(anchor.href);
    if (url.origin !== window.location.origin || url.hash) return;
    event.preventDefault();
    window.history.pushState(null, '', url.pathname + url.search);
    setPath(url.pathname);
  }
  return <div onClick={navigate}><SiteLayout path={path}>
    {path === '/' ? <HomePage /> : path === '/gallery' ? <GalleryPage /> : path === '/visit' ? <VisitPage /> : path === '/tickets' ? <TicketsPage /> : path === '/class-groups' ? <ClassGroupsPage /> : <section className="mx-auto max-w-7xl px-6 py-24"><h1 className="font-display text-5xl">A path less travelled.</h1><p className="my-6">This page isn’t in our garden.</p><a href="/" className="underline">Back to the garden</a></section>}
  </SiteLayout></div>;
}
