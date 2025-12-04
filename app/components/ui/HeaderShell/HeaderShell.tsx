export function HeaderShell({ children }: { children: React.ReactNode }) {
    return (
        <header className="w-full md:max-w-7xl mx-auto px-0 md:px-6 py-0 md:py-4">
            <div className="flex items-center justify-between whitespace-nowrap rounded-3xl md:rounded-full border border-white/10 bg-black/15 backdrop-blur-sm px-4 py-3 md:px-6">
                {children}
            </div>
        </header>
    );
}

