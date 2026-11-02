/** Rimontato a ogni cambio pagina: dissolvenza d'ingresso del contenuto. */
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="animate-page-in">{children}</div>;
}
