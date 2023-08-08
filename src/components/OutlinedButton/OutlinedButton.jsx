import React from 'react'
import './OutlinedButton.scss'

export default function OutlinedButton(props) {
  return (
    <a className="btn-with-border" href={props.href}>{props.text}</a>
  )
}
