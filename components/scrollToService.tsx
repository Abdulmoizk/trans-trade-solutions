'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ScrollToService = () => {
    const searchParams = useSearchParams();
    useEffect(() => {
        const serviceId = searchParams.get('service');
        if (serviceId) {
            const element = document.getElementById(`service-${serviceId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchParams]);
    return null;
};

export default ScrollToService;
