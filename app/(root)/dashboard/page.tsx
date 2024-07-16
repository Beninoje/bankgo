import DashboardHeader from '@/components/DashboardHeader'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Dashboard = () => {
  const loggedIn = {firstName:'Beni'}
  return (
    <section className='home'>
       <div className="home-content">
        <header className="home-header">
          <DashboardHeader
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.32}
          />
        </header>
       </div>
    </section>
  )
}

export default Dashboard