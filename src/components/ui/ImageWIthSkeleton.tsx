import { useState, useRef, useEffect } from "react";

interface ImageWithSkeletonProps {
    src: string;
    alt?: string;
    className?: string;
    containerClassName?: string;
    fallbackSrc?: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    objectPosition?: string;
    onLoad?: () => void;
    onError?: () => void;
}

export default function ImageWithSkeleton({
                                              src,
                                              alt = "",
                                              className = "",
                                              containerClassName = "",
                                              fallbackSrc = "https://via.placeholder.com/150?text=No+Image",
                                              width,
                                              height,
                                              fill = false,
                                              priority = false,
                                              sizes = "100vw",
                                              quality = 75,
                                              placeholder = "empty",
                                              blurDataURL,
                                              objectFit = "cover",
                                              objectPosition = "center",
                                              onLoad,
                                              onError,
                                          }: ImageWithSkeletonProps) {
    const [loaded, setLoaded] = useState(priority);
    const [error, setError] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);
    const imgRef = useRef<HTMLImageElement>(null);

    // Reset states when src changes
    useEffect(() => {
        setImageSrc(src);
        setLoaded(priority);
        setError(false);
    }, [src, priority]);

    const handleLoad = () => {
        setLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setError(true);
            setLoaded(true); // Show fallback without skeleton
        } else {
            setError(true);
            setLoaded(true);
        }
        onError?.();
    };

    // Generate optimized src with query parameters (similar to Next.js Image)
    const getOptimizedSrc = () => {
        if (error) return fallbackSrc;

        const url = new URL(imageSrc, window.location.origin);

        // Add optimization parameters (similar to Next.js Image)
        if (width) url.searchParams.set('w', width.toString());
        if (height) url.searchParams.set('h', height.toString());
        if (quality) url.searchParams.set('q', quality.toString());

        return url.toString();
    };

    const containerStyles = fill
        ? "absolute inset-0"
        : width && height
            ? `w-[${width}px] h-[${height}px]`
            : "";

    return (
        <div
            className={`
        relative overflow-hidden rounded-xl flex items-center justify-center
        ${containerStyles}
        ${containerClassName}
      `}
            style={
                fill ? undefined :
                    width && height ? { width: `${width}px`, height: `${height}px` } : undefined
            }
        >
            {/* Shimmer Skeleton Loader */}
            {!loaded && !error && (
                <div className="absolute inset-0 z-10 overflow-hidden">
                    {/* Base skeleton */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

                    {/* Shimmer animation */}
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>
            )}

            {/* Blur placeholder */}
            {placeholder === "blur" && blurDataURL && !loaded && !error && (
                <img
                    src={blurDataURL}
                    alt=""
                    className="absolute inset-0 w-full h-full filter blur-md scale-110"
                    aria-hidden="true"
                />
            )}

            {/* Actual Image */}
            <img
                ref={imgRef}
                src={getOptimizedSrc()}
                alt={alt}
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
                sizes={sizes}
                className={`
                  transition-all duration-75 ease-out
                  ${loaded ? "opacity-100" : "opacity-0"}
                  object-${objectFit}
                  ${objectPosition ? `object-${objectPosition}` : ""}
                  ${fill ? "w-full h-full" : ""}
                  ${className}
                `}
                style={{
                    objectPosition: objectPosition,
                }}
            />

            {/* Loading spinner for better UX */}
            {!loaded && !error && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}