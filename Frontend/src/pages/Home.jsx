import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts= async()=>{
      const res= await fetch ('/api/post/getPosts');
      const data= await res.json();
      setPosts(data.posts);
    }
    fetchPosts();

  }, []);
  return (
  <div>

   <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro accusantium ad quas autem ipsum quia nostrum quis eius consequatur vitae omnis voluptates non, dicta tempora ratione? Quia, perferendis reprehenderit!
        Itaque fuga nostrum tempora cum odit amet dolorum accusamus asperiores? Hic eligendi facere beatae expedita soluta aut, non quisquam iure quae. Sapiente eos quidem in maxime sit provident harum atque?
        Aliquam deleniti, rerum nostrum voluptatum dolorem quasi accusamus quas perspiciatis quidem non, officiis recusandae, tenetur eum placeat necessitatibus nesciunt expedita magni nam assumenda illum incidunt mollitia consequatur ratione! Laudantium, ratione?
        Labore ad a neque nulla vero vel ex necessitatibus maxime repellendus debitis voluptatem aliquam magnam, aut atque, suscipit libero perferendis iusto ipsam provident voluptates vitae distinctio veritatis! Asperiores, eius eligendi.
        Blanditiis eveniet animi voluptate sapiente est, et mollitia odit rerum debitis, atque veritatis quos nam. Voluptatem magni eos, illo voluptate dolor facere quasi omnis explicabo, eum perspiciatis recusandae. Error, quo.</p>
      

        <Link to='/search' className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>
    View All Posts
    </Link>
    </div>
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
      {
        posts && posts.length>0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {
                posts.map((post)=>(
                  <PostCard  key={post.id} post={post} />
                ))
              }

            </div>
          </div>
        )
              }

    </div>
    </div>
    
  )
}
