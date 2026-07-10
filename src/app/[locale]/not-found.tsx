import { Link } from "@/i18n/routing";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Page non trouvée</p>
        <p className="text-gray-500 mb-8">
          Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button variant="primary">Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  );
}
