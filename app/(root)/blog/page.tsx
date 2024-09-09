import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Blog = async () => {
  const user = await getLoggedInUser();
  return (
    <div className='flex flex-col'>
      <Header user={user}/>
      <div className="w-full h-[300px] pt-[100px] bg-[#22222E]"></div>
      <div className="flex justify-center gap-3">
        <div className="article_section">
          <div className="image_section">

          </div>
          <div className="authors">

          </div>
          <div className="bankon_promise">

          </div>
          <div className="header-1">

          </div>
          <div className="paragraph">

          </div>
          <div className="written_by">

          </div>
        </div>
        <div className="article_director">
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog