import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var dateFormats = {
  full: 'eeee d. MMMM y',
  long: 'd. MMMM y',
  medium: 'd.L.y',
  short: 'd.M.y'
}

var timeFormats = {
  full: 'HH.mm.ss zzzz',
  long: 'HH.mm.ss z',
  medium: 'HH.mm.ss',
  short: 'HH.mm'
}

var dateTimeFormats = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
}

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

export default formatLong
