'use client';

import React from 'react'
import { QuoteCard } from '@/commons/components/QuoteCard';
import { Quote, useQuotes } from '@/commons/hooks/useQuotes';
import { Skeleton } from '@mui/material';

export const BrlQuote = () => {
    const { quote } = useQuotes(Quote.brl);
    if (quote.isLoading) {
        return (
            <Skeleton variant="rectangular" >
                <QuoteCard currency={''} type={''} name={''} buy={0} sell={0} updateDate={''} />
            </Skeleton>
        )
    }
    return (
        <QuoteCard {...quote.data} />
    )
}
