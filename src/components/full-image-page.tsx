/* eslint-disable @next/next/no-img-element */
import { getImage } from "~/server/db/queries"
import { Modal } from "~/app/@modal/(.)img/[id]/modal"

export default async function FullPageImageView(props: { id: number}) {
  const image = await getImage(props.id)

  return (
    <img
      src={image.url}
      alt="some image"
      className="inline-block w-96"
    />
  )
}