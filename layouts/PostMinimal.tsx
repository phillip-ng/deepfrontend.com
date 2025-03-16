import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, summary } = content

  return (
    <div className="min-h-screen py-6">
      <ScrollTopAndComment />
      <SectionContainer>
        <article className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <header>
              <div className="space-y-3 border-b border-gray-200 pb-8 text-center dark:border-gray-700">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
                <div className="text-left text-base font-medium text-gray-500 dark:text-gray-400">
                  {summary}
                </div>
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </div>
                </dl>
              </div>
            </header>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div
                className="prose dark:prose-invert prose-lg mx-auto max-w-3xl pt-10 pb-8"
                style={{ lineHeight: '1.8' }}
              >
                {children}
              </div>
              {siteMetadata.comments && (
                <div
                  className="pt-8 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
              <footer>
                <div className="mt-8 flex flex-col pt-4 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && prev.path && (
                    <div className="mb-4 sm:mb-0">
                      <Link
                        href={`/${prev.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Previous post: ${prev.title}`}
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <Link
                        href={`/${next.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Next post: ${next.title}`}
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </article>
      </SectionContainer>
    </div>
  )
}
