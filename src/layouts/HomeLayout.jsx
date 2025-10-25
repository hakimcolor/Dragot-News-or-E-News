import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'

const HomeLayout = () => {
  return (
    <div>
 <Header></Header>
      <main>
        <section className='left'>left

        </section>
        <section><Outlet></Outlet></section>
        <section className='rith'>rith </section>
      </main>
    </div>
  )
}

export default HomeLayout
