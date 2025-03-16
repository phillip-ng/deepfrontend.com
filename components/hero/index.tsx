import Image from 'components/Image'
import Snowflakes from './SnowFlakes'
import './underline.css'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between py-12 md:py-16 lg:flex-row">
      {/* Snowflakes */}
      <Snowflakes />
      {/* Left Column - Text Content */}
      <div className="w-full space-y-6 pt-8 text-center lg:w-1/2 lg:pt-0 lg:text-left">
        {/* Decorative Elements for Text Section */}
        <div className="animate-spin-slow from-primary-500/20 absolute top-1/4 -left-4 h-24 w-24 rounded-full bg-gradient-to-r to-transparent blur-xl" />
        <h1 className="relative text-3xl leading-tight font-extrabold text-zinc-800 md:text-4xl lg:text-5xl dark:text-white">
          Dig deeper into <span className="txt-underline">frontend</span>{' '}
          <span className="txt-underline txt-underline-longer">development</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
          Go beyond the basics of frontend development with{' '}
          <span className="font-bold">real insights, practical tips, and useful examples</span>.
          Hope this blog helps everyone gain a deeper understanding and makes your development
          journey more enjoyable.
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <div className="relative h-[400px]">
          <Image
            src="/static/images/phillip-ng-isometric-trans.png"
            alt="Person coding"
            className="rounded-lg object-contain"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />

          {/* Decorative dots pattern */}
          <div className="absolute -top-12 -right-8 h-24 w-24 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="bg-primary-500 h-2 w-2 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
