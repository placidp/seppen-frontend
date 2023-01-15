import React, { useEffect, useRef } from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  const isReady = useRef(false)

  useEffect(() => {
    let editor
    if (!isReady.current) {
      isReady.current = true
      editor = new EditorJS({
        holder: 'editor',
        placeholder: 'Введите текст вашей статьи',
        async onChange(api, event) {
          const { blocks } = await editor.save()
          onChange(blocks)
        },
      })
    }

    return () => {
      !isReady.current &&
        editor.isReady
          .then(() => {
            editor.destroy()
          })
          .catch((e) => console.error('ERROR editor cleanup', e))
    }
  }, [])

  return <div id='editor' />
}
