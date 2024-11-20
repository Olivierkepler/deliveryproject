import './style.css'  // Tailwind will handle the CSS

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Welcome to My New Project</h1>
    <p class="text-lg text-gray-600 mb-4">This is a simple starting point for a TypeScript project.</p>
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <button id="counter" type="button" class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-400">
        Click Me
      </button>
    </div>
    <p class="mt-4 text-sm text-gray-500">
      Customize this page to fit your needs!
    </p>
  </div>
`

// Example counter functionality
// let count = 0
// const counterButton = document.querySelector<HTMLButtonElement>('#counter')
// if (counterButton) {
//   counterButton.addEventListener('click', () => {
//     count++
//     counterButton.innerHTML = `Count: ${count}`
//   })
// }
