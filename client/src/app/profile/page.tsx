'use client'
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"

const page = () => {
    const [cookie,setCookie] = useCookies(["access_token"])
    const router = useRouter()

    const handleLogOut = ()=>{
        setCookie('access_token','')
        window.localStorage.setItem("userID", '')
        router.push('/login')
        
    }
  return (
    <main className='bg-gray-100'>
        <section className='w-[90%] mx-auto my-2 py-8 flex space-x-4 '>
            <aside className='w-2/6 md:1/6 p-4 flex flex-col justify-between bg-white h-96 rounded-lg'>
                <div className='flex flex-col space-y-4 items-start text-white'>
                <button className="bg-gray-700 rounded-md w-3/5 text-left px-16 py-4 my-4">Homepage</button>
                <button className="bg-gray-700 rounded-md w-3/5 text-left px-16 py-4 my-4">Settings</button>
                </div>
                <div>
                    <button onClick={handleLogOut} className="bg-gray-700 text-white w-3/5 px-16 py-4 rounded-md">Log Out</button>
                </div>
            </aside>
            <div className='w-4/6 p-4 bg-white text-white'> This is the div</div>

        </section>
    </main>
  )
}

export default page