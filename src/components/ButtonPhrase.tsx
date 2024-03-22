import { FC } from "react"

interface Props {
    onClick: ()=>void
}
export const ButtonPhrase:FC<Props> = ({ onClick }) => {
  return (
    <button
        onClick={ onClick }
        className="phrase__button"
    >
        Probar mi suerte
    </button>
  )
}
