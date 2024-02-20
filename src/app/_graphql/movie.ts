/* eslint-disable prettier/prettier */
import { ACTOR_FIELDS } from "./actors"
import { MEDIA_FIELDS } from "./media"

export const MOVIE_FIELDS = `
title
release_date
poster {
    ${MEDIA_FIELDS}
}
actors {
    ${ACTOR_FIELDS}
}`


export const MOVIE = `movie {
${MOVIE_FIELDS}
}`
