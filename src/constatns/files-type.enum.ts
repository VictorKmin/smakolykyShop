export const FileType = {
  TEXT: [
    'application/msword',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/vnd.djvu',
    'image/x.djvu',
    'text/plain'
  ],
  AUDIO: [
    'audio/aac',
    'audio/basic',
    'audio/flac', // .flac
    'audio/L24',
    'audio/mp3',
    'audio/mp4', // .m4a, .m4b
    'audio/mpeg', // .mp3
    'audio/ogg', // .ogg, .opus
    'audio/vnd.wave', // .wav
    'audio/vorbis',
    'audio/x-ms-wax', // .wmv
    'audio/x-ms-wmv' // .wmv
  ],
  IMAGES: [
    'image/gif', // .gif
    'image/jpeg', // .jpg, .jpeg
    'image/pjpeg', // .jpeg
    'image/png', // .png
    'image/webp' // .webp
  ],
  USER_DOCUMENT_TYPES: [
    'image/jpeg', // .jpg, .jpeg
    'image/pjpeg', // .jpeg
    'image/png', // .png
    'application/pdf' // pdf
  ],

  CSV: [
    'text/csv' // .csv
  ]
};
