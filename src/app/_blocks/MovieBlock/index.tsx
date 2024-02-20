/* eslint-disable prettier/prettier */
import React from 'react'
import { StaticImageData } from 'next/image'

import { Actor, Movie, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'movieBlock' }> & {
  movie: Movie
  staticImage?: StaticImageData
}

export const MovieBlock: React.FC<Props> = props => {
  const { movie, staticImage } = props

  return (
    <div className={classes.mediaBlock}>
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
  )
}
