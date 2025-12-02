type PositionProps = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};

export function BlueLightPoint({ top, bottom, left, right }: PositionProps) {
    return (
        <div
            style={{ top, bottom, left, right }}
            className={`absolute h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00A2FF] to-[#8A2BE2] opacity-30 blur-[150px]`}
        ></div>
    );
}
