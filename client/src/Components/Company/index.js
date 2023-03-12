import React from 'react'

export default function Company(props) {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.revenue}</td>
        <td>{props.cashFlow}</td>
        <td>{props.netEarnings}</td>
        <td>{props.cash}</td>
    </tr>,
    <tr>
        <td>{props.zachs}</td>
        <td>{props.marketWatch}</td>
        <td>{props.bezinga}</td>
        <td>{props.forbes}</td>
        <td>{props.cnn}</td>
    </tr>
  )
}

