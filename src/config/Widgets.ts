export const getWidgetSnippet = (url: string, label: string = 'Powered by outguided.com') => {
  return `<a href="${url}" data-og-widget>${label}</a>`
}
