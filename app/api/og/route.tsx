/** eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

// Configure the edge runtime
export const config = {
  runtime: 'edge',
}

function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Blog Title'

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            background: 'rgb(248 242 242 / 1)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          <h5
            style={{
              fontSize: 65,
              fontWeight: 700,
              color: '#27272a',
              textAlign: 'left',
              lineHeight: 1.25,
              wordBreak: 'break-word',
              width: '80%',
              maxWidth: '100%',
              marginLeft: 100,
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </h5>

          <svg
            width="429"
            height="57.21033952558671"
            viewBox="0 0 424.1619476054741 56.56514926886549"
            style={{
              position: 'absolute',
              bottom: 60,
              left: 120,
            }}
          >
            <defs id="SvgjsDefs2045"></defs>
            <g
              id="SvgjsG2046"
              transform="matrix(1.120723320295815,0,0,1.120723320295815,-0.7172633097591382,-0.4038498846851013)"
              fill="#e875a6"
            >
              <path d="M20.84 16.04 c-2.4 -2.52 -5.48 -4 -8.48 -4 l-11.72 0 l0 1.44 l11.72 0.04 c1.88 0 3.68 0.6 5.4 1.76 c3.36 2.36 5.6 6.6 5.6 10.72 c0 2.16 -0.48 4.16 -1.48 6.04 c-2 3.72 -6.04 6.44 -9.52 6.44 l-10.28 0 l0 -22.44 l9.96 0.04 c1.44 0 2.84 0.44 4.16 1.36 c2.68 1.8 4.44 5.24 4.44 8.56 c0 2.44 -1.04 4.96 -2.92 6.92 c-1.76 1.76 -3.88 2.88 -5.64 2.88 l-4.56 0 l0.04 -15.8 l-1.4 0 l-0.04 16.52 l0 0.72 l5.96 0 c2.2 0 4.76 -1.24 6.72 -3.32 c2.12 -2.28 3.28 -5.08 3.28 -7.92 c0 -2.88 -1.12 -5.76 -3.16 -8 c-2.2 -2.2 -4.6 -3.4 -6.88 -3.4 l-11.4 0 l0 25.36 l11.72 0 c2.88 0 6 -1.48 8.36 -4 c2.6 -2.68 4.04 -6.24 4.04 -9.96 s-1.36 -7.24 -3.92 -9.96 z M11.92 34.519999999999996 c1.12 0 2.28 -0.44 3.52 -1.28 c2.44 -1.72 4 -4.6 4 -7.28 c0 -1.44 -0.36 -2.84 -1.04 -4.2 c-1.4 -2.68 -3.92 -4.36 -6.48 -4.36 l-8.6 0.04 l0.04 19.88 l1.44 0 l0 -18.48 l7.12 -0.04 c0.92 0 1.88 0.36 2.88 1.04 c2.04 1.44 3.2 3.68 3.2 6.12 c0 1.64 -0.76 3.48 -2 4.88 s-2.76 2.24 -4.08 2.24 l-2.84 0 l0 1.44 l2.84 0 z M29.475 12.079999999999998 l1.44 0 l0 26.48 l15.32 0 l0 -4 l-11.28 0 l0 -3.84 l1.44 0 l0 2.4 l11.28 0 l0 6.88 l-18.2 0 l0 -27.92 z M32.195 12.079999999999998 l15.28 0 l0 6.84 l-9.6 0 l0 -1.44 l8.16 0 l0 -3.96 l-12.4 0 l0 11.56 l9.32 0 l0 1.44 l-10.76 0 l0 -14.44 z M32.195 27.8 l12.16 0 l0 -4 l-9.4 0 l0 -9.08 l9.68 0 l0 1.44 l-8.24 0 l0 6.2 l9.4 0 l0 6.88 l-12.16 0 l0 6.64 l11.2 0 l0 1.44 l-12.64 0 l0 -9.52 z M51.91 12.079999999999998 l1.44 0 l0 26.48 l15.32 0 l0 -4 l-11.28 0 l0 -3.84 l1.44 0 l0 2.4 l11.28 0 l0 6.88 l-18.2 0 l0 -27.92 z M54.629999999999995 12.079999999999998 l15.28 0 l0 6.84 l-9.6 0 l0 -1.44 l8.16 0 l0 -3.96 l-12.4 0 l0 11.56 l9.32 0 l0 1.44 l-10.76 0 l0 -14.44 z M54.629999999999995 27.8 l12.16 0 l0 -4 l-9.4 0 l0 -9.08 l9.68 0 l0 1.44 l-8.24 0 l0 6.2 l9.4 0 l0 6.88 l-12.16 0 l0 6.64 l11.2 0 l0 1.44 l-12.64 0 l0 -9.52 z M74.985 11.96 l1.48 0 l0 26.56 l3.96 0 l0 -9.64 l4.92 0 c1.8 0 3.28 -0.4 4.52 -1.24 c1.92 -1.16 2.92 -3.52 2.92 -6.6 c0 -4.96 -2.8 -7.6 -7.96 -7.6 l-5.72 0 l0 9.96 l5.12 0 c2.08 0 2.88 -0.64 2.88 -2.36 c0 -1.4 -0.68 -2.08 -2.08 -2.08 l-3.04 0 l0 3.24 l-1.48 0.04 l0 -4.68 l4.52 0 c2.2 0 3.44 1.28 3.44 3.48 c0 2.56 -1.4 3.84 -4.24 3.84 l-6.48 0 l0 -12.92 l7.08 0 c5.8 0 9.36 3.36 9.36 9.08 c0 5.92 -3.24 9.32 -8.84 9.32 l-3.44 0 l0 9.64 l-6.92 0 l0 -28.04 z M77.745 26.2 l6.72 0 c3.72 0 5.52 -1.6 5.52 -4.96 c0 -3.16 -1.72 -5 -4.48 -5 l-5 0 l0 -1.44 l5 0 c1.12 0 2.16 0.24 3.08 0.76 c1.88 1 2.84 3 2.84 5.68 c0 4.16 -2.32 6.36 -6.96 6.36 l-5.36 0 l0 10 l-1.36 0 l0 -11.4 z"></path>
            </g>
            <g
              id="SvgjsG2047"
              transform="matrix(0.7630122891127149,0,0,0.7630122891127149,121.18474790614793,-13.24131387978747)"
              fill="#e875a6"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M21.768,35.732c-0.977-0.977-2.559-0.977-3.535,0l-12.5,12.5c-0.977,0.976-0.977,2.559,0,3.535l12.5,12.5  C18.721,64.756,19.36,65,20,65s1.279-0.244,1.768-0.732c0.977-0.977,0.977-2.559,0-3.535L11.035,50l10.732-10.732  C22.744,38.292,22.744,36.708,21.768,35.732z"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M81.768,35.732c-0.977-0.977-2.559-0.977-3.535,0c-0.977,0.976-0.977,2.559,0,3.535L88.965,50L78.232,60.732  c-0.977,0.977-0.977,2.559,0,3.535C78.721,64.756,79.36,65,80,65s1.279-0.244,1.768-0.732l12.5-12.5  c0.977-0.976,0.977-2.559,0-3.535L81.768,35.732z"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M65.604,19.442l-4.699-1.71c-0.689-0.251-1.409-0.378-2.138-0.378c-2.617,0-4.978,1.653-5.873,4.113l-1.709,4.696  c0,0.001-0.001,0.002-0.002,0.003s0,0.002,0,0.003l-17.1,46.982c-0.052,0.143-0.069,0.293-0.067,0.444c0,0.025-0.002,0.05,0,0.075  c0.001,0.017-0.002,0.034,0,0.051l1.917,16.66c0.055,0.471,0.37,0.87,0.814,1.032c0.14,0.051,0.284,0.075,0.428,0.075  c0.314,0,0.623-0.119,0.859-0.342l12.179-11.53c0.029-0.027,0.05-0.061,0.076-0.091c0.024-0.028,0.049-0.054,0.071-0.084  c0.069-0.094,0.129-0.195,0.169-0.305l17.1-46.983c0,0,0-0.001,0.001-0.001c0,0,0-0.001,0-0.001l1.71-4.698  c0.57-1.569,0.497-3.266-0.208-4.779C68.424,21.161,67.172,20.013,65.604,19.442z M55.243,22.322  c0.537-1.477,1.953-2.469,3.523-2.469c0.437,0,0.868,0.077,1.282,0.228l4.699,1.71c0.941,0.342,1.692,1.031,2.115,1.938  c0.424,0.908,0.468,1.926,0.125,2.867l-1.283,3.524l-8.22-2.992c-0.001,0-0.001-0.001-0.002-0.001s-0.001,0-0.002,0l-3.522-1.282  L55.243,22.322z M48.606,77.106l-2.35-0.855l16.246-44.634l2.348,0.855L48.606,77.106z M41.558,74.541l16.246-44.635l2.349,0.855  L43.906,75.395L41.558,74.541z M36.859,72.831l16.246-44.635l2.349,0.855L39.208,73.686L36.859,72.831z M36.73,75.445l2.797,1.018  c0,0,0,0,0,0s0,0,0.001,0l4.697,1.709c0,0,0.001,0,0.001,0.001c0,0,0.001,0,0.001,0l2.797,1.018l-8.894,8.42L36.73,75.445z"
              ></path>
            </g>
            <g
              id="SvgjsG2048"
              transform="matrix(1.1219048241359026,0,0,1.1219048241359026,202.62612834510514,-0.4628536099035667)"
              fill="#e875a6"
            >
              <path d="M26.698 17.12 l-11.44 0 l0 6.32 l11.44 0 l0 5.12 l-11.44 0 l0 11.44 l-5.12 0 l0 -28 l16.56 0 l0 5.12 z M32.236 12 l14 0 c0.68 0 1.32 0.28 1.8 0.76 l2.48 2.44 c0.48 0.48 0.72 1.12 0.72 1.8 l0 8.2 c0 0.68 -0.24 1.32 -0.72 1.8 l-2.32 2.28 l3.04 10.72 l-5.32 0 l-2.6 -9.08 l-0.96 -0.72 l-5 0 l0 9.8 l-5.12 0 l0 -28 z M37.355999999999995 17.12 l0 7.96 l7.84 0 l0.92 -0.96 l0 -6.04 l-0.92 -0.96 l-7.84 0 z M62.333999999999996 12 l7.88 0 c0.68 0 1.36 0.28 1.84 0.76 l3 3 c0.48 0.48 0.72 1.12 0.72 1.8 l0 16.88 c0 0.68 -0.24 1.32 -0.72 1.8 l-3 3 c-0.48 0.48 -1.16 0.76 -1.84 0.76 l-7.88 0 c-0.68 0 -1.32 -0.28 -1.8 -0.76 l-3 -3 c-0.48 -0.48 -0.76 -1.12 -0.76 -1.8 l0 -16.88 c0 -0.68 0.28 -1.32 0.76 -1.8 l3 -3 c0.48 -0.48 1.12 -0.76 1.8 -0.76 z M63.413999999999994 17.12 l-1.52 1.48 l0 14.76 l1.52 1.52 l5.76 0 l1.48 -1.52 l0 -14.76 l-1.48 -1.48 l-5.76 0 z M101.43199999999999 12 l0 25.44 c0 1.12 -0.72 2.12 -1.84 2.44 c-0.96 0.32 -2.08 0.08 -2.84 -1.04 l-10.32 -15.72 l0 16.88 l-5.12 0 l0 -25.44 c0 -1.12 0.76 -2.12 1.84 -2.44 s2.24 0.08 2.88 1.04 l10.28 15.72 l0 -16.88 l5.12 0 z M125.16999999999999 17.12 l-6.56 0 l0 22.88 l-5.12 0 l0 -22.88 l-6.52 0 l0 -5.12 l18.2 0 l0 5.12 z M147.268 17.12 l-11.44 0 l0 6.32 l11.44 0 l0 5.12 l-11.44 0 l0 6.32 l11.44 0 l0 5.12 l-16.56 0 l0 -28 l16.56 0 l0 5.12 z M172.92600000000002 12 l0 25.44 c0 1.12 -0.72 2.12 -1.84 2.44 c-0.96 0.32 -2.08 0.08 -2.84 -1.04 l-10.32 -15.72 l0 16.88 l-5.12 0 l0 -25.44 c0 -1.12 0.76 -2.12 1.84 -2.44 s2.24 0.08 2.88 1.04 l10.28 15.72 l0 -16.88 l5.12 0 z M178.46400000000003 12 l14 0 c0.68 0 1.32 0.28 1.8 0.76 l2.48 2.44 c0.48 0.48 0.72 1.12 0.72 1.8 l0 18 c0 0.68 -0.24 1.32 -0.72 1.8 l-2.48 2.44 c-0.48 0.48 -1.12 0.76 -1.8 0.76 l-14 0 l0 -28 z M183.58400000000003 17.12 l0 17.76 l7.84 0 l0.92 -0.96 l0 -15.84 l-0.92 -0.96 l-7.84 0 z"></path>
            </g>
          </svg>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    console.error('Failed to generate the image', e)
    return new Response(`Failed to generate the image`, { status: 500 })
  }
}

export { handler as GET }
