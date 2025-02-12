"use client"

const images = [
  'https://picsum.photos/id/34/1024/768',
  'https://picsum.photos/id/35/768/1024',
  'https://picsum.photos/id/36/1024/768',
  'https://picsum.photos/id/37/768/1024',
  'https://picsum.photos/id/38/1024/768',
  'https://picsum.photos/id/39/768/1024',
  'https://picsum.photos/id/44/1024/768',
  'https://picsum.photos/id/55/768/1024',
  'https://picsum.photos/id/54/1024/768',
  'https://picsum.photos/id/65/768/1024',
  'https://picsum.photos/id/74/1024/768',
  'https://picsum.photos/id/85/768/1024',
  'https://picsum.photos/id/94/1024/768',
  'https://picsum.photos/id/75/768/1024',
  'https://picsum.photos/id/14/1024/768',
  'https://picsum.photos/id/15/768/1024',
  'https://picsum.photos/id/4/1024/768',
  'https://picsum.photos/id/5/768/1024',
  'https://picsum.photos/id/6/1024/768',
  'https://picsum.photos/id/7/768/1024'

]

import Masonry from 'react-masonry-css'

export default function PostsGrid() {
  return (
    <div className='max-w-4xl mx-auto'>
      <Masonry
        breakpointCols={{
          default: 4,
          860: 3,
          500: 2
        }}
        className="flex -ml-4"
        columnClassName="pl-4">
      {/* array of JSX items */} 
        {images.map(src => (
            <div className='mb-4' key={src}>
              <img src={src} alt=""/>
            </div>
          ))
        }
      </Masonry>
    </div>
  )
}