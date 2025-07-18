import React from 'react'

export default function Button({ colorName, onClick }) {
  return (
    <button
      className="text-black font-bold py-2 px-4 rounded-full min-w-[100px] text-center"
      style={{ backgroundColor: colorName }}
      onClick={() => onClick(colorName)}
    >
      {colorName}
    </button>
  )
}
