import Image, { ImageProps } from "next/image";

export default function SecureImage(props: ImageProps) {
    const { className, ...rest } = props;

    return (
        <Image
            {...rest}
            draggable={false}
            className={`${className || ""} select-none`}
        />
    );
}
