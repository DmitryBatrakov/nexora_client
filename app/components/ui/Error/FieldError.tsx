export function FieldError({error}: {error?: string}) {
    if (!error) return null;

    return <p className="text-red-400 text-sm ml-5 mt-1">{error}</p>;
}