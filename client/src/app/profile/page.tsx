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
                <button>Homepage</button>
                <button>Settings</button>
                </div>
                <div>
                    <button onClick={handleLogOut} className="bg-gray-700 text-white px-8 py-2 rounded-lg">Log Out</button>
                </div>
            </aside>
            <div className='w-4/6 p-4 bg-white text-white'> This is the div</div>

        </section>
    </main>
  )
}

export default page