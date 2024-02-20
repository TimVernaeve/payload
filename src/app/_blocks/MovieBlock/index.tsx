import React from 'react'
import { StaticImageData } from 'next/image'

import { Actor, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  movies: Movie[]
  staticImage?: StaticImageData
}

export const MovieBlock: React.FC<Props> = props => {
  const { movies, staticImage } = props

  return (
    <div>
      {movies.map((movie: Movie) => (
        <div className={classes.mediaBlock} key={movie.id}>
          <span>this is a mobieblock</span>
          <Gutter>
            <Media resource={movie.poster} src={staticImage} />
          </Gutter>
          <Gutter className={classes.caption}>
            <span>title</span>
            <span>{movie.title}</span>
          </Gutter>
          <Gutter className={classes.caption}>
            <span>release date</span>
            <div>
              {movie.actors.map((actor: Actor) => (
                <span key={actor.id}>{actor.full_name}</span>
              ))}
            </div>
          </Gutter>
        </div>
      ))}
    </div>
  )
}
