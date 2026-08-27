import './globals.css';
import Link from 'next/link';
export const metadata={title:'Brisa e Lamentações',description:'Plataforma de RPG'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><div className="shell"><nav><Link className="brand" href="/">BRISA & LAMENTAÇÕES</Link><div className="links"><Link href="/dashboard">Painel</Link><Link href="/characters">Personagens</Link><Link href="/campaigns">Campanhas</Link><Link href="/compendium">Compêndio</Link><Link href="/homebrew">Homebrew</Link></div></nav>{children}</div></body></html>}
