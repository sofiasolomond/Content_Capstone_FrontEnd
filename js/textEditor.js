import cPreview from './jsonPreview.js'

var editor = new EditorJS({
  readOnly: false,
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['marker', 'link'],
      config: {
        placeholder: 'Header',
      },
      shortcut: 'CMD+SHIFT+H',
    },

    image: SimpleImage,

    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },

    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },

    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: "Quote's author",
      },
      shortcut: 'CMD+SHIFT+O',
    },

    warning: Warning,

    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },

    code: {
      class: CodeTool,
      shortcut: 'CMD+SHIFT+C',
    },

    delimiter: Delimiter,

    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C',
    },

    linkTool: LinkTool,

    embed: Embed,

    table: {
      class: Table,
      inlineToolbar: true,
      shortcut: 'CMD+ALT+T',
    },
  },

  data: {},

  onReady: function () {
    saveButton.click()
  },

  onChange: function (api, event) {
    console.log('something changed', event)
  },
})

/**
 * Saving button
 */
const saveButton = document.getElementById('saveButton')
let data
/**
 * Show Output
 */
const showOutputButton = document.getElementById('showOutput')
let showOutputState = false

/**
 * Toggle read-only button
 */
const toggleReadOnlyButton = document.getElementById('toggleReadOnlyButton')
const readOnlyIndicator = document.getElementById('readonly-state')

/**
 * Saving example
 */
saveButton.addEventListener('click', function () {
  editor
    .save()
    .then((savedData) => {
      console.log(savedData)
      data = savedData
    })
    .catch((error) => {
      console.error('Saving error', error)
    })
})

/**
 * Toggle read-only example
 */
toggleReadOnlyButton.addEventListener('click', async () => {
  const readOnlyState = await editor.readOnly.toggle()

  readOnlyIndicator.textContent = readOnlyState ? 'On' : 'Off'
})

showOutputButton.addEventListener('click', function () {
  showOutputState = !showOutputState
  if (showOutputState) {
    document.getElementById('output').hidden = false
    cPreview.show(data, document.getElementById('output'))
  } else document.getElementById('output').hidden = true
})
