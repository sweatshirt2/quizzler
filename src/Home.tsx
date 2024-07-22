

export default function Home() {
  return (
    <main className="w-full px-10 home">
      <div>
        <h2 className="text-2xl font-bold">Hello, Username</h2>
      </div>
      <div className="flex justify-between pt-4 h-2/3">
        <section className="flex justify-center items-start flex-1 pt-4">You might also like</section>
        <section className="overflow-y-auto flex justify-center items-start flex-1 pt-4">Unfinished quizzes</section>
      </div>
      <div className="absolute bottom-0 pb-8">Current status</div>
    </main>
  )
}
