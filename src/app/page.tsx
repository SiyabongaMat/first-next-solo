import { createUser } from "./actions/actions"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        action={createUser} 
        className="border border-gray-400 p-8 rounded-lg bg-white shadow-lg"
      >
        <div className="mb-4">
          <label 
            htmlFor="name" 
            className="block text-gray-700 mb-2"
          >
            Name
          </label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 mb-2"
          >
            Email
          </label>
          <input 
            id="email" 
            name="email" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
