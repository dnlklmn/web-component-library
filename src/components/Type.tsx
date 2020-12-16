import * as React from 'react'
import { Typography } from './Typography'

interface TypeProps {
  text?: string
  variant?: string
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
}

export const Type = ({ text, variant, color }: TypeProps) => {
  let parsedText: any = text
    ? text
        .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/!!/gim, '<br/>')
    : null

  return (
    <Typography color={color} variant={variant}>
      <div dangerouslySetInnerHTML={{ __html: parsedText }} />
    </Typography>
  )
}

Type.defaultProps = {
  height: 200,
  width: 200,
  text: 'Hello **world** and hello **everyone**',
  variant: 'h4',
  color: 'textPrimary'
}
