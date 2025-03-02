/* eslint-disable @next/next/no-img-element */
import { getImage } from "~/server/db/queries"
import { Modal } from "./modal"
import FullPageImageView from "~/components/full-image-page"

export default async function PhotoModal({
  params: { id: photoId }
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID")

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>)
}