import * as React from 'react';
import { EventEmitter } from '../utils/event-emitter';

interface Props {
  eventEmitter: EventEmitter;
}

export function useEditor({ eventEmitter }: Props): [React.MutableRefObject<HTMLDivElement | null>] {
  const ref = React.useRef(null);
  console.log(eventEmitter);

  return [ref];
}
