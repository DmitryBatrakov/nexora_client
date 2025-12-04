type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    name?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    options: Option[];
    className?: string;
    itemClassName?: string;
    contentClassName?: string;
};

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/CustomSelect/CustomSelect";

export function CustomSelect({
    name,
    value,
    onChange,
    options,
    placeholder = "Select an option",
    className,
    itemClassName,
    contentClassName,
}: SelectProps) {
    return (
        <Select value={value} onValueChange={onChange} name={name}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className={itemClassName}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
