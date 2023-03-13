/**
 * Project: damirifa
 * File: useMountedRef
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

import { useRef, useEffect } from 'react';

export default function useIsMountedRef() {
    const isMounted = useRef(true);

    useEffect(
        () => () => {
            isMounted.current = false;
        },
        []
    );

    return isMounted;
}
