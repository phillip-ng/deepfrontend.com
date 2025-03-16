import Link from 'next/link'
import Image from 'components/Image'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

export default function ArticleCard({ post }) {
  const { slug, date, title, summary, tags, images, mainTag, coverImage } = post

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white/80 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
      {/* Image container with fixed height */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {mainTag && (
          <div className="bg-primary-500 absolute top-2 left-2 z-10 rounded-md px-2 py-1 text-xs font-medium text-white">
            {mainTag}
          </div>
        )}
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 341px, (min-width: 768px) 360px, 100vw"
        />
      </div>

      {/* Content container */}
      <div className="flex grow flex-col justify-between p-5">
        <div>
          {/* Date */}
          <time className="text-sm font-medium text-gray-500 dark:text-gray-400" dateTime={date}>
            {formatDate(date)}
          </time>

          {/* Title */}
          <Link href={`/blog/${slug}`}>
            <h2 className="decoration-primary-500 hover:text-primary-500 dark:hover:text-primary-400 mt-2 text-xl leading-tight font-bold tracking-tight text-gray-900 decoration-2 transition-colors hover:underline dark:text-white">
              {title}
            </h2>
          </Link>

          {/* Summary */}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {summary}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
            {tags.length > 3 && (
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
