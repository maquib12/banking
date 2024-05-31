import HeaderBox from '@/components/HeaderBox'
import RightSIdeBar from '@/components/RightSIdeBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Aquib', lastName: 'Shaikh', email: 'contact@aquib.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.firstName || 'Guest'}
                        subtext="Access and manage your account and transaction efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSIdeBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
            />
        </section>
    )
}

export default Home