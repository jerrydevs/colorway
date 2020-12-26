export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    console.error('Failed to copy to clipboard: ', error)
  }
}
