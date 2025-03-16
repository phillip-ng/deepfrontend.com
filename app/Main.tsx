import Hero from '@/components/hero/index'
import ArticleCard from '@/components/ArticleCard'

const MAX_DISPLAY = 6

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.length > 0 && (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
                Latest Articles
              </h2>
            </div>

            {/* Grid Layout for Articles */}
            <div className="py-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
