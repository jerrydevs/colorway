import chroma from 'chroma-js'

export const getColorStringFromHash = (hash) => {
  const sanitizedHash = hash.replace('#', '')
  return chroma(sanitizedHash).name()
}
