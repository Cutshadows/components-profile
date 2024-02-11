
import style from './index.module.css';
const InitialCard = () => {
  return (
	<div className={style.card} id="dropzone">
		{/* "bg-gray-100 p-8 text-center 
		rounded-lg border-dashed border-2 border-gray-300 
		hover:border-blue-500 transition duration-300 
		ease-in-out transform hover:scale-105 hover:shadow-md" */}
            <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span className="text-gray-600">Drag and drop your files here</span>
                <span className="text-gray-500 text-sm">(or click to select)</span>
            </label>
            {/* <input type="file" id="fileInput" class="hidden" multiple> */}
    </div>
  )
}

export default InitialCard