import React from 'react'

export function PrimaryButton({ onClick, text = 'PrimaryButton' }) {
  return (<button className='primary-button' onClick={() => onClick()}>{text}</button>)
}