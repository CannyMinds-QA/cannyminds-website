import { Image as ImageIcon } from "@mui/icons-material";

interface ImagePlaceholderProps {
    className?: string; // Allow custom classes for sizing/spacing
    text?: string;
}

export default function ImagePlaceholder({
    className = "w-full aspect-video",
    text = "Image Placeholder",
}: ImagePlaceholderProps) {
    return (
        <div
            className={`bg-gray-100 border border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 overflow-hidden ${className}`}
        >
            <ImageIcon sx={{ fontSize: 48, opacity: 0.5, marginBottom: 1 }} />
            <span className="text-sm font-medium uppercase tracking-wider opacity-60">
                {text}
            </span>
        </div>
    );
}
