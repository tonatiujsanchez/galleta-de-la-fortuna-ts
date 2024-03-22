import { FC } from "react"

interface Props {
    onClick: ()=>void
}
export const ButtonPhrase:FC<Props> = ({ onClick }) => {
  return (
    <button
        onClick={ onClick }
        className="button-phrase"
    >
        Probar mi suerte
    </button>
  )
}
