type InputProps = {
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export function CustomInput({
    placeholder,
    type = "text",
    value,
    onChange,
    className,
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full h-14 px-5 rounded-xl bg-[#ffffff0d] text-white/70 placeholder-white/40 
                        focus:outline-none focus:ring-2 focus:ring-white
                        transition-all duration-300 ${className}`}
        />
    );
}
