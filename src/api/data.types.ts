export const dataTypes = [
  'string',
  'number',
  'array',
  'audio',
  'video',
  'image',
];
export const dataValues = (value: string) => {
  switch (value) {
    case 'audio':
      return AudioType;
    case 'video':
      return VideoType;
    case 'image':
      return ImageType;
    case 'event':
      return ImageType;
    default:
      return value;
  }
};
export const dataTypeKey = (value: any) => {
  if (value?.properties) {
    if (value?.properties?.length) return 'audio';
    if (value?.properties?.format) return 'video';
    return 'image';
  } else {
    return value;
  }
};
export const AudioType = {
  name: 'string',
  type: 'object',
  properties: {
    url: { type: 'string' },
    label: { type: 'string' },
    caption: { type: 'string' },
    length: { type: 'string' },
  },
  required: ['url'],
};
export const EventType = {
  name: 'string',
  type: 'object',
  properties: {
    location: { type: 'string' },
    startTime: { type: 'string' },
    endTime: { type: 'string' },
    googleMap: { type: 'string' },
    dressCode: { type: 'string' },
    address: { type: 'string' },
    digitalAddress: { type: 'string' },
  },
  required: ['url'],
};
export const VideoType = {
  name: 'string',
  type: 'object',
  properties: {
    url: { type: 'string' },
    label: { type: 'string' },
    caption: { type: 'string' },
    format: { type: 'string' },
  },
  required: ['url', 'format'],
};
export const ImageType = {
  name: 'string',
  type: 'object',
  properties: {
    url: { type: 'string' },
    label: { type: 'string' },
    caption: { type: 'string' },
  },
  required: ['url'],
};
