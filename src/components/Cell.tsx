import { cn } from "@/lib/utils"

export default function Cell({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled: boolean }) {
    return (
        <button
            className={cn(
                "w-20 h-20 border-2 border-gray-400 flex items-center justify-center text-5xl font-bold",
                disabled ? "cursor-not-allowed" : "hover:bg-gray-200"
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}