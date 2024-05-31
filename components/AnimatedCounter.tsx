'use client';
import { formatAmount } from '@/lib/utils'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div>
            <CountUp
                decimals={2}
                decimal=','
                prefix='$'
                end={amount} />
        </div>
    )
}

export default AnimatedCounter