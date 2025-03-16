import { Resvg } from '@resvg/resvg-js'
import postOgImage from './og-templates/post'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  return pngData.asPng()
}

export async function generateOgImageForPost(post: CoreContent<Blog>) {
  const svg = await postOgImage(post)
  return svgBufferToPngBuffer(svg)
}
