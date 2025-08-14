'use client'

import Image, { ImageProps } from 'next/image'
import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  showLoadingPlaceholder?: boolean
  loadingClassName?: string
  errorClassName?: string
  onLoadComplete?: () => void
  onError?: () => void
}

/**
 * Optimized image component with loading states, error handling, and performance optimizations
 */
export default function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  showLoadingPlaceholder = true,
  loadingClassName,
  errorClassName,
  onLoadComplete,
  onError,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoadComplete?.()
  }, [onLoadComplete])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    setCurrentSrc(fallbackSrc)
    onError?.()
  }, [fallbackSrc, onError])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading placeholder */}
      {isLoading && showLoadingPlaceholder && (
        <div
          className={cn(
            'absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse',
            loadingClassName
          )}
        />
      )}

      {/* Main image */}
      <Image
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          hasError && errorClassName
        )}
        // Performance optimizations for mobile
        quality={priority ? 90 : 80}
        placeholder={priority ? undefined : 'blur'}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes={props.sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
          <div className="text-center text-zinc-500 dark:text-zinc-400">
            <svg
              className="mx-auto h-8 w-8 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Bild konnte nicht geladen werden</p>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Optimized avatar component with automatic fallback
 */
export function OptimizedAvatar({
  src,
  alt,
  size = 40,
  className,
  ...props
}: OptimizedImageProps & { size?: number }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn('rounded-full', className)}
      fallbackSrc="/placeholder-user.jpg"
      {...props}
    />
  )
}

/**
 * Optimized logo component with automatic sizing
 */
export function OptimizedLogo({
  src = '/vera-it-logo.png',
  alt = 'Vera IT Logo',
  width = 120,
  height = 40,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-contain', className)}
      priority
      fallbackSrc="/placeholder-logo.svg"
      {...props}
    />
  )
}