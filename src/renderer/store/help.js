import { getUniqueId } from '../util'

export const defaultFileState = {
  isSaved: true,
  pathname: '',
  filename: 'Untitled-1',
  markdown: '',
  isUtf8BomEncoded: false,
  lineEnding: 'lf', // lf or crlf
  adjustLineEndingOnSave: false,
  textDirection: 'ltr',
  history: {
    stack: [],
    index: -1
  },
  cursor: null,
  wordCount: {
    paragraph: 0,
    word: 0,
    character: 0,
    all: 0
  },
  searchMatches: {
    index: -1,
    matches: [],
    value: ''
  }
}

export const getOptionsFromState = file => {
  const { isUtf8BomEncoded, lineEnding, adjustLineEndingOnSave } = file
  return { isUtf8BomEncoded, lineEnding, adjustLineEndingOnSave }
}

export const getFileStateFromData = data => {
  const fileState = JSON.parse(JSON.stringify(defaultFileState))
  const {
    markdown,
    filename,
    pathname,
    isUtf8BomEncoded,
    lineEnding,
    adjustLineEndingOnSave,
    textDirection
  } = data
  const id = getUniqueId()

  return Object.assign(fileState, {
    id,
    markdown,
    filename,
    pathname,
    isUtf8BomEncoded,
    lineEnding,
    adjustLineEndingOnSave,
    textDirection
  })
}

export const getBlankFileState = (tabs, lineEnding = 'lf', markdown = '') => {
  const fileState = JSON.parse(JSON.stringify(defaultFileState))
  let untitleId = Math.max(...tabs.map(f => {
    if (f.pathname === '') {
      return +f.filename.split('-')[1]
    } else {
      return 0
    }
  }), 0)

  const id = getUniqueId()

  return Object.assign(fileState, {
    lineEnding,
    id,
    filename: `Untitled-${++untitleId}`,
    markdown
  })
}

export const getSingleFileState = ({ id = getUniqueId(), markdown, filename, pathname, options }) => {
  const fileState = JSON.parse(JSON.stringify(defaultFileState))
  const { isUtf8BomEncoded, lineEnding, adjustLineEndingOnSave } = options

  return Object.assign(fileState, {
    id,
    markdown,
    filename,
    pathname,
    isUtf8BomEncoded,
    lineEnding,
    adjustLineEndingOnSave
  })
}
