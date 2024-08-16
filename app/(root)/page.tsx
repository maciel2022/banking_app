import HeaderBox from '@/components/HeaderBox'
import RigthSidebar from '@/components/RigthSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  
  const loggedIn = { firstName: 'Maciel', lastName: 'Fernandez', email: 'contact@m.fernandez.com' };
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user= {loggedIn.firstName || 'Guest'}
            subtext='Access and manage your account and transaction efficiently.'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RigthSidebar 
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
      />
    </section>
  )
}

export default Home