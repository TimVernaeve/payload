/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import staticImage from '../../../../../public/static-image.jpg'
import { Actor, Movie, Page } from '../../../../payload/payload-types'
import { MovieBlock } from '../../../_blocks/MovieBlock'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

const movie = [
  {
    id: '1',
    title: 'The Matrix',
    release_date: '1999-03-31',
    actors: [
      {
        id: '1',
        first_name: 'Keanu',
        last_name: 'Reeves',
        full_name: 'Keanu Reeves',
        updatedAt: '2021-08-25T00:00:00.000Z',
        createdAt: '2021-08-25T00:00:00.000Z',
      },
      {
        id: '2',
        first_name: 'Laurence',
        last_name: 'Fishburne',
        full_name: 'Laurence Fishburne',
        updatedAt: '2021-08-25T00:00:00.000Z',
        createdAt: '2021-08-25T00:00:00.000Z',
      },
      {
        id: '3',
        first_name: 'Carrie-Anne',
        last_name: 'Moss',
        full_name: 'Carrie-Anne Moss',
        updatedAt: '2021-08-25T00:00:00.000Z',
        createdAt: '2021-08-25T00:00:00.000Z',
      },
    ],
    poster: {
      id: '1',
      alt: 'The Matrix poster',
      url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg',
      updatedAt: '2021-08-25T00:00:00.000Z',
      createdAt: '2021-08-25T00:00:00.000Z',
    },
    updatedAt: '2021-08-25T00:00:00.000Z',
    createdAt: '2021-08-25T00:00:00.000Z',
  },
]

export default async function MovieBlockPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Movie Block</span>
        </p>
        <h1>Media Block</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <MovieBlock blockType="movieBlock" movies={movie} staticImage={staticImage} />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Movie Block',
  description: 'Styleguide for movie block.',
  openGraph: mergeOpenGraph({
    title: 'Movie Block',
    url: '/styleguide/movie-block',
  }),
}
