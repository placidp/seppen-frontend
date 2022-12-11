import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'

interface EditorProps {}

export const Editor: React.FC<EditorProps> = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи',
    })

    // return () => {
    //   editor.isReady
    //     .then(() => {
    //       editor.destroy()
    //     })
    //     .catch((e) => console.error('ERROR editor cleanup', e))
    // }
  }, [])

  return <div id='editor' />
}
