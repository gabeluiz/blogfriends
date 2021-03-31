import React from 'react'

export default function Quote({ quote }) {
    return (
        <blockquote className="rounded-md relative p-4 text-xl italic border-l-4 bg-neutral-100 quote">
            <div className="mr-2 block font-mono text-gray-400 text-5xl md:text-7xl absolute top-0 leading-none" aria-hidden="true">
                &ldquo;
            </div>
            <p className="mb-4">{quote}</p>
        </blockquote>
    )
}