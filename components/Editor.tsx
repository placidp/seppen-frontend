import React, { useEffect } from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи',
      async onChange(api, event) {
        const { blocks } = await editor.save()
        onChange(blocks)
      },
    })

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((e) => console.error('ERROR editor cleanup', e))
    }
  }, [])

  return <div id='editor' />
}
