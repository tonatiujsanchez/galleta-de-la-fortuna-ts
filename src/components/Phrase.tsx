import { FC } from "react"

interface Props {
    phrase: string
    author: string
}
export const Phrase:FC<Props>= ({ phrase, author }) => {
    return (
        <div className="phrase__content">
            <p className="phrase__text">{ phrase }</p>
            <p className="phrase__quote">
                <span className="phrase__author">- { author }</span>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                </svg>
            </p>
        </div>
    )
}
